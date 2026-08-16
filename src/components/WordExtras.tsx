import { examplesOf, inflectionRows } from '../lib/inflection'
import type { Word } from '../types/word'

type WordExtrasProps = {
  word: Word
}

export function WordExtras({ word }: WordExtrasProps) {
  const rows = inflectionRows(word)
  const examples = examplesOf(word)
  const compound = word.compound

  if (rows.length === 0 && examples.length === 0 && !compound) {
    return null
  }

  return (
    <div className="word-extras">
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
      {examples.length > 0 ? (
        <ul className="examples">
          {examples.map((example) => (
            <li key={example.sv}>
              <strong>{example.sv}</strong>
              <span>{example.zh}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
