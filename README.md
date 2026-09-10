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

## Build and deploy

Run `npm run build` to generate the site in `_site/`. GitHub Actions builds and deploys changes pushed to `main` to GitHub Pages.
