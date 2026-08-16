export type SpeakResult =
  | { ok: true }
  | { ok: false; reason: 'unsupported' | 'no-swedish-voice' }

let currentAudio: HTMLAudioElement | null = null

function swedishVoice(
  voices: SpeechSynthesisVoice[],
): SpeechSynthesisVoice | undefined {
  return (
    voices.find((voice) => voice.lang.toLowerCase() === 'sv-se') ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith('sv'))
  )
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
): Promise<boolean> {
  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = voice?.lang || 'sv-SE'
    if (voice) {
      utterance.voice = voice
    }
    utterance.rate = 0.9

    let settled = false
    const done = (ok: boolean) => {
      if (settled) {
        return
      }
      settled = true
      resolve(ok)
    }

    utterance.onstart = () => done(true)
    utterance.onend = () => done(true)
    utterance.onerror = () => done(false)

    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)

    window.setTimeout(() => {
      if (settled) {
        return
      }
      done(window.speechSynthesis.speaking || window.speechSynthesis.pending)
    }, 700)
  })
}

function speakWithAudio(text: string): Promise<boolean> {
  const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=sv&q=${encodeURIComponent(text)}`
  currentAudio?.pause()
  const audio = new Audio(url)
  currentAudio = audio
  return audio
    .play()
    .then(() => true)
    .catch(() => false)
}

export function stopSpeaking() {
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

  if ('speechSynthesis' in window) {
    const voices = await loadVoices()
    const spoken = await speakWithSynthesis(text, swedishVoice(voices))
    if (spoken) {
      return { ok: true }
    }
  }

  if (await speakWithAudio(text)) {
    return { ok: true }
  }

  if (!('speechSynthesis' in window)) {
    return { ok: false, reason: 'unsupported' }
  }
  return { ok: false, reason: 'no-swedish-voice' }
}

export function ttsHint(result: SpeakResult): string | null {
  if (result.ok) {
    return null
  }
  if (result.reason === 'unsupported') {
    return '这个浏览器不支持朗读。换 Chrome 再试。'
  }
  return '现在读不出来。请联网后重试，或换 Chrome。'
}
