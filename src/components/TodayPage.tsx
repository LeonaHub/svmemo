import { useEffect, useRef, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import {
  getTodayOverview,
  startSentenceSession,
  startStarredSession,
  startTodaySession,
  type StudyItem,
} from '../db/study'
import type { SentenceItem } from '../lib/sentence-drill'
import { StudyCalendar } from './StudyCalendar'
import {
  copyBackup,
  downloadBackup,
  exportBackup,
  importBackup,
  readClipboardBackup,
} from '../lib/backup'

type TodayPageProps = {
  onStart: (
    items: StudyItem[],
    options?: { dropStarOnCorrect?: boolean },
  ) => void
  onOpenDueList: () => void
  onStartSentences: (items: SentenceItem[]) => void
  onBrowseWords: () => void
  onBrowseSentences: () => void
}

function todayLabel(now = new Date()): string {
  return now.toLocaleDateString('zh-CN', {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })
}

const HOME_HINT_KEY = 'svmemo.dismiss-home-hint'

function shouldShowIosHomeHint(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  if (window.localStorage.getItem(HOME_HINT_KEY)) {
    return false
  }
  const standalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in navigator &&
      Boolean((navigator as Navigator & { standalone?: boolean }).standalone))
  if (standalone) {
    return false
  }
  return /iPhone|iPod/i.test(navigator.userAgent)
}

function useClock(intervalMs = 30_000): Date {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    function tick() {
      setNow(new Date())
    }

    function onVisible() {
      if (document.visibilityState === 'visible') {
        tick()
      }
    }

    window.addEventListener('focus', tick)
    document.addEventListener('visibilitychange', onVisible)
    const timer = window.setInterval(tick, intervalMs)
    return () => {
      window.removeEventListener('focus', tick)
      document.removeEventListener('visibilitychange', onVisible)
      window.clearInterval(timer)
    }
  }, [intervalMs])

  return now
}

