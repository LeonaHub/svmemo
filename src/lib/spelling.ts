import { Rating, type Grade } from 'ts-fsrs'

export function spellingChars(answer: string): string[] {
  return [...answer.normalize('NFC')]
}

export function isSpellingLetter(char: string): boolean {
  return /^[a-zåäö]$/i.test(char)
}

export function spellingLetterCount(answer: string): number {
  return spellingChars(answer).filter((char) => isSpellingLetter(char)).length
}

export function clipSpellingInput(raw: string, maxLetters: number): string {
  return spellingChars(raw.normalize('NFC').toLocaleLowerCase('sv-SE'))
    .filter((char) => isSpellingLetter(char))
    .join('')
    .slice(0, maxLetters)
}

export function assembleSpelling(answer: string, typedLetters: string): string {
  const typed = spellingChars(typedLetters)
  let index = 0
  return spellingChars(answer)
    .map((char) => {
      if (!isSpellingLetter(char)) {
        return char
      }
      const next = typed[index] ?? ''
      index += 1
      return next
    })
    .join('')
}

export function normalizeSpelling(value: string): string {
  return value.normalize('NFC').trim().toLocaleLowerCase('sv-SE')
}

export function stripSwedishDiacritics(value: string): string {
  return value.replaceAll('å', 'a').replaceAll('ä', 'a').replaceAll('ö', 'o')
}

export function levenshtein(a: string, b: string): number {
  if (a === b) {
    return 0
  }
  if (a.length === 0) {
    return b.length
  }
  if (b.length === 0) {
    return a.length
  }

  const prev = Array.from({ length: b.length + 1 }, (_, index) => index)
  const curr = Array.from({ length: b.length + 1 }, () => 0)

  for (let i = 1; i <= a.length; i++) {
    curr[0] = i
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      curr[j] = Math.min(
        (prev[j] ?? 0) + 1,
        (curr[j - 1] ?? 0) + 1,
        (prev[j - 1] ?? 0) + cost,
      )
    }
    for (let j = 0; j <= b.length; j++) {
      prev[j] = curr[j] ?? 0
    }
  }

  return prev[b.length] ?? 0
}

export function gradeSpelling(input: string, answer: string): Grade {
  const typed = normalizeSpelling(input)
  const expected = normalizeSpelling(answer)

  if (typed.length === 0) {
    return Rating.Again
  }
  if (typed === expected) {
    return Rating.Good
  }
  if (stripSwedishDiacritics(typed) === stripSwedishDiacritics(expected)) {
    return Rating.Hard
  }
  if (levenshtein(typed, expected) === 1) {
    return Rating.Hard
  }
  return Rating.Again
}

export type DiffMark = {
  char: string
  ok: boolean
}

export function spellingDiff(input: string, answer: string): DiffMark[] {
  const typed = normalizeSpelling(input)
  const expected = normalizeSpelling(answer)
  const length = Math.max(typed.length, expected.length)

  return Array.from({ length }, (_, index) => {
    const expectedChar = expected[index] ?? ''
    const typedChar = typed[index]
    const ok = typedChar !== undefined && typedChar === expectedChar
    return {
      char: ok ? expectedChar : typedChar || '\u00A0',
      ok,
    }
  })
}
