import styles from "./page.module.css";

const colorRoles: { name: string; token: string; light: string; dark: string }[] =
  [
    { name: "canvas", token: "--color-bg-canvas", light: "#FFFFFF", dark: "#000000" },
    { name: "grouped", token: "--color-bg-grouped", light: "#F2F2F7", dark: "#1C1C1E" },
    { name: "surface", token: "--color-bg-surface", light: "#FFFFFF", dark: "#2C2C2E" },
    { name: "fg.primary", token: "--color-fg-primary", light: "#000000", dark: "#FFFFFF" },
    {
      name: "fg.secondary",
      token: "--color-fg-secondary",
      light: "rgba(60,60,67,.6)",
      dark: "rgba(235,235,245,.6)",
    },
    { name: "fg.link", token: "--color-fg-link", light: "#007AFF", dark: "#0A84FF" },
    {
      name: "status.success",
      token: "--color-status-success",
      light: "#34C759",
      dark: "#30D158",
    },
    {
      name: "status.danger",
      token: "--color-status-danger",
      light: "#FF3B30",
      dark: "#FF453A",
    },
    {
      name: "status.warning",
      token: "--color-status-warning",
      light: "#FF9500",
      dark: "#FF9F0A",
    },
  ];

const typeScale: { token: string; label: string; size: string; sample: string }[] = [
  { token: "--text-display", label: "display · 52 · 600", size: "var(--text-display)", sample: "Product Designer" },
  { token: "--text-large-title", label: "large-title · 34 · 600", size: "var(--text-large-title)", sample: "Case titles" },
  { token: "--text-title-1", label: "title-1 · 28 · 600", size: "var(--text-title-1)", sample: "Section titles" },
  { token: "--text-title-2", label: "title-2 · 22 · 600", size: "var(--text-title-2)", sample: "Card titles" },
  { token: "--text-title-3", label: "title-3 · 20 · 600", size: "var(--text-title-3)", sample: "In-page subheads" },
  { token: "--text-headline", label: "headline · 17 · 600", size: "var(--text-headline)", sample: "Emphasised body / nav" },
  { token: "--text-body", label: "body · 17 · 400", size: "var(--text-body)", sample: "Reading text — the Apple reading floor." },
  { token: "--text-subhead", label: "subhead · 15 · 400", size: "var(--text-subhead)", sample: "Meta: dates, labels" },
  { token: "--text-footnote", label: "footnote · 13 · 400", size: "var(--text-footnote)", sample: "Captions, legal" },
  { token: "--text-caption", label: "caption · 12 · 400", size: "var(--text-caption)", sample: "Image credits, tags" },
];

const spaceScale = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96];
const radii: { token: string; label: string; value: string }[] = [
  { token: "--radius-control", label: "control", value: "8px" },
  { token: "--radius-card", label: "card", value: "12px" },
  { token: "--radius-sheet", label: "sheet", value: "20px" },
  { token: "--radius-pill", label: "pill", value: "9999px" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.kicker}>2026 Portfolio · Environment ready</p>
        <h1 className={styles.title}>Design System — Foundations</h1>
        <p className={styles.lede}>
          A live, code-side preview of the tokens defined in{" "}
          <code>docs/design-system.md</code>. Apple HIG discipline, tailored —
          Clarity, Deference, Depth. Light ships first; dark is a paired token
          set. This page proves the Next.js + Tailwind toolchain runs the
          documented stack.
        </p>
      </header>

      <section className={styles.section} aria-labelledby="colour">
        <h2 id="colour" className={styles.sectionTitle}>
          Colour roles
        </h2>
        <p className={styles.sectionNote}>
          Semantic roles bound per theme. Swatches below reflect your current
          appearance ({"light or dark"}).
        </p>
        <ul className={styles.swatchGrid}>
          {colorRoles.map((c) => (
            <li key={c.token} className={styles.swatchItem}>
              <span
                className={styles.swatch}
                style={{ background: `var(${c.token})` }}
                aria-hidden
              />
              <span className={styles.swatchMeta}>
                <span className={styles.swatchName}>{c.name}</span>
                <code className={styles.swatchToken}>{c.token}</code>
                <span className={styles.swatchHex}>
                  {c.light} · {c.dark}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="type">
        <h2 id="type" className={styles.sectionTitle}>
          Type scale
        </h2>
        <p className={styles.sectionNote}>
          One family, named styles. Hierarchy is weight and size, not a second
          display font.
        </p>
        <div className={styles.typeList}>
          {typeScale.map((t) => (
            <div key={t.token} className={styles.typeRow}>
              <span className={styles.typeLabel}>{t.label}</span>
              <span
                className={styles.typeSample}
                style={{
                  fontSize: t.size,
                  fontWeight: t.token.includes("body") ||
                  t.token.includes("subhead") ||
                  t.token.includes("footnote") ||
                  t.token.includes("caption")
                    ? 400
                    : 600,
                }}
              >
                {t.sample}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="cjk">
        <h2 id="cjk" className={styles.sectionTitle}>
          Traditional Chinese — first-class
        </h2>
        <p className={styles.sectionNote}>
          <code>Noto Sans TC</code>, slightly more line-height than English.
        </p>
        <p lang="zh-Hant" className={styles.cjk}>
          產品設計師 — 從研究到上線，我把產品做完。
        </p>
      </section>

      <section className={styles.section} aria-labelledby="space">
        <h2 id="space" className={styles.sectionTitle}>
          Spacing · 8pt with 4pt subdivisions
        </h2>
        <ul className={styles.spaceRow}>
          {spaceScale.map((s) => (
            <li key={s} className={styles.spaceItem}>
              <span className={styles.spaceBar} style={{ width: s }} aria-hidden />
              <span className={styles.spaceLabel}>{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="radius">
        <h2 id="radius" className={styles.sectionTitle}>
          Radius
        </h2>
        <ul className={styles.radiusRow}>
          {radii.map((r) => (
            <li key={r.token} className={styles.radiusItem}>
              <span
                className={styles.radiusBox}
                style={{ borderRadius: `var(${r.token})` }}
                aria-hidden
              />
              <span className={styles.radiusLabel}>
                {r.label} · {r.value}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>
          Foundations preview only — no homepage or positioning content is
          locked here. Source of truth: <code>docs/design-system.md</code>.
        </p>
      </footer>
    </main>
  );
}
