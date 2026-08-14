import type { SavedCard, Settings } from '../types/progress'

export const ROUND_SIZE = 7

export type SessionKind = 'due' | 'learn' | 'round-review'

export type QueueSpec<T> = {
  card: T
  mode: 'recognition' | 'spelling'
  kind: SessionKind
  round: number
  roundIndex: number
  roundTotal: number
}

export function shuffle<T>(
  items: readonly T[],
  random: () => number = Math.random,
): T[] {
  const next = [...items]
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    const current = next[i]
    const swap = next[j]
    if (current === undefined || swap === undefined) {
      continue
    }
    next[i] = swap
    next[j] = current
  }
  return next
}

export function planDailyQueue(
  settings: Pick<Settings, 'dailyLimit' | 'maxNewPerDay'>,
  dueCount: number,
  unlearnedWordIds: readonly string[],
): { newWordIds: string[] } {
  const remaining = Math.max(0, settings.dailyLimit - dueCount)
  const newCount = Math.min(
    remaining,
    settings.maxNewPerDay,
    unlearnedWordIds.length,
  )
  return { newWordIds: unlearnedWordIds.slice(0, newCount) }
}

export function pickStudyMode(reps: number): 'recognition' | 'spelling' {
  return reps === 0 ? 'recognition' : 'spelling'
}

export function chunkRounds<T>(items: readonly T[], size = ROUND_SIZE): T[][] {
  const rounds: T[][] = []
  for (let index = 0; index < items.length; index += size) {
    rounds.push(items.slice(index, index + size))
  }
  return rounds
}

/** Quizlet 式：到期复习在前；新词每 7 个先学习再立刻拼写复习。 */
export function buildQuizletQueue(
  dueCards: readonly SavedCard[],
  newCards: readonly SavedCard[],
  roundSize = ROUND_SIZE,
): QueueSpec<SavedCard>[] {
  const queue: QueueSpec<SavedCard>[] = []

  dueCards.forEach((card, index) => {
    queue.push({
      card,
      mode: 'spelling',
      kind: 'due',
      round: 0,
      roundIndex: index + 1,
      roundTotal: dueCards.length,
    })
  })

  chunkRounds(newCards, roundSize).forEach((group, roundOffset) => {
    const round = roundOffset + 1
    group.forEach((card, index) => {
      queue.push({
        card,
        mode: 'recognition',
        kind: 'learn',
        round,
        roundIndex: index + 1,
        roundTotal: group.length,
      })
    })
    group.forEach((card, index) => {
      queue.push({
        card,
        mode: 'spelling',
        kind: 'round-review',
        round,
        roundIndex: index + 1,
        roundTotal: group.length,
      })
    })
  })

  return queue
}

export function buildReviewRounds(
  cards: readonly SavedCard[],
  roundSize = ROUND_SIZE,
): QueueSpec<SavedCard>[] {
  const queue: QueueSpec<SavedCard>[] = []
  chunkRounds(cards, roundSize).forEach((group, roundOffset) => {
    const round = roundOffset + 1
    group.forEach((card, index) => {
      queue.push({
        card,
        mode: 'spelling',
        kind: 'round-review',
        round,
        roundIndex: index + 1,
        roundTotal: group.length,
      })
    })
  })
  return queue
}

export function itemKicker(item: {
  kind: SessionKind
  roundIndex: number
  roundTotal: number
}): string {
  if (item.kind === 'due') {
    return `到期复习 ${item.roundIndex}/${item.roundTotal}`
  }
  if (item.kind === 'learn') {
    return `学习 ${item.roundIndex}/${item.roundTotal}`
  }
  return `复习 ${item.roundIndex}/${item.roundTotal}`
}
