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

  eleventyConfig.addFilter('resolveAuthors', function (author, authorsData) {
    if (!author || !authorsData) return []
    const authorList = Array.isArray(author) ? author : [author]
    return authorList.map((name) => authorsData[name] || { name })
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
