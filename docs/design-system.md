# Design system — Apple HIG, tailored

Status: **direction for Phase 1**. Tokens here are a working spec. Hex values are community-measured Apple system colours, not an Apple-published spec. We design to **roles**; hex is the Figma/CSS reference.

We are not making an iOS app, and we are not remaking apple.com. Recruiters have seen both. We take HIG *discipline* and give it Wen’s voice.

Companion: [Phase 0 brief](./phase-0-brief.md).

---

## Principles we keep

From Apple’s HIG: **Clarity**, **Deference**, **Depth**.

| Principle | On this site |
| --- | --- |
| Clarity | One type family, named type styles, contrast that holds at WCAG AA. A recruiter can parse the hero in one glance. |
| Deference | Chrome is quiet. Work and case writing lead. No laggy About animation, no decorative motion on load. |
| Depth | Hierarchy from type, space, and grouped surfaces — not drop shadows stacked on glass. |

Consistency is the connective tissue: the same button, the same case card, the same focus ring, in EN and 中文.

---

## What we take / what we refuse

### Take

- Semantic colour roles (`label`, `secondaryLabel`, `systemBackground`, `groupedBackground`, `systemBlue` as *link/accent default*)
- Dynamic Type *names* and default sizes (Large Title 34 → Caption 2 11)
- 8pt spacing convention with 4pt subdivisions
- **44×44pt minimum tap target** (HIG rule, not a convention)
- Continuous / concentric corner radii
- Light and dark as paired tokens from day one; **light ships first** (recruiters print and PDF)
- Reduce motion: no required animation; `prefers-reduced-motion` is a token condition
- Colour is never the only cue (HIG inclusive colour)

### Refuse

- **Liquid Glass / heavy glassmorphism** — current Apple OS trend, poor contrast, dates the site, fights case photography
- **apple.com marketing layout** — full-bleed product tiles, tiny blue pill CTAs, one-line taglines. That is a store, not a portfolio.
- **iOS Settings / UIKit chrome** — grouped lists and chevrons make the site look like a component demo
- **SF Pro as a webfont we do not have a licence to host.** Use the system stack; SF renders on Apple devices, Inter-equivalent / system-ui elsewhere
- A second “display” font for English. Hierarchy is weight and size, not a new family
- Hard-coding `#007AFF` as “the brand.” It is an approximate `systemBlue`, and it reads as default iOS

### Tailor (this is how it becomes Wen’s)

1. **CJK is a first-class face**, not a fallback afterthought. Apple uses PingFang TC for 繁中. On the web: `"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif`. Chinese body gets slightly more line-height than English (1.6 vs ~1.47).
2. **One personal accent**, chosen in Figma in Phase 1 — not raw systemBlue. Candidates: a quieter blue-teal (ship / product) or a warm ink pulled from Freckle Bakes *cases*, never from the chrome of the whole site. The site is Wen; cases keep their own product colour.
3. **Case-study patterns HIG does not have:** problem statement, decision / alternative, evidence, bilingual toggle, figure with caption. We invent these components.
4. **Voice in type:** English body 17 (Apple’s reading floor). Headlines can go larger than Large Title on the homepage hero only — a portfolio needs more presence than an iPhone Settings screen. Cap hero at ~48–56 on desktop so it does not become a marketing splash.
5. **Motion is optional and short.** Page-load theatre is out. Hover/focus and in-page expand are in, under 200–300ms, disabled when reduced-motion is on.

---

## Token architecture

Name tokens by **role**, then bind values per theme (`light`, `dark`, later `high-contrast`).

```
color.bg.canvas
color.bg.grouped
color.bg.surface
color.bg.surface-raised

color.fg.primary          ← label
color.fg.secondary        ← secondaryLabel
color.fg.tertiary
color.fg.link
color.fg.inverse

color.accent.primary      ← Wen’s accent (Phase 1 pick)
color.accent.primary-hover
color.border.subtle       ← separator
color.border.opaque

color.status.success      ← systemGreen (approx.)
color.status.danger       ← systemRed (approx.)
color.status.warning      ← systemOrange (approx.)

color.focus.ring
```

Reference values (light). Treat as Figma starting paints, not sacred hex.

| Role | Light (approx.) | Dark (approx.) |
| --- | --- | --- |
| canvas / systemBackground | `#FFFFFF` | `#000000` |
| grouped | `#F2F2F7` | `#1C1C1E` |
| surface | `#FFFFFF` | `#2C2C2E` |
| fg.primary | `#000000` | `#FFFFFF` |
| fg.secondary | `rgba(60,60,67,0.60)` | `rgba(235,235,245,0.60)` |
| fg.tertiary | `rgba(60,60,67,0.30)` | `rgba(235,235,245,0.30)` |
| link (until accent is picked) | `#007AFF` | `#0A84FF` |
| separator | `rgba(60,60,67,0.29)` | `rgba(84,84,86,0.60)` |
| success | `#34C759` | `#30D158` |
| danger | `#FF3B30` | `#FF453A` |

