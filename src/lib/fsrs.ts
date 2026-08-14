import {
  createEmptyCard,
  fsrs,
  type Card,
  type Grade,
  type State,
} from 'ts-fsrs'
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

function toFsrsCard(record: CardRecord): Card {
  return {
    due: record.due,
    stability: record.stability,
    difficulty: record.difficulty,
    elapsed_days: record.elapsed_days,
    scheduled_days: record.scheduled_days,
    learning_steps: record.learning_steps,
    reps: record.reps,
    lapses: record.lapses,
    state: record.state as State,
    last_review: record.last_review,
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

export function schedule(
  record: CardRecord,
  rating: Grade,
  now: Date,
): { next: Omit<CardRecord, 'id' | 'wordId' | 'cardType'>; dueBefore: Date } {
  const { card } = scheduler.next(toFsrsCard(record), now, rating)
  return {
    next: fromFsrsCard(card),
    dueBefore: record.due,
  }
}
