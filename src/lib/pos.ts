import type { Pos } from '../types/word'

export const POS_LABEL: Record<Pos, string> = {
  noun: '名词',
  verb: '动词',
  adj: '形容词',
  adv: '副词',
  pron: '代词',
  phrase: '短语',
  intj: '感叹',
  proper: '专有',
  other: '其他',
}
