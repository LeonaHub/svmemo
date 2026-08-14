export type SpeakResult =
  | { ok: true }
  | { ok: false; reason: 'unsupported' | 'no-swedish-voice' }

function swedishVoice(
  voices: SpeechSynthesisVoice[],
): SpeechSynthesisVoice | undefined {
  return voices.find((voice) => voice.lang.toLowerCase().startsWith('sv'))
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

export async function speakSwedish(text: string): Promise<SpeakResult> {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return { ok: false, reason: 'unsupported' }
  }

  const voices = await loadVoices()
  const voice = swedishVoice(voices)
  if (!voice) {
    return { ok: false, reason: 'no-swedish-voice' }
  }

  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = voice.lang || 'sv-SE'
  utterance.voice = voice
  utterance.rate = 0.9
  window.speechSynthesis.speak(utterance)
  return { ok: true }
}

export function ttsHint(result: SpeakResult): string | null {
  if (result.ok) {
    return null
  }
  if (result.reason === 'unsupported') {
    return '这个浏览器不支持朗读。'
  }
  return '系统里没有瑞典语语音。可以继续拼写，或到系统设置里添加 sv-SE。'
}
