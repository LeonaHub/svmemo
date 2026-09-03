import { Rating, type Grade } from 'ts-fsrs'
import { db } from './index'
import { asDate, localDateString, startOfLocalDay, startOfNextLocalDay } from '../lib/date'
import {
  isDueReview,
  newCardRecord,
  PROGRESS_CARD_TYPE,
  retrievability,
  schedule,
} from '../lib/fsrs'
import {
  buildQuizletQueue,
  buildReviewRounds,
  planDailyQueue,
  shuffle,
  type SessionKind,
} from '../lib/queue'
import {
  buildSentenceQueue,
  unclearedExamples,
  type SentenceItem,
} from '../lib/sentence-drill'
import { listWordMarks, getWordMark, setWordMark } from './marks'
import { listClearedSentenceIds, markSentenceCleared } from './sentences'
import { repairMasteredSchedules } from './mastery'
import {
  A1_CORE_DECK_ID,
  DEFAULT_SETTINGS,
  type CardType,
  type SavedCard,
  type Settings,
} from '../types/progress'
import type { Word } from '../types/word'

export type { SentenceItem } from '../lib/sentence-drill'

export type DueReviewRow = {
  card: SavedCard
  word: Word
  starred: boolean
  mastered: boolean
  dueNow: boolean
  when: string
}

export type TodayOverview = {
  settings: Settings
  dueCount: number
  newCount: number
  learnedCount: number
  reviewableCount: number
  unlearnedCount: number
  wordCount: number
  wordsToday: number
  masteredCount: number
  masteredDueCount: number
  starredCount: number
  sentenceCount: number
  starredSentenceCount: number
}

export type StudyItem = {
  card: SavedCard
  word: Word
  mode: CardType
  kind: SessionKind
  round: number
  roundIndex: number
  roundTotal: number
}

const MAX_REQUEUES = 2

async function loadWordMap(
  ids: readonly string[],
): Promise<Map<string, Word>> {
  const unique = [...new Set(ids)]
  if (unique.length === 0) {
    return new Map()
  }
  const rows = await db.words.bulkGet(unique)
  const map = new Map<string, Word>()
  for (const word of rows) {
    if (word) {
      map.set(word.id, word)
    }
  }
  return map
}

export function shouldRequeue(rating: Grade, alreadyRequeued: number): boolean {
  if (alreadyRequeued >= MAX_REQUEUES) {
    return false
  }
  return rating === Rating.Again || rating === Rating.Hard
}

export async function getSettings(): Promise<Settings> {
  const row = await db.settings.get('default')
  if (row) {
    return {
      ...DEFAULT_SETTINGS,
      ...row,
      recentMatchWordIds: row.recentMatchWordIds ?? [],
    }
  }
  await db.settings.put(DEFAULT_SETTINGS)
  return DEFAULT_SETTINGS
}

async function masteredWordIds(): Promise<Set<string>> {
  return new Set(
    (await listWordMarks())
      .filter((mark) => mark.mastered)
      .map((mark) => mark.wordId),
  )
}

export async function listUnlearnedWordIds(): Promise<string[]> {
  const [deckWords, cards, mastered] = await Promise.all([
    db.deckWords.where('deckId').equals(A1_CORE_DECK_ID).toArray(),
    db.cards.toArray(),
    masteredWordIds(),
  ])
  const learned = new Set(cards.map((card) => card.wordId))
  return deckWords
    .map((row) => row.wordId)
    .filter((wordId) => !learned.has(wordId) && !mastered.has(wordId))
}

export async function enrollWords(
  wordIds: readonly string[],
  now = new Date(),
): Promise<number> {
  const unique = [...new Set(wordIds)]
  let added = 0

  await db.transaction('rw', [db.cards, db.wordMarks], async () => {
    for (const wordId of unique) {
      const existing = await db.cards
        .where('[wordId+cardType]')
        .equals([wordId, PROGRESS_CARD_TYPE])
        .first()
      if (existing) {
        continue
      }
      const id = await db.cards.add(newCardRecord(wordId, now))
      if (typeof id !== 'number') {
        throw new Error('无法加入学习计划')
      }
      added += 1
      await setWordMark(wordId, { mastered: false })
    }
  })

  return added
}

