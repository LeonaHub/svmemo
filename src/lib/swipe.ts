import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent,
} from 'react'
import { unlockSpeech } from './tts'

const MIN_DISTANCE = 56
const AXIS_LOCK = 10
const FLY_MS = 280

export type SwipeDecision = 'commit' | 'nudge' | 'ignore'

type SwipeNavOptions = {
  decidePrev: () => SwipeDecision
  decideNext: () => SwipeDecision
  onCommitPrev: () => void
  onCommitNext: () => void
  onNudgePrev?: () => void
  onNudgeNext?: () => void
  enabled?: boolean
}

export type SwipeNav = {
  bind: {
    onPointerDown: (event: PointerEvent<HTMLElement>) => void
    onPointerMove: (event: PointerEvent<HTMLElement>) => void
    onPointerUp: (event: PointerEvent<HTMLElement>) => void
    onPointerCancel: () => void
  }
  layerRef: (node: HTMLElement | null) => void
  enterClass: string
}

function ignoreTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) {
    return false
  }
  return Boolean(
    target.closest(
      'input, textarea, select, [contenteditable="true"], .study-dock, .sv-keys',
    ),
  )
}

function flyDistance(): number {
  return Math.min(window.innerWidth, 420)
}

export function useSwipeNav({
  decidePrev,
  decideNext,
  onCommitPrev,
  onCommitNext,
  onNudgePrev,
  onNudgeNext,
  enabled = true,
}: SwipeNavOptions): SwipeNav {
  const decidePrevRef = useRef(decidePrev)
  const decideNextRef = useRef(decideNext)
  const commitPrevRef = useRef(onCommitPrev)
  const commitNextRef = useRef(onCommitNext)
  const nudgePrevRef = useRef(onNudgePrev)
  const nudgeNextRef = useRef(onNudgeNext)
  decidePrevRef.current = decidePrev
  decideNextRef.current = decideNext
  commitPrevRef.current = onCommitPrev
  commitNextRef.current = onCommitNext
  nudgePrevRef.current = onNudgePrev
  nudgeNextRef.current = onNudgeNext

  const layerRef = useRef<HTMLElement | null>(null)
  const start = useRef<{
    x: number
    y: number
    id: number
    axis: 'h' | 'v' | null
  } | null>(null)
  const flying = useRef(false)
  const [enterClass, setEnterClass] = useState('')

  const setLayer = useCallback((node: HTMLElement | null) => {
    layerRef.current = node
  }, [])

  const apply = useCallback((x: number, animate: boolean) => {
    const el = layerRef.current
    if (!el) {
      return
    }
    el.style.transition = animate
      ? `transform ${FLY_MS}ms ease, opacity ${FLY_MS}ms ease`
      : 'none'
    if (x === 0) {
      el.style.transform = ''
      el.style.opacity = ''
      return
    }
    const rotate = Math.max(-9, Math.min(9, x / 26))
    el.style.transform = `translate3d(${x}px, 0, 0) rotate(${rotate}deg)`
    el.style.opacity = String(Math.max(0.42, 1 - Math.abs(x) / 480))
  }, [])

  const reset = useCallback(() => {
    start.current = null
    if (!flying.current) {
      apply(0, true)
    }
  }, [apply])

  useLayoutEffect(() => {
    if (!enterClass) {
      return
    }
    apply(0, false)
    flying.current = false
  }, [apply, enterClass])

  useEffect(() => {
    if (!enterClass) {
      return
    }
    const timer = window.setTimeout(() => setEnterClass(''), 380)
    return () => window.clearTimeout(timer)
  }, [enterClass])

  const finish = useCallback(
    (dx: number) => {
      const goingNext = dx < 0
      const decision = goingNext ? decideNextRef.current() : decidePrevRef.current()
      if (decision === 'nudge') {
        apply(0, true)
        if (goingNext) {
          nudgeNextRef.current?.()
        } else {
          nudgePrevRef.current?.()
        }
        return
      }
      if (decision !== 'commit') {
        apply(0, true)
        return
      }
      flying.current = true
      const out = (goingNext ? -1 : 1) * flyDistance()
      apply(out, true)
      window.setTimeout(() => {
        setEnterClass(goingNext ? 'is-enter-from-right' : 'is-enter-from-left')
        if (goingNext) {
          commitNextRef.current()
        } else {
          commitPrevRef.current()
        }
      }, FLY_MS)
    },
    [apply],
  )

  const onPointerDown = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (!enabled || flying.current || ignoreTarget(event.target)) {
        return
      }
      unlockSpeech()
      start.current = {
        x: event.clientX,
        y: event.clientY,
        id: event.pointerId,
        axis: null,
      }
    },
    [enabled],
  )

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      const origin = start.current
      if (!origin || origin.id !== event.pointerId || flying.current) {
        return
      }
      const dx = event.clientX - origin.x
      const dy = event.clientY - origin.y
      if (!origin.axis && (Math.abs(dx) > AXIS_LOCK || Math.abs(dy) > AXIS_LOCK)) {
        origin.axis = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v'
        if (origin.axis === 'h') {
          event.currentTarget.setPointerCapture(event.pointerId)
        }
      }
      if (origin.axis !== 'h') {
        return
      }
      if (event.cancelable) {
        event.preventDefault()
      }
      apply(dx, false)
    },
    [apply],
  )

  const onPointerUp = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      const origin = start.current
      start.current = null
      if (!origin || origin.id !== event.pointerId || origin.axis === 'v' || flying.current) {
        return
      }
      const dx = event.clientX - origin.x
      const dy = event.clientY - origin.y
      if (origin.axis !== 'h' || Math.abs(dx) < MIN_DISTANCE || Math.abs(dx) < Math.abs(dy) * 1.15) {
        apply(0, true)
        return
      }
      finish(dx)
    },
    [apply, finish],
  )

  return {
    bind: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: reset,
    },
    layerRef: setLayer,
    enterClass,
  }
}
