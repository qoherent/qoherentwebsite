# Quality Baseline

The automated checks enforce production builds, internal links and fragments, npm security, critical Markdown syntax, and generated HTML accessibility rules.

Some HTML rules are temporarily disabled because older articles contain block shortcodes inside Markdown paragraphs, deprecated embed attributes, and images without useful alternative text. These rules are recorded in `.htmlvalidate.json`:

- `close-order` and `no-implicit-close`
- `deprecated`
- `element-required-content` and `element-permitted-content`
- `empty-heading` and `long-title`
- `unique-landmark` for Hugo's generated table of contents navigation
- `wcag/h67`

Do not expand this list. Remove exclusions as article templates and content are rebuilt during the redesign. New templates must use semantic controls, explicit button types, accessible names, valid labels, and meaningful image alternatives.
