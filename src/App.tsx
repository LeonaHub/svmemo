import { useEffect, useState } from 'react'
import { seedIfEmpty } from './db/seed'
import { StudySession } from './components/StudySession'
import { TodayPage } from './components/TodayPage'
import { WordList } from './components/WordList'
import type { StudyItem } from './db/study'
import './App.css'

type Tab = 'today' | 'words'

export default function App() {
  const [seedError, setSeedError] = useState<string | null>(null)
  const [tab, setTab] = useState<Tab>('today')
  const [session, setSession] = useState<StudyItem[] | null>(null)

  useEffect(() => {
    void seedIfEmpty().catch((error: unknown) => {
      setSeedError(error instanceof Error ? error.message : '词库导入失败')
    })
  }, [])

  if (session) {
    return (
      <div className="shell shell-study">
        <StudySession items={session} onExit={() => setSession(null)} />
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
        {seedError ? <p className="error">{seedError}</p> : null}
        {tab === 'today' ? (
          <TodayPage
            onStart={setSession}
            onBrowseWords={() => setTab('words')}
          />
        ) : (
          <WordList />
        )}
      </main>
    </div>
  )
}
