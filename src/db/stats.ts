import { db } from './index'
import { localDateString } from '../lib/date'
import type { DailyStats, ReviewLogRecord } from '../types/progress'
import type { Word } from '../types/word'

export type DayWord = {
  wordId: string
  lemma: string
  glossZh: string
  reviews: number
}

export type DayActivity = {
  date: string
  newCount: number
  reviewCount: number
  answerCount: number
  completed: boolean
}

export type DayDetail = DayActivity & {
  newWords: DayWord[]
  reviewWords: DayWord[]
}

function asDate(value: Date | string): Date {
  return value instanceof Date ? value : new Date(value)
}

function emptyDay(date: string, completed = false): DayDetail {
  return {
    date,
    newCount: 0,
    reviewCount: 0,
    answerCount: 0,
    completed,
    newWords: [],
    reviewWords: [],
  }
}

function toDayWord(
  wordId: string,
  reviews: number,
  words: Map<string, Word>,
): DayWord {
  const word = words.get(wordId)
  return {
    wordId,
    lemma: word?.lemma ?? wordId,
    glossZh: word?.glossZh ?? '词条已不在词库',
    reviews,
  }
}

export function buildDayDetails(
  logs: ReviewLogRecord[],
  stats: DailyStats[],
  catalog: Word[],
): Map<string, DayDetail> {
  const words = new Map(catalog.map((word) => [word.id, word]))
  const firstDate = new Map<string, string>()
  const sorted = [...logs].sort(
    (left, right) => asDate(left.reviewedAt).getTime() - asDate(right.reviewedAt).getTime(),
  )

  for (const log of sorted) {
    const wordId = log.wordId
    if (!firstDate.has(wordId)) {
      firstDate.set(wordId, localDateString(asDate(log.reviewedAt)))
    }
  }

  const byDate = new Map<string, DayDetail>()

  function dayOf(date: string): DayDetail {
    const existing = byDate.get(date)
    if (existing) {
      return existing
    }
    const created = emptyDay(date)
    byDate.set(date, created)
    return created
  }

  const tallies = new Map<string, Map<string, number>>()

  for (const log of sorted) {
    const date = localDateString(asDate(log.reviewedAt))
    const day = dayOf(date)
    day.answerCount += 1

    let wordTally = tallies.get(date)
    if (!wordTally) {
      wordTally = new Map()
      tallies.set(date, wordTally)
    }
    wordTally.set(log.wordId, (wordTally.get(log.wordId) ?? 0) + 1)
  }

  for (const [date, wordTally] of tallies) {
    const day = dayOf(date)
    for (const [wordId, reviews] of wordTally) {
      const entry = toDayWord(wordId, reviews, words)
      if (firstDate.get(wordId) === date) {
        day.newWords.push(entry)
      } else {
        day.reviewWords.push(entry)
      }
    }
    day.newWords.sort((left, right) => left.lemma.localeCompare(right.lemma, 'sv'))
    day.reviewWords.sort((left, right) => left.lemma.localeCompare(right.lemma, 'sv'))
    day.newCount = day.newWords.length
    day.reviewCount = day.reviewWords.length
  }

  for (const row of stats) {
    const day = dayOf(row.date)
    day.completed = row.completed
    const inNew = new Set(day.newWords.map((word) => word.wordId))
    const inReview = new Set(day.reviewWords.map((word) => word.wordId))
    for (const wordId of row.matchedWordIds ?? []) {
      if (inNew.has(wordId) || inReview.has(wordId)) {
        continue
      }
      day.reviewWords.push(toDayWord(wordId, 1, words))
      inReview.add(wordId)
    }
    if (day.reviewWords.length > 0) {
      day.reviewWords.sort((left, right) => left.lemma.localeCompare(right.lemma, 'sv'))
    }
    if (day.newWords.length + day.reviewWords.length > 0) {
      day.newCount = day.newWords.length
      day.reviewCount = day.reviewWords.length
    } else if (row.newCount > 0 || row.reviewCount > 0) {
      day.newCount = row.newCount
      day.reviewCount = row.reviewCount
    }
  }

  return byDate
}

export async function loadDayDetails(): Promise<Map<string, DayDetail>> {
  const [logs, stats] = await Promise.all([
    db.reviewLogs.toArray(),
    db.dailyStats.toArray(),
  ])
  const ids = new Set<string>()
  for (const log of logs) {
    ids.add(log.wordId)
  }
  for (const row of stats) {
    for (const wordId of row.matchedWordIds ?? []) {
      ids.add(wordId)
    }
  }
  const catalog = (await db.words.bulkGet([...ids])).flatMap((word) =>
    word ? [word] : [],
  )
  return buildDayDetails(logs, stats, catalog)
}

export function monthTotals(
  byDate: Map<string, DayDetail>,
  cells: readonly { date: string; inMonth: boolean }[],
): { newCount: number; reviewCount: number; activeDays: number } {
  let newCount = 0
  let reviewCount = 0
  let activeDays = 0

  for (const cell of cells) {
    if (!cell.inMonth) {
      continue
    }
    const day = byDate.get(cell.date)
    if (!day || (day.newCount === 0 && day.reviewCount === 0)) {
      continue
    }
    newCount += day.newCount
    reviewCount += day.reviewCount
    activeDays += 1
  }

  return { newCount, reviewCount, activeDays }
}
