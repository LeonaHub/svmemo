import { z } from 'zod'

export const posSchema = z.enum([
  'noun',
  'verb',
  'adj',
  'adv',
  'pron',
  'phrase',
  'intj',
  'proper',
  'other',
])

export const cefrSchema = z.enum(['A1', 'A2', 'B1', 'B2', 'C1'])

export const genderSchema = z.enum(['en', 'ett'])

export const wordFormsSchema = z.object({
  /** 名词：定式单数，如 bilen */
  definite: z.string().min(1).optional(),
  /** 名词：不定复数，如 bilar；形容词：复数/定式（加 a） */
  plural: z.string().min(1).optional(),
  /** 名词：定式复数，如 bilarna */
  definitePlural: z.string().min(1).optional(),
  /** 动词：现在时 */
  present: z.string().min(1).optional(),
  /** 动词：过去时（preteritum） */
  past: z.string().min(1).optional(),
  /** 动词：完成时（supinum），和 har 连用 */
  supine: z.string().min(1).optional(),
  /** 动词：命令式 */
  imperative: z.string().min(1).optional(),
  /** 形容词：ett 形（加 t） */
  neuter: z.string().min(1).optional(),
  comparative: z.string().min(1).optional(),
  superlative: z.string().min(1).optional(),
})

export const exampleSchema = z.object({
  sv: z.string().min(1),
  zh: z.string().min(1),
})

export const compoundPartSchema = z.object({
  sv: z.string().min(1),
  zh: z.string().min(1),
})

export const compoundSchema = z.object({
  parts: z.array(compoundPartSchema).min(2),
  together: z.string().min(1),
})

export const wordSchema = z.object({
  /** 主键，格式 `{lemma}__{pos}`，空格改成下划线，例如 `hej_då__phrase` */
  id: z.string().min(1),
  lemma: z.string().min(1),
  pos: posSchema,
  cefr: cefrSchema,
  gender: genderSchema.optional(),
  forms: wordFormsSchema.optional(),
  glossZh: z.string().min(1),
  glossEn: z.string().min(1).optional(),
  examples: z.array(exampleSchema).optional(),
  tags: z.array(z.string().min(1)).optional(),
  compound: compoundSchema.optional(),
})

export const wordListSchema = z.array(wordSchema)

export type Pos = z.infer<typeof posSchema>
export type Cefr = z.infer<typeof cefrSchema>
export type Gender = z.infer<typeof genderSchema>
export type WordForms = z.infer<typeof wordFormsSchema>
export type Example = z.infer<typeof exampleSchema>
export type CompoundPart = z.infer<typeof compoundPartSchema>
export type Compound = z.infer<typeof compoundSchema>
export type Word = z.infer<typeof wordSchema>

export function wordId(lemma: string, pos: Pos): string {
  return `${lemma.trim().replace(/\s+/g, '_')}__${pos}`
}
