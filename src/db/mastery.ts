import { db } from './index'
import { addLocalDays, asDate, startOfLocalDay } from '../lib/date'
import {
  graduateMasteredProgress,
  MASTERED_MIN_DAYS,
  newCardRecord,
  PROGRESS_CARD_TYPE,
} from '../lib/fsrs'
import { State } from 'ts-fsrs'
import type { SavedCard, WordMark } from '../types/progress'

let repaired = false

async function savedCardFor(wordId: string): Promise<SavedCard | undefined> {
  const card = await db.cards
    .where('[wordId+cardType]')
    .equals([wordId, PROGRESS_CARD_TYPE])
    .first()
  if (!card?.id) {
    return undefined
  }
  return card as SavedCard
}

export async function graduateMasteredWord(
  wordId: string,
  now = new Date(),
): Promise<void> {
  let card = await savedCardFor(wordId)
  if (!card) {
    const id = await db.cards.add(newCardRecord(wordId, now))
    if (typeof id !== 'number') {
      throw new Error('无法为已掌握的词建立卡片')
    }
    const created = await db.cards.get(id)
    if (!created?.id) {
      throw new Error('无法为已掌握的词建立卡片')
    }
    card = created as SavedCard
  }
  await db.cards.update(card.id, graduateMasteredProgress(card, now))
}

function repairProgress(
  card: SavedCard,
  mark: WordMark,
  now: Date,
): ReturnType<typeof graduateMasteredProgress> | null {
  const anchor = mark.masteredAt
    ? asDate(mark.masteredAt)
    : card.last_review
      ? asDate(card.last_review)
      : now
  const floor = addLocalDays(startOfLocalDay(anchor), MASTERED_MIN_DAYS)
  const currentDue = asDate(card.due)
  const due = currentDue.getTime() >= floor.getTime() ? currentDue : floor
  const learning =
    card.reps === 0 ||
    card.state === State.New ||
    card.state === State.Learning ||
    card.state === State.Relearning
  const lastReview = card.last_review ? asDate(card.last_review) : undefined
  const keepLastReview = lastReview && lastReview.getTime() >= anchor.getTime()
  const needsWrite =
    learning ||
    due.getTime() !== currentDue.getTime() ||
    card.stability < MASTERED_MIN_DAYS ||
    card.scheduled_days < MASTERED_MIN_DAYS

  if (!needsWrite) {
    return null
  }

  return {
    ...graduateMasteredProgress(card, anchor),
    due,
    last_review: keepLastReview ? card.last_review : anchor,
    stability: Math.max(card.stability, MASTERED_MIN_DAYS),
    scheduled_days: Math.max(card.scheduled_days, MASTERED_MIN_DAYS),
  }
}

export async function repairMasteredSchedules(
  now = new Date(),
): Promise<void> {
  if (repaired) {
    return
  }
  const marks = (await db.wordMarks.toArray()).filter((mark) => mark.mastered)
  for (const mark of marks) {
    const card = await savedCardFor(mark.wordId)
    if (!card) {
      await graduateMasteredWord(mark.wordId, mark.masteredAt ?? now)
      continue
    }
    const next = repairProgress(card, mark, now)
    if (next) {
      await db.cards.update(card.id, next)
    }
  }
  repaired = true
}