export async function unenrollWords(wordIds: readonly string[]): Promise<number> {
  const unique = [...new Set(wordIds)]
  let removed = 0

  await db.transaction('rw', [db.cards, db.reviewLogs], async () => {
    for (const wordId of unique) {
      const cards = await db.cards.where('wordId').equals(wordId).toArray()
      if (cards.length === 0) {
        continue
      }
      const cardIds = cards
        .map((card) => card.id)
        .filter((id): id is number => typeof id === 'number')
      await db.cards.bulkDelete(cardIds)
      await db.reviewLogs.where('wordId').equals(wordId).delete()
      removed += 1
    }
  })

  return removed
}

export async function getTodayOverview(now = new Date()): Promise<TodayOverview> {
  await repairMasteredSchedules(now)
  const dayStart = startOfLocalDay(now)
  const dayEnd = startOfNextLocalDay(now)

  const [settings, cards, unlearnedWordIds, wordCount, todayLogs, marks, todayStats, cleared] =
    await Promise.all([
      getSettings(),
      db.cards.toArray(),
      listUnlearnedWordIds(),
      db.words.count(),
      db.reviewLogs
        .where('reviewedAt')
        .between(dayStart, dayEnd, true, false)
        .toArray(),
      listWordMarks(),
      db.dailyStats.get(localDateString(now)),
      listClearedSentenceIds(),
    ])

  const mastered = new Set(
    marks.filter((mark) => mark.mastered).map((mark) => mark.wordId),
  )
  const saved = cards.filter((card): card is SavedCard => Boolean(card.id))
  const active = saved.filter((card) => !mastered.has(card.wordId))
  const masteredCards = saved.filter((card) => mastered.has(card.wordId))
  const dueCount = active.filter((card) => isDueReview(card, now)).length
  const masteredDueCount = masteredCards.filter((card) =>
    isDueReview(card, now),
  ).length
  const reviewableCount = active.filter((card) => card.reps > 0).length
  const newPoolIds = active
    .filter((card) => card.reps === 0)
    .map((card) => card.wordId)
  const { newWordIds } = planDailyQueue(newPoolIds)
  const starredIds = new Set(
    marks.filter((mark) => mark.starred).map((mark) => mark.wordId),
  )
  const byId = await loadWordMap([
    ...active.map((card) => card.wordId),
    ...starredIds,
  ])
  const remainingExamples = (wordId: string) => {
    const word = byId.get(wordId)
    return word ? unclearedExamples(word, cleared).length : 0
  }

  return {
    settings,
    dueCount,
    newCount: newWordIds.length,
    learnedCount: active.length,
    reviewableCount,
    unlearnedCount: unlearnedWordIds.length,
    wordCount,
    wordsToday: new Set([
      ...todayLogs.map((log) => log.wordId),
      ...(todayStats?.matchedWordIds ?? []),
    ]).size,
    masteredCount: mastered.size,
    masteredDueCount,
    starredCount: starredIds.size,
    sentenceCount: active.reduce(
      (sum, card) => sum + remainingExamples(card.wordId),
      0,
    ),
    starredSentenceCount: [...starredIds].reduce(
      (sum, wordId) => sum + remainingExamples(wordId),
      0,
    ),
  }
}

async function requireSavedCard(id: number): Promise<SavedCard> {
  const card = await db.cards.get(id)
  if (!card?.id) {
    throw new Error('找不到这张卡片')
  }
  return card as SavedCard
}

async function specsToItems(
  specs: ReturnType<typeof buildQuizletQueue>,
): Promise<StudyItem[]> {
  const words = await db.words.bulkGet(specs.map((spec) => spec.card.wordId))
  return specs.flatMap((spec, index) => {
    const word = words[index]
    if (!word) {
      return []
    }
    return [
      {
        card: spec.card,
        word,
        mode: spec.mode,
        kind: spec.kind,
        round: spec.round,
        roundIndex: spec.roundIndex,
        roundTotal: spec.roundTotal,
      },
    ]
  })
}

