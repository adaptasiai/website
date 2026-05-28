# Adaptasi AI — Company Website Spec

## 1. Concept & Vision

**Adaptasi AI** is an AI implementation and workflow automation consultancy targeting Indonesian businesses and international clients. The brand identity is bold, loud, and confident — neobrutalism design language signals "we're different from typical corporate tech companies." The site should feel like a creative agency collided with a tech startup: raw, playful, memorable.

**Mission:** Helping businesses integrate AI and automation to scale operations efficiently.

**Personality:** Direct, no-fluff, technically credible, approachable.

---

## 2. Design Language

### Aesthetic Direction
**Neobrutalism** — Bold shapes, thick black borders, hard drop shadows, raw geometric forms, and punchy colors. Every element looks intentional and slightly "louder" than typical tech sites.

### Color Palette
| Role | Name | Hex |
|------|------|-----|
| Primary | Electric Yellow | `#FFE500` |
| Accent | Hot Pink | `#FF6B9D` |
| Secondary | Sky Blue | `#00C2FF` |
| Accent 2 | Lime | `#A8FF00` |
| Background | Off White | `#FAFAFA` |
| Surface | Pure White | `#FFFFFF` |
| Border | Pure Black | `#000000` |
| Text | Dark | `#111111` |
| Text Muted | Gray | `#666666` |

### Typography
- **Display / Headings:** `Space Grotesk` (Google Fonts) — bold, geometric, techy
- **Body:** `Inter` (Google Fonts) — clean, readable
- **Monospace / Accent:** `JetBrains Mono` (Google Fonts) — for code snippets, labels

### Spatial System
- Border width: `3px` (standard), `4px` (emphasis)
- Border radius: `0px` (hard corners = neobrutalism signature)
- Shadow: offset box-shadow `4px 4px 0px #000` (hard shadow, no blur)
- Spacing unit: `8px` base, scale by 8x
- Page max-width: `1200px`

### Motion Philosophy
- Hover: shadow offset increases (`6px 6px 0px #000`), slight translate
- Transitions: `150ms ease-out` — snappy, not smooth
- No bounce/spring animations — keep it crisp

### Visual Assets
- Icons: Phosphor Icons (bold weight)
- No stock photos — use solid color blocks, geometric shapes
- Decorative: thick underlines, offset badges, arrow elements

---

## 3. Layout & Structure

### Pages

1. **Home** (`/`)
   - Hero: company name, tagline, bold CTA
   - Services overview (3 cards)
   - Social proof / trusted by (if any)
   - Final CTA

2. **Services** (`/services`)
   - AI Implementation
   - Workflow Automation
   - Custom Bot Development

3. **Portfolio** (`/portfolio`)
   - Grid of past projects/case studies

4. **About** (`/about`)
   - Company story
   - Mission & values

5. **Contact** (`/contact`)
   - Lead capture form (name, email, company, message, budget range)
   - Contact info

### Responsive Strategy
- Mobile-first
- Stack cards vertically on mobile
- Breakpoints: `640px` (sm), `768px` (md), `1024px` (lg)

---

## 4. Features & Interactions

### Navigation
- Fixed top navbar
- Logo left, nav links right
- Mobile: hamburger menu with full-screen overlay
- Active state: bold/underlined

### Hero Section
- Large bold heading
- Offset text highlight (background color behind text)
- CTA button with hover shadow effect

### Service Cards
- Neobrutalism card: white bg, black border, hard shadow
- Icon, title, description, "Learn more" link
- Hover: shadow grows + slight lift

### Contact Form
- Fields: Name, Email, Company, Message, Budget (select)
- Submit button: full-width, bold
- Success state: show confirmation message
- Validation: required fields highlighted

### Portfolio Grid
- Masonry-style grid
- Cards with image placeholder, title, tags

---

## 5. Component Inventory

### `<Button>`
- Variants: `primary` (yellow bg), `secondary` (white bg), `outline` (transparent)
- States: default, hover (shadow grows), active (shadow shrinks), disabled (gray)
- Size: sm, md, lg

### `<Card>`
- White bg, 3px black border, 4px 4px 0 #000 shadow
- Hover: 6px 6px 0 #000 shadow + translate(-2px, -2px)

### `<Badge>`
- Small offset label (e.g., "NEW", "AI", "Automation")
- Color variants

### `<NavBar>`
- Logo + links + mobile hamburger
- Sticky on scroll

### `<Section>`
- Consistent padding, max-width container

### `<ContactForm>`
- Input fields with neobrutalism style (thick border, no shadow on input)
- Error state: red border + error message below

---

## 6. Technical Approach

### Stack
- **Framework:** Astro 5.x
- **Rendering:** Static (SSG) — deploy to Cloudflare Pages
- **Styling:** TailwindCSS 4.x (with custom neobrutalism utilities)
- **Runtime:** Bun (NOT Node.js)
- **Deployment:** Cloudflare Pages

### Project Structure
```
/
├── src/
│   ├── components/
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── NavBar.astro
│   │   ├── Footer.astro
│   │   ├── Badge.astro
│   │   ├── Section.astro
│   │   └── ContactForm.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── services.astro
│       ├── portfolio.astro
│       ├── about.astro
│       └── contact.astro
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── SPEC.md
```

### Cloudflare Pages Setup
- Framework preset: Astro
- Build command: `bun install && bun run build`
- Build output: `dist`
- Environment variables: none needed for MVP

### Future Considerations
- Blog with content collections
- CMS integration (Sanity/Contentlayer)
- Analytics (Plausible/Umami)
- CRM integration for form submissions