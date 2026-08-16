import { POS_LABEL } from './pos'
import { chunkRounds, ROUND_SIZE, shuffle } from './queue'
import type { Example, Word } from '../types/word'

export type SentenceHint = {
  posLabel: string
  glossZh: string
  formLabel: string | null
  gender: 'en' | 'ett' | null
}

export type SentenceSegment =
  | { type: 'text'; text: string }
  | { type: 'blank'; text: string }

export type SentenceItem = {
  word: Word
  example: Example
  hints: SentenceHint[]
  segments: SentenceSegment[]
  round: number
  roundIndex: number
  roundTotal: number
}

type FormEntry = {
  label: string
  value: string
}

type Hit = {
  start: number
  end: number
  label: string
}

function normalizeForm(value: string): string {
  return value.normalize('NFC').trim().toLocaleLowerCase('sv-SE')
}

function isSwedishLetter(char: string | undefined): boolean {
  return Boolean(char && /^[a-zåäö]$/i.test(char))
}

function stripGenderPrefix(value: string): string {
  return value.replace(/^(en|ett)\s+/i, '').trim()
}

function isLemmaLabel(label: string): boolean {
  return (
    label === '词典形' ||
    label === '原形' ||
    label === '不定单数' ||
    label === 'en 形'
  )
}

function formEntries(word: Word): FormEntry[] {
  const forms = word.forms
  const entries: FormEntry[] = []

  function add(label: string, value: string | undefined) {
    if (!value) {
      return
    }
    const cleaned = stripGenderPrefix(value)
    entries.push({ label, value: cleaned })
    const first = cleaned.split(/\s+/)[0]
    if (first && first !== cleaned && first.length >= 3) {
      entries.push({ label, value: first })
    }
  }

  add('词典形', word.lemma)

  if (word.pos === 'noun') {
    add('不定单数', word.lemma)
    add('定式单数', forms?.definite)
    add('不定复数', forms?.plural)
    add('定式复数', forms?.definitePlural)
  } else if (word.pos === 'verb') {
    add('原形', word.lemma)
    add('现在时', forms?.present)
    add('过去时', forms?.past)
    add('完成时', forms?.supine)
    add('命令式', forms?.imperative)
  } else if (word.pos === 'adj' || word.pos === 'pron') {
    add('en 形', word.lemma)
    add('ett 形', forms?.neuter)
    add('定式单数', forms?.definite)
    add('复数/定式', forms?.plural)
    add('比较级', forms?.comparative)
    add('最高级', forms?.superlative)
  }

  return entries
}

function findWholeMatches(haystack: string, needle: string): number[] {
  if (!needle) {
    return []
  }
  const hay = haystack.toLocaleLowerCase('sv-SE')
  const needleNorm = needle.toLocaleLowerCase('sv-SE')
  const starts: number[] = []
  let from = 0
  while (from <= hay.length - needleNorm.length) {
    const at = hay.indexOf(needleNorm, from)
    if (at < 0) {
      break
    }
    const before = hay[at - 1]
    const after = hay[at + needleNorm.length]
    if (!isSwedishLetter(before) && !isSwedishLetter(after)) {
      starts.push(at)
    }
    from = at + 1
  }
  return starts
}

function letterTokens(haystack: string): { start: number; end: number }[] {
  const tokens: { start: number; end: number }[] = []
  let index = 0
  while (index < haystack.length) {
    if (!isSwedishLetter(haystack[index])) {
      index += 1
      continue
    }
    const start = index
    while (index < haystack.length && isSwedishLetter(haystack[index])) {
      index += 1
    }
    tokens.push({ start, end: index })
  }
  return tokens
}

function takeHits(haystack: string, candidates: Hit[]): Hit[] {
  const taken = Array.from({ length: haystack.length }, () => false)
  const hits: Hit[] = []
  const ordered = [...candidates].sort((left, right) => {
    if (left.start !== right.start) {
      return left.start - right.start
    }
    return right.end - right.start - (left.end - left.start)
  })

  for (const candidate of ordered) {
    let free = true
    for (let index = candidate.start; index < candidate.end; index += 1) {
      if (taken[index]) {
        free = false
        break
      }
    }
    if (!free) {
      continue
    }
    for (let index = candidate.start; index < candidate.end; index += 1) {
      taken[index] = true
    }
    hits.push(candidate)
  }

  hits.sort((left, right) => left.start - right.start)
  return hits
}

