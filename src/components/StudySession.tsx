import { useEffect, useRef, useState } from 'react'
import type { Grade } from 'ts-fsrs'
import { setWordMark } from '../db/marks'
import {
  markTodayComplete,
  shouldRequeue,
  submitReview,
  type StudyItem,
} from '../db/study'
import { itemKicker } from '../lib/queue'
import { isExactSpelling } from '../lib/spelling-drill'
import { useSwipeNav } from '../lib/swipe'
import { RecognitionCard } from './RecognitionCard'
import { SpellingCard } from './SpellingCard'

type StudySessionProps = {
  items: StudyItem[]
  dropStarOnCorrect?: boolean
  onExit: () => void
}

function isPlainKey(event: KeyboardEvent, key: string): boolean {
  return (
    event.key === key &&
    !event.repeat &&
    !event.isComposing &&
    !event.altKey &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.shiftKey
  )
}

function ActionScreen({
  title,
  message,
  actionLabel,
  onAction,
  nav,
}: {
  title: string
  message: string
  actionLabel: string
  onAction: () => void
  nav?: ReturnType<typeof useSwipeNav>
}) {
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (!isPlainKey(event, 'Enter') && !isPlainKey(event, 'ArrowRight')) {
        return
      }
      event.preventDefault()
      onAction()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onAction])

  return (
    <section className="page-study" {...nav}>
      <div className="done">
        <div className="done-mark" aria-hidden="true">
          ✓
        </div>
        <h1>{title}</h1>
        <p className="lede">{message}</p>
        <button type="button" className="btn btn-primary btn-lg" onClick={onAction}>
          {actionLabel}
          <span className="shortcut-hint">（回车 / →）</span>
        </button>
      </div>
    </section>
  )
}

function checkpointMessage(current: StudyItem, next: StudyItem): string | null {
  if (next.round <= current.round) {
    return null
  }
  if (current.kind === 'due') {
    return '到期复习过完了。下面按每组 7 个学新词：先看卡片，再拼写。'
  }
  if (current.kind === 'round-review') {
    return `第 ${current.round} 组过完了。下一组还是先熟悉，再立刻复习。`
  }
  return null
}

