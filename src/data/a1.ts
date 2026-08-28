import { customWords } from './custom-words'
import { lemmaRank } from './lemma-rank'
import { frequencyLists } from './lists'
import type { Word } from '../types/word'

const OUTSIDE_RANK = 50_000

export const a1Words: Word[] = [...frequencyLists, ...customWords]
  .map((word) => {
    const rank = word.rank ?? lemmaRank[word.lemma]
    return rank === undefined ? word : { ...word, rank }
  })
  .sort((left, right) => {
    const leftRank = left.rank ?? OUTSIDE_RANK
    const rightRank = right.rank ?? OUTSIDE_RANK
    if (leftRank !== rightRank) {
      return leftRank - rightRank
    }
    if (left.lemma !== right.lemma) {
      return left.lemma.localeCompare(right.lemma, 'sv')
    }
    return left.pos.localeCompare(right.pos)
  })
