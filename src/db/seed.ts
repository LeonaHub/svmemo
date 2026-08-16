import { a1Words } from '../data/a1'
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
  inFlight ??= syncCatalog()
  return inFlight
}

async function syncCatalog(): Promise<SeedResult> {
  const words = wordListSchema.parse(a1Words)
  const keepIds = new Set(words.map((word) => word.id))

  await db.transaction(
    'rw',
    [db.words, db.decks, db.deckWords, db.cards, db.reviewLogs, db.settings, db.wordMarks],
    async () => {
      await db.words.clear()
      await db.words.bulkPut(words)

      const deck = await db.decks.get(A1_CORE_DECK_ID)
      if (!deck) {
        await db.decks.add({
          id: A1_CORE_DECK_ID,
          name: '我的词表',
          cefr: 'B1',
          description: '当前词表：你选定的单词，含变形和例句。',
        })
      } else {
        await db.decks.update(A1_CORE_DECK_ID, {
          name: '我的词表',
          cefr: 'B1',
          description: '当前词表：你选定的单词，含变形和例句。',
        })
      }

      await db.deckWords.clear()
      await db.deckWords.bulkAdd(
        words.map((word) => ({
          deckId: A1_CORE_DECK_ID,
          wordId: word.id,
        })),
      )

      const staleCards = (await db.cards.toArray()).filter(
        (card) => !keepIds.has(card.wordId),
      )
      if (staleCards.length > 0) {
        await db.cards.bulkDelete(
          staleCards
            .map((card) => card.id)
            .filter((id): id is number => typeof id === 'number'),
        )
      }

      const staleLogs = (await db.reviewLogs.toArray()).filter(
        (log) => !keepIds.has(log.wordId),
      )
      if (staleLogs.length > 0) {
        await db.reviewLogs.bulkDelete(
          staleLogs
            .map((log) => log.id)
            .filter((id): id is number => typeof id === 'number'),
        )
      }

      const staleMarks = (await db.wordMarks.toArray()).filter(
        (mark) => !keepIds.has(mark.wordId),
      )
      if (staleMarks.length > 0) {
        await db.wordMarks.bulkDelete(staleMarks.map((mark) => mark.wordId))
      }

      const settings = await db.settings.get('default')
      if (!settings) {
        await db.settings.add(DEFAULT_SETTINGS)
      }
    },
  )

  return {
    seeded: true,
    wordCount: await db.words.count(),
  }
}
