import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { getTodayOverview, startSentenceSession } from '../db/study'
import { unlockSpeech } from '../lib/tts'
import type { SentenceItem } from '../lib/sentence-drill'
import { BrandLogo } from './BrandLogo'

type SentencePageProps = {
  onStart: (items: SentenceItem[]) => void
  onBrowseWords: () => void
}

export function SentencePage({ onStart, onBrowseWords }: SentencePageProps) {
  const overview = useLiveQuery(() => getTodayOverview())
  const [message, setMessage] = useState<string | null>(null)
  const [starting, setStarting] = useState<'plan' | 'starred' | null>(null)

  const planCount = overview?.sentenceCount ?? 0
  const starredCount = overview?.starredSentenceCount ?? 0
  const learnedCount = overview?.learnedCount ?? 0

  async function handleStart(pool: 'plan' | 'starred') {
    if (starting) {
      return
    }
    setStarting(pool)
    setMessage(null)
    unlockSpeech()
    try {
      const items = await startSentenceSession(pool)
      if (items.length === 0) {
        setMessage(
          pool === 'starred'
            ? '单词本还没有带例句的词。先去词库收藏，或从计划里练。'
            : '计划里还没有带例句的词。先去词库加入计划。',
        )
        return
      }
      onStart(items)
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '无法开始例句练习')
    } finally {
      setStarting(null)
    }
  }

  return (
    <section className="sentences-page">
      <header className="sentences-head">
        <div className="brand-row">
          <BrandLogo />
          <p className="brand-name">例句</p>
        </div>
        <h1>把词写进句子</h1>
        <p className="sentences-lede">
          看中文，句子前后已经写好。对照词性、意思和变形，只默写本句要练的那个词。
        </p>
      </header>

      {!overview ? (
        <p className="hint">正在读取本地进度…</p>
      ) : (
        <div className="sentence-choices">
          <article className="sentence-choice">
            <p className="sentence-choice-kicker">计划中</p>
            <p className="sentence-choice-count">
              <strong>{planCount}</strong>
              <span>句</span>
            </p>
            <p className="sentence-choice-meta">
              {learnedCount > 0
                ? `来自 ${learnedCount} 个未掌握的词，打乱后每 7 句一组。`
                : '加入计划的词，例句会出现在这里。'}
            </p>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              disabled={planCount === 0 || Boolean(starting)}
              onClick={() => void handleStart('plan')}
            >
              {starting === 'plan'
                ? '准备中…'
                : planCount > 0
                  ? '开始默写'
                  : '还没有可练的句子'}
            </button>
          </article>

          <article className="sentence-choice is-starred">
            <p className="sentence-choice-kicker">单词本</p>
            <p className="sentence-choice-count">
              <strong>{starredCount}</strong>
              <span>句</span>
            </p>
            <p className="sentence-choice-meta">
              {starredCount > 0
                ? '收藏过的难词，含已掌握的收藏。'
                : '学习时点星星，难词会进单词本。'}
            </p>
            <button
              type="button"
              className="btn btn-lg"
              disabled={starredCount === 0 || Boolean(starting)}
              onClick={() => void handleStart('starred')}
            >
              {starting === 'starred'
                ? '准备中…'
                : starredCount > 0
                  ? '练收藏的句子'
                  : '单词本是空的'}
            </button>
          </article>
        </div>
      )}

      <ol className="sentence-steps">
        <li>
          <strong>看中文</strong>
          <span>先读懂整句意思</span>
        </li>
        <li>
          <strong>对照提示</strong>
          <span>词性、意思、变形，不给这个词的拼写</span>
        </li>
        <li>
          <strong>补上这个词</strong>
          <span>前后的瑞典语已经写好，加练不改间隔</span>
        </li>
      </ol>

      <div className="today-tools">
        {overview && learnedCount === 0 ? (
          <p className="hint">例句来自你加入计划的词。先去词库勾选，再回来把词写进句子。</p>
        ) : null}
        <button type="button" className="btn" onClick={onBrowseWords}>
          去词库选词
        </button>
      </div>

      {message ? <p className="hint">{message}</p> : null}
    </section>
  )
}
