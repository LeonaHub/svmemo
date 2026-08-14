import { useEffect, useRef, useState } from 'react'
import type { Grade } from 'ts-fsrs'
import {
  markTodayComplete,
  shouldRequeue,
  submitReview,
  type StudyItem,
} from '../db/study'
import { itemKicker } from '../lib/queue'
import { RecognitionCard } from './RecognitionCard'
import { SpellingCard } from './SpellingCard'

type StudySessionProps = {
  items: StudyItem[]
  onExit: () => void
}

function ActionScreen({
  title,
  message,
  actionLabel,
  onAction,
}: {
  title: string
  message: string
  actionLabel: string
  onAction: () => void
}) {
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== 'Enter' || event.repeat || event.isComposing) {
        return
      }
      event.preventDefault()
      onAction()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onAction])

  return (
    <section className="page-study">
      <div className="done">
        <div className="done-mark" aria-hidden="true">
          ✓
        </div>
        <h1>{title}</h1>
        <p className="lede">{message}</p>
        <button type="button" className="btn btn-primary btn-lg" onClick={onAction}>
          {actionLabel}
        </button>
      </div>
    </section>
  )
}

export function StudySession({ items: initialItems, onExit }: StudySessionProps) {
  const [items, setItems] = useState(initialItems)
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [busy, setBusy] = useState(false)
  const [requeues, setRequeues] = useState<Record<number, number>>({})
  const [finished, setFinished] = useState(initialItems.length === 0)
  const [attemptKey, setAttemptKey] = useState(0)
  const [checkpoint, setCheckpoint] = useState<string | null>(null)
  const fsrsDoneRef = useRef(false)

  const item = items[index]
  const remaining = Math.max(0, items.length - index)
  const progress = items.length === 0 ? 0 : (index / items.length) * 100

  useEffect(() => {
    fsrsDoneRef.current = false
    setAttemptKey(0)
    setFlipped(false)
  }, [index, item?.card.id])

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
    if (!item || fsrsDoneRef.current) {
      return
    }
    fsrsDoneRef.current = true
    await submitReview(item.card, rating)
  }

  function handleSpellingContinue(passed: boolean) {
    if (passed) {
      void advance(false)
      return
    }
    setAttemptKey((current) => current + 1)
  }

  if (finished || (!item && !checkpoint)) {
    return (
      <ActionScreen
        title="今天先到这里"
        message="进度已经记在这台浏览器里。明天打开会先出现到期复习。"
        actionLabel="回到今日（回车）"
        onAction={onExit}
      />
    )
  }

  if (checkpoint) {
    return (
      <ActionScreen
        title="这一组过完了"
        message={checkpoint}
        actionLabel="继续（回车）"
        onAction={() => setCheckpoint(null)}
      />
    )
  }

  if (!item) {
    return null
  }

  return (
    <section className="page-study">
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
        />
      ) : (
        <SpellingCard
          key={`${item.card.id}-${index}-${attemptKey}`}
          word={item.word}
          kicker={itemKicker(item)}
          onAnswer={handleSpellingAnswer}
          onContinue={handleSpellingContinue}
        />
      )}
    </section>
  )
}
