# Design

## Theme
Editorial-calm developer-tool. Pure surfaces, one committed indigo accent, grotesque typography carries the brand. The commands get an honest terminal-native treatment (they are literally code). Light + dark. Deliberately NOT the saturated editorial-magazine lane (no display serif, no mono-labels-and-rules, no cream).

## Color (OKLCH)
Anchor: indigo seed `oklch(0.53 0.125 294)`, "considered tool" calm authority. Strategy: **Restrained** (accent < 10% of surface; type and space carry the voice).

Light:
- bg `oklch(1 0 0)` (pure white, no warm tint)
- ink/text `oklch(0.22 0.012 294)`
- accent `oklch(0.52 0.15 294)` · low `oklch(0.93 0.035 294)` · high `oklch(0.37 0.12 294)`

Dark:
- bg `oklch(0.17 0.012 294)` (deep cool near-black)
- text `oklch(0.97 0.004 294)`
- accent `oklch(0.62 0.15 294)` · low `oklch(0.30 0.07 294)` · high `oklch(0.88 0.06 294)`

Inline commands: 10% accent tint fill + 24% accent border, accent text.

## Typography
- **Display** (hero, h1, h2, wordmark): Bricolage Grotesque Variable. Weight 650-700, letter-spacing -0.022 to -0.038em, `text-wrap: balance`.
- **Body / UI**: Hanken Grotesk Variable. Weight ~380, line-height 1.72, measure capped 72ch.
- **Mono** (the real commands + code): Geist Mono Variable.
- Scale: fluid `clamp()`, h1 up to 3.1rem (5rem on the splash hero), >=1.25 ratio between steps.
- Bans: no serif display, no all-caps body, no eyebrow kickers, no 01/02 section markers.

## Components
- Starlight docs shell (sidebar, on-this-page, search, pagination) restyled via `src/styles/custom.css`, not replaced.
- Inline code = indigo mono chips; the skill names are first-class.
- Tables (routing + skill maps) read as quiet rules, not cards.
- Hero CTAs: Starlight actions, primary = solid indigo.

## Layout
- Content width ~50rem; paragraphs capped at 72ch.
- Generous vertical rhythm; calm pacing.

## Motion
- One reduced-motion-safe hero rise (translateY + fade, ease-out-quart, small stagger). Nothing else.

## Accessibility
- WCAG AA contrast (ink on white; near-white on deep indigo-black). Reduced-motion alternative is instant. Color is never the only signal.
