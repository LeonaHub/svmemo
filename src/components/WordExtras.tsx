import { examplesOf, inflectionRows } from '../lib/inflection'
import type { Word } from '../types/word'

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
            <strong>{example.sv}</strong>
            <span>{example.zh}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
