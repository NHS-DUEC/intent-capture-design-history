export default class CmsConfig {
  data() {
    return {
      permalink: 'admin/config.yml',
      eleventyExcludeFromCollections: true,
    };
  }

  render() {
    const siteUrl = process.env.GITHUB_ACTIONS
      ? 'https://nhs-duec.github.io/nhs-navigator-design-history'
      : 'http://localhost:8080/nhs-navigator-design-history';

    return `backend:
  name: github
  repo: NHS-DUEC/nhs-navigator-design-history
  branch: main
  base_url: https://nhs-navigator-cms-oauth-b17141f9b3f7.herokuapp.com

local_backend: true

site_url: ${siteUrl}
display_url: ${siteUrl}/
logo_url: /nhs-navigator-design-history/admin/nhs-logo.png

media_folder: docs/images
public_folder: /images

collections:
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
`;
  }
}
