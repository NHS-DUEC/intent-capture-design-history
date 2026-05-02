import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(nhsukEleventyPlugin)

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
    },
  }
}
