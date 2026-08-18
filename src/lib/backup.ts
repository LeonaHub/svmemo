import { db } from '../db'
import type {
  CardRecord,
  DailyStats,
  Deck,
  DeckWord,
  ReviewLogRecord,
  Settings,
  WordMark,
} from '../types/progress'
import type { Word } from '../types/word'

export const BACKUP_VERSION = 2

export type SvmemoBackup = {
  version: number
  exportedAt: string
  words: Word[]
  decks: Deck[]
  deckWords: DeckWord[]
  cards: CardRecord[]
  reviewLogs: ReviewLogRecord[]
  settings: Settings[]
  dailyStats: DailyStats[]
  wordMarks?: WordMark[]
}

function asDate(value: unknown): Date {
  if (value instanceof Date) {
    return value
  }
  return new Date(String(value))
}

export async function exportBackup(): Promise<SvmemoBackup> {
  return {
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    words: await db.words.toArray(),
    decks: await db.decks.toArray(),
    deckWords: await db.deckWords.toArray(),
    cards: await db.cards.toArray(),
    reviewLogs: await db.reviewLogs.toArray(),
    settings: await db.settings.toArray(),
    dailyStats: await db.dailyStats.toArray(),
    wordMarks: await db.wordMarks.toArray(),
  }
}

export function downloadBackup(backup: SvmemoBackup): void {
  const blob = new Blob([JSON.stringify(backup, null, 2)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `svmemo-backup-${backup.exportedAt.slice(0, 10)}.json`
  anchor.click()
  URL.revokeObjectURL(url)
}

export async function copyBackup(backup: SvmemoBackup): Promise<void> {
  await navigator.clipboard.writeText(JSON.stringify(backup))
}

export async function readClipboardBackup(): Promise<unknown> {
  const text = (await navigator.clipboard.readText()).trim()
  if (!text) {
    throw new Error('剪贴板是空的')
  }
  try {
    return JSON.parse(text) as unknown
  } catch {
    throw new Error('剪贴板里不是备份数据')
  }
}

export async function importBackup(raw: unknown): Promise<void> {
  if (
    typeof raw !== 'object' ||
    raw === null ||
    !('version' in raw) ||
    !((raw as SvmemoBackup).version === 1 || (raw as SvmemoBackup).version === 2)
  ) {
    throw new Error('备份文件格式不对')
  }

  const backup = raw as SvmemoBackup

  await db.transaction(
    'rw',
    [
      db.words,
      db.decks,
      db.deckWords,
      db.cards,
      db.reviewLogs,
      db.settings,
      db.dailyStats,
      db.wordMarks,
    ],
    async () => {
      await db.words.clear()
      await db.decks.clear()
      await db.deckWords.clear()
      await db.cards.clear()
      await db.reviewLogs.clear()
      await db.settings.clear()
      await db.dailyStats.clear()
      await db.wordMarks.clear()

      await db.words.bulkAdd(backup.words)
      await db.decks.bulkAdd(backup.decks)
      await db.deckWords.bulkAdd(backup.deckWords)
      await db.cards.bulkAdd(
        backup.cards.map((card) => ({
          ...card,
          due: asDate(card.due),
          last_review: card.last_review
            ? asDate(card.last_review)
            : undefined,
        })),
      )
      await db.reviewLogs.bulkAdd(
        backup.reviewLogs.map((log) => ({
          ...log,
          reviewedAt: asDate(log.reviewedAt),
          dueBefore: asDate(log.dueBefore),
          dueAfter: asDate(log.dueAfter),
        })),
      )
      await db.settings.bulkAdd(backup.settings)
      await db.dailyStats.bulkAdd(
        backup.dailyStats.map((row) => ({
          ...row,
          matchedWordIds: row.matchedWordIds ?? [],
        })),
      )
      if (backup.wordMarks && backup.wordMarks.length > 0) {
        await db.wordMarks.bulkAdd(
          backup.wordMarks.map((mark) => ({
            ...mark,
            masteredAt: mark.masteredAt ? asDate(mark.masteredAt) : undefined,
            starredAt: mark.starredAt ? asDate(mark.starredAt) : undefined,
          })),
        )
      }
    },
  )
}
