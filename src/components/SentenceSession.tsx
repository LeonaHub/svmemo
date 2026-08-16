import { useEffect, useState } from 'react'
import type { SentenceItem } from '../lib/sentence-drill'
import { sentenceKicker } from '../lib/sentence-drill'
import { SentenceCard } from './SentenceCard'

type SentenceSessionProps = {
  items: SentenceItem[]
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

export function SentenceSession({ items: initialItems, onExit }: SentenceSessionProps) {
  const [items, setItems] = useState(initialItems)
  const [index, setIndex] = useState(0)
  const [finished, setFinished] = useState(initialItems.length === 0)
  const [attemptKey, setAttemptKey] = useState(0)
  const [checkpoint, setCheckpoint] = useState<string | null>(null)

  const item = items[index]
  const remaining = Math.max(0, items.length - index)
  const progress = items.length === 0 ? 0 : (index / items.length) * 100

  useEffect(() => {
    setAttemptKey(0)
  }, [index, item?.example.sv, item?.word.id])

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
    setAttemptKey((current) => current + 1)
  }

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
        actionLabel="返回（回车）"
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

      <SentenceCard
        key={`${item.word.id}-${item.example.sv}-${index}-${attemptKey}`}
        item={item}
        kicker={sentenceKicker(item)}
        onContinue={handleContinue}
        onMasteredChange={handleMasteredChange}
      />
    </section>
  )
}
