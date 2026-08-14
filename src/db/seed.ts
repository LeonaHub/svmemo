import a1Core from '../data/a1-core.json'
import {
  A1_CORE_DECK_ID,
  DEFAULT_SETTINGS,
} from '../types/progress'
import { wordListSchema } from '../types/word'
import { db } from './index'

export type SeedResult = {
  seeded: boolean
  wordCount: number
}

let inFlight: Promise<SeedResult> | null = null

export function seedIfEmpty(): Promise<SeedResult> {
  inFlight ??= runSeed()
  return inFlight
}

async function runSeed(): Promise<SeedResult> {
  const existing = await db.words.count()
  if (existing > 0) {
    return { seeded: false, wordCount: existing }
  }

  const words = wordListSchema.parse(a1Core)

  await db.transaction(
    'rw',
    [db.words, db.decks, db.deckWords, db.settings],
    async () => {
      if ((await db.words.count()) > 0) {
        return
      }

      await db.words.bulkAdd(words)
      await db.decks.add({
        id: A1_CORE_DECK_ID,
        name: 'A1 核心',
        cefr: 'A1',
        description: '第一批校对过的 A1 词，用来跑通学习闭环。',
      })
      await db.deckWords.bulkAdd(
        words.map((word) => ({
          deckId: A1_CORE_DECK_ID,
          wordId: word.id,
        })),
      )
      await db.settings.add(DEFAULT_SETTINGS)
    },
  )

  return { seeded: true, wordCount: await db.words.count() }
}