Accent lock happens in Figma: we put three swatches next to Freckle Bakes and ZenZzz imagery and pick the one that does not fight the work.

---

## Typography

### Families

| Role | Stack |
| --- | --- |
| Latin UI / text | `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Segoe UI", "Helvetica Neue", sans-serif` |
| Latin display (hero only, same family, larger optical size) | same stack; `SF Pro Display` when present |
| Traditional Chinese | `"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif` |
| Mono (code, IDs) | `"SF Mono", ui-monospace, Menlo, monospace` |

Load **Noto Sans TC** as the only webfont (SIL OFL). Do not host SF Pro.

### Scale (named after HIG; extra `display` for the homepage)

| Token | Size | Line | Weight | Use |
| --- | --- | --- | --- | --- |
| `display` | 48–56 / 36 mobile | 1.1 | 600 | Homepage H1 only |
| `large-title` | 34 | 41 | 600 | Case titles, About H1 |
| `title-1` | 28 | 34 | 600 | Section titles |
| `title-2` | 22 | 28 | 600 | Card titles |
| `title-3` | 20 | 25 | 600 | In-page subheads |
| `headline` | 17 | 22 | 600 | Emphasised body / nav |
| `body` | 17 | 22 EN / 27 中文 | 400 | Reading |
| `callout` | 16 | 21 | 400 | Supporting |
| `subhead` | 15 | 20 | 400 | Meta (dates, labels) |
| `footnote` | 13 | 18 | 400 | Captions, legal |
| `caption` | 12 | 16 | 400 | Image credits, tags |

Fluid type later can interpolate between mobile and desktop; the *names* stay.

---

## Space, radius, target, motion

| Token | Value |
| --- | --- |
| space scale | 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96 |
| page gutter | 20 mobile / 32 tablet / 48 desktop (HIG-ish margins, not 16 everywhere) |
| content measure | ~68ch English; 中文 can run slightly wider |
| radius.control | 8 |
| radius.card | 12 |
| radius.sheet | 20 |
| radius.pill | 9999 |
| concentric rule | outer radius ≈ inner radius + padding |
| tap target | **min 44×44** |
| motion.fast | 150ms |
| motion.standard | 250ms |
| easing | standard ease; no bounce on page chrome |
| reduced motion | duration → 0 / crossfade only |

Shadows: **one** subtle recipe for raised surfaces (`0 2px 10px rgba(0,0,0,0.08)`). Prefer grouped background + surface to fake elevation.

---

## Accessibility (baked into tokens, not a later pass)

- Text and UI contrast: WCAG **AA** minimum; AAA for body on canvas
- Focus: visible 2px ring using `color.focus.ring`, offset 2px, never `outline: none` without a replacement
- Hit area ≥ 44px even when the glyph is 20px
- `prefers-reduced-motion` and `prefers-color-scheme` as token conditions
- Language: `lang="en"` / `lang="zh-Hant"` on the document and on mixed strings
- Images: real HTML figures + alt; no case study that is “one long PNG”
- Colour is not the only status cue (icon + text)
- Skip link, landmark nav, heading order (one H1)

Apple’s own rule we keep: *do not rely solely on colour to communicate.*

---

## Figma file plan (Phase 1)

When Figma MCP is authenticated, build in this order — do not start with the homepage.

1. **Foundations** page: colour styles (light + dark), text styles (EN + 中文 specimens), space/radius as variables
2. **Variables** collections: `Color / Light`, `Color / Dark`, `Space`, `Radius`, `Type`
3. **Components** (only what the homepage and a case need): Button, Text link, Nav, Case card, Tag, Figure+caption, Language toggle, Footer
4. **Homepage** frame: 390 / 768 / 1440
5. **Case cover** frame for Freckle Bakes and ZenZzz cards (same component, different content)

Use Apple’s official HIG UI kit only as a *reference* for type metrics and semantic colour names. Do not paste UIKit components onto the homepage.

---

## Token names in code (later)

CSS custom properties will mirror Figma variables 1:1, e.g. `--color-fg-primary`, `--text-body`, `--space-4`, `--radius-card`. Theme switch = swapping the colour collection. No raw hex in components.

---

## Phase 1 lock list

Wen approves before we draw the homepage:

- [ ] This “take / refuse / tailor” list
- [ ] Accent direction (quiet teal vs warm ink vs stay near systemBlue)
- [ ] Hero type size: 48–56 display vs staying at Large Title 34
- [ ] Light-first, dark as a complete token set
- [ ] Figma authenticated in Cursor
