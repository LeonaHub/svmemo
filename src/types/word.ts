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
  definite: z.string().min(1).optional(),
  plural: z.string().min(1).optional(),
  present: z.string().min(1).optional(),
  past: z.string().min(1).optional(),
  neuter: z.string().min(1).optional(),
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
  exampleSv: z.string().min(1).optional(),
  exampleZh: z.string().min(1).optional(),
  tags: z.array(z.string().min(1)).optional(),
})

export const wordListSchema = z.array(wordSchema)

export type Pos = z.infer<typeof posSchema>
export type Cefr = z.infer<typeof cefrSchema>
export type Gender = z.infer<typeof genderSchema>
export type WordForms = z.infer<typeof wordFormsSchema>
export type Word = z.infer<typeof wordSchema>

export function wordId(lemma: string, pos: Pos): string {
  return `${lemma.trim().replace(/\s+/g, '_')}__${pos}`
}
