import { wordId, type Example, type Word } from '../types/word'

type Pair = readonly [string, string]

function examples(pairs: readonly Pair[]): Example[] {
  return pairs.map(([sv, zh]) => ({ sv, zh }))
}

export function noun(
  lemma: string,
  gender: 'en' | 'ett' | null,
  glossZh: string,
  glossEn: string,
  definite: string | null,
  plural: string | null,
  definitePlural: string | null,
  pairs: readonly Pair[],
  tags: string[] = [],
): Word {
  return {
    id: wordId(lemma, 'noun'),
    lemma,
    pos: 'noun',
    cefr: 'A1',
    gender: gender ?? undefined,
    forms: {
      definite: definite ?? undefined,
      plural: plural ?? undefined,
      definitePlural: definitePlural ?? undefined,
    },
    glossZh,
    glossEn,
    examples: examples(pairs),
    tags: ['noun', ...tags],
  }
}

export function verb(
  lemma: string,
  glossZh: string,
  glossEn: string,
  present: string,
  past: string,
  supine: string | null,
  imperative: string | null,
  pairs: readonly Pair[],
  tags: string[] = [],
): Word {
  return {
    id: wordId(lemma, 'verb'),
    lemma,
    pos: 'verb',
    cefr: 'A1',
    forms: {
      present,
      past,
      supine: supine ?? undefined,
      imperative: imperative ?? undefined,
    },
    glossZh,
    glossEn,
    examples: examples(pairs),
    tags: ['verb', ...tags],
  }
}

export function adj(
  lemma: string,
  glossZh: string,
  glossEn: string,
  neuter: string,
  plural: string,
  pairs: readonly Pair[],
  extra?: { comparative?: string; superlative?: string; definite?: string },
  tags: string[] = [],
): Word {
  return {
    id: wordId(lemma, 'adj'),
    lemma,
    pos: 'adj',
    cefr: 'A1',
    forms: {
      neuter,
      plural,
      definite: extra?.definite,
      comparative: extra?.comparative,
      superlative: extra?.superlative,
    },
    glossZh,
    glossEn,
    examples: examples(pairs),
    tags: ['adj', ...tags],
  }
}

export function pron(
  lemma: string,
  glossZh: string,
  glossEn: string,
  neuter: string,
  plural: string,
  pairs: readonly Pair[],
  tags: string[] = [],
): Word {
  return {
    id: wordId(lemma, 'pron'),
    lemma,
    pos: 'pron',
    cefr: 'A1',
    forms: {
      neuter,
      plural,
    },
    glossZh,
    glossEn,
    examples: examples(pairs),
    tags: ['people', ...tags],
  }
}

export function other(
  lemma: string,
  pos: Exclude<Word['pos'], 'noun' | 'verb' | 'adj'>,
  glossZh: string,
  glossEn: string,
  pairs: readonly Pair[],
  tags: string[] = [],
): Word {
  return {
    id: wordId(lemma, pos),
    lemma,
    pos,
    cefr: 'A1',
    glossZh,
    glossEn,
    examples: examples(pairs),
    tags,
  }
}
