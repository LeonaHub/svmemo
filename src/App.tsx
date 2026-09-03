import { useEffect, useState } from 'react'
import { seedIfEmpty } from './db/seed'
import { StudySession } from './components/StudySession'
import { DueReviewPage } from './components/DueReviewPage'
import { SentenceSession } from './components/SentenceSession'
import { SentencePage } from './components/SentencePage'
import { TodayPage } from './components/TodayPage'
import { WordList } from './components/WordList'
import type { StudyItem } from './db/study'
import type { SentenceItem } from './lib/sentence-drill'
import './App.css'

type Tab = 'today' | 'sentences' | 'words'

type Session =
  | { type: 'words'; items: StudyItem[]; dropStarOnCorrect?: boolean }
  | { type: 'due-list' }
  | { type: 'sentences'; items: SentenceItem[] }

export default function App() {
  const [ready, setReady] = useState(false)
  const [seedError, setSeedError] = useState<string | null>(null)
  const [tab, setTab] = useState<Tab>('today')
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    void seedIfEmpty()
      .then(() => setReady(true))
      .catch((error: unknown) => {
        setSeedError(error instanceof Error ? error.message : '词库导入失败')
      })
  }, [])

  if (!ready) {
    return (
      <div className="shell">
        <main className="page">
          {seedError ? (
            <p className="error">{seedError}</p>
          ) : (
            <p className="hint boot-hint">正在打开词库…</p>
          )}
        </main>
      </div>
    )
  }

  if (session?.type === 'words') {
    return (
      <div className="shell shell-study">
        <StudySession
          items={session.items}
          dropStarOnCorrect={session.dropStarOnCorrect}
          onExit={() => setSession(null)}
        />
      </div>
    )
  }

  if (session?.type === 'due-list') {
    return (
      <div className="shell shell-study">
        <DueReviewPage
          onExit={() => setSession(null)}
          onStart={(items) => setSession({ type: 'words', items })}
        />
      </div>
    )
  }

  if (session?.type === 'sentences') {
    return (
      <div className="shell shell-study">
        <SentenceSession items={session.items} onExit={() => setSession(null)} />
      </div>
    )
  }

  return (
    <div className="shell">
      <nav className="dock-nav" aria-label="主导航">
        <button
          type="button"
          className={tab === 'today' ? 'tab active' : 'tab'}
          onClick={() => setTab('today')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
          </svg>
          今日
        </button>
        <button
          type="button"
          className={tab === 'sentences' ? 'tab active' : 'tab'}
          onClick={() => setTab('sentences')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 7h14" />
            <path d="M5 12h14" />
            <path d="M5 17h9" />
          </svg>
          例句
        </button>
        <button
          type="button"
          className={tab === 'words' ? 'tab active' : 'tab'}
          onClick={() => setTab('words')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 4h10a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4Z" />
            <path d="M5 4v16a3 3 0 0 1 3-3h13" />
          </svg>
          词库
        </button>
      </nav>

      <main className="page">
        {tab === 'today' ? (
          <TodayPage
            onStart={(items, options) =>
              setSession({ type: 'words', items, ...options })
            }
            onOpenDueList={() => setSession({ type: 'due-list' })}
            onStartSentences={(items) => setSession({ type: 'sentences', items })}
            onBrowseWords={() => setTab('words')}
            onBrowseSentences={() => setTab('sentences')}
          />
        ) : tab === 'sentences' ? (
          <SentencePage
            onStart={(items) => setSession({ type: 'sentences', items })}
            onBrowseWords={() => setTab('words')}
          />
        ) : (
          <WordList />
        )}
      </main>
    </div>
  )
}