function locateTargetHits(example: Example, target: Word): Hit[] {
  const haystack = example.sv.normalize('NFC')
  const entries = formEntries(target).sort(
    (left, right) => normalizeForm(right.value).length - normalizeForm(left.value).length,
  )

  const whole: Hit[] = []
  for (const entry of entries) {
    const needle = normalizeForm(entry.value)
    if (!needle) {
      continue
    }
    for (const start of findWholeMatches(haystack, needle)) {
      whole.push({
        start,
        end: start + needle.length,
        label: entry.label,
      })
    }
  }

  const wholeHits = takeHits(haystack, whole)
  if (wholeHits.length > 0) {
    return wholeHits
  }

  const prefixed: Hit[] = []
  for (const token of letterTokens(haystack)) {
    const tokenText = haystack.slice(token.start, token.end).toLocaleLowerCase('sv-SE')
    for (const entry of entries) {
      const needle = normalizeForm(entry.value)
      if (needle.length < 3) {
        continue
      }
      let start = token.start
      if (tokenText === needle || tokenText.startsWith(needle)) {
        start = token.start
      } else if (needle.length >= 4 && tokenText.endsWith(needle) && tokenText.length > needle.length) {
        start = token.end - needle.length
      } else if (needle.length >= 4 && tokenText.startsWith(needle.slice(0, 4))) {
        start = token.start
      } else {
        continue
      }
      prefixed.push({
        start,
        end: token.end,
        label: entry.label,
      })
      break
    }
  }

  return takeHits(haystack, prefixed)
}

function segmentsFromHits(sv: string, hits: Hit[]): SentenceSegment[] {
  if (hits.length === 0) {
    return [{ type: 'blank', text: sv }]
  }

  const segments: SentenceSegment[] = []
  let cursor = 0
  for (const hit of hits) {
    if (hit.start > cursor) {
      segments.push({ type: 'text', text: sv.slice(cursor, hit.start) })
    }
    segments.push({ type: 'blank', text: sv.slice(hit.start, hit.end) })
    cursor = hit.end
  }
  if (cursor < sv.length) {
    segments.push({ type: 'text', text: sv.slice(cursor) })
  }
  return segments
}

function hintFromHit(target: Word, hit: Hit | undefined): SentenceHint {
  return {
    posLabel: POS_LABEL[target.pos],
    glossZh: target.glossZh,
    formLabel: hit && !isLemmaLabel(hit.label) ? hit.label : null,
    gender: target.gender ?? null,
  }
}

export function promptForExample(example: Example, target: Word): {
  hints: SentenceHint[]
  segments: SentenceSegment[]
} {
  const sv = example.sv.normalize('NFC')
  const hits = locateTargetHits(example, target)
  const hints: SentenceHint[] = []
  const seen = new Set<string>()
  for (const hit of hits) {
    const hint = hintFromHit(target, hit)
    const key = `${hint.formLabel ?? ''}`
    if (seen.has(key)) {
      continue
    }
    seen.add(key)
    hints.push(hint)
  }
  if (hints.length === 0) {
    hints.push(hintFromHit(target, undefined))
  }
  return {
    hints,
    segments: segmentsFromHits(sv, hits),
  }
}

export function clozeAnswer(segments: readonly SentenceSegment[]): string {
  return segments
    .filter((segment): segment is Extract<SentenceSegment, { type: 'blank' }> => segment.type === 'blank')
    .map((segment) => segment.text)
    .join(' ')
}

export function buildSentenceQueue(
  words: readonly Word[],
  roundSize = ROUND_SIZE,
): SentenceItem[] {
  const pairs = words.flatMap((word) =>
    (word.examples ?? []).map((example) => ({ word, example })),
  )
  const queue: SentenceItem[] = []
  chunkRounds(shuffle(pairs), roundSize).forEach((group, roundOffset) => {
    const round = roundOffset + 1
    group.forEach((pair, index) => {
      const prompt = promptForExample(pair.example, pair.word)
      queue.push({
        word: pair.word,
        example: pair.example,
        hints: prompt.hints,
        segments: prompt.segments,
        round,
        roundIndex: index + 1,
        roundTotal: group.length,
      })
    })
  })
  return queue
}

export function sentenceKicker(item: Pick<SentenceItem, 'roundIndex' | 'roundTotal'>): string {
  return `例句 ${item.roundIndex}/${item.roundTotal}`
}
