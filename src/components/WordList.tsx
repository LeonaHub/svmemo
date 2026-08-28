import { useEffect, useMemo, useState, type MouseEvent } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../db'
import { toggleMastered, toggleStarred } from '../db/marks'
import { enrollWords, unenrollWords } from '../db/study'
import { a1Words } from '../data/a1'
import {
  FREQUENCY_GROUP_COUNT,
  frequencyGroup,
  frequencyGroupRange,
} from '../data/freq'
import { compoundSummary, formsSummary } from '../lib/inflection'
import { POS_LABEL } from '../lib/pos'
import { unlockSpeech } from '../lib/tts'
import type { Word } from '../types/word'
import { StarButton } from './StarButton'
import { WordDetailSheet } from './WordExtras'

type WordFilter = 'all' | 'unenrolled' | 'plan' | 'starred' | 'mastered'
type OpenList = number | 'extra'

const FILTERS: { id: WordFilter; label: string }[] = [
  { id: 'all', label: '全部' },
  { id: 'unenrolled', label: '未加入' },
  { id: 'plan', label: '计划中' },
  { id: 'starred', label: '单词本' },
  { id: 'mastered', label: '已掌握' },
]

const CATALOG_ORDER = new Map(a1Words.map((word, index) => [word.id, index]))

function inFilter(
  wordId: string,
  filter: WordFilter,
  enrolled: Set<string>,
  mastered: Set<string>,
  starred: Set<string>,
): boolean {
  if (filter === 'unenrolled') {
    return !enrolled.has(wordId) && !mastered.has(wordId)
  }
  if (filter === 'plan') {
    return enrolled.has(wordId) && !mastered.has(wordId)
  }
  if (filter === 'starred') {
    return starred.has(wordId)
  }
  if (filter === 'mastered') {
    return mastered.has(wordId)
  }
  return true
}

function inOpenList(word: Word, openList: OpenList): boolean {
  if (openList === 'extra') {
    return frequencyGroup(word.rank) === null
  }
  return frequencyGroup(word.rank) === openList
}

function inflected(word: Word): string | null {
  return formsSummary(word)
}

function matchesQuery(word: Word, needle: string): boolean {
  if (!needle) {
    return true
  }
  return (
    word.lemma.toLocaleLowerCase('sv-SE').includes(needle) ||
    word.glossZh.includes(needle) ||
    (word.glossEn?.toLowerCase().includes(needle) ?? false)
  )
}

