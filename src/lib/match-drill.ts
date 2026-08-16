import { asDate } from './date'
import { retrievability } from './fsrs'
import { shuffle } from './queue'
import type { SavedCard } from '../types/progress'
import type { Word } from '../types/word'

export const MATCH_PAIR_COUNT = 12

export type MatchPair = {
  card: SavedCard
  word: Word
}

export type MatchBubble = {
  id: string
  wordId: string
  side: 'sv' | 'zh'
  text: string
}

export function pickAtRiskCards<T extends SavedCard>(
  cards: readonly T[],
  now: Date,
  limit = MATCH_PAIR_COUNT,
  skipWordIds: readonly string[] = [],
): T[] {
  const ranked = [...cards]
    .filter((card) => card.reps > 0)
    .sort((left, right) => {
      const delta = retrievability(left, now) - retrievability(right, now)
      if (delta !== 0) {
        return delta
      }
      return asDate(left.due).getTime() - asDate(right.due).getTime()
    })

  const unique: T[] = []
  const seen = new Set<string>()
  for (const card of ranked) {
    if (seen.has(card.wordId)) {
      continue
    }
    seen.add(card.wordId)
    unique.push(card)
  }

  const skipOrder = new Map(skipWordIds.map((wordId, index) => [wordId, index]))
  const fresh: T[] = []
  const skipped: T[] = []
  for (const card of unique) {
    if (skipOrder.has(card.wordId)) {
      skipped.push(card)
    } else {
      fresh.push(card)
    }
  }
  skipped.sort(
    (left, right) =>
      (skipOrder.get(left.wordId) ?? 0) - (skipOrder.get(right.wordId) ?? 0),
  )

  return [...fresh, ...skipped].slice(0, limit)
}

export function buildMatchBubbles(
  words: readonly Word[],
  random: () => number = Math.random,
): MatchBubble[] {
  const bubbles: MatchBubble[] = words.flatMap((word) => [
    {
      id: `${word.id}__sv`,
      wordId: word.id,
      side: 'sv',
      text: word.lemma,
    },
    {
      id: `${word.id}__zh`,
      wordId: word.id,
      side: 'zh',
      text: word.glossZh,
    },
  ])
  return shuffle(bubbles, random)
}
