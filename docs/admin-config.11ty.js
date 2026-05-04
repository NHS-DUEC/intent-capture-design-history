import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { site } = require('../package.json')

const [org] = site.repo.split('/')
const productionUrl = `https://${org.toLowerCase()}.github.io${site.pathPrefix}`
const localUrl = `http://localhost:8080${site.pathPrefix}`

export default class CmsConfig {
  data() {
    return {
      permalink: 'admin/config.yml',
      eleventyExcludeFromCollections: true,
    }
  }

  render() {
    const siteUrl = process.env.GITHUB_ACTIONS ? productionUrl : localUrl

    return `backend:
  name: github
  repo: ${site.repo}
  branch: main
  base_url: ${site.oauthBaseUrl}

local_backend: true

site_url: ${siteUrl}
display_url: ${siteUrl}/
logo_url: ${site.pathPrefix}/admin/nhs-logo.png

media_folder: docs/images
public_folder: /images

collections:
  - name: user-types
    label: User types
    folder: docs/user-types
    create: true
    identifier_field: name
    slug: "{{name}}"
    format: json
    extension: json
    fields:
      - { label: Name, name: name, widget: string }
      - { label: Description, name: description, widget: string, required: false }

  - name: user-needs
    label: User needs
    folder: docs/user-needs
    create: true
    identifier_field: need
    slug: "{{year}}{{month}}{{day}}{{hour}}{{minute}}{{second}}"
    fields:
      - label: User type
        name: userType
        widget: relation
        collection: user-types
        search_fields: [name]
        value_field: name
        display_fields: [name]
        required: true
      - { label: Need, name: need, widget: string, hint: "Complete the sentence: I need..." }
      - { label: Reason, name: reason, widget: string, hint: "Complete the sentence: so that..." }
      - label: Acceptance clauses
        name: acceptanceClauses
        widget: list
        label_singular: Acceptance clause
        hint: "Complete the sentence: this need has been met when..."
        field: { label: Clause, name: clause, widget: string }

  - name: authors
    label: Authors
    folder: docs/authors
    create: true
    identifier_field: name
    slug: "{{name}}"
    format: json
    extension: json
    media_folder: /docs/images/authors
    public_folder: /images/authors
    fields:
      - { label: Name, name: name, widget: string }
      - { label: Role, name: role, widget: string, required: false }
      - { label: Thumbnail, name: thumbnail, widget: image, required: false }

  - name: posts
    label: Design history posts
    folder: docs/posts
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    preview_path: posts/{{slug}}
    fields:
      - { label: Title, name: title, widget: string }
      - { label: Date, name: date, widget: datetime, default: "{{now}}" }
      - { label: Description, name: description, widget: string, required: false }
      - label: Authors
        name: author
        widget: relation
        collection: authors
        search_fields: [name, role]
        value_field: name
        display_fields: [name, role]
        required: false
        multiple: true
      - { label: Layout, name: layout, widget: hidden, default: post }
      - { label: Body, name: body, widget: markdown }
`
  }
}
