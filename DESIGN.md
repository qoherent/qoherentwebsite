---
version: alpha
name: Qoherent Dark Radio Intelligence
description: Design system extracted from the Hugo homepage and /elements route implementation.
colors:
  primary: "#121212"
  on-primary: "#ffffff"
  body: "#ffffff"
  text: "#444444"
  text-dark: "#040404"
  text-light: "#717171"
  border: "#eaeaea"
  theme-light: "#f6f6f6"
  darkmode-primary: "#ffffff"
  darkmode-on-primary: "#040404"
  darkmode-body: "#1c1c1c"
  darkmode-text: "#B4AFB6"
  darkmode-text-dark: "#ffffff"
  darkmode-text-light: "#B4AFB6"
  darkmode-border: "#3E3E3E"
  darkmode-theme-light: "#262626"
  qoherent-gray: "#625f63"
  qoherent-black: "#333745"
  qoherent-purple: "#884da0"
  qoherent-pink: "#e63462"
  qoherent-blue: "#35BAF6"
  qoherent-blue-darkmode: "#03a9f4"
  code-inline-bg: "#171717"
  code-inline-text: "rgb(221, 135, 101)"
  code-block-bg: "#272822"
  copy-button-text: "#d1d1d1"
typography:
  h1:
    fontFamily: Open Sans, sans-serif
    fontSize: 48.828125px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0em
  h1-mobile:
    fontFamily: Open Sans, sans-serif
    fontSize: 39.0625px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0em
  hero-title:
    fontFamily: Open Sans, sans-serif
    fontSize: 3rem
    fontWeight: 150
    lineHeight: 1.25
    letterSpacing: 0em
  h2:
    fontFamily: Open Sans, sans-serif
    fontSize: 39.0625px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0em
  h2-mobile:
    fontFamily: Open Sans, sans-serif
    fontSize: 31.25px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0em
  h3:
    fontFamily: Open Sans, sans-serif
    fontSize: 31.25px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0em
  h3-mobile:
    fontFamily: Open Sans, sans-serif
    fontSize: 25px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0em
  h4:
    fontFamily: Open Sans, sans-serif
    fontSize: 25px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0em
  h5:
    fontFamily: Open Sans, sans-serif
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0em
  h6:
    fontFamily: Open Sans, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0em
  body:
    fontFamily: Open Sans, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0em
  body-lg:
    fontFamily: Open Sans, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0em
  nav:
    fontFamily: Open Sans, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0em
  nav-dropdown:
    fontFamily: Open Sans, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.625
    letterSpacing: 0em
  button:
    fontFamily: Open Sans, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.625
    letterSpacing: 0em
  button-sm:
    fontFamily: Open Sans, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.625
    letterSpacing: 0em
  blockquote:
    fontFamily: Open Sans, sans-serif
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.625
    letterSpacing: 0em
  inline-code:
    fontFamily: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace
    fontSize: 12.8px
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0em
rounded:
  sm: 4px
  md: 6px
  lg: 12px
  xl: 16px
  page-header: 16px
  full: 9999px
spacing:
  container-padding: 16px
  tailwind-container-padding: 32px
  container-max-2xl: 1320px
  grid-gutter: 32px
  section-y: 96px
  section-y-xl: 112px
  section-sm-y: 64px
  section-sm-y-xl: 80px
  header-y: 24px
  nav-link-x: 12px
  nav-link-y: 12px
  nav-link-desktop-x: 8px
  nav-link-desktop-y: 12px
  dropdown-min-width: 180px
  dropdown-padding: 16px
  button-x: 20px
  button-y: 8px
  button-sm-x: 16px
  button-sm-y: 6px
  form-x: 24px
  form-y: 16px
  blockquote-x: 32px
  blockquote-y: 40px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 20px
  button-primary-dark:
    backgroundColor: "{colors.darkmode-primary}"
    textColor: "{colors.darkmode-on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 20px
  button-outline-primary:
    backgroundColor: transparent
    textColor: "{colors.text-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 20px
  button-outline-primary-dark:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 20px
  button-small:
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
    padding: 6px 16px
  form-input:
    backgroundColor: "{colors.theme-light}"
    textColor: "{colors.text-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  form-input-dark:
    backgroundColor: "{colors.darkmode-theme-light}"
    textColor: "{colors.darkmode-text-light}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  social-icon:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    width: 36px
    height: 36px
  social-icon-dark:
    backgroundColor: "{colors.darkmode-primary}"
    textColor: "{colors.darkmode-on-primary}"
    rounded: "{rounded.md}"
    width: 36px
    height: 36px
  inline-code:
    backgroundColor: "{colors.code-inline-bg}"
    textColor: "{colors.code-inline-text}"
    typography: "{typography.inline-code}"
    rounded: "{rounded.sm}"
    padding: 3px 4px
