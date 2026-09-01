import { db } from './index'
import { sentenceProgressId } from '../lib/sentence-drill'
import type { ClearedSentence } from '../types/progress'

export async function listClearedSentenceIds(): Promise<Set<string>> {
  return new Set((await db.clearedSentences.toArray()).map((row) => row.id))
}

export async function markSentenceCleared(
  wordId: string,
  exampleSv: string,
  now = new Date(),
): Promise<void> {
  const id = sentenceProgressId(wordId, exampleSv)
  const row: ClearedSentence = {
    id,
    wordId,
    exampleSv,
    clearedAt: now,
  }
  await db.clearedSentences.put(row)
}
