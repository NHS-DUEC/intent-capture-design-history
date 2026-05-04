export default {
  tags: 'userNeeds',
  layout: 'user-need',
  eleventyComputed: {
    permalink: (data) => {
      const num = data.userNeedIds?.[data.page.fileSlug]
      return num ? `/userneed/${num}/` : false
    }
  }
}