---

# Qoherent Design System

## Overview

Qoherent's implemented UI is a dark-first technical marketing system for radio intelligence, RF machine learning, SDR services, and 5G engineering. It should feel engineered, direct, and research-oriented: dark matte pages, white headings and actions, restrained gray body copy, and selective Qoherent accents for hover states or optional emphasis.

The homepage uses a full-viewport photographic RF/spectrogram hero with centered white copy, then alternating service/application sections with images and concise bullet lists. The `/elements` route is a rendered component reference page for markdown content, shortcodes, code samples, media, notices, tabs, accordions, tables, images, galleries, sliders, and videos.

## Colors

The source of truth is `data/theme.json`, extended in `tailwind.config.js`. The default site mode is dark, set by `theme_default = "dark"` with the theme switcher disabled.

- **Primary (#121212):** The light-mode button/social/action base. It is near-black and should be used as a solid action surface in light contexts.
- **Dark body (#1c1c1c):** The default page background in production because the site loads with the `dark` class.
- **Dark raised surface (#262626):** Header-adjacent panels, dropdowns, footers, tabs, accordions, form inputs, and code blocks in dark mode.
- **Dark text (#B4AFB6):** Main body copy in dark mode; use it for prose, lists, metadata, and long-form content.
- **White (#ffffff):** Dark-mode headings, primary buttons, logo text treatment, nav actions, page-header title, and social icon surfaces.
- **Qoherent blue (#35BAF6 / #03a9f4):** Hover accent for dark navigation and footer links; dark-mode token uses #03a9f4.
- **Qoherent purple (#884da0):** Copy-code hover/check accent and available optional brand color.
- **Qoherent pink (#e63462), gray (#625f63), and black (#333745):** Available optional palette tokens documented on `/elements` for page/header text customizations.
- **Code inline colors:** Inline code uses #171717 background, rgb(221, 135, 101) text, and a low-contrast white border at 10% opacity.

Gradients are part of the page language but are not encoded as color tokens. The homepage hero places the image behind `linear-gradient(to top, transparent 0%, #1c1c1c 80%)`. Alternating feature bands use a light-mode vertical gradient from rgba(249,249,249,1) at 0.53% to white at 83.28%, and dark mode uses a vertical gradient from `darkmode-theme-light` (#262626) to `darkmode-body` (#1c1c1c).

## Typography

All configured primary and secondary typography resolves to **Open Sans**, sans-serif. The configured source string is `Open+Sans:wght@300`, but individual components override weight with Tailwind utilities where needed.

Headings use the secondary font family, tight line-height, and zero letter spacing. Global H1 and H2 are white, while H3-H6 use dark text in light mode and white in dark mode. The type scale is generated from a 16px base and 1.25 ratio:

- H1: 48.828125px desktop, 39.0625px below `md`
- H2: 39.0625px desktop, 31.25px below `md`
- H3: 31.25px desktop, 25px below `md`
- H4: 25px, medium weight
- H5: 20px, medium weight
- H6: 16px, medium weight

Body copy is 16px Open Sans with normal weight and relaxed line-height. Feature lead paragraphs use `text-lg` at 18px. Buttons use semibold 16px text with capitalization. The homepage hero overrides the normal H1 scale to 3rem with weight 150 and uses a 1.5rem supporting paragraph.

Markdown content on `/elements` is rendered through the `.content` prose wrapper. Prose headings have 0.6em top margin and 0.3em bottom margin, paragraphs remain 16px, blockquotes are 24px Open Sans with a border treatment, and inline code uses the monospace stack listed in tokens at 80% of the base font size.

## Layout

The site uses Tailwind screens at 540px, 768px, 1024px, 1280px, and 1536px. Containers are centered and use 16px horizontal padding from the local `.container` rule; the Tailwind container config also defines 32px padding, but the local component layer is the applied site convention. At 2xl, containers cap at 1320px.

The grid comes from `tailwind-bootstrap-grid` with a 32px gutter. Homepage feature rows use responsive columns: image column `md:col-5`, text column `md:col-7 lg:col-6`, with alternating order on even-indexed sections. Feature rows align center and justify space-between.

Vertical rhythm is section-based:

- `.section`: 96px top/bottom, 112px at `xl`
- `.section-sm`: 64px top/bottom, 80px at `xl`
- Header: 24px top/bottom
- Footer row: 40px top/bottom

The homepage hero has responsive viewport heights: 85vh base, 75vh at `sm`, and 65vh at `lg`. Its content is absolutely centered over the image and constrained by the standard container. The optional homepage markdown body is rendered in a normal container with `.prose dark:prose-invert max-w-none` and no section vertical padding.

The `/elements` page uses the default single-page layout: a page header section, then a `.section-sm` content area with centered row and `lg:col-10` content width.

## Elevation & Depth

Depth is mostly tonal. The dark site relies on background steps from #1c1c1c to #262626, white foreground actions, and borders rather than heavy shadow. Dropdown menus are the clearest elevated element, using `shadow-xl` with a rounded dark surface and desktop opacity/visibility transitions.

The available `.shadow` utility is subtle: `0px 4px 40px rgba(0, 0, 0, 0.05)`. Blockquotes, tables, tabs, accordions, forms, and notices use borders and surface color to create hierarchy. Swiper pagination uses size contrast: inactive bullets are 10px, active bullets are 16px.

## Shapes

The shape language is moderately rounded but not pill-heavy. The implementation defines these overrides:

- `rounded-sm`: 4px
- `rounded`: 6px
- `rounded-lg`: 12px
- `rounded-xl`: 16px

Buttons use the 6px default rounded token, small buttons use 4px, notices/tabs/accordions/blockquotes/pre blocks use 12px, and the page-header panel uses Tailwind `rounded-2xl` at 16px. Theme switcher tracks and knobs are fully rounded. Images inside prose use the 6px rounded token.

## Components

**Header and navigation:** The header is sticky at the top, z-index 30, with dark body background and 24px vertical padding. The navbar is a flex row with wrapping. The logo is rendered at 150px by 32px from params. Desktop nav links are block elements with 8px horizontal and 12px vertical padding, semibold styling from classes plus inline Open Sans weights: normal links use weight 400, dropdown triggers and dropdown links use weight 500. Dark nav text is white; hover color is Qoherent blue. Mobile uses a hidden checkbox toggle with 24px SVG open/close icons.

**Dropdowns:** Dropdown lists use `min-width: 180px`, 16px padding, 6px radius, dark raised surface in dark mode, and `shadow-xl`. They are hidden on mobile until the parent is active and become hover-visible on desktop.

**Buttons:** Base buttons are inline-block, semibold, capitalized, bordered, rounded, and transition-enabled. Primary buttons are black with white text in light mode and white with black text in dark mode. Outline buttons are transparent with dark/white borders and invert on hover. Small buttons use 14px text, 16px horizontal padding, 6px vertical padding, and 4px radius.

**Homepage hero:** Uses image `/images/sgramF.jpg`, absolute full-cover image placement, a dark-to-transparent overlay gradient, centered text, white H1, 1.5rem paragraph, and a primary CTA button with a Font Awesome right-arrow icon.

**Homepage feature sections:** Each section has a gradient band, one image, H2, 18px paragraph, check-icon bullet list, and a primary CTA. Bullet items use relative positioning, 24px left padding, 16px bottom margin, and a Font Awesome check at left/top 6px.

**Page header:** Single pages use a centered container with a rounded 16px gradient panel and 32px horizontal by 56px vertical padding. The title is white and followed by breadcrumbs with 24px top margin.

**Content prose:** `.content` applies Tailwind Typography with full width. Links are underlined and use body text color, changing to primary on hover. Horizontal rules use border tokens. Tables are rounded with an inherited-radius border overlay, theme-light/dark raised table headers, 16px header horizontal padding, 18px cell vertical padding, and dark-mode border colors.

**Blockquotes:** Blockquotes are 12px rounded panels with a full border plus 10px left border in primary/darkmode-primary, 32px horizontal padding, 40px vertical padding, theme-light/dark raised background, 24px secondary-font text, and non-italic styling.

**Inline and block code:** Inline code uses a 4px radius, 1px rgba(255,255,255,0.1) border, #171717 background, orange-brown text, and monospace 80% sizing. Code blocks are rounded 12px, use theme-light/dark raised backgrounds through prose, and the copy script forces code background to #272822. Copy buttons are positioned absolute at top 2px/right 3px, transparent, borderless, #d1d1d1, and switch from copy icon to check icon for 1500ms after click.

**Forms:** Inputs use full width, 24px horizontal and 16px vertical padding, transparent border, 6px radius, raised background, dark text in light mode, light dark-mode text, and transparent focus ring. Labels use 20px secondary-font text with 16px bottom margin.

**Social icons:** Social links are inline 36px squares, centered flex, 6px rounded, primary/darkmode-primary background, white or dark text depending on mode, and 20px SVG icons.

**Tabs:** Tabs use a 12px rounded bordered wrapper with overflow hidden. The tab nav uses raised background, left padding 16px, and border colors. Tab nav items are 18px, 32px horizontal padding, dark/white text, with active state indicated by dark or darkmode-primary border. Panels use 16px horizontal padding and no top padding.

**Accordions:** Accordions use a 12px rounded bordered wrapper, raised background, 24px bottom margin, hidden overflow, and dark/white header text.

**Notices:** Notices inherit module behavior and are force-rounded to 12px. Custom notice SVG icons should be 20px by 20px and use `currentColor` fill so the notice color controls the icon.

**Media shortcodes:** `/elements` exercises image, gallery, slider, YouTube, and video shortcodes. Prose images are max-width 100% and rounded. Gallery slider instances are forced left-aligned with `ml-0`; example slider content uses `max-w-[600px] ml-0`. Custom videos may use `rounded-lg` for 12px corners.

**Footer:** Footer uses dark raised background in dark mode, with a 40px vertical row. It has three columns at `lg`: brand/tagline, footer links, and social icons. The tagline is 14px and nowrap. Footer links use Qoherent blue on dark hover.

## Do's and Don'ts

- Do keep the site dark-first: #1c1c1c body, #262626 raised surfaces, white headings, and muted lavender-gray body copy.
- Do use real RF, signal, SDR, spectrogram, or product imagery as primary visual material.
- Do keep CTAs high contrast: white buttons on dark surfaces and black buttons on light surfaces.
- Do preserve the 16px base, 1.25 heading scale, and Open Sans family unless intentionally redesigning the whole site.
- Do use Qoherent blue sparingly for hover and accent states rather than flooding whole sections with blue.
- Do use section bands and alternating image/text rows for homepage-style marketing content.
- Don't introduce large decorative gradient blobs, soft pastel themes, or unrelated illustrative assets.
- Don't mix new radius values into the core page shell; use 4px, 6px, 12px, or 16px.
- Don't turn the homepage into a landing-page card layout; the hero is full-bleed image-backed and content is centered over it.
- Don't rely on shadows for hierarchy where the implementation already uses tonal surfaces and borders.
