import { useMemo, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { loadDayDetails, monthTotals, type DayDetail } from '../db/stats'
import {
  addMonths,
  formatDayTitle,
  localDateString,
  monthGrid,
  monthTitle,
} from '../lib/date'

const WEEKDAYS = ['一', '二', '三', '四', '五', '六', '日']

function emptyDetail(date: string): DayDetail {
  return {
    date,
    newCount: 0,
    reviewCount: 0,
    answerCount: 0,
    completed: false,
    newWords: [],
    reviewWords: [],
  }
}

export function StudyCalendar() {
  const today = localDateString()
  const [cursor, setCursor] = useState(() => new Date())
  const [selected, setSelected] = useState(today)
  const byDate = useLiveQuery(() => loadDayDetails())
  const cells = useMemo(() => monthGrid(cursor), [cursor])
  const totals = useMemo(
    () => (byDate ? monthTotals(byDate, cells) : null),
    [byDate, cells],
  )
  const detail = byDate?.get(selected) ?? emptyDetail(selected)
  const hasWords = detail.newWords.length + detail.reviewWords.length > 0
  const hasCounts = detail.newCount + detail.reviewCount > 0

  return (
    <section className="calendar-card" aria-label="学习日历">
      <div className="calendar-head">
        <div>
          <h2>学习日历</h2>
          <p>
            {totals
              ? `本月新学 ${totals.newCount} · 复习 ${totals.reviewCount} · 打卡 ${totals.activeDays} 天`
              : '正在读取每日记录…'}
          </p>
        </div>
        <div className="calendar-nav">
          <button
            type="button"
            className="btn btn-ghost calendar-nav-btn"
            onClick={() => setCursor((current) => addMonths(current, -1))}
            aria-label="上个月"
          >
            ‹
          </button>
          <p className="calendar-month">{monthTitle(cursor)}</p>
          <button
            type="button"
            className="btn btn-ghost calendar-nav-btn"
            onClick={() => setCursor((current) => addMonths(current, 1))}
            aria-label="下个月"
          >
            ›
          </button>
          {localDateString(cursor).slice(0, 7) !== today.slice(0, 7) ? (
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setCursor(new Date())
                setSelected(today)
              }}
            >
              今天
            </button>
          ) : null}
        </div>
      </div>

      <div className="calendar-body">
        <div className="calendar-month-block">
          <div className="calendar-weekdays" aria-hidden="true">
            {WEEKDAYS.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>

          <div className="calendar-grid">
            {cells.map((cell) => {
              const day = byDate?.get(cell.date)
              const isSelected = cell.date === selected
              const isToday = cell.date === today
              const isFuture = cell.date > today
              const newCount = day?.newCount ?? 0
              const reviewCount = day?.reviewCount ?? 0
              const active = newCount + reviewCount > 0

              return (
                <button
                  key={cell.date}
                  type="button"
                  className={[
                    'calendar-day',
                    cell.inMonth ? '' : 'is-outside',
                    isSelected ? 'is-selected' : '',
                    isToday ? 'is-today' : '',
                    isFuture ? 'is-future' : '',
                    active ? 'is-active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setSelected(cell.date)}
                  aria-pressed={isSelected}
                  aria-label={`${formatDayTitle(cell.date)}，新学 ${newCount}，复习 ${reviewCount}`}
                >
                  <span className="calendar-day-num">{cell.day}</span>
                  {active ? (
                    <span className="calendar-day-stats">
                      <span className="stat-new">{newCount}</span>
                      <span className="stat-sep">/</span>
                      <span className="stat-review">{reviewCount}</span>
                    </span>
                  ) : null}
                </button>
              )
            })}
          </div>
        </div>

        <div className="calendar-detail">
          <h3>{formatDayTitle(selected)}</h3>
          {hasCounts ? (
            <p className="calendar-detail-meta">
              新学 {detail.newCount} 个 · 复习 {detail.reviewCount} 个
              {detail.answerCount > 0 ? ` · 作答 ${detail.answerCount} 次` : null}
              {detail.completed ? ' · 已完成当日任务' : null}
            </p>
          ) : (
            <p className="calendar-detail-meta">
              {selected === today
                ? '今天还没有写入学习记录。背完一组后，数字会出现在这一天下面。'
                : '这一天没有学习记录。'}
            </p>
          )}

          {hasWords ? (
            <div className="calendar-word-cols">
              {detail.newWords.length > 0 ? (
                <div>
                  <h4>新学</h4>
                  <ul>
                    {detail.newWords.map((word) => (
                      <li key={word.wordId}>
                        <strong>{word.lemma}</strong>
                        <span>{word.glossZh}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {detail.reviewWords.length > 0 ? (
                <div>
                  <h4>复习</h4>
                  <ul>
                    {detail.reviewWords.map((word) => (
                      <li key={word.wordId}>
                        <strong>{word.lemma}</strong>
                        <span>{word.glossZh}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
