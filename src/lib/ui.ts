export function coarsePointer(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches
  )
}

export function shortcutTitle(label: string, shortcut: string): string {
  return coarsePointer() ? label : `${label}（${shortcut}）`
}
