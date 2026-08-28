import { useEffect } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { emptyMark, getWordMark, setWordMark, toggleMastered, toggleStarred } from '../db/marks'
import { shortcutTitle } from '../lib/ui'
import { StarButton } from './StarButton'

type CardMarksProps = {
  wordId: string
  onMasteredChange?: (mastered: boolean) => void
}

export function CardMarks({ wordId, onMasteredChange }: CardMarksProps) {
  const current = useLiveQuery(() => getWordMark(wordId), [wordId]) ?? emptyMark(wordId)

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (
        !event.ctrlKey ||
        event.altKey ||
        event.metaKey ||
        event.repeat ||
        event.isComposing
      ) {
        return
      }
      const key = event.key.toLowerCase()
      if (key === 's') {
        event.preventDefault()
        void toggleStarred(wordId)
        return
      }
      if (key !== 'm') {
        return
      }
      event.preventDefault()
      void setWordMark(wordId, { mastered: true }).then(() => {
        onMasteredChange?.(true)
      })
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [wordId, onMasteredChange])

  return (
    <div className="card-marks" onClick={(event) => event.stopPropagation()}>
      <StarButton
        key={wordId}
        starred={current.starred}
        onToggle={() => {
          void toggleStarred(wordId)
        }}
        label={current.starred ? '取消收藏' : '收藏到单词本'}
        title={shortcutTitle(
          current.starred ? '已在单词本' : '收藏到单词本',
          'Ctrl+S',
        )}
      />
      <button
        type="button"
        className={current.mastered ? 'mark-btn is-mastered' : 'mark-btn'}
        onClick={() => {
          void toggleMastered(wordId).then((next) => {
            onMasteredChange?.(next.mastered)
          })
        }}
        aria-pressed={current.mastered}
        aria-label={current.mastered ? '取消已掌握' : '标记为已掌握'}
        title={
          current.mastered
            ? '已掌握，点此恢复学习'
            : shortcutTitle('已掌握，不再学', 'Ctrl+M')
        }
      >
        掌握
      </button>
    </div>
  )
}
