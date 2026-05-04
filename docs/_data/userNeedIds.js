import { readdirSync, existsSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default function () {
  const needsDir = join(__dirname, '..', 'user-needs')

  if (!existsSync(needsDir)) return {}

  const slugs = readdirSync(needsDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => basename(f, '.md'))
    .sort()

  return Object.fromEntries(slugs.map((slug, i) => [slug, i + 1]))
}
