# Revō Design System

Canonical tokens live in `src/styles/revo-design-system.css` (CSS variables). Tailwind semantic colors are mirrored in `src/styles/landing-tailwind.css` `@theme` for utility classes.

## Tokens (YAML source)

### colors

| token | value |
| --- | --- |
| surface | `#fdf8f8` |
| surface-dim | `#ddd9d9` |
| surface-bright | `#fdf8f8` |
| surface-container-lowest | `#ffffff` |
| surface-container-low | `#f7f3f2` |
| surface-container | `#f1edec` |
| surface-container-high | `#ebe7e7` |
| surface-container-highest | `#e5e2e1` |
| on-surface | `#1c1b1b` |
| on-surface-variant | `#46464a` |
| inverse-surface | `#313030` |
| inverse-on-surface | `#f4f0ef` |
| outline | `#77767b` |
| outline-variant | `#c7c6ca` |
| surface-tint | `#5f5e60` |
| primary | `#010102` |
| on-primary | `#ffffff` |
| primary-container | `#1c1c1e` |
| on-primary-container | `#858486` |
| inverse-primary | `#c8c6c8` |
| secondary | `#5e5e65` |
| on-secondary | `#ffffff` |
| secondary-container | `#e3e1ea` |
| on-secondary-container | `#64646b` |
| tertiary | `#010100` |
| on-tertiary | `#ffffff` |
| tertiary-container | `#1f1b1a` |
| on-tertiary-container | `#8a8381` |
| error | `#ba1a1a` |
| on-error | `#ffffff` |
| error-container | `#ffdad6` |
| on-error-container | `#93000a` |
| primary-fixed | `#e4e2e4` |
| primary-fixed-dim | `#c8c6c8` |
| on-primary-fixed | `#1b1b1d` |
| on-primary-fixed-variant | `#474649` |
| secondary-fixed | `#e3e1ea` |
| secondary-fixed-dim | `#c7c5cd` |
| on-secondary-fixed | `#1a1b21` |
| on-secondary-fixed-variant | `#46464d` |
| tertiary-fixed | `#eae0de` |
| tertiary-fixed-dim | `#cdc5c3` |
| on-tertiary-fixed | `#1f1b1a` |
| on-tertiary-fixed-variant | `#4b4644` |
| background | `#fdf8f8` |
| on-background | `#1c1b1b` |
| surface-variant | `#e5e2e1` |

### Product accents (spec)

| role | value |
| --- | --- |
| Primary headline / primary action text | `#1c1c1e` |
| Secondary body / metadata | `#6b6b72` |
| UI border (cards, inputs) | `#e8e8e4` |
| SOS / emergency only | `#d93025` |
| Warning / amber | `#f0a500` |
| Availability / success (teal) | `#00a693` |

### typography

- **display:** Inter, 34px / 41px, weight 700, letter-spacing -0.02em  
- **h1:** Inter, 28px / 34px, weight 700, letter-spacing -0.01em  
- **h2:** Inter, 22px / 28px, weight 600, letter-spacing -0.01em  
- **body-lg:** Inter, 17px / 24px, weight 400, letter-spacing -0.01em  
- **body-md:** Inter, 15px / 20px, weight 400  
- **label-caps:** Inter, 12px / 16px, weight 600, letter-spacing 0.05em, uppercase in UI  
- **callout:** Inter, 13px / 18px, weight 400  

### rounded

| token | value |
| --- | --- |
| sm | `0.25rem` |
| DEFAULT | `0.5rem` |
| md | `0.75rem` |
| lg | `1rem` |
| xl | `1.5rem` |
| full | `9999px` |

### spacing (4px baseline)

| token | value |
| --- | --- |
| base | `4px` |
| xs | `8px` |
| sm | `12px` |
| md | `16px` |
| lg | `24px` |
| xl | `32px` |
| container-margin | `20px` |
| gutter | `16px` |

---

## Brand & style

The design system is engineered to project reliability, urgency, and professional precision. Rooted in the principles of Apple’s Human Interface Guidelines, it prioritizes clarity and functional elegance to support users in high-stress roadside situations.

The brand personality is **composed and authoritative**. It balances the grit of automotive services with a high-end digital marketplace experience. The aesthetic is **Corporate Modern**, utilizing generous whitespace and a rigorous grid to instill a sense of calm and order. Every interaction is designed to feel intentional, reducing cognitive load for drivers seeking assistance or parts.

## Colors

The palette is anchored by a sophisticated off-white background and pure white surfaces, creating a layered effect that mimics physical paper and cards.

- **Primary text (`#1c1c1e`):** Headlines and primary actions for accessibility.  
- **Secondary text (`#6b6b72`):** Metadata, descriptions, supporting labels.  
- **Functional accents:** Semantic only — **SOS red** for emergency triggers; **amber** for warnings / pending; **teal** for availability and success.

## Typography

**Inter** carries the systematic look of San Francisco. Headlines use tight letter-spacing and heavy weights; body copy uses generous line heights. **Label-caps** supports section headers and marketplace specs.

## Layout & spacing

**Fixed grid** on desktop, **fluid grid** on mobile. Rhythm follows a **4px baseline**. Minimum **20px** horizontal margin on mobile. Related groups: **8px (xs)** or **12px (sm)** gaps; distinct sections: **32px (xl)**.

### Landing header (marketing shell)

- **Minimum height:** **96px** (`LANDING_HEADER_MIN_HEIGHT_PX` in `LandingPage.tsx`). Rationale: matches a spacious marketing nav (Apple-style); keeps tap targets and icon rows comfortable.
- **Glass:** frosted bar (`backdrop-blur-2xl`, translucent white) over scrolling content.

## Elevation & depth

Tonal layers and ambient shadows — not heavy gradients.

- **Level 0 (canvas):** `#f7f7f5` — app shell behind content.  
- **Level 0 (document background):** `background` token `#fdf8f8`.  
- **Level 1 (cards):** `#ffffff` with **1px** border `#e8e8e4`.  
- **Level 2 (floating):** `#ffffff` with soft shadow (Y 4, blur 12, black at ~5% opacity).

## Shapes

Squircle-inspired rounding: controls **8px** (`0.5rem`), large cards **16px** (`1rem`), chips **4px** (`0.25rem`).

## Components

### Buttons

- **Primary:** solid `#1c1c1e`, white text, **16px** vertical padding.  
- **SOS:** solid `#d93025`, white text, leading icon.  
- **Secondary:** transparent, **1px** border `#e8e8e4`.

### Cards

White surface, **16px** padding, **1px** `#e8e8e4` border; **h2** + **body-md** hierarchy.

### Inputs

White surface, **1px** `#e8e8e4` border; focus border `#1c1c1e`. Labels use **callout** above the field.

### Status chips

Low-contrast pills: e.g. teal at **10%** background with teal text; muted gray for neutral / out of stock.

### Marketplace

- Persistent **vehicle** strip in the top bar (year / make / model) for parts filtering.  
- **Live map** in service cards: subtle `#e8e8e4` border and rounded corners.

