import { useEffect, useRef, useState, type MouseEvent } from 'react'

export function releaseMarkButton(event: MouseEvent<HTMLButtonElement>) {
  const button = event.currentTarget
  button.blur()
  const field = button
    .closest('.flashcard')
    ?.querySelector<HTMLInputElement | HTMLTextAreaElement>(
      'input:not([type="hidden"]):not([disabled]), textarea:not([disabled])',
    )
  field?.focus()
}

type StarButtonProps = {
  starred: boolean
  onToggle: () => void
  title: string
  label: string
}

export function StarButton({ starred, onToggle, title, label }: StarButtonProps) {
  const [pulse, setPulse] = useState<'pop' | 'dim' | null>(null)
  const previous = useRef(starred)

  useEffect(() => {
    if (starred === previous.current) {
      return
    }
    setPulse(starred ? 'pop' : 'dim')
    previous.current = starred
  }, [starred])

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    onToggle()
    releaseMarkButton(event)
  }

  return (
    <button
      type="button"
      className={[
        'mark-btn',
        starred ? 'is-starred' : '',
        pulse === 'pop' ? 'is-star-pop' : '',
        pulse === 'dim' ? 'is-star-dim' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={handleClick}
      onAnimationEnd={(event) => {
        if (event.animationName === 'star-pop' || event.animationName === 'star-dim') {
          setPulse(null)
        }
      }}
      aria-pressed={starred}
      aria-label={label}
      title={title}
    >
      <span className="mark-star" aria-hidden="true">
        ★
      </span>
    </button>
  )
}