async function savedCards(): Promise<SavedCard[]> {
  return (await db.cards.toArray()).filter(
    (card): card is SavedCard => Boolean(card.id),
  )
}

export async function startTodaySession(now = new Date()): Promise<StudyItem[]> {
  await repairMasteredSchedules(now)
  const mastered = await masteredWordIds()
  const saved = await savedCards()
  const active = saved.filter((card) => !mastered.has(card.wordId))
  const dueCards = active
    .filter((card) => isDueReview(card, now))
    .sort((left, right) => asDate(left.due).getTime() - asDate(right.due).getTime())
  const masteredDueCards = sortByForgetting(
    saved.filter(
      (card) => mastered.has(card.wordId) && isDueReview(card, now),
    ),
    now,
  )
  const newPool = active.filter((card) => card.reps === 0)
  const catalog = await db.words.bulkGet(newPool.map((card) => card.wordId))
  const rankByWordId = new Map(
    catalog.flatMap((word) => (word ? [[word.id, word.rank ?? 50_000] as const] : [])),
  )
  newPool.sort((left, right) => {
    const rankDelta =
      (rankByWordId.get(left.wordId) ?? 50_000) -
      (rankByWordId.get(right.wordId) ?? 50_000)
    if (rankDelta !== 0) {
      return rankDelta
    }
    return left.id - right.id
  })
  const { newWordIds } = planDailyQueue(newPool.map((card) => card.wordId))
  const newCards = newPool.slice(0, newWordIds.length)
  return specsToItems(buildQuizletQueue(dueCards, newCards, masteredDueCards))
}

function sortByForgetting<T extends SavedCard>(cards: readonly T[], now: Date): T[] {
  return [...cards].sort((left, right) => {
    const delta = retrievability(left, now) - retrievability(right, now)
    if (delta !== 0) {
      return delta
    }
    return asDate(left.due).getTime() - asDate(right.due).getTime()
  })
}

function reviewWhen(card: SavedCard, now: Date): { dueNow: boolean; when: string } {
  if (isDueReview(card, now)) {
    return { dueNow: true, when: '到期' }
  }
  const dueAt = asDate(card.due)
  if (dueAt.getTime() <= now.getTime()) {
    return { dueNow: true, when: '到期' }
  }
  const days = Math.round(
    (startOfLocalDay(dueAt).getTime() - startOfLocalDay(now).getTime()) /
      86_400_000,
  )
  if (days <= 0) {
    return { dueNow: false, when: '稍后' }
  }
  if (days === 1) {
    return { dueNow: false, when: '明天' }
  }
  return { dueNow: false, when: `${days}天后` }
}

export async function listDueReviews(now = new Date()): Promise<DueReviewRow[]> {
  await repairMasteredSchedules(now)
  const [saved, marks] = await Promise.all([savedCards(), listWordMarks()])
  const starred = new Set(
    marks.filter((mark) => mark.starred).map((mark) => mark.wordId),
  )
  const mastered = new Set(
    marks.filter((mark) => mark.mastered).map((mark) => mark.wordId),
  )
  const learned = saved.filter((card) => card.reps > 0)
  const byId = await loadWordMap(learned.map((card) => card.wordId))
  const due = sortByForgetting(
    learned.filter(
      (card) => !mastered.has(card.wordId) && isDueReview(card, now),
    ),
    now,
  )
  const masteredDue = sortByForgetting(
    learned.filter(
      (card) => mastered.has(card.wordId) && isDueReview(card, now),
    ),
    now,
  )
  const later = sortByForgetting(
    learned.filter((card) => !isDueReview(card, now)),
    now,
  )
  return [...due, ...masteredDue, ...later].flatMap((card) => {
    const word = byId.get(card.wordId)
    if (!word) {
      return []
    }
    const { dueNow, when } = reviewWhen(card, now)
    return [
      {
        card,
        word,
        starred: starred.has(word.id),
        mastered: mastered.has(word.id),
        dueNow,
        when,
      },
    ]
  })
}

