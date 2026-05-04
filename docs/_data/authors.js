import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default function () {
  const authorsDir = join(__dirname, '..', 'authors')

  if (!existsSync(authorsDir)) return {}

  const authors = {}
  for (const file of readdirSync(authorsDir)) {
    if (!file.endsWith('.json')) continue
    const data = JSON.parse(readFileSync(join(authorsDir, file), 'utf8'))
    if (data.name) {
      authors[data.name] = data
    }
  }

  return authors
}
