import { useEffect, useState, type MouseEvent, type PointerEvent } from 'react'
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
  const [busy, setBusy] = useState(false)

  const allowAuto =
    autoPlay &&
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches

  useEffect(() => {
    if (!allowAuto) {
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
  }, [allowAuto, text])

  function handlePointerDown(event: PointerEvent<HTMLButtonElement>) {
    event.stopPropagation()
    // 电脑上挡住默认聚焦，避免拼写时点喇叭抢走输入框；
    // 手机上不能 preventDefault，否则 Safari 会取消这次点击的播放权限。
    if (event.pointerType === 'mouse') {
      event.preventDefault()
    }
  }

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    setBusy(true)
    setHint(null)
    // 必须在这次点击的调用栈里立刻开始 speakSwedish，中间不能先 await
    const pending: Promise<SpeakResult> = speakSwedish(text)
    void pending.then((result) => {
      setHint(ttsHint(result))
      setBusy(false)
    })
  }

  return (
    <div className="speak">
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
