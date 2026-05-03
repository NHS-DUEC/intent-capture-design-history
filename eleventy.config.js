import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(nhsukEleventyPlugin)

  eleventyConfig.addPassthroughCopy('docs/admin')
  eleventyConfig.addPassthroughCopy({
    'node_modules/decap-cms/dist/decap-cms.js': 'decap-cms/decap-cms.js',
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: '/nhs-navigator-design-history/',
    dir: {
      input: 'docs',
    },
  }
}
