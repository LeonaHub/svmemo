export type SpeakResult =
  | { ok: true }
  | { ok: false; reason: 'unsupported' | 'no-swedish-voice' | 'aborted' }

let currentAudio: HTMLAudioElement | null = null
let speakToken = 0

function isSwedishVoice(voice: SpeechSynthesisVoice): boolean {
  const lang = voice.lang.toLowerCase().replaceAll('_', '-')
  return lang === 'sv' || lang === 'sv-se' || lang.startsWith('sv-')
}

function isGoogleVoice(voice: SpeechSynthesisVoice): boolean {
  return voice.name.toLowerCase().includes('google')
}

function voiceQuality(
  voice: SpeechSynthesisVoice,
  avoidGoogle: boolean,
): number {
  const name = voice.name.toLowerCase()
  if (avoidGoogle && isGoogleVoice(voice)) {
    return -1
  }
  if (
    name.includes('neural') ||
    name.includes('natural') ||
    name.includes('online') ||
    name.includes('premium')
  ) {
    return 5
  }
  if (
    name.includes('microsoft') ||
    name.includes('hedda') ||
    name.includes('sofie') ||
    name.includes('bengt')
  ) {
    return 4
  }
  if (isGoogleVoice(voice)) {
    return 3
  }
  if (name.includes('svenska') || name.includes('swedish')) {
    return 2
  }
  return 1
}

function pickSwedishVoice(
  voices: SpeechSynthesisVoice[],
  avoidGoogle = false,
): SpeechSynthesisVoice | undefined {
  const swedish = voices.filter(isSwedishVoice)
  if (swedish.length === 0) {
    return undefined
  }
  const ranked = [...swedish].sort((left, right) => {
    const quality =
      voiceQuality(right, avoidGoogle) - voiceQuality(left, avoidGoogle)
    if (quality !== 0) {
      return quality
    }
    return left.name.localeCompare(right.name, 'sv')
  })
  const best = ranked[0]
  if (!best) {
    return undefined
  }
  if (avoidGoogle && isGoogleVoice(best)) {
    return undefined
  }
  return best
}

/** Google 瑞典语会把这些孤立词按缩写逐字读；其它短词（icke、hota、torn）按原词读 */
const LETTER_SPELLED = new Set(['spy'])

function isLetterSpelled(text: string): boolean {
  return LETTER_SPELLED.has(text.toLocaleLowerCase('sv-SE'))
}

function isCurrent(token: number): boolean {
  return token === speakToken
}

export async function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return []
  }

  const current = window.speechSynthesis.getVoices()
  if (current.length > 0) {
    return current
  }

  await new Promise<void>((resolve) => {
    const finish = () => resolve()
    const timer = window.setTimeout(finish, 1500)
    window.speechSynthesis.addEventListener(
      'voiceschanged',
      () => {
        window.clearTimeout(timer)
        finish()
      },
      { once: true },
    )
  })

  return window.speechSynthesis.getVoices()
}

function speakWithSynthesis(
  text: string,
  voice: SpeechSynthesisVoice,
  token: number,
): Promise<boolean> {
  return new Promise((resolve) => {
    if (!isCurrent(token)) {
      resolve(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'sv-SE'
    utterance.voice = voice
    utterance.rate = 0.88

    let settled = false
    const done = (ok: boolean) => {
      if (settled) {
        return
      }
      settled = true
      resolve(ok && isCurrent(token))
    }

    utterance.onerror = () => done(false)

    window.speechSynthesis.cancel()

    // Chrome：cancel 后立刻 speak 常会把同一句排进去两次
    window.setTimeout(() => {
      if (!isCurrent(token)) {
        done(false)
        return
      }
      window.speechSynthesis.speak(utterance)
      // 已经交给系统朗读就不要再走音频，否则会叠成两遍
      done(true)
    }, 60)
  })
}

function audioUrl(text: string, client: 'gtx' | 'tw-ob'): string {
  const host =
    client === 'gtx'
      ? 'https://translate.googleapis.com/translate_tts'
      : 'https://translate.google.com/translate_tts'
  return `${host}?ie=UTF-8&client=${client}&tl=sv&q=${encodeURIComponent(text)}`
}

function playUrl(url: string, token: number): Promise<boolean> {
  if (!isCurrent(token)) {
    return Promise.resolve(false)
  }
  currentAudio?.pause()
  const audio = new Audio(url)
  currentAudio = audio
  return audio
    .play()
    .then(() => isCurrent(token))
    .catch(() => false)
}

async function speakWithAudio(text: string, token: number): Promise<boolean> {
  if (await playUrl(audioUrl(text, 'gtx'), token)) {
    return true
  }
  return playUrl(audioUrl(text, 'tw-ob'), token)
}

export function stopSpeaking() {
  speakToken += 1
  currentAudio?.pause()
  currentAudio = null
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
}

export async function speakSwedish(text: string): Promise<SpeakResult> {
  if (typeof window === 'undefined') {
    return { ok: false, reason: 'unsupported' }
  }

  const trimmed = text.normalize('NFC').trim()
  if (trimmed.length === 0) {
    return { ok: false, reason: 'unsupported' }
  }

  stopSpeaking()
  const token = speakToken

  const voices =
    'speechSynthesis' in window ? await loadVoices() : []
  if (!isCurrent(token)) {
    return { ok: false, reason: 'aborted' }
  }

  const osVoice = pickSwedishVoice(voices, true)
  const voice = pickSwedishVoice(voices, false)

  // spy 这类词 Google 会拼字母；系统语音按原词读。绝不加 att/en/ett，也不改拼写
  if (isLetterSpelled(trimmed) && osVoice) {
    if (await speakWithSynthesis(trimmed, osVoice, token)) {
      return { ok: true }
    }
    if (!isCurrent(token)) {
      return { ok: false, reason: 'aborted' }
    }
  }

  if (voice && voiceQuality(voice, false) >= 3) {
    if (await speakWithSynthesis(trimmed, voice, token)) {
      return { ok: true }
    }
    if (!isCurrent(token)) {
      return { ok: false, reason: 'aborted' }
    }
  }

  if (await speakWithAudio(trimmed, token)) {
    return { ok: true }
  }
  if (!isCurrent(token)) {
    return { ok: false, reason: 'aborted' }
  }

  if (voice && (await speakWithSynthesis(trimmed, voice, token))) {
    return { ok: true }
  }

  if (!isCurrent(token)) {
    return { ok: false, reason: 'aborted' }
  }
  if (!('speechSynthesis' in window)) {
    return { ok: false, reason: 'unsupported' }
  }
  return { ok: false, reason: 'no-swedish-voice' }
}

export function ttsHint(result: SpeakResult): string | null {
  if (result.ok || result.reason === 'aborted') {
    return null
  }
  if (result.reason === 'unsupported') {
    return '这个浏览器不支持朗读。换 Chrome 再试。'
  }
  return '现在读不出来。请联网后重试，或换 Chrome。'
}
