import { createRequire } from 'node:module'
import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

const require = createRequire(import.meta.url)
const { site } = require('./package.json')

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    stylesheets: ['/assets/application.css'],
    header: {
      logo: {
        href: '/'
      },
      navigation: {
        items: [
          { text: 'Home', href: '/' },
          { text: 'Posts', href: '/posts/' },
          { text: 'Timeline', href: '/timeline/' },
          { text: 'User needs', href: '/userneeds/' },
          { text: 'Decisions', href: '/decisions/' },
          { text: 'Concepts', href: '/concepts/' },
          { text: 'Evidence', href: '/evidence/' },
          { text: 'Roadmap', href: '/roadmap/' }
        ]
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
            ? `This need has been met when: ${need.data.acceptanceClauses.join('; ')}.`
            : undefined
        }
      })
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: process.env.GITHUB_ACTIONS ? `${site.pathPrefix}/` : '/',
    dir: {
      input: 'docs',
    },
  }
}