export function StudySession({
  items: initialItems,
  dropStarOnCorrect = false,
  onExit,
}: StudySessionProps) {
  const [items, setItems] = useState(initialItems)
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [busy, setBusy] = useState(false)
  const [requeues, setRequeues] = useState<Record<number, number>>({})
  const [finished, setFinished] = useState(initialItems.length === 0)
  const [attemptKey, setAttemptKey] = useState(0)
  const [checkpoint, setCheckpoint] = useState<string | null>(null)
  const [spellOutcome, setSpellOutcome] = useState<{ exact: boolean } | null>(
    null,
  )
  const committedRef = useRef(new Set<number>())

  const item = items[index]
  const remaining = Math.max(0, items.length - index)
  const progress = items.length === 0 ? 0 : (index / items.length) * 100

  useEffect(() => {
    setAttemptKey(0)
    setFlipped(false)
    setSpellOutcome(null)
  }, [index, item?.card.id])

  function goBack() {
    if (finished || busy) {
      return
    }
    if (checkpoint) {
      setCheckpoint(null)
      setIndex((current) => Math.max(0, current - 1))
      return
    }
    if (index <= 0) {
      return
    }
    setIndex((current) => current - 1)
  }

  function goForward() {
    if (finished) {
      onExit()
      return
    }
    if (checkpoint) {
      setCheckpoint(null)
      return
    }
    if (busy || !item) {
      return
    }
    if (item.mode === 'recognition') {
      if (!flipped) {
        setFlipped(true)
        return
      }
      if (item.kind === 'learn') {
        void advance(false)
      }
      return
    }
    if (spellOutcome) {
      handleSpellingContinue(spellOutcome.exact)
    }
  }

  const swipeNav = useSwipeNav(goBack, goForward, !busy)

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (!isPlainKey(event, 'ArrowLeft')) {
        return
      }
      event.preventDefault()
      goBack()
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  })

  async function commit(rating: Grade): Promise<boolean> {
    if (!item || busy) {
      return false
    }
    setBusy(true)
    try {
      const updated = await submitReview(item.card, rating)
      const count = requeues[item.card.id] ?? 0
      const requeued = shouldRequeue(rating, count)
      if (requeued) {
        setItems((current) => [
          ...current,
          { ...item, card: updated },
        ])
        setRequeues((current) => ({
          ...current,
          [item.card.id]: count + 1,
        }))
      }
      return requeued
    } finally {
      setBusy(false)
    }
  }

  async function advance(requeued: boolean) {
    const nextLength = items.length + (requeued ? 1 : 0)
    const nextIndex = index + 1
    setFlipped(false)
    if (nextIndex >= nextLength) {
      await markTodayComplete()
      setFinished(true)
      return
    }
    const current = items[index]
    const next = items[nextIndex]
    if (current && next) {
      const message = checkpointMessage(current, next)
      if (message) {
        setCheckpoint(message)
      }
    }
    setIndex(nextIndex)
  }

  async function handleGrade(rating: Grade) {
    const requeued = await commit(rating)
    await advance(requeued)
  }

  async function handleSpellingAnswer(rating: Grade) {
    if (!item) {
      return
    }
    if (!committedRef.current.has(index)) {
      committedRef.current.add(index)
      await submitReview(item.card, rating)
    }
    if (dropStarOnCorrect && isExactSpelling(rating)) {
      await setWordMark(item.word.id, { starred: false })
    }
  }

  function handleSpellingContinue(passed: boolean) {
    if (passed) {
      void advance(false)
      return
    }
    setSpellOutcome(null)
    setAttemptKey((current) => current + 1)
  }

  async function skipMasteredWord() {
    if (!item) {
      return
    }
    const wordId = item.word.id
    const skipped = item
    const nextItems = items.filter((entry, entryIndex) => {
      if (entryIndex < index) {
        return true
      }
      return entry.word.id !== wordId
    })
    setItems(nextItems)
    setFlipped(false)
    setAttemptKey(0)
    if (index >= nextItems.length) {
      await markTodayComplete()
      setFinished(true)
      return
    }
    const next = nextItems[index]
    if (next) {
      const message = checkpointMessage(skipped, next)
      if (message) {
        setCheckpoint(message)
      }
    }
  }

  function handleMasteredChange(mastered: boolean) {
    if (!mastered) {
      return
    }
    void skipMasteredWord()
  }

  if (finished || (!item && !checkpoint)) {
    return (
      <ActionScreen
        title="今天先到这里"
        message="进度已经记在这台浏览器里。明天打开会先出现到期复习。"
        actionLabel="回到今日"
        onAction={onExit}
        nav={swipeNav}
      />
    )
  }

  if (checkpoint) {
    return (
      <ActionScreen
        title="这一组过完了"
        message={checkpoint}
        actionLabel="继续"
        onAction={() => setCheckpoint(null)}
        nav={swipeNav}
      />
    )
  }

  if (!item) {
    return null
  }

  return (
    <section className="page-study" {...swipeNav}>
      <div className="study-bar">
        <button type="button" className="btn btn-ghost" onClick={onExit}>
          结束
        </button>
        <div className="progress" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
        <p className="remain">还剩 {remaining}</p>
      </div>

      {item.mode === 'recognition' ? (
        <RecognitionCard
          key={`${item.card.id}-${index}`}
          word={item.word}
          flipped={flipped}
          busy={busy}
          kicker={itemKicker(item)}
          preview={item.kind === 'learn'}
          onFlip={() => setFlipped(true)}
          onContinue={() => void advance(false)}
          onGrade={(rating) => void handleGrade(rating)}
          onMasteredChange={handleMasteredChange}
        />
      ) : (
        <SpellingCard
          key={`${item.card.id}-${index}-${attemptKey}`}
          word={item.word}
          kicker={itemKicker(item)}
          onAnswer={handleSpellingAnswer}
          onReveal={(exact) => setSpellOutcome({ exact })}
          onContinue={handleSpellingContinue}
          onMasteredChange={handleMasteredChange}
        />
      )}
    </section>
  )
}
