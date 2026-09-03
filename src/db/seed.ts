import { FREQUENCY_GROUP_COUNT } from '../data/freq'
import {
  A1_CORE_DECK_ID,
  DEFAULT_SETTINGS,
} from '../types/progress'
import { db } from './index'

export type SeedResult = {
  seeded: boolean
  wordCount: number
}

const WRITE_CHUNK = 80

/** 词表大改时改组数即可。手机上已有词条则启动不整表重写。 */
export const CATALOG_REVISION = `g${FREQUENCY_GROUP_COUNT}`

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

async function stampRevision(): Promise<void> {
  const settings = await db.settings.get('default')
  if (!settings) {
    await db.settings.add({
      ...DEFAULT_SETTINGS,
      catalogRevision: CATALOG_REVISION,
    })
    return
  }
  if (settings.catalogRevision !== CATALOG_REVISION) {
    await db.settings.update('default', { catalogRevision: CATALOG_REVISION })
  }
}

export async function syncCatalog(
  options: { force?: boolean } = {},
): Promise<SeedResult> {
  const existingCount = await db.words.count()
  if (!options.force && existingCount > 0) {
    await stampRevision()
    return {
      seeded: false,
      wordCount: existingCount,
    }
  }

  const { a1Words } = await import('../data/a1')
  const keepIds = new Set(a1Words.map((word) => word.id))

  await db.words.clear()
  await writeInChunks(a1Words, (chunk) => db.words.bulkPut(chunk))

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
    a1Words.map((word) => ({
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

  await stampRevision()

  return {
    seeded: true,
    wordCount: await db.words.count(),
  }
}
