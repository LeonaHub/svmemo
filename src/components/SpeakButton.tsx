import { useEffect, useState, type MouseEvent } from 'react'
import { speakSwedish, stopSpeaking, ttsHint, type SpeakResult } from '../lib/tts'

type SpeakButtonProps = {
  text: string
  label?: string
  autoPlay?: boolean
}

export function SpeakButton({
  text,
  label = '发音',
  autoPlay = false,
}: SpeakButtonProps) {
  const [hint, setHint] = useState<string | null>(null)

  async function play() {
    const result: SpeakResult = await speakSwedish(text)
    setHint(ttsHint(result))
  }

  useEffect(() => {
    if (!autoPlay) {
      return
    }
    let cancelled = false
    void speakSwedish(text).then((result) => {
      if (!cancelled) {
        setHint(ttsHint(result))
      }
    })
    return () => {
      cancelled = true
      stopSpeaking()
    }
  }, [autoPlay, text])

  function handleMouseDown(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.stopPropagation()
  }

  async function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    const button = event.currentTarget
    await play()
    button.blur()
  }

  return (
    <div className="speak">
      <button
        type="button"
        className="icon-btn"
        aria-label={label}
        onMouseDown={handleMouseDown}
        onClick={(event) => void handleClick(event)}
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