export function TodayPage({
  onStart,
  onOpenDueList,
  onStartSentences,
  onBrowseWords,
  onBrowseSentences,
}: TodayPageProps) {
  const now = useClock()
  const overview = useLiveQuery(() => getTodayOverview(now), [now.getTime()])
  const fileInput = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [showHomeHint, setShowHomeHint] = useState(shouldShowIosHomeHint)
  const [starting, setStarting] = useState<
    'today' | 'starred' | 'sentences' | null
  >(null)

  const remaining = overview
    ? (overview.dueCount ?? 0) + (overview.newCount ?? 0)
    : 0
  const reviewable = overview?.reviewableCount ?? 0
  const starredCount = overview?.starredCount ?? 0
  const canStartToday = remaining > 0
  const canOpenDueList = reviewable > 0
  const canReviewStarred = starredCount > 0
  const needsWords = Boolean(overview && overview.learnedCount === 0)

  async function handleStart() {
    if (starting) {
      return
    }
    setStarting('today')
    setMessage(null)
    try {
      const items = await startTodaySession(now)
      if (items.length === 0) {
        setMessage('今天没有到期任务。下次复习由间隔算法决定。')
        return
      }
      onStart(items)
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '无法开始学习')
    } finally {
      setStarting(null)
    }
  }

  function handleOpenDueList() {
    if (starting || !canOpenDueList) {
      return
    }
    onOpenDueList()
  }

  async function handleStarred() {
    if (starting) {
      return
    }
    setStarting('starred')
    setMessage(null)
    try {
      const items = await startStarredSession()
      if (items.length === 0) {
        setMessage('单词本还是空的。学习时点星星，或在词库里收藏难词。')
        return
      }
      onStart(items, { dropStarOnCorrect: true })
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '无法开始收藏复习')
    } finally {
      setStarting(null)
    }
  }

  async function handleSentences() {
    if (starting) {
      return
    }
    setStarting('sentences')
    setMessage(null)
    try {
      const items = await startSentenceSession('plan')
      if (items.length === 0) {
        setMessage('计划里还没有带例句的词。先去词库加入，或打开例句页。')
        return
      }
      onStartSentences(items)
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '无法开始例句练习')
    } finally {
      setStarting(null)
    }
  }

  async function handleExport() {
    const backup = await exportBackup()
    downloadBackup(backup)
  }

  async function handleCopy() {
    setMessage(null)
    try {
      await copyBackup(await exportBackup())
      setMessage('进度已复制。到 Chrome 打开同一地址，点「粘贴导入」。')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '复制失败，改用导出备份')
    }
  }

  async function confirmAndImport(raw: unknown) {
    if (!window.confirm('导入会覆盖这台浏览器里的学习进度，确定吗？')) {
      return
    }
    await importBackup(raw)
    setMessage('备份已导入。')
  }

  async function handleImport(file: File) {
    await confirmAndImport(JSON.parse(await file.text()) as unknown)
  }

  async function handlePasteImport() {
    setMessage(null)
    try {
      await confirmAndImport(await readClipboardBackup())
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '粘贴导入失败')
    }
  }

  const sentenceCount = overview?.sentenceCount ?? 0
  const heroMeta = canStartToday
    ? '先复习到期的，再学新词。每 7 个一组。'
    : overview && overview.learnedCount === 0
      ? '还没有词在计划里。先去词库勾选，再回来开始。'
      : '今天的到期和新词都过完了。下次出现由间隔算法决定。点「到期复习」能看到已学的词还要几天。'

  return (
    <section className="today-page">
      <header className="today-head">
        <div className="brand-row">
          <div className="logo" aria-hidden="true">
            S
          </div>
          <p className="brand-name">Svmemo</p>
        </div>
        <p className="date-line">{todayLabel(now)}</p>
      </header>

      {showHomeHint ? (
        <div className="install-hint">
          <p>
            用 Safari 打开，点分享 → 添加到主屏幕，就能离线背。电脑和手机进度不同步。
          </p>
          <button
            type="button"
            onClick={() => {
              window.localStorage.setItem(HOME_HINT_KEY, '1')
              setShowHomeHint(false)
            }}
          >
            知道了
          </button>
        </div>
      ) : null}

      {!overview ? (
        <p className="hint">正在读取本地进度…</p>
      ) : (
        <>
          <article className={needsWords ? 'today-hero is-empty' : 'today-hero'}>
            <div className="today-hero-copy">
              <p className="today-kicker">今日待学</p>
              {needsWords ? (
                <h2 className="today-empty-title">先去词库勾几个词</h2>
              ) : (
                <p className="today-count">
                  <strong>{remaining}</strong>
                </p>
              )}
              {needsWords ? null : (
                <div className="today-pills">
                  <button
                    type="button"
                    className="today-pill is-review"
                    disabled={!canOpenDueList}
                    onClick={handleOpenDueList}
                    title={
                      canOpenDueList
                        ? '查看已学词：哪些到期，哪些还要几天'
                        : '还没有已学的词'
                    }
                  >
                    <strong>{overview.dueCount}</strong>
                    到期复习
                  </button>
                  <span className="today-pill is-new">
                    <strong>{overview.newCount}</strong>
                    新词
                  </span>
                </div>
              )}
              <p className="today-hero-meta">{heroMeta}</p>
            </div>
            {needsWords ? (
              <button type="button" className="btn btn-primary btn-lg" onClick={onBrowseWords}>
                去词库选词
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary btn-lg"
                disabled={Boolean(starting)}
                onClick={() => void handleStart()}
              >
                {starting === 'today' ? '准备中…' : '开始背单词'}
              </button>
            )}
          </article>

          {message ? <p className="today-flash">{message}</p> : null}

          <ul
            className={
              overview.masteredCount > 0
                ? 'today-summary is-four'
                : 'today-summary'
            }
          >
            <li>
              <strong>{overview.wordsToday}</strong>
              <span>今天已学</span>
            </li>
            <li>
              <strong>{overview.learnedCount}</strong>
              <span>计划中</span>
            </li>
            {overview.masteredCount > 0 ? (
              <li>
                <strong>{overview.masteredCount}</strong>
                <span>已掌握</span>
              </li>
            ) : null}
            <li>
              <strong>{overview.unlearnedCount}</strong>
              <span>词库剩</span>
            </li>
          </ul>

          <div className="today-actions">
            {canReviewStarred ? (
              <button
                type="button"
                className="today-action"
                disabled={Boolean(starting)}
                onClick={() => void handleStarred()}
              >
                <span className="today-action-copy">
                  <strong>单词本</strong>
                  <span>拼对会移出 · {starredCount} 个</span>
                </span>
                <span className="today-action-go">
                  {starting === 'starred' ? '…' : '复习'}
                </span>
              </button>
            ) : (
              <button
                type="button"
                className="today-action is-idle"
                onClick={onBrowseWords}
              >
                <span className="today-action-copy">
                  <strong>单词本</strong>
                  <span>学习时点星星，难词会进这里</span>
                </span>
                <span className="today-action-go">词库</span>
              </button>
            )}
            {sentenceCount > 0 ? (
              <button
                type="button"
                className="today-action"
                disabled={Boolean(starting)}
                onClick={() => void handleSentences()}
              >
                <span className="today-action-copy">
                  <strong>例句填空</strong>
                  <span>看中文写词 · 不改间隔</span>
                </span>
                <span className="today-action-go">
                  {starting === 'sentences' ? '…' : '开始'}
                </span>
              </button>
            ) : (
              <button
                type="button"
                className="today-action is-idle"
                onClick={onBrowseSentences}
              >
                <span className="today-action-copy">
                  <strong>例句填空</strong>
                  <span>词进计划后，就可以在这里练句子</span>
                </span>
                <span className="today-action-go">看看</span>
              </button>
            )}
          </div>
        </>
      )}

      <StudyCalendar />

      <div className="today-tools">
        <p className="today-tools-label">这台设备的进度</p>
        {overview?.learnedCount === 0 ? (
          <p className="hint">
            进度只存在当前浏览器。若在电脑上背过，请先导出或复制，再在这里导入。
          </p>
        ) : null}
        <div className="today-tools-grid">
          <button type="button" className="btn" onClick={() => void handleCopy()}>
            复制进度
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => void handlePasteImport()}
          >
            粘贴导入
          </button>
          <button type="button" className="btn" onClick={() => void handleExport()}>
            导出备份
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => fileInput.current?.click()}
          >
            导入备份
          </button>
        </div>
      </div>

      {message && !overview ? <p className="hint">{message}</p> : null}

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
