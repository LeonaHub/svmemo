import { useCallback, useRef, type PointerEvent } from 'react'

const MIN_DISTANCE = 56
const AXIS_LOCK = 10

type SwipeNav = {
  onPointerDown: (event: PointerEvent<HTMLElement>) => void
  onPointerMove: (event: PointerEvent<HTMLElement>) => void
  onPointerUp: (event: PointerEvent<HTMLElement>) => void
  onPointerCancel: () => void
}

function ignoreTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) {
    return false
  }
  return Boolean(target.closest('input, textarea, select, [contenteditable="true"]'))
}

export function useSwipeNav(
  onPrev: () => void,
  onNext: () => void,
  enabled = true,
): SwipeNav {
  const prevRef = useRef(onPrev)
  const nextRef = useRef(onNext)
  prevRef.current = onPrev
  nextRef.current = onNext

  const start = useRef<{
    x: number
    y: number
    id: number
    axis: 'h' | 'v' | null
  } | null>(null)

  const reset = useCallback(() => {
    start.current = null
  }, [])

  const onPointerDown = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (!enabled || ignoreTarget(event.target)) {
        return
      }
      start.current = {
        x: event.clientX,
        y: event.clientY,
        id: event.pointerId,
        axis: null,
      }
    },
    [enabled],
  )

  const onPointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    const origin = start.current
    if (!origin || origin.id !== event.pointerId) {
      return
    }
    const dx = event.clientX - origin.x
    const dy = event.clientY - origin.y
    if (!origin.axis && (Math.abs(dx) > AXIS_LOCK || Math.abs(dy) > AXIS_LOCK)) {
      origin.axis = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v'
    }
  }, [])

  const onPointerUp = useCallback((event: PointerEvent<HTMLElement>) => {
    const origin = start.current
    start.current = null
    if (!origin || origin.id !== event.pointerId || origin.axis === 'v') {
      return
    }
    const dx = event.clientX - origin.x
    const dy = event.clientY - origin.y
    if (Math.abs(dx) < MIN_DISTANCE || Math.abs(dx) < Math.abs(dy) * 1.15) {
      return
    }
    if (dx < 0) {
      nextRef.current()
      return
    }
    prevRef.current()
  }, [])

  return {
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel: reset,
  }
}
