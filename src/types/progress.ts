import { z } from 'zod'
import { cefrSchema } from './word'

export const cardTypeSchema = z.enum(['recognition', 'spelling'])

export const deckSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  cefr: cefrSchema.optional(),
  description: z.string().min(1).optional(),
})

export const deckWordSchema = z.object({
  id: z.number().int().optional(),
  deckId: z.string().min(1),
  wordId: z.string().min(1),
})

/** 一张 FSRS 卡片。同一单词以后可以拆成认识卡和拼写卡。 */
export const cardRecordSchema = z.object({
  id: z.number().int().optional(),
  wordId: z.string().min(1),
  cardType: cardTypeSchema,
  due: z.date(),
  stability: z.number(),
  difficulty: z.number(),
  elapsed_days: z.number(),
  scheduled_days: z.number(),
  learning_steps: z.number().int(),
  reps: z.number().int(),
  lapses: z.number().int(),
  /** ts-fsrs State：0 New, 1 Learning, 2 Review, 3 Relearning */
  state: z.number().int().min(0).max(3),
  last_review: z.date().optional(),
})

export const reviewLogSchema = z.object({
  id: z.number().int().optional(),
  cardId: z.number().int(),
  wordId: z.string().min(1),
  /** ts-fsrs Rating：1 Again, 2 Hard, 3 Good, 4 Easy */
  rating: z.number().int().min(1).max(4),
  reviewedAt: z.date(),
  dueBefore: z.date(),
  dueAfter: z.date(),
})

export const settingsSchema = z.object({
  id: z.literal('default'),
  dailyLimit: z.number().int().positive(),
  maxNewPerDay: z.number().int().nonnegative(),
  spellingRatio: z.number().min(0).max(1),
})

export const dailyStatsSchema = z.object({
  /** 本地日历日，YYYY-MM-DD */
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  newCount: z.number().int().nonnegative(),
  reviewCount: z.number().int().nonnegative(),
  completed: z.boolean(),
})

export type CardType = z.infer<typeof cardTypeSchema>
export type Deck = z.infer<typeof deckSchema>
export type DeckWord = z.infer<typeof deckWordSchema>
export type CardRecord = z.infer<typeof cardRecordSchema>
export type ReviewLogRecord = z.infer<typeof reviewLogSchema>
export type Settings = z.infer<typeof settingsSchema>
export type DailyStats = z.infer<typeof dailyStatsSchema>

export const DEFAULT_SETTINGS: Settings = {
  id: 'default',
  dailyLimit: 40,
  maxNewPerDay: 15,
  spellingRatio: 0.5,
}

export const A1_CORE_DECK_ID = 'a1-core'
