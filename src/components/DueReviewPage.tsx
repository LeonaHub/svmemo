import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { listDueReviews, startDueSession, type DueReviewRow, type StudyItem } from '../db/study'
import { unlockSpeech } from '../lib/tts'
import { toggleMastered, toggleStarred } from '../db/marks'
import { POS_LABEL } from '../lib/pos'
import { StarButton } from './StarButton'

type DueReviewPageProps = {
  onExit: () => void
  onStart: (items: StudyItem[]) => void
}

function ReviewRow({ row }: { row: DueReviewRow }) {
  return (
    <article className="word-row is-plain">
      <div className="word-body">
        <div className="word-row-top">
          <span className="lemma">{row.word.lemma}</span>
          <span className={row.dueNow ? 'pill is-due' : 'pill'}>
            {row.when}
            {row.mastered ? ' · 掌握' : ''}
            {row.word.gender ? ` · ${row.word.gender}` : ''}
            {` · ${POS_LABEL[row.word.pos]}`}
            {row.word.rank ? ` · #${row.word.rank}` : ''}
          </span>
        </div>
        <p className="gloss">{row.word.glossZh}</p>
      </div>
      <div className="word-actions">
        <StarButton
          starred={row.starred}
          onToggle={() => {
            void toggleStarred(row.word.id)
          }}
          label={row.starred ? '取消收藏' : '收藏到单词本'}
          title={row.starred ? '已在单词本' : '收藏到单词本'}
        />
        <button
          type="button"
          className={row.mastered ? 'mark-btn is-mastered' : 'mark-btn'}
          onClick={() => void toggleMastered(row.word.id)}
          aria-label={row.mastered ? '取消已掌握' : '标记为已掌握'}
          title={
            row.mastered
              ? '取消后回到普通复习'
              : '已掌握，至少 30 天后再抽查'
          }
        >
          掌握
        </button>
      </div>
    </article>
  )
}

export function DueReviewPage({ onExit, onStart }: DueReviewPageProps) {
  const rows = useLiveQuery(() => listDueReviews())
  const [starting, setStarting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const ready = rows !== undefined
  const dueRows = rows?.filter((row) => row.dueNow && !row.mastered) ?? []
  const masteredDueRows = rows?.filter((row) => row.dueNow && row.mastered) ?? []
  const laterRows = rows?.filter((row) => !row.dueNow) ?? []
  const dueCount = dueRows.length
  const masteredDueCount = masteredDueRows.length
  const workCount = dueCount + masteredDueCount
  const laterCount = laterRows.length

  async function handleStart() {
    if (starting) {
      return
    }
    setStarting(true)
    setMessage(null)
    unlockSpeech()
    try {
      const items = await startDueSession()
      if (items.length === 0) {
        setMessage('这一刻没有到期的词。下面列表里还没到点的，按间隔再等几天。')
        return
      }
      onStart(items)
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '无法开始复习')
    } finally {
      setStarting(false)
    }
  }

  return (
    <section className="page-study is-due">
      <div className="study-bar">
        <button type="button" className="btn btn-ghost" onClick={onExit}>
          结束
        </button>
        <p className="remain">
          {ready ? `到期 ${workCount} · 已学 ${workCount + laterCount}` : '读取中…'}
        </p>
      </div>

      <div className="due-head">
        <p className="due-kicker">今日</p>
        <h1 className="due-title">到期复习</h1>
        <p className="due-hint">
          间隔算法只会把这一刻到期的词拿来拼写。已掌握的词隔至少 30 天再抽查一次，答对间隔会更长。今天刚背过、答对的词会排到后面几天，不是丢了。
        </p>
      </div>

      <div className="due-toolbar">
        <button
          type="button"
          className="btn btn-primary"
          disabled={!ready || workCount === 0 || starting}
          onClick={() => void handleStart()}
        >
          {starting
            ? '准备中…'
            : workCount > 0
              ? `开始拼写到期的 ${workCount} 个`
              : '现在没有到期的词'}
        </button>
      </div>

      {message ? <p className="hint">{message}</p> : null}

      <div className="due-list">
        {!ready ? <p className="lede">正在读取…</p> : null}

        {ready && dueCount === 0 && masteredDueCount === 0 && laterCount === 0 ? (
          <p className="lede">还没有已学的词。先去今日背一些。</p>
        ) : null}

        {dueCount > 0 ? (
          <section className="due-section">
            <h2 className="due-section-title">到期 {dueCount}</h2>
            <div className="word-list">
              {dueRows.map((row) => (
                <ReviewRow key={row.word.id} row={row} />
              ))}
            </div>
          </section>
        ) : null}

        {masteredDueCount > 0 ? (
          <section className="due-section">
            <h2 className="due-section-title">掌握抽查 {masteredDueCount}</h2>
            <div className="word-list">
              {masteredDueRows.map((row) => (
                <ReviewRow key={row.word.id} row={row} />
              ))}
            </div>
          </section>
        ) : null}

        {laterCount > 0 ? (
          <section className="due-section">
            <h2 className="due-section-title">还没到点 {laterCount}</h2>
            <div className="word-list">
              {laterRows.map((row) => (
                <ReviewRow key={row.word.id} row={row} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </section>
  )
}
