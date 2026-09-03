import { a1Words } from '../data/a1'
import { FREQUENCY_GROUP_COUNT } from '../data/freq'
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

const WRITE_CHUNK = 200

/** 词表内容变了就改这里：组数 + 词数。对得上本地记录则不整表重写。 */
export const CATALOG_REVISION = `g${FREQUENCY_GROUP_COUNT}:${a1Words.length}`

let inFlight: Promise<SeedResult> | null = null

export function seedIfEmpty(): Promise<SeedResult> {
  inFlight ??= syncCatalog()
  return inFlight
}

function yieldToUi(): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, 0)
  })
}

async function writeInChunks<T>(
  rows: T[],
  write: (chunk: T[]) => Promise<unknown>,
): Promise<void> {
  for (let index = 0; index < rows.length; index += WRITE_CHUNK) {
    await write(rows.slice(index, index + WRITE_CHUNK))
    await yieldToUi()
  }
}

export async function syncCatalog(): Promise<SeedResult> {
  const existingCount = await db.words.count()
  const settings = await db.settings.get('default')
  if (
    existingCount === a1Words.length &&
    settings?.catalogRevision === CATALOG_REVISION
  ) {
    return {
      seeded: false,
      wordCount: existingCount,
    }
  }

  const words = wordListSchema.parse(a1Words)
  const keepIds = new Set(words.map((word) => word.id))

  await db.words.clear()
  await writeInChunks(words, (chunk) => db.words.bulkPut(chunk))

  const deck = await db.decks.get(A1_CORE_DECK_ID)
  if (!deck) {
    await db.decks.add({
      id: A1_CORE_DECK_ID,
      name: '万词计划',
      cefr: 'B1',
      description: '当前词表：你选定的单词，含变形和例句。',
    })
  } else {
    await db.decks.update(A1_CORE_DECK_ID, {
      name: '万词计划',
      cefr: 'B1',
      description: '当前词表：你选定的单词，含变形和例句。',
    })
  }

  await db.deckWords.clear()
  await writeInChunks(
    words.map((word) => ({
      deckId: A1_CORE_DECK_ID,
      wordId: word.id,
    })),
    (chunk) => db.deckWords.bulkAdd(chunk),
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

  const staleSentences = (await db.clearedSentences.toArray()).filter(
    (row) => !keepIds.has(row.wordId),
  )
  if (staleSentences.length > 0) {
    await db.clearedSentences.bulkDelete(staleSentences.map((row) => row.id))
  }

  if (!settings) {
    await db.settings.add({
      ...DEFAULT_SETTINGS,
      catalogRevision: CATALOG_REVISION,
    })
  } else {
    await db.settings.update('default', { catalogRevision: CATALOG_REVISION })
  }

  return {
    seeded: true,
    wordCount: await db.words.count(),
  }
}
