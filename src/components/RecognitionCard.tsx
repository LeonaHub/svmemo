import { useEffect } from 'react'
import { Rating } from 'ts-fsrs'
import type { Grade } from 'ts-fsrs'
import type { Word } from '../types/word'
import { SpeakButton } from './SpeakButton'
import { WordExtras } from './WordExtras'

const GRADES: { rating: Grade; label: string; hint: string; className: string }[] = [
  { rating: Rating.Again, label: '忘记', hint: 'Again', className: 'grade-again' },
  { rating: Rating.Hard, label: '困难', hint: 'Hard', className: 'grade-hard' },
  { rating: Rating.Good, label: '认识', hint: 'Good', className: 'grade-good' },
  { rating: Rating.Easy, label: '简单', hint: 'Easy', className: 'grade-easy' },
]

type RecognitionCardProps = {
  word: Word
  flipped: boolean
  busy: boolean
  kicker?: string
  preview?: boolean
  onFlip: () => void
  onContinue?: () => void
  onGrade?: (rating: Grade) => void
}

function pills(word: Word): string[] {
  return word.gender ? [word.gender] : []
}

export function RecognitionCard({
  word,
  flipped,
  busy,
  kicker = '认识',
  preview = false,
  onFlip,
  onContinue,
  onGrade,
}: RecognitionCardProps) {
  const extras = pills(word)

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== 'Enter' || event.repeat || event.isComposing) {
        return
      }
      event.preventDefault()
      if (!flipped) {
        onFlip()
        return
      }
      if (preview) {
        onContinue?.()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [flipped, preview, onFlip, onContinue])

  return (
    <div className="study-stage">
      <div className="card-stack">
        <article
          className={flipped ? 'flashcard is-flipped' : 'flashcard is-tap'}
          onClick={flipped ? undefined : onFlip}
        >
          <p className="card-kicker">{kicker}</p>
          <div className="card-center">
            <p className="card-lemma">{word.lemma}</p>
            <SpeakButton text={word.lemma} />
            {flipped ? (
              <>
                <p className="card-gloss">{word.glossZh}</p>
                {word.glossEn ? <p className="card-en">{word.glossEn}</p> : null}
                {extras.length > 0 ? (
                  <div className="word-meta">
                    {extras.map((item) => (
                      <span key={item} className="pill">
                        {item}
                      </span>
                    ))}
                  </div>
                ) : null}
                <WordExtras word={word} />
              </>
            ) : (
              <p className="tap-hint">先看一眼这个词，点卡片或回车看释义</p>
            )}
          </div>
        </article>
      </div>

      <div className="study-dock">
        {!flipped ? (
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={onFlip}
            disabled={busy}
          >
            显示释义（回车）
          </button>
        ) : preview ? (
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => onContinue?.()}
            disabled={busy}
          >
            下一张（回车）
          </button>
        ) : (
          <div className="grades">
            {GRADES.map((grade) => (
              <button
                key={grade.rating}
                type="button"
                className={`grade ${grade.className}`}
                disabled={busy || !onGrade}
                onClick={() => onGrade?.(grade.rating)}
              >
                {grade.label}
                <small>{grade.hint}</small>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
