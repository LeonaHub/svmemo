import type { Example, Word } from '../types/word'

export type InflectRow = {
  label: string
  value: string
}

export function inflectionRows(word: Word): InflectRow[] {
  const forms = word.forms
  if (word.pos === 'noun') {
    const rows: InflectRow[] = []
    if (word.gender) {
      rows.push({
        label: '不定单数',
        value: `${word.gender} ${word.lemma}`,
      })
    }
    if (forms?.definite) {
      rows.push({ label: '定式单数', value: forms.definite })
    }
    if (forms?.plural) {
      rows.push({ label: '不定复数', value: forms.plural })
    }
    if (forms?.definitePlural) {
      rows.push({ label: '定式复数', value: forms.definitePlural })
    }
    return rows
  }

  if (word.pos === 'verb') {
    const rows: InflectRow[] = [{ label: '原形', value: word.lemma }]
    if (forms?.present) {
      rows.push({ label: '现在时', value: forms.present })
    }
    if (forms?.past) {
      rows.push({ label: '过去时', value: forms.past })
    }
    if (forms?.supine) {
      rows.push({ label: '完成时', value: forms.supine })
    }
    if (forms?.imperative) {
      rows.push({ label: '命令式', value: forms.imperative })
    }
    return rows
  }

  if (word.pos === 'adj' || (word.pos === 'pron' && (forms?.neuter || forms?.plural))) {
    const rows: InflectRow[] = [{ label: 'en 形', value: word.lemma }]
    if (forms?.neuter) {
      rows.push({ label: 'ett 形（加 t）', value: forms.neuter })
    }
    if (forms?.definite && forms.definite !== forms.plural) {
      rows.push({ label: '定式单数', value: forms.definite })
    }
    if (forms?.plural) {
      const label =
        forms.definite && forms.definite !== forms.plural
          ? '复数'
          : '复数/定式（加 a）'
      rows.push({ label, value: forms.plural })
    }
    if (forms?.comparative) {
      rows.push({ label: '比较级', value: forms.comparative })
    }
    if (forms?.superlative) {
      rows.push({ label: '最高级', value: forms.superlative })
    }
    return rows
  }

  return []
}

export function examplesOf(word: Word): Example[] {
  return word.examples ?? []
}

export function formsSummary(word: Word): string | null {
  const values = inflectionRows(word).map((row) => row.value)
  return values.length > 0 ? values.join(' · ') : null
}

export function compoundSummary(word: Word): string | null {
  const compound = word.compound
  if (!compound) {
    return null
  }
  const parts = compound.parts.map((part) => `${part.sv}（${part.zh}）`).join(' + ')
  return `${parts} → ${compound.together}`
}
