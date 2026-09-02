import { db } from './index'
import { graduateMasteredWord } from './mastery'
import type { WordMark } from '../types/progress'

export function emptyMark(wordId: string): WordMark {
  return {
    wordId,
    mastered: false,
    starred: false,
  }
}

export async function getWordMark(wordId: string): Promise<WordMark> {
  return (await db.wordMarks.get(wordId)) ?? emptyMark(wordId)
}

export async function listWordMarks(): Promise<WordMark[]> {
  return db.wordMarks.toArray()
}

export async function setWordMark(
  wordId: string,
  patch: { mastered?: boolean; starred?: boolean },
  now = new Date(),
): Promise<WordMark> {
  const current = await getWordMark(wordId)
  const next: WordMark = { ...current }

  if (patch.mastered !== undefined) {
    next.mastered = patch.mastered
    next.masteredAt = patch.mastered ? now : undefined
  }
  if (patch.starred !== undefined) {
    next.starred = patch.starred
    next.starredAt = patch.starred ? now : undefined
  }

  if (!next.mastered && !next.starred) {
    await db.wordMarks.delete(wordId)
    return emptyMark(wordId)
  }

  await db.wordMarks.put(next)
  if (patch.mastered === true && !current.mastered) {
    await graduateMasteredWord(wordId, now)
  }
  return next
}

export async function toggleStarred(wordId: string): Promise<WordMark> {
  const current = await getWordMark(wordId)
  return setWordMark(wordId, { starred: !current.starred })
}

export async function toggleMastered(wordId: string): Promise<WordMark> {
  const current = await getWordMark(wordId)
  return setWordMark(wordId, { mastered: !current.mastered })
}
