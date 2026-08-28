import { useEffect, useState } from 'react'
import type { SentenceItem } from '../lib/sentence-drill'
import { sentenceKicker } from '../lib/sentence-drill'
import { useSwipeNav, type SwipeNav } from '../lib/swipe'
import { SentenceCard } from './SentenceCard'

type SentenceSessionProps = {
  items: SentenceItem[]
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
  nav?: SwipeNav
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
    <section className="page-study" {...nav?.bind}>
      <div className="done">
        <div className="done-mark" aria-hidden="true">
          ✓
        </div>
        <h1>{title}</h1>
        <p className="lede">{message}</p>
        <button type="button" className="btn btn-primary btn-lg" onClick={onAction}>
          {actionLabel}
          <span className="shortcut-hint">（回车）</span>
        </button>
      </div>
    </section>
  )
}

export function SentenceSession({ items: initialItems, onExit }: SentenceSessionProps) {
  const [items, setItems] = useState(initialItems)
  const [index, setIndex] = useState(0)
  const [finished, setFinished] = useState(initialItems.length === 0)
  const [attemptKey, setAttemptKey] = useState(0)
  const [checkpoint, setCheckpoint] = useState<string | null>(null)
  const [spellOutcome, setSpellOutcome] = useState<{ exact: boolean } | null>(
    null,
  )

  const item = items[index]
  const remaining = Math.max(0, items.length - index)
  const progress = items.length === 0 ? 0 : (index / items.length) * 100

  useEffect(() => {
    setAttemptKey(0)
    setSpellOutcome(null)
  }, [index, item?.example.sv, item?.word.id])

  function goBack() {
    if (finished) {
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

  function advance() {
    const nextIndex = index + 1
    if (nextIndex >= items.length) {
      setFinished(true)
      return
    }
    const current = items[index]
    const next = items[nextIndex]
    if (current && next && next.round > current.round) {
      setCheckpoint(`第 ${current.round} 组过完了。下一组还是看中文，把要学的词写进句子。`)
    }
    setIndex(nextIndex)
  }

  function handleContinue(passed: boolean) {
    if (passed) {
      advance()
      return
    }
    setSpellOutcome(null)
    setAttemptKey((current) => current + 1)
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
    if (spellOutcome) {
      handleContinue(spellOutcome.exact)
    }
  }

  const swipeNav = useSwipeNav({
    decidePrev: () => {
      if (finished) {
        return 'ignore'
      }
      if (checkpoint || index > 0) {
        return 'commit'
      }
      return 'ignore'
    },
    decideNext: () => {
      if (finished || checkpoint) {
        return 'commit'
      }
      return spellOutcome ? 'commit' : 'ignore'
    },
    onCommitPrev: goBack,
    onCommitNext: goForward,
  })

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

  function handleMasteredChange(mastered: boolean) {
    if (!mastered || !item) {
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
    setAttemptKey(0)
    if (index >= nextItems.length) {
      setFinished(true)
      return
    }
    const next = nextItems[index]
    if (next && next.round > skipped.round) {
      setCheckpoint(
        `第 ${skipped.round} 组过完了。下一组还是看中文，把要学的词写进句子。`,
      )
    }
  }

  if (finished || (!item && !checkpoint)) {
    return (
      <ActionScreen
        title="例句先到这里"
        message="这只是加练，不会改单词的复习间隔。想接着练可以再点进来。"
        actionLabel="返回"
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
    <section className="page-study" {...swipeNav.bind}>
      <div className="study-bar">
        <button type="button" className="btn btn-ghost" onClick={onExit}>
          结束
        </button>
        <div className="progress" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
        <p className="remain">还剩 {remaining}</p>
      </div>

      <div
        ref={swipeNav.layerRef}
        className={['swipe-layer', swipeNav.enterClass].filter(Boolean).join(' ')}
      >
      <SentenceCard
        key={`${item.word.id}-${item.example.sv}-${index}-${attemptKey}`}
        item={item}
        kicker={sentenceKicker(item)}
        onReveal={(exact) => setSpellOutcome({ exact })}
        onContinue={handleContinue}
        onMasteredChange={handleMasteredChange}
      />
      </div>
    </section>
  )
}
