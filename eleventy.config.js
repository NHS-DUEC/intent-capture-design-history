import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(nhsukEleventyPlugin)

  eleventyConfig.addPassthroughCopy('docs/admin')

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
