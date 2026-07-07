# Cybera Website Redesign Plan

**Date:** July 7, 2026
**Scope:** Visual redesign + UX + CTA functionality for cybera-website.vercel.app
**Stack (unchanged):** React + Vite + Tailwind CSS + Framer Motion, 4 core pages
**Audience:** Construction company owners (non-technical, high-trust-threshold buyers)

---

## 1. RESEARCH FINDINGS

### Websites analyzed (11)

| # | Site | Category | Key takeaway |
|---|------|----------|--------------|
| 1 | Turner Construction | Construction (national GC) | Dark navy/black base + **orange accent CTAs** with arrow icons; user-intent hero ("What do you want to build?") |
| 2 | Bechtel | Construction (mega-projects) | Neutral palette, credibility via hard numbers ("128+ years," "33+ countries"); real project photography, not stock |
| 3 | Weitz | Construction (regional GC) | Black + yellow "hazard" palette praised as "professional and industry-relevant"; white space + video |
| 4 | McCarthy / Mace / Maman Corp | Construction (roundup) | People-first imagery, scroll-triggered transitions, single clear CTA per section |
| 5 | Vanta | Security/SaaS | "Trust is everything" — leads with outcome, not fear; 16 customer logos + quantified results ("2,000 hrs saved") |
| 6 | 1Password | Security/SaaS | Blue + white, huge whitespace; makes security *approachable* ("work confidently without added complexity"); dual CTAs for two buyer journeys |
| 7 | Huntress | Security (sells to SMBs — closest analog to Cybera) | Dark background + bright teal accent; threats communicated as **concrete stats** ("51% of customers experience an attack," "17-hour average time-to-ransom"); trust via scale numbers + founder credibility ("former NSA operators") |
| 8 | Supabase | Dev SaaS | Dark theme + single vivid accent (green); scannable modular sections |
| 9 | Bain & Company | Consulting | Signature red on white/charcoal; credibility via measurable client outcomes ("$300M saved"); progressive CTAs ("Let's get to work") |
| 10 | McKinsey | Consulting | Deep ink navy, editorial typography, insight-led authority |
| 11 | Colorlib/OpenAsset/ContractorGorilla 2026 construction trend roundups | Meta | 2026 trends: dark charcoal/slate themes + vibrant accents, bold typography with ONE clear CTA, 75% of construction searches on mobile |

### Top 5 patterns from construction websites

1. **Dark, heavy, industrial base colors** (charcoal, slate, near-black) signal permanence and seriousness — 2026's dominant construction web trend. Light, airy sites read as "tech startup," not "builder."
2. **Construction-signal accent colors** (safety orange, hazard yellow) used by Turner and Weitz. These colors are already coded as "pay attention" in a contractor's daily life — hi-vis vests, cones, warning signage.
3. **Numbers as trust currency.** Bechtel leads with years/countries/projects; nothing builds contractor trust faster than specific figures.
4. **One CTA per screen.** Trend roundups are unanimous: bold headline + strong visual + a single action.
5. **Real over abstract imagery.** Job sites, people, equipment — never generic cyber-lock clip art.

### Top 5 patterns from security/SaaS websites

1. **Fear framed as statistics, not adjectives** (Huntress: "51% experienced BEC attacks"). Concrete numbers scare responsibly and build authority simultaneously. Cybera already does this well in copy ("$243,000 UK contractor loss") — the redesign should *visually amplify* those numbers.
2. **Outcome-first headlines** (Vanta: "Trust is everything"; Huntress: "Hackers Wrecked. Your Enterprise Secured."). Sell the after-state, then explain the threat.
3. **Dark hero + bright accent CTA** — the modern security aesthetic (Huntress teal, Supabase green). Dark = serious/protective; the accent carries all conversion weight.
4. **Trust strip immediately below the hero** — logos, ratings, or stats before the visitor scrolls to features.
5. **Low-friction CTA copy** ("Start for Free," "Get a demo") repeated 3–4× down the page at natural decision points.

### Color psychology for this industry