export function WordList() {
  const catalog = useLiveQuery(async () => {
    const [words, cards, marks] = await Promise.all([
      db.words.toArray(),
      db.cards.toArray(),
      db.wordMarks.toArray(),
    ])
    return {
      words,
      enrolled: new Set(cards.map((card) => card.wordId)),
      studied: new Set(
        cards.filter((card) => card.reps > 0).map((card) => card.wordId),
      ),
      mastered: new Set(
        marks.filter((mark) => mark.mastered).map((mark) => mark.wordId),
      ),
      starred: new Set(
        marks.filter((mark) => mark.starred).map((mark) => mark.wordId),
      ),
    }
  })
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<WordFilter>('all')
  const [openList, setOpenList] = useState<OpenList | null>(null)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [detailWord, setDetailWord] = useState<Word | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const words = catalog?.words
  const enrolled = catalog?.enrolled ?? new Set<string>()
  const studied = catalog?.studied ?? new Set<string>()
  const mastered = catalog?.mastered ?? new Set<string>()
  const starred = catalog?.starred ?? new Set<string>()
  const needle = query.trim().toLocaleLowerCase('sv-SE')
  const browsing = openList === null && needle.length === 0

  const lists = useMemo(() => {
    const buckets = new Map<OpenList, Word[]>()
    for (const word of words ?? []) {
      const group = frequencyGroup(word.rank) ?? 'extra'
      const current = buckets.get(group) ?? []
      current.push(word)
      buckets.set(group, current)
    }
    const rows: {
      id: OpenList
      title: string
      subtitle: string
      total: number
      inPlan: number
      leftover: number
    }[] = []
    for (let group = 1; group <= FREQUENCY_GROUP_COUNT; group += 1) {
      const range = frequencyGroupRange(group)
      const items = buckets.get(group) ?? []
      const inPlan = items.filter(
        (word) => enrolled.has(word.id) && !mastered.has(word.id),
      ).length
      const leftover = items.filter(
        (word) => !enrolled.has(word.id) && !mastered.has(word.id),
      ).length
      rows.push({
        id: group,
        title: `第 ${group} 组`,
        subtitle: `#${range.from}–${range.to}`,
        total: items.length,
        inPlan,
        leftover,
      })
    }
    const extra = buckets.get('extra') ?? []
    if (extra.length > 0) {
      const inPlan = extra.filter(
        (word) => enrolled.has(word.id) && !mastered.has(word.id),
      ).length
      const leftover = extra.filter(
        (word) => !enrolled.has(word.id) && !mastered.has(word.id),
      ).length
      rows.push({
        id: 'extra',
        title: '自选词',
        subtitle: '不在当前词频组里',
        total: extra.length,
        inPlan,
        leftover,
      })
    }
    return rows
  }, [words, enrolled, mastered])

  const filtered = useMemo(() => {
    if (!words) {
      return []
    }
    const matched = words.filter((word) => matchesQuery(word, needle))
    const scoped = matched.filter((word) => {
      if (!inFilter(word.id, filter, enrolled, mastered, starred)) {
        return false
      }
      if (openList !== null && !inOpenList(word, openList)) {
        return false
      }
      return true
    })
    return [...scoped].sort((left, right) => {
      const leftStarred = starred.has(left.id) ? 0 : 1
      const rightStarred = starred.has(right.id) ? 0 : 1
      if (filter === 'starred' && leftStarred !== rightStarred) {
        return leftStarred - rightStarred
      }
      if (openList === null) {
        const leftEnrolled = enrolled.has(left.id) && !mastered.has(left.id) ? 0 : 1
        const rightEnrolled = enrolled.has(right.id) && !mastered.has(right.id) ? 0 : 1
        if (leftEnrolled !== rightEnrolled) {
          return leftEnrolled - rightEnrolled
        }
      }
      return (
        (CATALOG_ORDER.get(left.id) ?? Number.MAX_SAFE_INTEGER) -
        (CATALOG_ORDER.get(right.id) ?? Number.MAX_SAFE_INTEGER)
      )
    })
  }, [words, needle, enrolled, mastered, starred, filter, openList])

  const detailIndex = detailWord
    ? filtered.findIndex((word) => word.id === detailWord.id)
    : -1

  const listWords = useMemo(() => {
    if (!words || openList === null) {
      return []
    }
    return words.filter((word) => inOpenList(word, openList))
  }, [words, openList])

  const filterCounts = useMemo(() => {
    const counts: Record<WordFilter, number> = {
      all: 0,
      unenrolled: 0,
      plan: 0,
      starred: 0,
      mastered: 0,
    }
    const pool = openList === null ? (words ?? []) : listWords
    counts.all = pool.length
    for (const word of pool) {
      if (inFilter(word.id, 'unenrolled', enrolled, mastered, starred)) {
        counts.unenrolled += 1
      }
      if (inFilter(word.id, 'plan', enrolled, mastered, starred)) {
        counts.plan += 1
      }
      if (inFilter(word.id, 'starred', enrolled, mastered, starred)) {
        counts.starred += 1
      }
      if (inFilter(word.id, 'mastered', enrolled, mastered, starred)) {
        counts.mastered += 1
      }
    }
    return counts
  }, [words, listWords, openList, enrolled, mastered, starred])

  const availableIds = filtered
    .filter((word) => !enrolled.has(word.id) && !mastered.has(word.id))
    .map((word) => word.id)
  const selectedCount = [...selected].filter((id) => !enrolled.has(id)).length
  const openMeta = openList === null ? null : lists.find((row) => row.id === openList)

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== 'Escape') {
        return
      }
      if (detailWord) {
        setDetailWord(null)
        return
      }
      if (openList !== null) {
        closeList()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [detailWord, openList])

  function closeList() {
    setOpenList(null)
    setQuery('')
    setFilter('all')
    setSelected(new Set())
    setMessage(null)
    setDetailWord(null)
  }

  function openGroup(id: OpenList) {
    setOpenList(id)
    setQuery('')
    setFilter('all')
    setSelected(new Set())
    setMessage(null)
  }

  function toggleSelect(wordId: string) {
    if (mastered.has(wordId) || enrolled.has(wordId)) {
      return
    }
    setSelected((current) => {
      const next = new Set(current)
      if (next.has(wordId)) {
        next.delete(wordId)
      } else {
        next.add(wordId)
      }
      return next
    })
  }

  function selectAllAvailable() {
    setSelected(new Set(availableIds))
  }

  function clearSelected() {
    setSelected(new Set())
  }

  async function addToPlan(wordIds: readonly string[]) {
    const pending = wordIds.filter((id) => !enrolled.has(id))
    if (pending.length === 0 || busy) {
      return
    }
    setBusy(true)
    setMessage(null)
    try {
      const added = await enrollWords(pending)
      setSelected((current) => {
        const next = new Set(current)
        for (const id of pending) {
          next.delete(id)
        }
        return next
      })
      setMessage(added > 0 ? `已加入计划 ${added} 个词` : '这些词已经在计划里')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '加入失败')
    } finally {
      setBusy(false)
    }
  }

  async function removeFromPlan(wordIds: readonly string[]) {
    const pending = wordIds.filter((id) => enrolled.has(id))
    if (pending.length === 0 || busy) {
      return
    }
    const hasProgress = pending.some((id) => studied.has(id))
    if (
      hasProgress &&
      !window.confirm('移出后这些词的复习进度会清掉，确定吗？')
    ) {
      return
    }
    setBusy(true)
    setMessage(null)
    try {
      const removed = await unenrollWords(pending)
      setMessage(removed > 0 ? `已移出计划 ${removed} 个词` : '这些词不在计划里')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '移出失败')
    } finally {
      setBusy(false)
    }
  }

  function handlePickClick(event: MouseEvent, wordId: string) {
    event.stopPropagation()
    toggleSelect(wordId)
  }

  function handleOpenDetail(event: MouseEvent, word: Word) {
    event.stopPropagation()
    unlockSpeech()
    setDetailWord(word)
  }

  function handleRowAdd(event: MouseEvent, wordId: string) {
    event.stopPropagation()
    void addToPlan([wordId])
  }

  function handleRowRemove(event: MouseEvent, wordId: string) {
    event.stopPropagation()
    void removeFromPlan([wordId])
  }

  return (
    <section className="words-page">
      <header className="word-head">
        <div>
          <div className="brand-row">
            <div className="logo" aria-hidden="true">
              S
            </div>
            <p className="brand-name">词库</p>
          </div>
          {openList !== null ? (
            <button type="button" className="btn btn-ghost word-back" onClick={closeList}>
              返回词表
            </button>
          ) : null}
          <h1>
            {openList === null
              ? '我的词表'
              : (openMeta?.title ?? '词表')}
          </h1>
          <p className="date-line">
            {!words
              ? '正在读取词库…'
              : openList === null
                ? `共 ${lists.length} 组，${words.length} 个词。点一组查看里面的词。`
                : `${openMeta?.subtitle ?? ''} · ${openMeta?.total ?? 0} 个词`}
          </p>
        </div>
        <input
          className="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={openList === null ? '搜索瑞典语或中文' : '搜索这一组'}
          type="search"
        />
      </header>

      {browsing ? (
        <div className="word-list">
          {lists.map((row) => (
            <button
              key={String(row.id)}
              type="button"
              className="word-row list-index-row"
              onClick={() => openGroup(row.id)}
            >
              <div className="word-body">
                <div className="word-row-top">
                  <span className="lemma">{row.title}</span>
                  <span className="pill">
                    {row.total} 词
                    {row.inPlan > 0 ? ` · 计划 ${row.inPlan}` : ''}
                  </span>
                </div>
                <p className="list-index-meta">
                  {row.subtitle}
                  {row.leftover > 0 ? ` · 未加入 ${row.leftover}` : ''}
                </p>
              </div>
              <span className="list-chevron" aria-hidden="true">
                ›
              </span>
            </button>
          ))}
        </div>
      ) : (
        <>
          <div className="word-filters" role="tablist" aria-label="词库筛选">
            {FILTERS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={filter === id}
                className={filter === id ? 'chip is-on' : 'chip'}
                onClick={() => setFilter(id)}
              >
                {label}
                <span className="chip-count">{filterCounts[id]}</span>
              </button>
            ))}
          </div>

          <div className="word-toolbar">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={selectAllAvailable}
              disabled={availableIds.length === 0}
            >
              全选未加入
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={clearSelected}
              disabled={selectedCount === 0}
            >
              清除选择
            </button>
            <span className="toolbar-count">已选 {selectedCount}</span>
            <button
              type="button"
              className="btn btn-primary"
              disabled={selectedCount === 0 || busy}
              onClick={() => void addToPlan([...selected])}
            >
              {busy
                ? '处理中…'
                : selectedCount > 0
                  ? `把 ${selectedCount} 个词加入计划`
                  : '加入计划'}
            </button>
            {openList !== null ? (
              <button
                type="button"
                className="btn btn-ghost"
                disabled={availableIds.length === 0 || busy}
                onClick={() => void addToPlan(availableIds)}
              >
                {openList === 'extra' ? '加入自选未加入' : `加入第${openList}组未加入`}
              </button>
            ) : null}
          </div>

          {openList === null && needle.length > 0 ? (
            <p className="hint">在全部词里搜索。清空搜索框回到分组。</p>
          ) : null}
          {message ? <p className="hint">{message}</p> : null}

          <div className="word-list">
            {filtered.map((word) => {
              const isEnrolled = enrolled.has(word.id)
              const isMastered = mastered.has(word.id)
              const isStarred = starred.has(word.id)
              const isSelected = selected.has(word.id) && !isEnrolled && !isMastered
              const extra = inflected(word)
              const canSelect = !isEnrolled && !isMastered
              const group = frequencyGroup(word.rank)

              return (
                <article
                  key={word.id}
                  className={[
                    'word-row',
                    isSelected ? 'is-selected' : '',
                    isEnrolled ? 'is-enrolled' : '',
                    isMastered ? 'is-mastered' : '',
                    isStarred ? 'is-starred' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={(event) => handleOpenDetail(event, word)}
                >
                  <span
                    className={canSelect ? 'pick is-pickable' : 'pick'}
                    role={canSelect ? 'checkbox' : undefined}
                    aria-checked={canSelect ? isSelected : undefined}
                    aria-hidden={!canSelect}
                    aria-label={canSelect ? `勾选 ${word.lemma}` : undefined}
                    onClick={
                      canSelect
                        ? (event) => handlePickClick(event, word.id)
                        : undefined
                    }
                    onKeyDown={
                      canSelect
                        ? (event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault()
                              event.stopPropagation()
                              toggleSelect(word.id)
                            }
                          }
                        : undefined
                    }
                    tabIndex={canSelect ? 0 : undefined}
                  >
                    {isMastered ? '✓' : isEnrolled ? '✓' : isSelected ? '✓' : ''}
                  </span>
                  <div
                    className="word-body"
                    role="button"
                    tabIndex={0}
                    aria-label={`查看 ${word.lemma} 的详情`}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        unlockSpeech()
                        setDetailWord(word)
                      }
                    }}
                  >
                    <div className="word-row-top">
                      <span className="lemma">{word.lemma}</span>
                      <span className="pill">
                        {word.gender ? `${word.gender} · ` : ''}
                        {POS_LABEL[word.pos]}
                        {openList === null && group ? ` · 第${group}组` : ''}
                        {word.rank ? ` · #${word.rank}` : ''}
                        {isStarred ? ' · 收藏' : ''}
                        {isMastered ? ' · 已掌握' : ''}
                      </span>
                    </div>
                    <p className="gloss">{word.glossZh}</p>
                    {word.compound ? (
                      <p className="compound-line">{compoundSummary(word)}</p>
                    ) : null}
                    {extra ? <p className="forms">{extra}</p> : null}
                  </div>
                  <div className="word-actions">
                    <StarButton
                      starred={isStarred}
                      onToggle={() => {
                        void toggleStarred(word.id)
                      }}
                      label={isStarred ? '取消收藏' : '收藏到单词本'}
                      title={isStarred ? '已在单词本' : '收藏到单词本'}
                    />
                    <button
                      type="button"
                      className={isMastered ? 'mark-btn is-mastered' : 'mark-btn'}
                      onClick={(event) => {
                        event.stopPropagation()
                        void toggleMastered(word.id)
                      }}
                      aria-label={isMastered ? '取消已掌握' : '标记为已掌握'}
                      title={isMastered ? '已掌握，点此恢复学习' : '已掌握，不再学'}
                    >
                      掌握
                    </button>
                    {isEnrolled && !isMastered ? (
                      <button
                        type="button"
                        className="btn btn-remove"
                        onClick={(event) => handleRowRemove(event, word.id)}
                        disabled={busy}
                      >
                        移出
                      </button>
                    ) : !isEnrolled && !isMastered ? (
                      <button
                        type="button"
                        className="btn btn-add"
                        onClick={(event) => handleRowAdd(event, word.id)}
                        disabled={busy}
                      >
                        加入
                      </button>
                    ) : null}
                  </div>
                </article>
              )
            })}
          </div>
        </>
      )}
      {detailWord ? (
        <WordDetailSheet
          word={detailWord}
          onClose={() => setDetailWord(null)}
          onPrev={
            detailIndex > 0
              ? () => setDetailWord(filtered[detailIndex - 1] ?? null)
              : undefined
          }
          onNext={
            detailIndex >= 0 && detailIndex < filtered.length - 1
              ? () => setDetailWord(filtered[detailIndex + 1] ?? null)
              : undefined
          }
        />
      ) : null}
    </section>
  )
}
