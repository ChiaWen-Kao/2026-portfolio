# Phase 0 — Positioning brief

Status: **draft for lock**. Approve or mark the open items before Phase 1 (Figma).

This is the decision document for the 2026 rebuild. Style, tokens, homepage, and case studies follow this — not the other way around.

---

## Locked

| Decision | Lock |
| --- | --- |
| Audience | Recruiters, hiring managers, and stakeholders at companies Wen has applied to |
| Cases on first release | **Freckle Bakes** and **ZenZzz** only. Everything else is later. |
| Design source | Apple Human Interface Guidelines, **tailored** — not a clone of apple.com or an iOS UI kit |
| Existing system | None. We build tokens from HIG principles + our own voice |
| Languages | English first; Traditional Chinese is in the system from Phase 1, wired up after the homepage |
| Hosting | GitHub Pages now (`/2026-portfolio/`); custom domain at the end |

---

## What this audience does on a portfolio

They are not browsing for inspiration. They are checking whether Wen can do the job on the posting.

| Person | Time | They need |
| --- | --- | --- |
| Recruiter | ~15 seconds | A job-shaped title, location, 2 relevant cases, no confusion |
| Hiring manager | ~2 minutes | Process, decisions, what Wen owned vs the team |
| Stakeholder (PM, eng, founder) | Skims one case | Evidence she can work with them, not only decorate screens |

Implications we will not reopen later:

1. The hero title must match **roles she is applying for**. ATS and humans both filter on “Product Designer”, “UX Designer”, “Frontend Engineer”. “Digital product creator” stays as an internal identity, not the H1.
2. Two cases is enough. A long grid of coursework and graphic work made the old site look unfocused. Depth beats range.
3. Each case answers: **problem → what I did → why → outcome**. Product descriptions are not a case study.
4. Coursework is allowed if it is labelled honestly. ZenZzz is course work. Hiding that would hurt trust; leading with the design problem keeps it useful.
5. Chrome recedes. Recruiters remember the work, not the nav animation.

---

## Title (needs a yes)

Wen’s range is real: consulting, UX/UI, frontend, backend, database, deploy. For **this** audience, the site still needs one primary job label.

**Recommended lock**

| Line | Text |
| --- | --- |
| Role (EN) | Product Designer |
| Support (EN) | I design and ship digital products — from research to production. |
| Role (中文) | 產品設計師 |
| Support (中文) | 從研究到上線，我把產品做完。 |

Why this pair: “Product Designer” is what recruiters search and what hiring managers recognise. The support line carries the build/consult range without a hyphenated job title.

**If you are also applying to engineering roles**, do not put two titles in the hero. Keep Product Designer on the homepage; put “I also write production front-end and back-end” on About and in Freckle Bakes. A hyphenated hero is what we are leaving behind.

Reply with one of:

- **A** — lock the table above
- **B** — UX Designer + the same support line
- **C** — Product Designer & Engineer (only if most applications are hybrid)

---

## Case plan for first release

### 1. Freckle Bakes — lead case

Real client, Brisbane chiffon bakery, live at [frecklebakes.com](https://www.frecklebakes.com/). This is the proof that Wen can take a product from problem to production. Hiring managers weight this higher than coursework **if** it is written as product decisions, not “I built a website.”

Homepage card must say what Wen did, not what the bakery sells.

Needed from Wen before the case page is drafted (bullet list is fine):

- Role and whether anyone else was on it
- The problem before the site (Instagram DMs, phone orders, no pickup slots, language, …)
- Constraints (budget, timeline, platform, owner’s time)
- 3–5 decisions and the rejected alternatives
- What shipped (pages, booking/pickup, CMS, payments, bilingual, …)
- Outcome (orders, time saved, anything measurable — even qualitative)
- Figma file or screenshots if they exist

### 2. ZenZzz — process case

Sleep tracker for university students (Mar 2024 – May 2025, course work). Old site tags: UI/UX, user research, desk research. This case exists to show **how Wen thinks**, which Freckle Bakes may not document as tightly.

Homepage card must name the user problem and one decision, not “designed and prototyped an app.”

Needed from Wen:

- The brief and the actual problem you chose to solve
- Research methods and what changed because of them
- 3–5 design decisions (and what you cut)
- What you validated (tests, metrics, feedback)
- What you would do next
- Prototype link (Figma / interactive)

### Later (not on first homepage)

COPD FHIR app, InsightHub, TNVR, and others. They can appear on a Work index or About once the two lead cases are solid. TNVR stays off the homepage — it reads as graphic design and dilutes a product-design application.

---

## Voice

- First person, specific, short. No “passionate designer with expertise in user-centred design.”
- Name the user and the constraint in the first sentence of a case.
- English is the default for this audience. 中文 is a first-class layout, not a translation dump: slightly warmer, same facts.
- Honest labels: Client project, Course work, Industry-sponsored. Recruiters notice.

---

## What we are not doing in Phase 0–3

- Rebuilding the old About animation
- Putting every past project on the homepage
- Cloning Apple marketing (full-bleed product tiles, “Think Different” tone, Liquid Glass chrome)
- Inventing Freckle Bakes or ZenZzz process that Wen did not write

---

## Open items (Wen)

- [ ] Title option A / B / C
- [ ] Confirm most applications are Product / UX design (not software engineering)
- [ ] Freckle Bakes facts (list above)
- [ ] ZenZzz facts (list above)
- [ ] Authenticate Figma in Cursor before Phase 1
- [ ] Optional: 2–3 portfolio sites you respect (for homepage structure only — not for visual cloning)

Phase 1 starts when the title is locked. Case facts can arrive in parallel; they block the case pages, not the design system.
