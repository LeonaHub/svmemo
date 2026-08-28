import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import type { Grade } from 'ts-fsrs'
import {
  assembleSpelling,
  clipSpellingInput,
  gradeSpelling,
  isSpellingLetter,
  spellingChars,
  spellingDiff,
  spellingLetterCount,
  type DiffMark,
} from '../lib/spelling'
import { isExactSpelling } from '../lib/spelling-drill'
import type { Word } from '../types/word'
import { CardMarks } from './CardMarks'
import { SpeakButton } from './SpeakButton'
import { WordExamples, WordForms } from './WordExtras'

const LETTERS = ['å', 'ä', 'ö'] as const

const RESULT_LABEL: Record<1 | 2 | 3 | 4, string> = {
  1: '再练一次',
  2: '很接近',
  3: '正确',
  4: '正确',
}

type SpellingCardProps = {
  word: Word
  kicker?: string
  onAnswer: (rating: Grade) => Promise<void>
  onReveal?: (exact: boolean) => void
  onContinue: (passed: boolean) => void
  onMasteredChange?: (mastered: boolean) => void
}

export function SpellingCard({
  word,
  kicker,
  onAnswer,
  onReveal,
  onContinue,
  onMasteredChange,
}: SpellingCardProps) {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<{
    rating: Grade
    marks: DiffMark[]
  } | null>(null)
  const submittedRef = useRef(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const exact = result ? isExactSpelling(result.rating) : false
  const letterCount = spellingLetterCount(word.lemma)
  const slots = useMemo(() => spellingChars(word.lemma), [word.lemma])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!result) {
      return
    }
    function onKey(event: KeyboardEvent) {
      if (
        (event.key !== 'Enter' && event.key !== 'ArrowRight') ||
        event.repeat ||
        event.isComposing ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey
      ) {
        return
      }
      event.preventDefault()
      onContinue(exact)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [result, exact, onContinue])

  function applyTyped(raw: string) {
    const next = clipSpellingInput(raw, letterCount)
    setInput(next)
    if (next.length === letterCount && letterCount > 0) {
      void submitWith(next)
    }
  }

  function insertLetter(letter: string) {
    if (submittedRef.current || result) {
      return
    }
    applyTyped(input + letter)
    inputRef.current?.focus()
  }

  async function submitWith(typed: string) {
    if (submittedRef.current || typed.length === 0) {
      return
    }
    submittedRef.current = true
    const assembled = assembleSpelling(word.lemma, typed)
    const rating = gradeSpelling(assembled, word.lemma)
    setResult({
      rating,
      marks: spellingDiff(assembled, word.lemma),
    })
    onReveal?.(isExactSpelling(rating))
    await onAnswer(rating)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    void submitWith(input)
  }

  let letterIndex = 0

  return (
    <div className="study-stage">
      <div className="card-stack">
        <article className={result ? 'flashcard is-flipped' : 'flashcard is-typing'}>
          <div className="card-top">
            <p className="card-kicker">{kicker ?? '拼写'}</p>
            <CardMarks wordId={word.id} onMasteredChange={onMasteredChange} />
          </div>
          <div className="card-center">
            <div className="card-lead">
              <p className="card-gloss">{word.glossZh}</p>
              {word.glossEn ? <p className="card-en">{word.glossEn}</p> : null}
              <SpeakButton text={word.lemma} label="听发音" autoPlay />

              {result ? (
                <div className="spelling-result">
                  <p className="result-label">{RESULT_LABEL[result.rating]}</p>
                  <p className="diff" aria-label="拼写对照">
                    {result.marks.map((mark, index) => (
                      <span
                        key={`${mark.char}-${index}`}
                        className={mark.ok ? 'diff-ok' : 'diff-bad'}
                      >
                        {mark.char}
                      </span>
                    ))}
                  </p>
                  <p className="card-lemma">{word.lemma}</p>
                  <WordForms word={word} />
                </div>
              ) : (
                <form
                  id="spelling-form"
                  className="spelling-form"
                  onSubmit={handleSubmit}
                >
                <label className="sr-only" htmlFor="spelling-input">
                  瑞典语拼写，共 {letterCount} 个字母
                </label>
                <div className="spell-board">
                  <div className="spell-slots" aria-hidden="true">
                    {slots.map((char, index) => {
                      if (!isSpellingLetter(char)) {
                        return (
                          <span key={`gap-${index}`} className="spell-gap">
                            {char === ' ' ? '' : char}
                          </span>
                        )
                      }
                      const typedAt = letterIndex
                      const filled = input[typedAt] ?? ''
                      const current = typedAt === input.length
                      letterIndex += 1
                      return (
                        <span
                          key={`slot-${index}`}
                          className={current ? 'spell-slot is-current' : 'spell-slot'}
                        >
                          {filled ? (
                            filled
                          ) : current ? (
                            <span className="spell-caret" aria-hidden="true" />
                          ) : null}
                        </span>
                      )
                    })}
                  </div>
                  <input
                    ref={inputRef}
                    id="spelling-input"
                    className="spell-capture"
                    value={input}
                    onChange={(event) => applyTyped(event.target.value)}
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    lang="sv"
                    inputMode="text"
                    maxLength={letterCount}
                    onClick={() => inputRef.current?.focus()}
                  />
                </div>
                <div className="sv-keys">
                  {LETTERS.map((letter) => (
                    <button
                      key={letter}
                      type="button"
                      className="btn btn-key"
                      onClick={() => insertLetter(letter)}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              </form>
            )}
            </div>
            {result ? <WordExamples word={word} /> : null}
          </div>
        </article>
      </div>

      <div className="study-dock">
        {result ? (
          <button type="button" className="btn btn-primary btn-lg" onClick={() => onContinue(exact)}>
            {exact ? '下一题' : '再试一次'}
            <span className="shortcut-hint">（回车 / →）</span>
          </button>
        ) : (
          <button
            type="submit"
            form="spelling-form"
            className="btn btn-primary btn-lg"
            disabled={input.length !== letterCount}
          >
            检查
          </button>
        )}
      </div>
    </div>
  )
}