- **Deep blue/navy** = trust, dependability, safety — the reason it dominates security and finance. Keep it, but *deepen and cool it* so it reads "steel," not "corporate PowerPoint."
- **Orange** = urgency, energy, action — and uniquely for this audience, **safety orange is the construction industry's own alert color**. An orange CTA on a navy page is both the highest-converting contrast pairing in CRO literature and semantically native to contractors.
- **Red** = threat/alarm — reserve exclusively for threat statistics and risk callouts so it never dilutes.
- **Differentiation insight:** when every competitor uses navy-on-white, a navy + safety-orange system is memorable while staying trustworthy (consistent signature palettes increase brand recall ~80%).

### High-converting CTA research

- High contrast between button and background lifts conversions up to ~34%; contrast matters more than any specific hue.
- ~87% of high-converting CTAs use **white text**.
- Minimum touch target 44×44px; above-the-fold CTA placement can lift conversions dramatically (up to 3× in aggregated studies), but high-ticket services also need a repeated CTA *after* trust-building sections.
- Specific, personalized copy beats generic by ~202% (HubSpot, 330k CTAs): "Book My Free Audit" > "Submit" or "Learn More."

---

## 2. NEW COLOR PALETTE

**Concept: "Steel & Signal"** — the deep blue-black of structural steel, with safety-orange as the only action color. Trustworthy like navy, urgent like a hazard sign, and unlike every navy-on-white competitor.

| Role | Name | Hex | Rationale / usage |
|------|------|-----|-------------------|
| **Primary (dark)** | `steel-900` | `#0B1D33` | Deepened evolution of current navy `#0A2540` — cooler, heavier, more "structural steel." Hero + CTA banner backgrounds, footer. |
| Primary (mid) | `steel-700` | `#14304F` | Hover states on dark surfaces, gradient partner for steel-900. |
| Primary (brand) | `steel-500` | `#1E4A73` | Links, active nav underline, icons on white. |
| **Accent (action)** | `signal-500` | `#F05A0E` | Safety orange. **CTAs only.** Never used decoratively — scarcity preserves its pull. |
| Accent (hover) | `signal-600` | `#C74A0C` | CTA hover/pressed; also use for orange text on white (4.5:1+ AA). |
| Accent (tint) | `signal-50` | `#FFF3EB` | Subtle backgrounds behind "Most Popular" badges, highlights. |
| **Threat** | `alarm-600` | `#DC2626` | Threat stats, risk numbers, threat-card left borders. Sparingly. |
| **Success** | `verified-600` | `#15803D` | Checkmarks, "free / no obligation" reassurance, confirmation states. |
| **Neutrals** | `ink-900` | `#0F172A` | Headings on white (replaces `#1A1A1A` — slightly blue-tinted to harmonize with steel). |
| | `ink-600` | `#475569` | Body text (replaces `#6B7280`). |
| | `ink-400` | `#94A3B8` | Captions, meta text. |
| | `line-200` | `#E2E8F0` | Borders, dividers (replaces `#E5E5E5`). |
| | `paper-50` | `#F6F8FA` | Section alternating background (replaces `#F5F5F5` — cooler tint). |
| | white | `#FFFFFF` | Base. |

### Swatch grid (for reference)

```
■ #0B1D33 steel-900   ■ #14304F steel-700   ■ #1E4A73 steel-500
■ #F05A0E signal-500  ■ #C74A0C signal-600  ■ #FFF3EB signal-50
■ #DC2626 alarm-600   ■ #15803D verified-600
■ #0F172A ink-900     ■ #475569 ink-600     ■ #94A3B8 ink-400
■ #E2E8F0 line-200    ■ #F6F8FA paper-50    ■ #FFFFFF white
```

### Contrast compliance (WCAG)

- White on `steel-900` — 16.5:1 ✅ AAA
- White on `signal-500` `#F05A0E` — ~3.2:1 ✅ AA for **large/bold text** (all CTAs are ≥16px bold). For small orange-on-white text use `signal-600` (~4.6:1 ✅ AA).
- `ink-600` on white — 7.5:1 ✅ AAA. `alarm-600` on white — 4.5:1 ✅ AA.

