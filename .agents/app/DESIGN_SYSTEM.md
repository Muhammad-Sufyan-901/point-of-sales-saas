# Design System: POS Generator SaaS (Notion x Shadcn Hybrid)

**Theme:** Minimal, Warm, Clean, Enterprise-ready
**Styling Framework:** Tailwind CSS v4 + Shadcn UI

## 1. Context and Goals

This design system marries the approachable, warm minimalism of Notion with the utility-first, accessible component architecture of Shadcn UI. The goal is to create a Point of Sales (POS) interface that feels like "quality paper rather than sterile glass", ensuring maximum clarity for store owners and cashiers without visual fatigue.

## 2. Design Tokens and Foundations

### A. Color Palette (Warm Neutrals & Singular Accent)

We discard cold grays in favor of warm neutrals with yellow-brown undertones, paired with a single vibrant accent color.

- **Primary Accent (Notion Blue):** `#0075de`. Used strictly for primary CTAs, active links, and key interactive elements.
- **Primary Text (Near-Black):** `rgba(0,0,0,0.95)`. Softens pure black to create micro-warmth.
- **Surfaces:**
    - **Pure White:** `#ffffff` for page backgrounds, card surfaces, and input fields.
    - **Warm White:** `#f6f5f4` for section alternation and subtle background fills.
- **Secondary Text:** Warm Gray 500 `#615d59` for descriptions and muted labels.
- **Disabled/Placeholder:** Warm Gray 300 `#a39e98`.
- **Semantic Accents:** Teal `#2a9d99` (Success), Red `#ef4444` (Danger).

### B. Typography

**Font Family:** Geist or Inter (to mimic NotionInter).

- **Display/H1 (64px - 48px):** Weight `700`, extremely tight letter-spacing (`-2.125px` to `-1.5px`), tight line-height (`1.00`).
- **H2/Card Titles (26px - 22px):** Weight `700`, tight letter-spacing (`-0.625px` to `-0.25px`).
- **Body Text (16px):** Weight `400` (reading) to `500` (UI elements), normal letter-spacing, line-height `1.50`.
- **Badges/Micro Labels (12px):** Weight `600`, **positive** letter-spacing (`0.125px`) for legibility at small sizes.

### C. Spacing & Depth

- **Spacing Scale:** Strictly follow a 4/8/12/16/24/32 scale based on an 8px base unit.
- **Whisper Borders:** Replace thick borders with `1px solid rgba(0,0,0,0.1)` everywhere (cards, dividers, sections) to create structure without weight.
- **Shadows:** Use multi-layer shadow stacks with sub-0.05 opacity.
    - _Standard Card:_ `rgba(0,0,0,0.04) 0px 4px 18px, rgba(0,0,0,0.027) 0px 2.025px 7.85px, rgba(0,0,0,0.02) 0px 0.8px 2.93px, rgba(0,0,0,0.01) 0px 0.175px 1.04px`.

## 3. Component-Level Rules (Shadcn Overrides)

### A. Buttons (`components/ui/button.tsx`)

- **Primary:** Background `#0075de`, Text `#ffffff`, Radius `4px`. Hover darkens to `#005bab`. Active state must scale down (`scale-95`).
- **Secondary:** Translucent warm gray `bg-black/5` (`rgba(0,0,0,0.05)`), Near-black text.
- **Ghost:** Transparent background, Near-black text, underline on hover.

### B. Cards (`components/ui/card.tsx`)

- **Anatomy:** Background `#ffffff`, Whisper border `1px solid rgba(0,0,0,0.1)`, Radius `12px` (standard) or `16px` (hero).
- **Depth:** Apply the multi-layer card shadow defined in the tokens.
- **Product Cards:** Images must have a top-rounded radius of `12px 12px 0px 0px`.

### C. Inputs & Forms (`components/ui/input.tsx`)

- **Anatomy:** Background `#ffffff`, Border `1px solid #dddddd`, Radius `4px`, Padding `6px`.
- **States:** Placeholder text uses Warm Gray `#a39e98`. Focus state must display a visible Focus Blue (`#097fe8`) outline ring.

### D. Badges & Tags (`components/ui/badge.tsx`)

- **Anatomy:** Full pill radius (`9999px`).
- **Primary/Status Badge:** Tinted blue background `#f2f9ff` with darker blue text `#097fe8`. Add 4px 8px padding and `0.125px` letter-spacing.

## 4. Accessibility & Interaction Behavior

- **WCAG 2.2 AA Compliance:** High contrast text (Near-black on white exceeds 14:1 ratio).
- **Focus States:** All interactive elements MUST have a visible focus indicator: `2px solid #097fe8` (Focus Blue).
- **Interactive Feedback:** Keep interaction states explicit. Buttons must visually react when pressed (e.g., `active:scale-95`).

## 5. Anti-Patterns (Don'ts)

- **DON'T** use pure black (`#000000`). Always use the softened `rgba(0,0,0,0.95)` for text.
- **DON'T** use cold, blue-tinted grays (e.g., standard Tailwind `slate` or `gray` for backgrounds). Always prefer warm whites (`#f6f5f4`).
- **DON'T** use heavy borders. Never exceed `1px solid rgba(0,0,0,0.1)` for structural divisions.
- **DON'T** use single-layer harsh drop shadows. Always use the provided soft, multi-layered ambient shadows.
- **DON'T** rely on ambiguous labels; ensure clarity for store operators.
