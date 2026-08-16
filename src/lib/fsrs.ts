import {
  createEmptyCard,
  fsrs,
  State,
  type Card,
  type Grade,
} from 'ts-fsrs'
import { asDate, startOfNextLocalDay } from './date'
import type { CardRecord, CardType } from '../types/progress'

const scheduler = fsrs({
  request_retention: 0.9,
  enable_fuzz: true,
  enable_short_term: true,
  learning_steps: ['1m', '10m'],
  relearning_steps: ['10m'],
})

/** MVP 一词一卡，题型在学习时再选，进度都记在这张卡上。 */
export const PROGRESS_CARD_TYPE: CardType = 'recognition'

/**
 * 复习态按本地自然日到期（接近墨墨 / Anki）：今天下午才到点的词，早上也算今日待学。
 * 学习中 / 重学中仍按精确时刻，好让 1m / 10m 步先等一等。
 */
export function isDueReview(
  card: Pick<CardRecord, 'reps' | 'due' | 'state'>,
  now: Date,
): boolean {
  if (card.reps <= 0) {
    return false
  }
  const due = asDate(card.due).getTime()
  if (card.state === State.Learning || card.state === State.Relearning) {
    return due <= now.getTime()
  }
  return due < startOfNextLocalDay(now).getTime()
}

function toFsrsCard(record: CardRecord): Card {
  return {
    due: asDate(record.due),
    stability: record.stability,
    difficulty: record.difficulty,
    elapsed_days: record.elapsed_days,
    scheduled_days: record.scheduled_days,
    learning_steps: record.learning_steps,
    reps: record.reps,
    lapses: record.lapses,
    state: record.state as State,
    last_review: record.last_review
      ? asDate(record.last_review)
      : undefined,
  }
}

function fromFsrsCard(card: Card): Omit<
  CardRecord,
  'id' | 'wordId' | 'cardType'
> {
  return {
    due: card.due,
    stability: card.stability,
    difficulty: card.difficulty,
    elapsed_days: card.elapsed_days,
    scheduled_days: card.scheduled_days,
    learning_steps: card.learning_steps,
    reps: card.reps,
    lapses: card.lapses,
    state: card.state,
    last_review: card.last_review,
  }
}

export function newCardRecord(
  wordId: string,
  now: Date,
): Omit<CardRecord, 'id'> {
  return {
    wordId,
    cardType: PROGRESS_CARD_TYPE,
    ...fromFsrsCard(createEmptyCard(now)),
  }
}

export function retrievability(
  card: Pick<CardRecord, 'stability' | 'last_review' | 'due'>,
  now = new Date(),
): number {
  try {
    const last = card.last_review ? asDate(card.last_review) : asDate(card.due)
    const elapsedDays = Math.max(
      0,
      (now.getTime() - last.getTime()) / 86_400_000,
    )
    const value = scheduler.forgetting_curve(
      Number.isFinite(elapsedDays) ? elapsedDays : 0,
      Math.max(card.stability || 0.01, 0.01),
    )
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value
    }
  } catch {
    // 旧卡或缺字段时退回 0，让配对仍能按到期日排序。
  }
  return 0
}

export function schedule(
  record: CardRecord,
  rating: Grade,
  now: Date,
): { next: Omit<CardRecord, 'id' | 'wordId' | 'cardType'>; dueBefore: Date } {
  const { card } = scheduler.next(toFsrsCard(record), now, rating)
  return {
    next: fromFsrsCard(card),
    dueBefore: asDate(record.due),
  }
}
