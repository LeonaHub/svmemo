export function localDateString(now = new Date()): string {
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function asDate(value: Date | string | number): Date {
  if (value instanceof Date) {
    return value
  }
  return new Date(value)
}

export function startOfLocalDay(now = new Date()): Date {
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

/** 本地明天 0 点，用作「今日」的开区间右端。 */
export function startOfNextLocalDay(now = new Date()): Date {
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
}

export function parseLocalDate(date: string): Date {
  const [year, month, day] = date.split('-').map(Number)
  return new Date(year, (month ?? 1) - 1, day ?? 1)
}

export function addMonths(now: Date, delta: number): Date {
  return new Date(now.getFullYear(), now.getMonth() + delta, 1)
}

export function monthTitle(now: Date): string {
  return `${now.getFullYear()}年${now.getMonth() + 1}月`
}

export function formatDayTitle(date: string): string {
  return parseLocalDate(date).toLocaleDateString('zh-CN', {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })
}

export type MonthCell = {
  date: string
  day: number
  inMonth: boolean
}

export function monthGrid(now: Date): MonthCell[] {
  const year = now.getFullYear()
  const month = now.getMonth()
  const first = new Date(year, month, 1)
  const startOffset = (first.getDay() + 6) % 7
  const start = new Date(year, month, 1 - startOffset)

  return Array.from({ length: 42 }, (_, index) => {
    const cell = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate() + index,
    )
    return {
      date: localDateString(cell),
      day: cell.getDate(),
      inMonth: cell.getMonth() === month,
    }
  })
}
