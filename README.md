# AI Intent Capture design history

The design history for NHS AI Intent Capture, documenting how the work develops through research, design decisions and iteration. The site includes blog posts, user needs and reference pages for concepts and architecture.

Built with Eleventy, the NHS.UK Eleventy plugin and Decap CMS.

## Run locally

Use Node.js 22 and npm, matching the deployment workflow.

```sh
npm ci
npm start
```

Open [localhost:8080](http://localhost:8080). To also run the local CMS backend, use `npm run dev` and open [the editor](http://localhost:8080/admin/).

## Edit content

- `docs/posts/`: Markdown blog posts. Follow an existing post's frontmatter for the title, date, description, author and layout.
- `docs/user-needs/`: User needs.
- `docs/concepts/`: Concepts, glossary and architecture pages.
- `docs/images/`: Images used in the site.
- `docs/_includes/` and `docs/assets/`: Templates and styles.

## Images

- Put images directly in `docs/images/`, not in a subfolder. The CMS only finds images at the top level of its media folder. Author thumbnails and glossary images are the exceptions: they go in `docs/images/authors/` and `docs/images/glossary/`.
- Write image paths without a leading slash, for example `images/example.png`. The CMS then loads the image from the repository, and the site build turns it into the right URL locally and on GitHub Pages. A path starting with `/` will not load in the CMS on GitHub Pages.
- For an image with a caption, use the "Image with caption" block in the CMS. It saves the NHS.UK image markup:

  ```html
  <figure class="nhsuk-image">
    <img class="nhsuk-image__img" src="images/example.png" alt="Description of the image" loading="lazy" decoding="async">
    <figcaption class="nhsuk-image__caption">Caption text</figcaption>
  </figure>
  ```

  Keep to this markup if you write it by hand, so the CMS can still edit it.

## Build and deploy

Run `npm run build` to generate the site in `_site/`. GitHub Actions builds and deploys changes pushed to `main` to GitHub Pages.
