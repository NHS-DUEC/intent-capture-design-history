import { createRequire } from 'node:module'
import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

const require = createRequire(import.meta.url)
const { site } = require('./package.json')

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    header: {
      logo: {
        href: '/'
      }
    }
  })

  eleventyConfig.addPassthroughCopy('docs/admin')
  eleventyConfig.addPassthroughCopy({ 'docs/images': 'images' })
  eleventyConfig.addPassthroughCopy({
    'node_modules/decap-cms/dist/decap-cms.js': 'decap-cms/decap-cms.js',
  })

  eleventyConfig.addFilter('needId', (n) => `UN${String(n).padStart(3, '0')}`)

  eleventyConfig.addFilter('resolveAuthors', function (author, authorsData) {
    if (!author || !authorsData) return []
    const authorList = Array.isArray(author) ? author : [author]
    return authorList.map((name) => authorsData[name] || { name })
  })

  eleventyConfig.addFilter('userNeedsToItems', function (collection) {
    return [...(collection || [])]
      .sort((a, b) => a.page.fileSlug.localeCompare(b.page.fileSlug))
      .map((need) => {
        const num = need.data.userNeedIds?.[need.page.fileSlug]
        const id = num ? `UN${String(num).padStart(3, '0')}` : undefined
        return {
          href: need.url,
          caption: id,
          title: `As a ${need.data.userType}, I need ${need.data.need} so that ${need.data.reason}.`,
          description: need.data.acceptanceClauses?.length
            ? `Met when: ${need.data.acceptanceClauses.join('; ')}.`
            : undefined
        }
      })
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: `${site.pathPrefix}/`,
    dir: {
      input: 'docs',
    },
  }
}
