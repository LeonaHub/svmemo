import { FREQUENCY_GROUP_COUNT, FREQUENCY_GROUP_SIZE } from '../data/freq'
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

/** 词表大改时改组数即可。已有词库只补缺失，不整表重写。 */
export const CATALOG_REVISION = `g${FREQUENCY_GROUP_COUNT}`

/** 第 10 组少 `spela`，第 148 组少 `medborgarskap`，第 195 组少 `klunga`。 */
const EXPECTED_CATALOG_MIN = FREQUENCY_GROUP_SIZE * FREQUENCY_GROUP_COUNT - 20

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

async function ensureCoreDeck(): Promise<void> {
  const deck = await db.decks.get(A1_CORE_DECK_ID)
  if (!deck) {
    await db.decks.add({
      id: A1_CORE_DECK_ID,
      name: '万词计划',
      cefr: 'B1',
      description: '当前词表：你选定的单词，含变形和例句。',
    })
    return
  }
  await db.decks.update(A1_CORE_DECK_ID, {
    name: '万词计划',
    cefr: 'B1',
    description: '当前词表：你选定的单词，含变形和例句。',
  })
}

async function appendMissingWords(): Promise<SeedResult> {
  const { a1Words } = await import('../data/a1')
  const existingIds = new Set(await db.words.toCollection().primaryKeys())
  const missing = a1Words.filter((word) => !existingIds.has(word.id))

  if (missing.length > 0) {
    await writeInChunks(missing, (chunk) => db.words.bulkPut(chunk))
    await ensureCoreDeck()
    const linked = new Set(
      (
        await db.deckWords.where('deckId').equals(A1_CORE_DECK_ID).toArray()
      ).map((row) => row.wordId),
    )
    const newLinks = missing
      .filter((word) => !linked.has(word.id))
      .map((word) => ({
        deckId: A1_CORE_DECK_ID,
        wordId: word.id,
      }))
    if (newLinks.length > 0) {
      await writeInChunks(newLinks, (chunk) => db.deckWords.bulkAdd(chunk))
    }
  }

  await stampRevision()
  return {
    seeded: missing.length > 0,
    wordCount: await db.words.count(),
  }
}

export async function syncCatalog(
  options: { force?: boolean } = {},
): Promise<SeedResult> {
  const existingCount = await db.words.count()
  const settings = await db.settings.get('default')
  const alreadyCurrent =
    existingCount >= EXPECTED_CATALOG_MIN &&
    settings?.catalogRevision === CATALOG_REVISION

  if (!options.force && existingCount > 0 && alreadyCurrent) {
    return {
      seeded: false,
      wordCount: existingCount,
    }
  }

  if (!options.force && existingCount > 0) {
    return appendMissingWords()
  }

  const { a1Words } = await import('../data/a1')
  const keepIds = new Set(a1Words.map((word) => word.id))

  await db.words.clear()
  await writeInChunks(a1Words, (chunk) => db.words.bulkPut(chunk))

  await ensureCoreDeck()

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