**Ratio rule: 60/30/10.** ~60% white/paper, ~30% steel (dark sections, headings), ~10% signal orange (CTAs) + trace red/green. The site stays clean and professional; orange does all the converting.

---

## 3. TYPOGRAPHY SYSTEM

| Role | Font | Why |
|------|------|-----|
| **Headings / display** | **Barlow** (weights 600, 700, 800) | A grotesque literally modeled on California public-works and highway signage — industrial DNA that construction owners subconsciously recognize. Slightly condensed proportions give headlines authority that Inter lacks. Free (Google Fonts). |
| **Body / UI** | **Inter** (400, 500, 600) | Already in the stack; excellent screen readability. Keep it — zero migration cost. |
| **Stats / numbers** | **IBM Plex Mono** (600) — optional | Prices, threat figures ("$243,000"), step numbers. Monospace reads as "audit report / instrument panel," reinforcing the technical-assessor brand. Use for numerals only. |

### Font size scale

| Token | Mobile | Desktop | Line height | Usage |
|-------|--------|---------|-------------|-------|
| `display` | 36px | 56px | 1.1 | H1 hero (Barlow 800, letter-spacing -0.02em) |
| `h2` | 28px | 40px | 1.15 | Section titles (Barlow 700) |
| `h3` | 19px | 22px | 1.3 | Card titles (Barlow 600) |
| `lead` | 17px | 20px | 1.6 | Hero subcopy (Inter 400) |
| `body` | 15px | 16px | 1.65 | Paragraphs (Inter 400) |
| `caption` | 13px | 14px | 1.5 | Meta text (Inter 400, ink-400) |
| `eyebrow` | 12px | 13px | 1 | Uppercase kickers (Inter 600, tracking 0.2em, `signal-600` instead of navy — small dose of brand orange) |
| `stat` | 40px | 56px | 1 | Prices/figures (Plex Mono or Barlow 800) |

`index.html` font link:

```html
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@600&display=swap" rel="stylesheet" />
```

---

## 4. PAGE-BY-PAGE REDESIGN SPECS

### HOME PAGE

**Hero — the biggest single visual change: go dark.**
- Background: `steel-900` with a subtle blueprint-grid texture (CSS `background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 48px 48px;`) — evokes construction drawings at near-zero cost, no image needed.
- Eyebrow: `AI FRAUD PROTECTION FOR CONSTRUCTION` in `signal-500`, tracking 0.2em.
- H1 (white, Barlow 800): keep current headline but set **"$500,000"** in `signal-500` — make the number the visual anchor.
- Subcopy: `rgba(255,255,255,0.75)`, max-w-[600px].
- Primary CTA: signal-orange button (full spec §5). Secondary ghost link beside it: "See how it works ↓" (white/60, underline on hover) — gives non-ready visitors a path.
- **New: trust stat strip** at hero bottom (border-t `white/10`, 3 items): `$500K+ avg. deepfake loss` · `3 fraud vectors audited` · `2-week turnaround`. Mirrors Huntress/Bechtel numbers-first pattern.
- Mobile: py-16, text-left (centered text on mobile wastes width for long headlines), CTA full-width.

**Threat section ("Here's How AI Is Targeting…")**
- Keep white→paper-50 alternation, but re-key the threat cards to **alarm red**: `border-l-4 border-alarm-600` permanently (not only on hover as today), a small icon per card (phone-wave / file-warning / mail-x from `lucide-react`, stroke `alarm-600`, 28px).
- Pull the dollar figure in each card into a `stat`-style line: e.g. **"−$243,000"** in Plex Mono `alarm-600` above the body text. Owners scan numbers, not paragraphs.
- Card hover: existing lift + shadow is good; change hover border to full `alarm-600` glow shadow `0 8px 24px rgba(220,38,38,0.12)`.

