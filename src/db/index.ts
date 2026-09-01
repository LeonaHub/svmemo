import Dexie, { type EntityTable } from 'dexie'
import type { Word } from '../types/word'
import type {
  CardRecord,
  ClearedSentence,
  DailyStats,
  Deck,
  DeckWord,
  ReviewLogRecord,
  Settings,
  WordMark,
} from '../types/progress'

export class SvmemoDB extends Dexie {
  words!: EntityTable<Word, 'id'>
  decks!: EntityTable<Deck, 'id'>
  deckWords!: EntityTable<DeckWord, 'id'>
  cards!: EntityTable<CardRecord, 'id'>
  reviewLogs!: EntityTable<ReviewLogRecord, 'id'>
  settings!: EntityTable<Settings, 'id'>
  dailyStats!: EntityTable<DailyStats, 'date'>
  wordMarks!: EntityTable<WordMark, 'wordId'>
  clearedSentences!: EntityTable<ClearedSentence, 'id'>

  constructor() {
    super('svmemo')
    this.version(1).stores({
      words: 'id, lemma, cefr, pos, *tags',
      decks: 'id, cefr',
      deckWords: '++id, &[deckId+wordId], deckId, wordId',
      cards: '++id, wordId, cardType, due, state, &[wordId+cardType]',
      reviewLogs: '++id, cardId, wordId, reviewedAt',
      settings: 'id',
      dailyStats: 'date',
    })
    this.version(2).stores({
      words: 'id, lemma, cefr, pos, *tags',
      decks: 'id, cefr',
      deckWords: '++id, &[deckId+wordId], deckId, wordId',
      cards: '++id, wordId, cardType, due, state, &[wordId+cardType]',
      reviewLogs: '++id, cardId, wordId, reviewedAt',
      settings: 'id',
      dailyStats: 'date',
      wordMarks: 'wordId, mastered, starred',
    })
    this.version(3).stores({
      words: 'id, lemma, cefr, pos, *tags',
      decks: 'id, cefr',
      deckWords: '++id, &[deckId+wordId], deckId, wordId',
      cards: '++id, wordId, cardType, due, state, &[wordId+cardType]',
      reviewLogs: '++id, cardId, wordId, reviewedAt',
      settings: 'id',
      dailyStats: 'date',
      wordMarks: 'wordId, mastered, starred',
      readings: 'id, openedAt, createdAt',
      readingNotes: '++id, readingId, wordId, createdAt',
    })
    this.version(4)
      .stores({
        readings: null,
        readingNotes: null,
      })
      .upgrade(async (transaction) => {
        const row = await transaction.table('settings').get('default')
        if (!row) {
          return
        }
        const next = { ...row }
        delete next.llmBaseUrl
        delete next.llmApiKey
        delete next.llmModel
        await transaction.table('settings').put(next)
      })
    this.version(5).stores({
      clearedSentences: 'id, wordId',
    })
  }
}

export const db = new SvmemoDB()
