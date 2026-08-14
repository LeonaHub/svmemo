import { examplesOf, inflectionRows } from '../lib/inflection'
import type { Word } from '../types/word'

type WordExtrasProps = {
  word: Word
}

export function WordExtras({ word }: WordExtrasProps) {
  const rows = inflectionRows(word)
  const examples = examplesOf(word)

  if (rows.length === 0 && examples.length === 0) {
    return null
  }

  return (
    <div className="word-extras">
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
