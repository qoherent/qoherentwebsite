# Qoherent Website

Qoherent's public website is a static Hugo site built with Tailwind CSS. Content
is Markdown; Hugo templates and assets produce the files published to GitHub
Pages.

## Requirements

- Node.js 20.19 or newer
- npm
- Hugo Extended 0.161.1 or newer
- Go 1.20 or newer for Hugo modules

On macOS:

```sh
brew install go hugo
npm ci
```

## Development

Start the local server:

```sh
npm run dev
```

Open `http://localhost:1313`.

Build production files into `public/`:

```sh
npm run build
```

Run the complete validation suite:

```sh
npm run check
```

## Project Structure

- `content/english/`: page, blog, team, and section content
- `layouts/`: Qoherent-owned Hugo template overrides
- `assets/`: source images, JavaScript, SCSS, and Tailwind entry files
- `config/_default/`: menus, language settings, modules, and site parameters
- `data/`: theme and social-link data
- `themes/hugoplate/`: vendored base theme; do not add project changes here
- `hugo.toml`: Hugo build and asset configuration

Project files in `layouts/` and `assets/` override files at the same path in the
vendored theme. Add new Qoherent behavior to the root directories so the theme
can be updated independently.

## Common Changes

### Edit a page

Update the matching Markdown file in `content/english/pages/`. The front matter
controls the title, description, draft state, and page image.

### Add a blog post

Create a page bundle at `content/english/blog/<slug>/index.md`. Keep post images
in the same directory and use descriptive alternative text.

### Change navigation

Edit `config/_default/menus.en.toml`. Menu entries must have visible labels and
valid destinations.

### Change site settings

Edit `config/_default/params.toml`. Do not hardcode service endpoints or
credentials in templates.

### Change styles or templates

Use root `assets/` and `layouts/`. Do not edit files under `themes/hugoplate/`.

## Image Rules

- Use lowercase kebab-case filenames.
- Do not add names that differ only by capitalization. Git treats those as
  distinct files, but default macOS filesystems do not.
- Resize source images to the largest size used by the site.
- Use descriptive alt text for informative images and empty alt text only for
  decorative images.

## Validation

`npm run check` creates an unminified local build in `.hugo-validation/`,
validates generated HTML, checks internal links and fragments, checks critical
Markdown rules, and runs the npm security audit.

See `docs/quality-baseline.md` for the legacy HTML rules that remain deferred
until the content redesign.

The production workflow in `.github/workflows/main.yml` installs dependencies
with `npm ci`, builds with the pinned Hugo version, and publishes the generated
artifact.
