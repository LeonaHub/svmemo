import { useEffect, useState, type MouseEvent, type PointerEvent } from 'react'
import {
  isSpeechUnlocked,
  onSpeechUnlock,
  speakSwedish,
  stopSpeaking,
  ttsHint,
  type SpeakResult,
} from '../lib/tts'

type SpeakButtonProps = {
  text: string
  label?: string
  autoPlay?: boolean
  compact?: boolean
}

export function SpeakButton({
  text,
  label = '发音',
  autoPlay = false,
  compact = false,
}: SpeakButtonProps) {
  const [hint, setHint] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (!autoPlay) {
      return
    }
    let cancelled = false
    function play() {
      if (cancelled) {
        return
      }
      void speakSwedish(text).then((result) => {
        if (!cancelled) {
          setHint(ttsHint(result))
        }
      })
    }
    const off = onSpeechUnlock(play)
    if (isSpeechUnlocked()) {
      play()
    }
    return () => {
      cancelled = true
      off()
      stopSpeaking()
    }
  }, [autoPlay, text])

  function handlePointerDown(event: PointerEvent<HTMLButtonElement>) {
    event.stopPropagation()
    if (event.pointerType === 'mouse') {
      event.preventDefault()
    }
  }

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    setBusy(true)
    setHint(null)
    const pending: Promise<SpeakResult> = speakSwedish(text)
    void pending.then((result) => {
      setHint(ttsHint(result))
      setBusy(false)
    })
  }

  return (
    <div className={compact ? 'speak is-compact' : 'speak'}>
      <button
        type="button"
        className={busy ? 'icon-btn is-speaking' : 'icon-btn'}
        aria-label={label}
        aria-busy={busy}
        onPointerDown={handlePointerDown}
        onClick={handleClick}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 5 6 9H3v6h3l5 4V5Z" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 6a8.5 8.5 0 0 1 0 12" />
        </svg>
      </button>
      {hint ? <p className="hint">{hint}</p> : null}
    </div>
  )
}