**How It Works**
- Keep 3-step layout and the sequential highlight animation (it's good). Change active step number color to `signal-500` (orange progress = "work in progress" metaphor) and connect steps with a thin horizontal line on desktop (`line-200`, animated `scaleX` as each step activates).
- Step 03 mentions "$3,000" — style it in Plex Mono `steel-500`.

**New section: Social proof strip** (insert between How It Works and CTA banner)
- Until real testimonials exist, use a credibility band instead of faking it: "Built for contractors, not IT departments" + 3 fact cards (NDA available · Report guarantee · 24-hr email response). Swap in testimonials/client logos when available (desktop: 3-col grid; mobile: horizontal snap-scroll carousel `overflow-x-auto snap-x snap-mandatory`).

**CTA banner**
- Background: gradient `steel-900 → steel-700` (145deg) + same blueprint grid at 0.03 opacity.
- Button: **orange**, not white — currently the white button competes with white headline text; orange owns the click.

### ABOUT PAGE
- Header band: switch from paper-50 to `steel-900` dark band (consistency with new hero); white H1.
- Process steps (4): add a vertical timeline rail on mobile (left border `line-200`, orange dot per step) — currently steps float without visual connection.
- Add a founder/credentials block: photo (or initial-mark), 2–3 sentence "why we exist," and specific credibility facts (background, certifications, research hours per audit). Bechtel/Huntress pattern: *who* is auditing me matters most for a $3,000 trust purchase.
- FAQ: keep accordion; change chevron color to `signal-600`.

### PRICING PAGE
- Header: keep light, but eyebrow in `signal-600`.
- **Most Popular card:** border `signal-500` (2px) + `signal-50` badge background pattern inverted: badge itself solid `signal-500` white text; card gets `shadow-xl shadow-signal-500/10`. On desktop, `md:-translate-y-4 md:scale-[1.02]` so the recommended tier physically dominates (standard SaaS pattern; currently all three cards sit level).
- Prices in Plex Mono / Barlow 800, `ink-900`; center card price in `steel-500`.
- **Fix the two dead buttons:** "Add To My Audit" `<button>` elements have no handler ([Pricing.jsx:225](../src/pages/Pricing.jsx), :315). Convert both to `<Link to="/book-audit?addon=training">` / `?addon=monthly` — the Book Audit page can read the param later; for now the link alone makes them functional. Outline style: `border-2 border-steel-500 text-steel-500 hover:bg-steel-500 hover:text-white`.
- Mobile scrolling strategy: keep vertical stack (3 cards is fine to scroll) but reorder with CSS so **AI Fraud Audit renders first on mobile** (`order-first md:order-none`) — the money card must not be second on a phone.
- "Why $3,000?" section: set the two comparison figures ("$243,000", "1.2%") as large Plex Mono pull-stats above each paragraph.

### BOOK AUDIT PAGE
- Header: dark `steel-900` band (this is the conversion page — visual continuity from every CTA that pointed here).
- **Calendly embed (the critical fix — see §5C):** currently `src={import.meta.env.VITE_CALENDLY_URL}` renders `src="undefined"` in any build where the env var isn't set (Vercel builds don't read the local `.env`). Centralize with a hard fallback and add Calendly URL params to hide redundant chrome:

```js
// src/config.js
export const CALENDLY_URL =
  (import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/qwertxboxmicro/30min') +
  '?hide_gdpr_banner=1&primary_color=F05A0E&text_color=0F172A'
```

- Embed height: 600px clips Calendly's month view on mobile → `height: clamp(620px, 80vh, 760px)`; or adopt `react-calendly` `InlineWidget` which manages height. Keep the skeleton loader but replace the fake 800ms timer with the iframe `onLoad` event.
- Checklist ✓ marks: `verified-600` green (reassurance semantics), not navy.
- Reassurance strip (Free Call / 15 Minutes / No Obligation): move it **above** the embed section on mobile (order classes) so objection-handling happens before the scheduling ask.
- Confirmation messaging: add a `?booked=true` variant — Calendly redirect URL can point back to `/book-audit?booked=true`; show a success banner ("You're booked — check your email. We'll research your company before the call.") with `verified-600` accent.

---

## 5. CTA BUTTON SPECIFICATION (CRITICAL)

