import { useEffect, useMemo, useState } from 'react'
import { markTodayComplete, rememberMatchedWords, type MatchPair } from '../db/study'
import { buildMatchBubbles, type MatchBubble } from '../lib/match-drill'
import { speakSwedish } from '../lib/tts'

type MatchSessionProps = {
  pairs: MatchPair[]
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
}: {
  title: string
  message: string
  actionLabel: string
  onAction: () => void
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

function bubbleId(wordId: string, side: 'sv' | 'zh'): string {
  return `${wordId}__${side}`
}

export function MatchSession({ pairs, onExit }: MatchSessionProps) {
  const safePairs = useMemo(
    () => pairs.filter((pair) => Boolean(pair.word?.id && pair.word.lemma)),
    [pairs],
  )
  const [cleared, setCleared] = useState<Set<string>>(() => new Set())
  const [selected, setSelected] = useState<MatchBubble | null>(null)
  const [wrongIds, setWrongIds] = useState<string[]>([])
  const [finished, setFinished] = useState(false)

  const bubbles = useMemo(
    () => buildMatchBubbles(safePairs.map((pair) => pair.word)),
    [safePairs],
  )
  const remainingPairs = safePairs.filter(
    (pair) => !cleared.has(bubbleId(pair.word.id, 'sv')),
  ).length
  const totalPairs = Math.max(safePairs.length, 1)
  const progress = ((totalPairs - remainingPairs) / totalPairs) * 100

  function finishBoard() {
    const wordIds = safePairs.map((pair) => pair.word.id)
    void rememberMatchedWords(wordIds)
      .then(() => markTodayComplete())
      .then(() => setFinished(true))
  }

  function clearWord(wordId: string) {
    const next = new Set(cleared)
    next.add(bubbleId(wordId, 'sv'))
    next.add(bubbleId(wordId, 'zh'))
    setCleared(next)
    setSelected((current) => (current?.wordId === wordId ? null : current))
    const left = safePairs.filter(
      (pair) => pair.word.id !== wordId && !next.has(bubbleId(pair.word.id, 'sv')),
    ).length
    if (left === 0) {
      finishBoard()
    }
  }

  function handleBubble(bubble: MatchBubble) {
    if (cleared.has(bubble.id) || wrongIds.length > 0) {
      return
    }
    if (bubble.side === 'sv') {
      void speakSwedish(bubble.text)
    }

    if (!selected) {
      setSelected(bubble)
      return
    }
    if (selected.id === bubble.id) {
      setSelected(null)
      return
    }
    if (selected.wordId === bubble.wordId && selected.side !== bubble.side) {
      clearWord(bubble.wordId)
      return
    }
    const ids = [selected.id, bubble.id]
    setWrongIds(ids)
    setSelected(null)
    window.setTimeout(() => {
      setWrongIds((current) => (current[0] === ids[0] ? [] : current))
    }, 420)
  }

  if (safePairs.length === 0) {
    return (
      <ActionScreen
        title="这局开不了"
        message="没有能配对的词。先去今日背几个，再点加练。"
        actionLabel="回到今日（回车 / →）"
        onAction={onExit}
      />
    )
  }

  if (finished) {
    return (
      <ActionScreen
        title="这一局消完了"
        message="下一局会换一批还没消过的快忘词。想再来，回今日再点加练。"
        actionLabel="回到今日（回车 / →）"
        onAction={onExit}
      />
    )
  }

  return (
    <section className="page-study is-match">
      <div className="study-bar">
        <button type="button" className="btn btn-ghost" onClick={onExit}>
          结束
        </button>
        <div className="progress" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
        <p className="remain">还剩 {remainingPairs} 对</p>
      </div>

      <div className="match-head">
        <p className="match-kicker">加练</p>
        <h1 className="match-title">快忘的对上就消</h1>
        <p className="match-hint">深一点的是瑞典语，浅一点的是中文。点成一对就消掉；点错会晃一下。</p>
      </div>

      <div className="match-board">
        {bubbles.map((bubble) => {
          if (cleared.has(bubble.id)) {
            return <div key={bubble.id} className="match-slot" aria-hidden="true" />
          }
          const selectedNow = selected?.id === bubble.id
          const wrongNow = wrongIds.includes(bubble.id)
          return (
            <button
              key={bubble.id}
              type="button"
              className={[
                'match-bubble',
                bubble.side === 'sv' ? 'is-sv' : 'is-zh',
                selectedNow ? 'is-selected' : '',
                wrongNow ? 'is-wrong' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => handleBubble(bubble)}
            >
              <span className="match-bubble-lang">
                {bubble.side === 'sv' ? 'sv' : '中'}
              </span>
              <span className="match-bubble-text">{bubble.text}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
