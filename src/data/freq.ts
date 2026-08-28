import type { Compound, Word } from '../types/word'

export const FREQUENCY_GROUP_SIZE = 50
export const FREQUENCY_GROUP_COUNT = 20
export const FREQUENCY_RANK_MAX = FREQUENCY_GROUP_SIZE * FREQUENCY_GROUP_COUNT

export function frequencyGroup(rank: number | undefined): number | null {
  if (!rank || rank < 1 || rank > FREQUENCY_RANK_MAX) {
    return null
  }
  return Math.ceil(rank / FREQUENCY_GROUP_SIZE)
}

export function frequencyGroupRange(group: number): { from: number; to: number } {
  const from = (group - 1) * FREQUENCY_GROUP_SIZE + 1
  return { from, to: from + FREQUENCY_GROUP_SIZE - 1 }
}

export function freq(word: Word, rank: number, compound?: Compound): Word {
  return {
    ...word,
    cefr: 'A1',
    rank,
    ...(compound ? { compound } : {}),
  }
}

export function c(
  parts: readonly (readonly [string, string])[],
  together: string,
): Compound {
  return {
    parts: parts.map(([sv, zh]) => ({ sv, zh })),
    together,
  }
}
