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
      service: {
        text: 'Ask the NHS - Design history',
        href: '/'
      },
      navigation: {
        items: [
          { text: 'Home', href: '/' },
          { text: 'Posts', href: '/posts/' },
          { text: 'User needs', href: '/userneeds/' },
          { text: 'Concepts', href: '/concepts/' }
        ]
      }
    }
  })

  eleventyConfig.addPassthroughCopy('docs/admin')
  eleventyConfig.addPassthroughCopy({ 'docs/images': 'images' })
  eleventyConfig.addPassthroughCopy({
    'node_modules/decap-cms/dist/decap-cms.js': 'decap-cms/decap-cms.js',
  })

  eleventyConfig.addPassthroughCopy({
    'node_modules/mermaid/dist/mermaid.min.js': 'assets/mermaid.min.js',
  })

  // Render ```mermaid fences as diagrams rather than highlighted code
  eleventyConfig.amendLibrary('md', (md) => {
    const fence = md.renderer.rules.fence
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
      const token = tokens[idx]
      if (token.info.trim() !== 'mermaid') {
        return fence(tokens, idx, options, env, self)
      }
      return `<pre class="mermaid app-mermaid">${md.utils.escapeHtml(token.content)}</pre>\n`
    }
  })

  // Only load Mermaid on pages that contain a diagram. This runs after the
  // HTML base plugin, so the path prefix has to be added here.
  const mermaidSrc = `${process.env.GITHUB_ACTIONS ? site.pathPrefix : ''}/assets/mermaid.min.js`
  eleventyConfig.addTransform('mermaid', function (content) {
    if (!this.page.outputPath?.endsWith('.html') || !content.includes('class="mermaid')) {
      return content
    }
    return content.replace(
      '</body>',
      `<script src="${mermaidSrc}"></script>
<script>mermaid.initialize({ startOnLoad: true, theme: 'neutral', fontFamily: '"Frutiger W01", arial, sans-serif' })</script>
</body>`
    )
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
