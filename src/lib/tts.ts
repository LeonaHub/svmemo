export type SpeakResult =
  | { ok: true }
  | { ok: false; reason: 'unsupported' | 'no-swedish-voice' | 'aborted' }

let sharedAudio: HTMLAudioElement | null = null
let speakToken = 0
let audioUnlocked = false
let unlockStarted = false
const unlockListeners = new Set<() => void>()

const SILENT_WAV =
  'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA'

function ensureAudio(): HTMLAudioElement {
  if (!sharedAudio) {
    sharedAudio = new Audio()
    sharedAudio.setAttribute('playsinline', 'true')
    sharedAudio.preload = 'auto'
  }
  return sharedAudio
}

function markUnlocked() {
  if (audioUnlocked) {
    return
  }
  audioUnlocked = true
  for (const listener of unlockListeners) {
    listener()
  }
}

export function isSpeechUnlocked(): boolean {
  return audioUnlocked
}

export function onSpeechUnlock(listener: () => void): () => void {
  unlockListeners.add(listener)
  return () => {
    unlockListeners.delete(listener)
  }
}

/** 必须在用户点击里调用，之后手机才能自动朗读下一张 */
export function unlockSpeech() {
  if (typeof window === 'undefined' || unlockStarted) {
    return
  }
  unlockStarted = true
  const audio = ensureAudio()
  audio.muted = true
  audio.src = SILENT_WAV
  void audio
    .play()
    .catch(() => false)
    .finally(() => {
      audio.muted = false
      if (audio.src.startsWith('data:')) {
        audio.pause()
      }
      markUnlocked()
    })
  if ('speechSynthesis' in window) {
    wakeIosSpeech()
  }
}

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

function needsTapUnlock(): boolean {
  if (typeof navigator === 'undefined') {
    return false
  }
  if (/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)) {
    return true
  }
  return (
    navigator.maxTouchPoints > 0 &&
    window.matchMedia('(pointer: coarse)').matches
  )
}

function isIos(): boolean {
  return typeof navigator !== 'undefined' && /iPhone|iPod|iPad/i.test(navigator.userAgent)
}

function currentVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return []
  }
  return window.speechSynthesis.getVoices()
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
  voice: SpeechSynthesisVoice | undefined,
  token: number,
  immediate: boolean,
): Promise<boolean> {
  return new Promise((resolve) => {
    if (!isCurrent(token) || !('speechSynthesis' in window)) {
      resolve(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'sv-SE'
    if (voice) {
      utterance.voice = voice
    }
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
    utterance.onstart = () => done(true)

    const start = () => {
      if (!isCurrent(token)) {
        done(false)
        return
      }
      window.speechSynthesis.speak(utterance)
      try {
        window.speechSynthesis.resume()
      } catch {
        // iOS 上 resume 可能抛错，朗读仍可能已经进队列
      }
      if (immediate) {
        done(true)
      }
    }

    if (immediate) {
      start()
      return
    }

    // Chrome：cancel 后立刻 speak 常会把同一句排进去两次
    window.setTimeout(start, 60)
  })
}

function audioUrl(text: string, client: 'gtx' | 'tw-ob'): string {
  const host =
    client === 'gtx'
      ? 'https://translate.googleapis.com/translate_tts'
      : 'https://translate.google.com/translate_tts'
  return `${host}?ie=UTF-8&client=${client}&tl=sv&q=${encodeURIComponent(text)}`
}

function youdaoUrl(text: string): string {
  return `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=sv`
}

/** 实例在服务端代取瑞典语音频，手机不用连 Google。CORS 为 *。 */
const LINGVA_AUDIO = [
  'https://lingva.lunar.icu/api/v1/audio/sv/',
  'https://lingva.ml/api/v1/audio/sv/',
  'https://translate.plausibility.cloud/api/v1/audio/sv/',
]

function attachAudio(url: string, token: number): HTMLAudioElement | null {
  if (!isCurrent(token)) {
    return null
  }
  const audio = ensureAudio()
  audio.pause()
  audio.muted = false
  audio.setAttribute('playsinline', 'true')
  audio.preload = 'auto'
  audio.src = url
  return audio
}

function playElement(
  audio: HTMLAudioElement,
  token: number,
  timeoutMs: number,
): Promise<boolean> {
  return new Promise((resolve) => {
    let settled = false
    const done = (ok: boolean) => {
      if (settled) {
        return
      }
      settled = true
      window.clearTimeout(timer)
      audio.removeEventListener('playing', onPlaying)
      audio.removeEventListener('error', onError)
      resolve(ok && isCurrent(token))
    }
    const onPlaying = () => done(true)
    const onError = () => done(false)
    const timer = window.setTimeout(() => done(false), timeoutMs)
    audio.addEventListener('playing', onPlaying)
    audio.addEventListener('error', onError)
    try {
      void audio.play().catch(() => done(false))
    } catch {
      done(false)
    }
  })
}

function playUrl(
  url: string,
  token: number,
  timeoutMs: number,
): Promise<boolean> {
  const audio = attachAudio(url, token)
  if (!audio) {
    return Promise.resolve(false)
  }
  return playElement(audio, token, timeoutMs)
}

async function speakWithLingva(text: string, token: number): Promise<boolean> {
  const path = encodeURIComponent(text)
  for (const base of LINGVA_AUDIO) {
    if (!isCurrent(token)) {
      return false
    }
    const controller = new AbortController()
    const timer = window.setTimeout(() => controller.abort(), 7000)
    try {
      const response = await fetch(`${base}${path}`, { signal: controller.signal })
      if (!response.ok) {
        continue
      }
      const data = (await response.json()) as { audio?: unknown }
      if (!Array.isArray(data.audio) || data.audio.length === 0) {
        continue
      }
      const bytes = Uint8Array.from(data.audio as number[])
      const objectUrl = URL.createObjectURL(
        new Blob([bytes], { type: 'audio/mpeg' }),
      )
      const ok = await playUrl(objectUrl, token, 5000)
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 30_000)
      if (ok) {
        return true
      }
    } catch {
      continue
    } finally {
      window.clearTimeout(timer)
    }
  }
  return false
}

async function speakWithAudio(
  text: string,
  token: number,
  preferChina: boolean,
): Promise<boolean> {
  const google = [audioUrl(text, 'tw-ob'), audioUrl(text, 'gtx')]
  const youdao = youdaoUrl(text)
  const direct = preferChina ? [youdao, ...google] : [...google, youdao]
  const directTimeout = preferChina ? 2500 : 4000
  for (const url of direct) {
    if (await playUrl(url, token, directTimeout)) {
      return true
    }
    if (!isCurrent(token)) {
      return false
    }
  }
  return speakWithLingva(text, token)
}

function wakeIosSpeech() {
  if (!('speechSynthesis' in window)) {
    return
  }
  const dummy = new SpeechSynthesisUtterance(' ')
  dummy.volume = 0
  dummy.rate = 1
  dummy.lang = 'sv-SE'
  window.speechSynthesis.speak(dummy)
}

export function stopSpeaking() {
  speakToken += 1
  sharedAudio?.pause()
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
  const tapUnlock = needsTapUnlock()
  const voices = currentVoices()
  const osVoice = pickSwedishVoice(voices, true)
  const voice = pickSwedishVoice(voices, false)

  if (tapUnlock) {
    if (isIos()) {
      const audioPromise = speakWithAudio(trimmed, token, false)
      if ('speechSynthesis' in window) {
        wakeIosSpeech()
        const chosen =
          isLetterSpelled(trimmed) && osVoice ? osVoice : (osVoice ?? voice)
        void speakWithSynthesis(trimmed, chosen, token, true)
      }
      if (await audioPromise) {
        return { ok: true }
      }
      if (!isCurrent(token)) {
        return { ok: false, reason: 'aborted' }
      }
      if ('speechSynthesis' in window) {
        return { ok: true }
      }
      return { ok: false, reason: 'no-swedish-voice' }
    }

    if (await speakWithAudio(trimmed, token, true)) {
      if (isCurrent(token) && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
      return { ok: true }
    }
    if (!isCurrent(token)) {
      return { ok: false, reason: 'aborted' }
    }
    const chosen =
      isLetterSpelled(trimmed) && osVoice ? osVoice : (osVoice ?? voice)
    if (chosen && (await speakWithSynthesis(trimmed, chosen, token, false))) {
      return { ok: true }
    }
    if (!isCurrent(token)) {
      return { ok: false, reason: 'aborted' }
    }
    return { ok: false, reason: 'no-swedish-voice' }
  }

  const readyVoices = voices.length > 0 ? voices : await loadVoices()
  if (!isCurrent(token)) {
    return { ok: false, reason: 'aborted' }
  }

  const desktopOs = pickSwedishVoice(readyVoices, true)
  const desktopVoice = pickSwedishVoice(readyVoices, false)

  if (isLetterSpelled(trimmed) && desktopOs) {
    if (await speakWithSynthesis(trimmed, desktopOs, token, false)) {
      return { ok: true }
    }
    if (!isCurrent(token)) {
      return { ok: false, reason: 'aborted' }
    }
  }

  if (desktopVoice && voiceQuality(desktopVoice, false) >= 3) {
    if (await speakWithSynthesis(trimmed, desktopVoice, token, false)) {
      return { ok: true }
    }
    if (!isCurrent(token)) {
      return { ok: false, reason: 'aborted' }
    }
  }

  if (await speakWithAudio(trimmed, token, false)) {
    return { ok: true }
  }
  if (!isCurrent(token)) {
    return { ok: false, reason: 'aborted' }
  }

  if (desktopVoice && (await speakWithSynthesis(trimmed, desktopVoice, token, false))) {
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
    return '这个浏览器不支持朗读。换 Safari 或 Chrome 再试。'
  }
  if (isIos()) {
    return '现在读不出来。请联网，并打开手机侧面的铃声开关后再点一次。'
  }
  return '现在读不出来。请确认手机已联网后再点一次。国内安卓一般不用翻墙。'
}
