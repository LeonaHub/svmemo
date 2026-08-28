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

function attachAudio(url: string, token: number): HTMLAudioElement | null {
  if (!isCurrent(token)) {
    return null
  }
  currentAudio?.pause()
  const audio = new Audio()
  audio.setAttribute('playsinline', 'true')
  audio.preload = 'auto'
  audio.src = url
  currentAudio = audio
  return audio
}

function playElement(audio: HTMLAudioElement, token: number): Promise<boolean> {
  try {
    return audio
      .play()
      .then(() => isCurrent(token))
      .catch(() => false)
  } catch {
    return Promise.resolve(false)
  }
}

function speakWithAudio(text: string, token: number): Promise<boolean> {
  const first = attachAudio(audioUrl(text, 'tw-ob'), token)
  if (!first) {
    return Promise.resolve(false)
  }
  return playElement(first, token).then((ok) => {
    if (ok || !isCurrent(token)) {
      return ok
    }
    const second = attachAudio(audioUrl(text, 'gtx'), token)
    if (!second) {
      return false
    }
    return playElement(second, token)
  })
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
  const tapUnlock = needsTapUnlock()
  const voices = currentVoices()
  const osVoice = pickSwedishVoice(voices, true)
  const voice = pickSwedishVoice(voices, false)

  if (tapUnlock) {
    const audioPromise = speakWithAudio(trimmed, token)
    if ('speechSynthesis' in window) {
      if (isIos()) {
        wakeIosSpeech()
      }
      const chosen =
        isLetterSpelled(trimmed) && osVoice ? osVoice : (osVoice ?? voice)
      void speakWithSynthesis(trimmed, chosen, token, true)
    }
    if (await audioPromise) {
      // 电脑/安卓：网络音频响了就停掉系统朗读，避免叠音。
      // iPhone 静音拨杆会让网页音频没声，系统朗读仍可能出声，所以不要停。
      if (!isIos() && isCurrent(token) && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
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

  if (await speakWithAudio(trimmed, token)) {
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
  return '现在读不出来。请联网后重试，或换 Chrome。'
}
