import { useEffect } from 'react'
import { examplesOf, inflectionRows } from '../lib/inflection'
import { POS_LABEL } from '../lib/pos'
import { useSwipeNav } from '../lib/swipe'
import { stopSpeaking } from '../lib/tts'
import type { Word } from '../types/word'
import { SpeakButton } from './SpeakButton'

type WordExtrasProps = {
  word: Word
}

export function WordForms({ word }: WordExtrasProps) {
  const rows = inflectionRows(word)
  const compound = word.compound

  if (rows.length === 0 && !compound) {
    return null
  }

  return (
    <div className="word-extras-forms">
      {compound ? (
        <div className="compound">
          <p className="compound-label">构词</p>
          <p className="compound-parts">
            {compound.parts.map((part, index) => (
              <span key={`${part.sv}-${part.zh}`}>
                {index > 0 ? <span className="compound-plus"> + </span> : null}
                <strong>{part.sv}</strong>
                <span className="compound-zh">（{part.zh}）</span>
              </span>
            ))}
          </p>
          <p className="compound-together">{compound.together}</p>
        </div>
      ) : null}
      {rows.length > 0 ? (
        <dl className="inflect">
          {rows.map((row) => (
            <div key={row.label} className="inflect-row">
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  )
}

export function WordExamples({ word }: WordExtrasProps) {
  const examples = examplesOf(word)
  if (examples.length === 0) {
    return null
  }

  return (
    <div className="word-extras-examples">
      <p className="examples-label">例句</p>
      <ul className="examples">
        {examples.map((example) => (
          <li key={example.sv}>
            <div className="example-sv">
              <strong>{example.sv}</strong>
              <SpeakButton compact text={example.sv} label="听这句" />
            </div>
            <span>{example.zh}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

type WordDetailSheetProps = {
  word: Word
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
}

export function WordDetailSheet({
  word,
  onClose,
  onPrev,
  onNext,
}: WordDetailSheetProps) {
  const swipeNav = useSwipeNav({
    decidePrev: () => (onPrev ? 'commit' : 'ignore'),
    decideNext: () => (onNext ? 'commit' : 'ignore'),
    onCommitPrev: () => onPrev?.(),
    onCommitNext: () => onNext?.(),
  })

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  useEffect(() => {
    return () => stopSpeaking()
  }, [word.id])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.repeat || event.isComposing || event.altKey || event.ctrlKey || event.metaKey) {
        return
      }
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onPrev?.()
        return
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        onNext?.()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="word-detail-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="word-detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="word-detail-title"
        onClick={(event) => event.stopPropagation()}
        {...swipeNav.bind}
      >
        <div
          ref={swipeNav.layerRef}
          className={['swipe-layer', swipeNav.enterClass].filter(Boolean).join(' ')}
        >
        <div className="word-detail-top">
          <p className="card-kicker">
            {word.rank ? `词条 · #${word.rank}` : '词条'}
          </p>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            关闭
          </button>
        </div>
        <div className="word-detail-scroll">
          <div className="word-detail-grid">
            <div className="word-detail-lead">
              <div className="word-detail-title-row">
                <p className="card-lemma" id="word-detail-title">
                  {word.lemma}
                </p>
                <SpeakButton text={word.lemma} autoPlay />
              </div>
              <p className="card-gloss">{word.glossZh}</p>
              {word.glossEn ? <p className="card-en">{word.glossEn}</p> : null}
              <div className="word-meta">
                {word.gender ? <span className="pill">{word.gender}</span> : null}
                <span className="pill">{POS_LABEL[word.pos]}</span>
              </div>
              <WordForms word={word} />
            </div>
            <WordExamples word={word} />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
