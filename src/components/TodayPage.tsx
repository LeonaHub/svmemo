import { useRef, useState, type CSSProperties } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { getTodayOverview, startReviewSession, startTodaySession, type StudyItem } from '../db/study'
import { downloadBackup, exportBackup, importBackup } from '../lib/backup'

type TodayPageProps = {
  onStart: (items: StudyItem[]) => void
  onBrowseWords: () => void
}

function todayLabel(now = new Date()): string {
  return now.toLocaleDateString('zh-CN', {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })
}

export function TodayPage({ onStart, onBrowseWords }: TodayPageProps) {
  const overview = useLiveQuery(() => getTodayOverview())
  const fileInput = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [starting, setStarting] = useState<'today' | 'review' | null>(null)

  const remaining = overview ? overview.dueCount + overview.newCount : 0
  const reviewable = overview?.reviewableCount ?? 0
  const canStartToday = remaining > 0
  const canReview = reviewable > 0
  const reviewDeg =
    remaining > 0 && overview
      ? `${(overview.dueCount / remaining) * 360}deg`
      : '0deg'

  async function handleStart() {
    if (starting) {
      return
    }
    setStarting('today')
    setMessage(null)
    try {
      const items = await startTodaySession()
      if (items.length === 0) {
        setMessage('今天没有到期任务。想练的话可以点下面的复习。')
        return
      }
      onStart(items)
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '无法开始学习')
    } finally {
      setStarting(null)
    }
  }

  async function handleReview() {
    if (starting) {
      return
    }
    setStarting('review')
    setMessage(null)
    try {
      const items = await startReviewSession()
      if (items.length === 0) {
        setMessage('计划里还没有背过的词。先去词库加入，再点开始背单词。')
        return
      }
      onStart(items)
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '无法开始复习')
    } finally {
      setStarting(null)
    }
  }

  async function handleExport() {
    const backup = await exportBackup()
    downloadBackup(backup)
  }

  async function handleImport(file: File) {
    const raw: unknown = JSON.parse(await file.text())
    if (!window.confirm('导入会覆盖这台浏览器里的学习进度，确定吗？')) {
      return
    }
    await importBackup(raw)
    setMessage('备份已导入。')
  }

  return (
    <section className="today-page">
      <div className="today-intro">
        <div className="brand-row">
          <div className="logo" aria-hidden="true">
            S
          </div>
          <p className="brand-name">Svmemo</p>
        </div>
        <p className="date-line">{todayLabel()}</p>
      </div>

      {!overview ? (
        <p className="hint">正在读取本地进度…</p>
      ) : (
        <div className="today-layout">
          <div className="hero-card">
            <div className="ring-wrap">
              <div
                className={remaining === 0 ? 'ring empty' : 'ring'}
                style={{ '--review': reviewDeg } as CSSProperties}
              >
                <div className="ring-hole">
                  <strong>{remaining}</strong>
                  <span>今日待学</span>
                </div>
              </div>
            </div>

            <div className="chips">
              <span className="chip chip-review">
                <span className="chip-dot" />
                到期 {overview.dueCount}
              </span>
              <span className="chip chip-new">
                <span className="chip-dot" />
                新词 {overview.newCount}
              </span>
            </div>

            <div className="hero-actions">
              {canStartToday ? (
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  disabled={Boolean(starting)}
                  onClick={() => void handleStart()}
                >
                  {starting === 'today' ? '准备中…' : '开始背单词'}
                </button>
              ) : null}
              <button
                type="button"
                className={canStartToday ? 'btn btn-lg' : 'btn btn-primary btn-lg'}
                disabled={!canReview || Boolean(starting)}
                onClick={() => void handleReview()}
              >
                {starting === 'review'
                  ? '准备中…'
                  : canReview
                    ? `复习计划中的 ${reviewable} 个词`
                    : '还没有可复习的词'}
              </button>
            </div>

            <p className="meta-line">
              {overview.wordsToday > 0
                ? `今天学了 ${overview.wordsToday} 个词 · `
                : null}
              计划中 {overview.learnedCount} · 词库还剩 {overview.unlearnedCount}
            </p>
          </div>

          <aside className="side-panel">
            <h2>怎么学</h2>
            {overview.learnedCount === 0 ? (
              <p>
                先去词库点选单词，把它们加入计划。今日不会自动把全部词塞进来。
              </p>
            ) : (
              <p>
                先复习到期的词。新词按 Quizlet 的方式：每次 7 个，先翻卡片熟悉，再立刻拼写复习，过完这一组再加下一组。
              </p>
            )}
            <button type="button" className="btn btn-lg" onClick={onBrowseWords}>
              去词库选词
            </button>
            <div className="backup">
              <button type="button" className="btn btn-ghost" onClick={() => void handleExport()}>
                导出备份
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => fileInput.current?.click()}
              >
                导入备份
              </button>
            </div>
          </aside>
        </div>
      )}

      {message ? <p className="hint">{message}</p> : null}

      <input
        ref={fileInput}
        type="file"
        accept="application/json"
        hidden
        onChange={(event) => {
          const file = event.target.files?.[0]
          event.target.value = ''
          if (file) {
            void handleImport(file).catch((error: unknown) => {
              setMessage(error instanceof Error ? error.message : '导入失败')
            })
          }
        }}
      />
    </section>
  )
}
