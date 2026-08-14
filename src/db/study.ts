import { Rating, type Grade } from 'ts-fsrs'
import { db } from './index'
import { localDateString, startOfLocalDay } from '../lib/date'
import { newCardRecord, PROGRESS_CARD_TYPE, schedule } from '../lib/fsrs'
import {
  buildQuizletQueue,
  buildReviewRounds,
  planDailyQueue,
  shuffle,
  type SessionKind,
} from '../lib/queue'
import {
  A1_CORE_DECK_ID,
  DEFAULT_SETTINGS,
  type CardType,
  type SavedCard,
  type Settings,
} from '../types/progress'
import type { Word } from '../types/word'

export type TodayOverview = {
  settings: Settings
  dueCount: number
  newCount: number
  learnedCount: number
  reviewableCount: number
  unlearnedCount: number
  wordCount: number
  wordsToday: number
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

export function shouldRequeue(rating: Grade, alreadyRequeued: number): boolean {
  if (alreadyRequeued >= MAX_REQUEUES) {
    return false
  }
  return rating === Rating.Again || rating === Rating.Hard
}

export async function getSettings(): Promise<Settings> {
  const row = await db.settings.get('default')
  if (row) {
    return row
  }
  await db.settings.put(DEFAULT_SETTINGS)
  return DEFAULT_SETTINGS
}

export async function listUnlearnedWordIds(): Promise<string[]> {
  const [deckWords, cards] = await Promise.all([
    db.deckWords.where('deckId').equals(A1_CORE_DECK_ID).toArray(),
    db.cards.toArray(),
  ])
  const learned = new Set(cards.map((card) => card.wordId))
  return deckWords
    .map((row) => row.wordId)
    .filter((wordId) => !learned.has(wordId))
}

export async function enrollWords(
  wordIds: readonly string[],
  now = new Date(),
): Promise<number> {
  const unique = [...new Set(wordIds)]
  let added = 0

  await db.transaction('rw', db.cards, async () => {
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

function isDueReview(card: SavedCard, now: Date): boolean {
  return card.reps > 0 && card.due.getTime() <= now.getTime()
}

export async function getTodayOverview(now = new Date()): Promise<TodayOverview> {
  const dayStart = startOfLocalDay(now)
  const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000)

  const [settings, cards, unlearnedWordIds, wordCount, todayLogs] =
    await Promise.all([
      getSettings(),
      db.cards.toArray(),
      listUnlearnedWordIds(),
      db.words.count(),
      db.reviewLogs
        .where('reviewedAt')
        .between(dayStart, dayEnd, true, false)
        .toArray(),
    ])

  const saved = cards.filter((card): card is SavedCard => Boolean(card.id))
  const dueCount = saved.filter((card) => isDueReview(card, now)).length
  const reviewableCount = saved.filter((card) => card.reps > 0).length
  const newPoolIds = saved
    .filter((card) => card.reps === 0)
    .map((card) => card.wordId)
  const { newWordIds } = planDailyQueue(settings, dueCount, newPoolIds)

  return {
    settings,
    dueCount,
    newCount: newWordIds.length,
    learnedCount: saved.length,
    reviewableCount,
    unlearnedCount: unlearnedWordIds.length,
    wordCount,
    wordsToday: new Set(todayLogs.map((log) => log.wordId)).size,
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

export async function startTodaySession(now = new Date()): Promise<StudyItem[]> {
  const settings = await getSettings()
  const saved = (await db.cards.toArray()).filter(
    (card): card is SavedCard => Boolean(card.id),
  )
  const dueCards = saved
    .filter((card) => isDueReview(card, now))
    .sort((left, right) => left.due.getTime() - right.due.getTime())
  const newPool = saved
    .filter((card) => card.reps === 0)
    .sort((left, right) => left.id - right.id)
  const { newWordIds } = planDailyQueue(
    settings,
    dueCards.length,
    newPool.map((card) => card.wordId),
  )
  const newCards = newPool.slice(0, newWordIds.length)
  return specsToItems(buildQuizletQueue(dueCards, newCards))
}

export async function startReviewSession(): Promise<StudyItem[]> {
  const saved = (await db.cards.toArray()).filter(
    (card): card is SavedCard => Boolean(card.id),
  )
  const reviewable = saved.filter((card) => card.reps > 0)
  return specsToItems(buildReviewRounds(shuffle(reviewable)))
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
    [db.cards, db.reviewLogs, db.dailyStats],
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

      const date = localDateString(now)
      const stats = await db.dailyStats.get(date)
      if (!stats) {
        await db.dailyStats.add({
          date,
          newCount: wasNew ? 1 : 0,
          reviewCount: wasNew ? 0 : 1,
          completed: false,
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
    })
    return
  }
  await db.dailyStats.update(date, { completed: true })
}