### A. Visual spec

| Property | Value |
|----------|-------|
| Background | `#F05A0E` (`signal-500`) |
| Text | White, Inter 700, 16px (mobile) / 17px (desktop) |
| Padding / size | Desktop: 32px × 16px padding (≈56px tall). Mobile: full-width, min-height **52px** (>48px touch target) |
| Radius | 10px (`rounded-[10px]`) |
| Shadow | `0 4px 14px rgba(240,90,14,0.35)` |
| Hover | Background → `#C74A0C`, `translateY(-2px)`, shadow → `0 6px 20px rgba(240,90,14,0.45)` — 200ms ease |
| Active | `scale(0.98)` |
| Focus | `outline: 2px solid #F05A0E; outline-offset: 2px` (keyboard accessibility) |
| Icon | Trailing `→` (arrow-right, 18px) that shifts 4px right on hover — Turner's exact pattern |

### B. Copy per placement

| Placement | Copy |
|-----------|------|
| Navbar (desktop, top-right) | `Book Free Audit` |
| Hero | `Book My Free 15-Min Audit` (first person converts better than second) |
| CTA banners | `Book Free Audit Now` |
| Pricing (core card) | `Book This Audit` |
| Mobile sticky bar | `Book Free Audit →` |

### C. Functionality fix (root cause + spec)

**Problem:** "Book Audit" CTAs route correctly to `/book-audit`, but the page's Calendly iframe reads `VITE_CALENDLY_URL`, which exists only in the local `.env`. Vite inlines env vars **at build time**, and `.env` is not deployed — so production renders `<iframe src="undefined">`. That's why the CTA "doesn't link to Calendly properly."

**Fix (all three layers):**
1. Add `VITE_CALENDLY_URL` in **Vercel → Project → Settings → Environment Variables** and redeploy.
2. Add the code fallback via `src/config.js` (§4, Book Audit) so a missing var can never silently break the page again.
3. All CTA buttons keep routing to `/book-audit` (preserves the trust-building step before scheduling — correct for a $3,000 service). The mobile sticky bar may deep-link directly to the Calendly URL (`target="_blank" rel="noopener"`) as a lower-friction test variant.

Optional analytics: append `?utm_source=site&utm_medium=cta&utm_campaign=book_audit` to the Calendly URL.

### D. Mobile sticky CTA (replaces current floating circle)

The current 56px circle with 9px two-line text ([StickyAuditButton.jsx](../src/components/StickyAuditButton.jsx)) is below readable size. Replace with a **full-width sticky bottom bar**:

```jsx
// StickyAuditButton.jsx (replacement)
<motion.div
  className="fixed bottom-0 inset-x-0 z-50 sm:hidden p-3 pb-[calc(12px+env(safe-area-inset-bottom))] bg-white/90 backdrop-blur border-t border-line-200"
  initial={{ y: 90 }}
  animate={{ y: showAfterScroll ? 0 : 90 }}   // show after user scrolls past hero (~500px)
  transition={{ duration: 0.35, ease: 'easeOut' }}
>
  <Link to="/book-audit"
    className="flex items-center justify-center gap-2 w-full min-h-[52px] rounded-[10px] bg-signal-500 text-white font-bold text-[16px] shadow-[0_4px_14px_rgba(240,90,14,0.35)] active:scale-[0.98]">
    Book Free Audit <span aria-hidden>→</span>
  </Link>
</motion.div>
```

Trigger `showAfterScroll` with a scroll listener or `useScroll` from Framer Motion (`scrollY > 480`). Hide on `/book-audit` (already handled). Add `pb-20 sm:pb-0` to the page wrapper/footer so the bar never covers content.

---

## 6. TAILWIND CSS CHANGES

