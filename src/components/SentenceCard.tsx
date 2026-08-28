import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react'
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
import {
  clozeAnswer,
  type SentenceHint,
  type SentenceItem,
  type SentenceSegment,
} from '../lib/sentence-drill'
import { POS_LABEL } from '../lib/pos'
import type { Pos } from '../types/word'
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

type SentenceCardProps = {
  item: SentenceItem
  kicker?: string
  onReveal?: (exact: boolean) => void
  onContinue: (passed: boolean) => void
  onMasteredChange?: (mastered: boolean) => void
}

function hintText(hint: SentenceHint, pos: Pos): string {
  const bits = [POS_LABEL[pos]]
  if (hint.gender) {
    bits.push(hint.gender)
  }
  if (hint.formLabel) {
    bits.push(hint.formLabel)
  }
  return bits.join(' · ')
}

function blankDiffs(segments: readonly SentenceSegment[], typed: string): DiffMark[][] {
  const diffs: DiffMark[][] = []
  let offset = 0
  for (const segment of segments) {
    if (segment.type !== 'blank') {
      continue
    }
    const count = spellingLetterCount(segment.text)
    const part = typed.slice(offset, offset + count)
    offset += count
    diffs.push(spellingDiff(assembleSpelling(segment.text, part), segment.text))
  }
  return diffs
}

function SentenceReveal({
  segments,
  diffs,
}: {
  segments: readonly SentenceSegment[]
  diffs: DiffMark[][]
}) {
  const nodes: ReactNode[] = []
  let blankIndex = 0
  for (const [index, segment] of segments.entries()) {
    if (segment.type === 'text') {
      nodes.push(
        <span key={`text-${index}`} className="sentence-prompt-text">
          {segment.text}
        </span>,
      )
      continue
    }
    const marks = diffs[blankIndex] ?? []
    blankIndex += 1
    nodes.push(
      <span key={`blank-${index}`} className="sentence-blank-result">
        {marks.map((mark, markIndex) => (
          <span
            key={`${mark.char}-${markIndex}`}
            className={mark.ok ? 'diff-ok' : 'diff-bad'}
          >
            {mark.char}
          </span>
        ))}
      </span>,
    )
  }
  return (
    <p className="sentence-prompt is-reveal" aria-label="拼写对照">
      {nodes}
    </p>
  )
}

function SpellBlank({
  answer,
  input,
  letterOffset,
  caretAt,
}: {
  answer: string
  input: string
  letterOffset: number
  caretAt: number
}) {
  let local = 0
  return (
    <span className="sentence-blank">
      {spellingChars(answer).map((char, index) => {
        if (!isSpellingLetter(char)) {
          return (
            <span key={`gap-${index}`} className="spell-gap">
              {char === ' ' ? '' : char}
            </span>
          )
        }
        const typedAt = letterOffset + local
        const filled = input[typedAt] ?? ''
        const current = typedAt === caretAt
        local += 1
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
    </span>
  )
}

export function SentenceCard({
  item,
  kicker,
  onReveal,
  onContinue,
  onMasteredChange,
}: SentenceCardProps) {
  const answer = useMemo(() => clozeAnswer(item.segments), [item.segments])
  const [input, setInput] = useState('')
  const [result, setResult] = useState<{
    rating: Grade
    typed: string
  } | null>(null)
  const submittedRef = useRef(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const exact = result ? isExactSpelling(result.rating) : false
  const letterCount = spellingLetterCount(answer)
  const diffs = result ? blankDiffs(item.segments, result.typed) : []
  const answerNodes = item.segments.map((segment, index) =>
    segment.type === 'blank' ? (
      <mark key={`ans-${index}`} className="sentence-target">
        {segment.text}
      </mark>
    ) : (
      <span key={`ans-${index}`}>{segment.text}</span>
    ),
  )

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

  function submitWith(typed: string) {
    if (submittedRef.current || typed.length === 0) {
      return
    }
    submittedRef.current = true
    const assembled = assembleSpelling(answer, typed)
    const rating = gradeSpelling(assembled, answer)
    setResult({
      rating,
      typed,
    })
    onReveal?.(isExactSpelling(rating))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    submitWith(input)
  }

  let letterIndex = 0

  return (
    <div className="study-stage">
      <div className="card-stack">
        <article className={result ? 'flashcard is-flipped' : 'flashcard'}>
          <div className="card-top">
            <p className="card-kicker">{kicker ?? '例句'}</p>
            <CardMarks wordId={item.word.id} onMasteredChange={onMasteredChange} />
          </div>
          <div className="card-center">
            <div className="card-lead">
            <p className="card-gloss">{item.example.zh}</p>
            <SpeakButton text={item.example.sv} label="听整句" />

            <div className="hint-chips" aria-label="写词提示">
              {item.hints.map((hint, index) => (
                <span key={`${hint.glossZh}-${index}`} className="hint-chip is-target">
                  <small>{hintText(hint, item.word.pos)}</small>
                  {item.word.glossZh}
                </span>
              ))}
            </div>

            {result ? (
              <div className="spelling-result">
                <p className="result-label">{RESULT_LABEL[result.rating]}</p>
                <SentenceReveal segments={item.segments} diffs={diffs} />
                <p className="card-lemma sentence-answer">{answerNodes}</p>
                <WordForms word={item.word} />
              </div>
            ) : (
              <form
                id="sentence-form"
                className="spelling-form"
                onSubmit={handleSubmit}
              >
                <label className="sr-only" htmlFor="sentence-input">
                  本句要练的词，共 {letterCount} 个字母
                </label>
                <div className="spell-board">
                  <div className="sentence-prompt" aria-hidden="true">
                    {item.segments.map((segment, index) => {
                      if (segment.type === 'text') {
                        return (
                          <span key={`text-${index}`} className="sentence-prompt-text">
                            {segment.text}
                          </span>
                        )
                      }
                      const offset = letterIndex
                      letterIndex += spellingLetterCount(segment.text)
                      return (
                        <SpellBlank
                          key={`blank-${index}`}
                          answer={segment.text}
                          input={input}
                          letterOffset={offset}
                          caretAt={input.length}
                        />
                      )
                    })}
                  </div>
                  <input
                    ref={inputRef}
                    id="sentence-input"
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
            {result ? <WordExamples word={item.word} /> : null}
          </div>
        </article>
      </div>

      <div className="study-dock">
        {result ? (
          <button type="button" className="btn btn-primary btn-lg" onClick={() => onContinue(exact)}>
            {exact ? '下一句' : '再试一次'}
            <span className="shortcut-hint">（回车）</span>
          </button>
        ) : (
          <button
            type="submit"
            form="sentence-form"
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
