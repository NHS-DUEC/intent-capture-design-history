export default {
  tags: 'glossary',
  layout: 'glossary-term',
  permalink: '/concepts/glossary/{{ page.fileSlug }}/',
  eleventyComputed: {
    title: (data) => data.term
  }
}
