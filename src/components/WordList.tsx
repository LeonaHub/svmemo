import { useMemo, useState, type MouseEvent } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../db'
import { enrollWords, unenrollWords } from '../db/study'
import { a1Words } from '../data/a1'
import { formsSummary } from '../lib/inflection'
import type { Pos, Word } from '../types/word'

const CATALOG_ORDER = new Map(a1Words.map((word, index) => [word.id, index]))

const POS_LABEL: Record<Pos, string> = {
  noun: '名词',
  verb: '动词',
  adj: '形容词',
  adv: '副词',
  pron: '代词',
  phrase: '短语',
  intj: '感叹',
  proper: '专有',
  other: '其他',
}

function inflected(word: Word): string | null {
  return formsSummary(word)
}

export function WordList() {
  const catalog = useLiveQuery(async () => {
    const [words, cards] = await Promise.all([
      db.words.toArray(),
      db.cards.toArray(),
    ])
    return {
      words,
      enrolled: new Set(cards.map((card) => card.wordId)),
      studied: new Set(
        cards.filter((card) => card.reps > 0).map((card) => card.wordId),
      ),
    }
  })
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const words = catalog?.words
  const enrolled = catalog?.enrolled ?? new Set<string>()
  const studied = catalog?.studied ?? new Set<string>()

  const filtered = useMemo(() => {
    if (!words) {
      return []
    }
    const needle = query.trim().toLocaleLowerCase('sv-SE')
    const matched = needle
      ? words.filter(
          (word) =>
            word.lemma.toLocaleLowerCase('sv-SE').includes(needle) ||
            word.glossZh.includes(needle) ||
            (word.glossEn?.toLowerCase().includes(needle) ?? false),
        )
      : words
    return [...matched].sort((left, right) => {
      const leftEnrolled = enrolled.has(left.id) ? 0 : 1
      const rightEnrolled = enrolled.has(right.id) ? 0 : 1
      if (leftEnrolled !== rightEnrolled) {
        return leftEnrolled - rightEnrolled
      }
      return (
        (CATALOG_ORDER.get(left.id) ?? Number.MAX_SAFE_INTEGER) -
        (CATALOG_ORDER.get(right.id) ?? Number.MAX_SAFE_INTEGER)
      )
    })
  }, [words, query, enrolled])

  const availableIds = filtered
    .filter((word) => !enrolled.has(word.id))
    .map((word) => word.id)
  const selectedCount = [...selected].filter((id) => !enrolled.has(id)).length

  function toggle(wordId: string) {
    if (enrolled.has(wordId)) {
      void removeFromPlan([wordId])
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
          <h1>我的词表</h1>
          <p className="date-line">
            {words
              ? `共 ${words.length} 个词，已加入计划 ${enrolled.size} 个。已加入的在前，新词在后。点空心圆圈选中后加入计划；点已打勾的圆圈或「移出」可取消。`
              : '正在读取词库…'}
          </p>
        </div>
        <input
          className="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="搜索瑞典语或中文"
          type="search"
        />
      </header>

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
      </div>

      {message ? <p className="hint">{message}</p> : null}

      <div className="word-list">
        {filtered.map((word) => {
          const isEnrolled = enrolled.has(word.id)
          const isSelected = selected.has(word.id) && !isEnrolled
          const extra = inflected(word)

          return (
            <article
              key={word.id}
              className={[
                'word-row',
                isSelected ? 'is-selected' : '',
                isEnrolled ? 'is-enrolled' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => toggle(word.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  toggle(word.id)
                }
              }}
              role="checkbox"
              aria-checked={isEnrolled || isSelected}
              tabIndex={0}
            >
              <span className="pick" aria-hidden="true">
                {isEnrolled ? '✓' : ''}
              </span>
              <div className="word-body">
                <div className="word-row-top">
                  <span className="lemma">{word.lemma}</span>
                  <span className="pill">
                    {word.gender ? `${word.gender} · ` : ''}
                    {POS_LABEL[word.pos]}
                  </span>
                </div>
                <p className="gloss">{word.glossZh}</p>
                {extra ? <p className="forms">{extra}</p> : null}
              </div>
              {isEnrolled ? (
                <button
                  type="button"
                  className="btn btn-remove"
                  onClick={(event) => handleRowRemove(event, word.id)}
                  disabled={busy}
                >
                  移出
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-add"
                  onClick={(event) => handleRowAdd(event, word.id)}
                  disabled={busy}
                >
                  加入
                </button>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