### tailwind.config.js (non-breaking — old tokens kept during migration)

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        steel: { 50:'#F6F8FA', 500:'#1E4A73', 700:'#14304F', 900:'#0B1D33' },
        signal: { 50:'#FFF3EB', 500:'#F05A0E', 600:'#C74A0C' },
        alarm: { 600:'#DC2626' },
        verified: { 600:'#15803D' },
        ink: { 400:'#94A3B8', 600:'#475569', 900:'#0F172A' },
        line: { 200:'#E2E8F0' },
        paper: { 50:'#F6F8FA' },
        // legacy (delete after migration)
        navy: '#0A2540', navyDark: '#0D3560', charcoal: '#1A1A1A', section: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Barlow', 'Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        cta: '0 4px 14px rgba(240,90,14,0.35)',
        'cta-hover': '0 6px 20px rgba(240,90,14,0.45)',
      },
    },
  },
}
```

### Reusable component classes (index.css)

```css
@layer components {
  .btn-primary {
    @apply inline-flex items-center justify-center gap-2 rounded-[10px] bg-signal-500 px-8 py-4
           font-bold text-white shadow-cta transition-all duration-200
           hover:bg-signal-600 hover:-translate-y-0.5 hover:shadow-cta-hover active:scale-[0.98];
  }
  .btn-outline {
    @apply inline-flex items-center justify-center rounded-[10px] border-2 border-steel-500 px-8 py-3.5
           font-semibold text-steel-500 transition-colors duration-200
           hover:bg-steel-500 hover:text-white;
  }
  .eyebrow { @apply text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.2em] text-signal-600; }
  .bg-blueprint {
    background-image:
      linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
    background-size: 48px 48px;
  }
}
```

### Migration mechanics
- Codebase currently uses **hardcoded hex in arbitrary values** (`text-[#0A2540]`, `bg-[#F5F5F5]`) rather than config tokens — the redesign is mostly find/replace:
  - `#0A2540` → `steel-900` (dark surfaces) or `steel-500` (text/links) by context
  - `#1A1A1A` → `ink-900` · `#6B7280`/`#4B5563` → `ink-600` · `#9CA3AF` → `ink-400`
  - `#F5F5F5` → `paper-50` · `#E5E5E5` → `line-200`
- Replace ad-hoc `style={{ letterSpacing: '3px' }}` eyebrows with `.eyebrow`; replace `btn-glow` buttons with `.btn-primary`/`.btn-outline` (then delete `.btn-glow` and its navy glow).
- Add `font-display` to every `h1/h2/h3`.
- Breakpoints: current `md:` (768px) split is fine; add `sm:` (640px) only for the sticky bar and hero text-align.

---

## 7. FRAMER MOTION ENHANCEMENTS

Keep everything that exists (FadeIn, stagger, count-up, accordion, `useReducedMotion` guards are all correctly implemented). Add only:

1. **CTA magnetic arrow** — on `.btn-primary` hover, arrow nudges right:
```jsx
<motion.span aria-hidden animate={{ x: hovered ? 4 : 0 }} transition={{ type:'spring', stiffness:400, damping:20 }}>→</motion.span>
```
2. **Hero stat strip count-up** — reuse existing `react-countup` for the trust numbers (already a dependency; zero cost).
3. **Step connector line** — animated `scaleX: 0 → 1` (`origin-left`, 0.4s) between How-It-Works steps, synced with the existing `activeStep` state.
4. **Threat card icon pulse** — one-time subtle pulse when card enters view: `animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 0.5, delay: i * 0.15 }}`. No infinite loops.
5. **Sticky bar slide-in on scroll** (§5D) via `useScroll`/`useMotionValueEvent` instead of a mount timer.

**Performance rules:** animate only `transform`/`opacity` (never layout properties); keep `once: true` viewports (already done); no infinite animations; total added JS ≈ 0 (all existing deps). **Remove the artificial skeleton timers** (600/800ms `setTimeout` on Home/Pricing) — they *delay* content to show a skeleton, hurting LCP; gate skeletons on real loading events (iframe `onLoad`) or drop them for instant static content.

---

## 8. IMPLEMENTATION PRIORITY

### Quick wins (~30 min)
1. **Calendly fix** — Vercel env var + `src/config.js` fallback + iframe height clamp. *Revenue-critical.*
2. Wire the two dead Pricing buttons to `/book-audit`.
3. Add Tailwind config tokens + `.btn-primary`/`.btn-outline`/`.eyebrow` classes.
4. Swap all CTA buttons to orange `.btn-primary` with new copy.

### Medium effort (1–2 hours)
5. Replace floating circle with sticky bottom CTA bar.
6. Dark hero on Home (steel-900 + blueprint grid + orange stat) + trust stat strip.
7. Global color token migration (find/replace pass) + Barlow on headings.
8. Threat cards: red borders, icons, pull-stats; Pricing card elevation + mobile reorder.

### Full redesign (4+ hours)
9. Dark header bands on About/Book Audit; About founder/credentials block; mobile timeline rail.
10. Social proof strip on Home (facts now, testimonials when available).
11. Booking confirmation state (`?booked=true`), addon query params, UTM tracking.
12. Remove artificial skeleton timers; micro-interactions §7; real project/job-site photography pass.

---

## 9. BEFORE / AFTER VISUAL GUIDE

| Area | Before (current) | After (proposed) | Expected effect |
|------|------------------|------------------|-----------------|
| Home hero | White bg, navy text, navy button — generic B2B | Steel-900 dark hero, blueprint grid, orange $-figure + orange CTA, stat strip | Immediate differentiation; hero CTA clicks ↑ (contrast pairing worth up to ~34% per CRO studies) |
| All CTAs | Navy or white buttons (blend with palette) | Single dedicated action color (signal orange), first-person copy | CTR ↑; "one obvious next step" per screen |
| Book Audit | Iframe `src=undefined` in prod — **broken funnel** | Env var + fallback + responsive height + confirmation state | Bookings go from ~0 (broken) to functional — the largest single lift available |
| Mobile sticky CTA | 56px circle, 9px text (illegible) | Full-width 52px bar after hero scroll | Mobile conversion ↑; meets touch/readability standards |
| Pricing | 3 level cards, 2 dead buttons, audit card 2nd on mobile | Elevated center card, all buttons live, audit card first on mobile | Fewer dead ends; clearer tier hierarchy |
| Trust | No proof elements | Stat strips, credibility band, founder block | Higher trust for a $3,000 considered purchase |
| Typography | Inter everywhere | Barlow display + Inter body + mono stats | Industrial authority; numbers become scannable anchors |

**Measure:** Calendly bookings (primary), `/book-audit` visit rate, hero CTA CTR, mobile bounce rate. Vercel Analytics + Calendly UTM params cover all four without new tooling.

---

## Appendix: research sources

- [OpenAsset — 25 Construction Website Examples 2026](https://openasset.com/resources/construction-website-examples/) · [Colorlib — 27 Best Construction Websites](https://colorlib.com/wp/construction-company-website-examples/) · [Skill Making — Construction Web Trends 2026](https://skillmaking.com/10-construction-website-design-trends/) · [Web Design Mechanic — GC Trends 2026](https://www.webdesignmechanic.com/blog/website-design-trends-for-general-contractors/)
- Live sites analyzed: [turnerconstruction.com](https://www.turnerconstruction.com) · [bechtel.com](https://www.bechtel.com) · [vanta.com](https://www.vanta.com) · [1password.com](https://1password.com) · [huntress.com](https://www.huntress.com) · [supabase.com](https://supabase.com) · [bain.com](https://www.bain.com)
- CTA/color research: [Flint — CTA Performance Statistics](https://www.flint.com/blog/landing-page-cta-button-performance-statistics) · [CXL — Which Color Converts Best](https://cxl.com/blog/which-color-converts-the-best/) · [Zoho PageSense — Color Psychology & Conversions](https://www.zoho.com/pagesense/conversion-playbook/how-to-use-color-psychology-to-increase-conversions.html) · [ITBee — SaaS Color Psychology](https://itbeesolution.com/the-psychology-of-color-in-saas-branding-why-blue-isnt-always-the-answer-for-trust/) · [CyberCapacity — Why Is Cybersecurity Blue](https://cybercapacity.org/why-is-cyber-security-blue-the-cybersecurity-visuals-challenge/)
