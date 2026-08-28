import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Resvg } from '@resvg/resvg-js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const svg = readFileSync(join(root, 'public', 'favicon.svg'))

function writePng(size, name) {
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: size } })
  writeFileSync(join(root, 'public', name), resvg.render().asPng())
}

writePng(180, 'apple-touch-icon.png')
writePng(192, 'pwa-192x192.png')
writePng(512, 'pwa-512x512.png')
