import Dexie, { type EntityTable } from 'dexie'
import type { Word } from '../types/word'
import type {
  CardRecord,
  DailyStats,
  Deck,
  DeckWord,
  ReviewLogRecord,
  Settings,
} from '../types/progress'

export class SvmemoDB extends Dexie {
  words!: EntityTable<Word, 'id'>
  decks!: EntityTable<Deck, 'id'>
  deckWords!: EntityTable<DeckWord, 'id'>
  cards!: EntityTable<CardRecord, 'id'>
  reviewLogs!: EntityTable<ReviewLogRecord, 'id'>
  settings!: EntityTable<Settings, 'id'>
  dailyStats!: EntityTable<DailyStats, 'date'>

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
  }
}

export const db = new SvmemoDB()