export async function startDueSession(now = new Date()): Promise<StudyItem[]> {
  const rows = await listDueReviews(now)
  const dueCards = rows
    .filter((row) => row.dueNow && !row.mastered)
    .map((row) => row.card)
  const masteredDueCards = rows
    .filter((row) => row.dueNow && row.mastered)
    .map((row) => row.card)
  return specsToItems(buildQuizletQueue(dueCards, [], masteredDueCards))
}

export async function startStarredSession(): Promise<StudyItem[]> {
  const starredIds = (await listWordMarks())
    .filter((mark) => mark.starred)
    .map((mark) => mark.wordId)
  if (starredIds.length === 0) {
    return []
  }
  await enrollWords(starredIds)
  const saved = (await db.cards.toArray()).filter(
    (card): card is SavedCard =>
      Boolean(card.id) && starredIds.includes(card.wordId),
  )
  return specsToItems(buildReviewRounds(shuffle(saved)))
}

export async function startSentenceSession(
  pool: 'plan' | 'starred' = 'plan',
): Promise<SentenceItem[]> {
  const [cards, marks, cleared] = await Promise.all([
    db.cards.toArray(),
    listWordMarks(),
    listClearedSentenceIds(),
  ])
  const mastered = new Set(
    marks.filter((mark) => mark.mastered).map((mark) => mark.wordId),
  )
  const starred = new Set(
    marks.filter((mark) => mark.starred).map((mark) => mark.wordId),
  )
  const enrolled = new Set(cards.map((card) => card.wordId))
  const byId = await loadWordMap(
    pool === 'starred' ? [...starred] : [...enrolled],
  )
  const source = [...byId.values()].filter((word) => {
    if (unclearedExamples(word, cleared).length === 0) {
      return false
    }
    if (pool === 'starred') {
      return starred.has(word.id)
    }
    return enrolled.has(word.id) && !mastered.has(word.id)
  })
  return buildSentenceQueue(source, undefined, cleared)
}

export { markSentenceCleared }

export async function recordSentenceMiss(
  wordId: string,
  now = new Date(),
): Promise<void> {
  await setWordMark(wordId, { starred: true, mastered: false }, now)
  await enrollWords([wordId], now)
  const card = await db.cards
    .where('[wordId+cardType]')
    .equals([wordId, PROGRESS_CARD_TYPE])
    .first()
  if (!card?.id) {
    throw new Error('找不到这张卡片')
  }
  await submitReview(card as SavedCard, Rating.Again, now)
}

export async function submitReview(
  card: SavedCard,
  rating: Grade,
  now = new Date(),
): Promise<SavedCard> {
  const wasNew = card.reps === 0
  const { next, dueBefore } = schedule(card, rating, now)

  await db.transaction(
    'rw',
    [db.cards, db.reviewLogs, db.dailyStats, db.wordMarks],
    async () => {
      await db.cards.update(card.id, next)
      await db.reviewLogs.add({
        cardId: card.id,
        wordId: card.wordId,
        rating,
        reviewedAt: now,
        dueBefore,
        dueAfter: next.due,
      })

      if (rating === Rating.Again) {
        const mark = await getWordMark(card.wordId)
        if (mark.mastered) {
          await setWordMark(card.wordId, { mastered: false }, now)
        }
      }

      const date = localDateString(now)
      const stats = await db.dailyStats.get(date)
      if (!stats) {
        await db.dailyStats.add({
          date,
          newCount: wasNew ? 1 : 0,
          reviewCount: wasNew ? 0 : 1,
          completed: false,
          matchedWordIds: [],
        })
      } else {
        await db.dailyStats.update(date, {
          newCount: stats.newCount + (wasNew ? 1 : 0),
          reviewCount: stats.reviewCount + (wasNew ? 0 : 1),
        })
      }
    },
  )

  return requireSavedCard(card.id)
}

export async function markTodayComplete(now = new Date()): Promise<void> {
  const date = localDateString(now)
  const stats = await db.dailyStats.get(date)
  if (!stats) {
    await db.dailyStats.add({
      date,
      newCount: 0,
      reviewCount: 0,
      completed: true,
      matchedWordIds: [],
    })
    return
  }
  await db.dailyStats.update(date, { completed: true })
}
