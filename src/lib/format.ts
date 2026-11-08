/* Pure formatting helpers — safe to use in the browser and at build time. */

export function fmtTime(m: number): string {
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60), r = m % 60;
  return `${h} hr${r ? ` ${r} min` : ""}`;
}

/** ISO 8601 duration for schema.org, e.g. PT1H30M */
export function isoDuration(m: number): string {
  const h = Math.floor(m / 60), r = m % 60;
  return `PT${h ? h + "H" : ""}${r || !h ? r + "M" : ""}`;
}

const FRACS: [number, string][] = [[0, ""], [0.125, "⅛"], [0.25, "¼"], [0.333, "⅓"], [0.5, "½"], [0.667, "⅔"], [0.75, "¾"], [1, ""]];
export function fmtQty(n: number): string {
  if (!n) return "";
  if (n >= 10) return String(Math.round(n));
  const whole = Math.floor(n), frac = n - whole;
  let best = FRACS[0];
  for (const f of FRACS) if (Math.abs(frac - f[0]) < Math.abs(frac - best[0])) best = f;
  const w = best[0] === 1 ? whole + 1 : whole;
  return `${w || ""}${best[1]}` || "0";
}

export function unitLabel(u: string, n: number): string {
  if (!u) return "";
  if (u === "pinch") return n > 1 ? "pinches" : "pinch";
  if (["cup", "can", "pint"].includes(u) && n > 1) return u + "s";
  return u;
}

export function ingredientLine(i: { qty: number; unit: string; item: string }, factor = 1): string {
  const n = i.qty * factor;
  return [fmtQty(n), unitLabel(i.unit, n), i.item].filter(Boolean).join(" ");
}


/** JSON safe to embed inside a <script> tag: escapes "<" so content can't close the tag. */
export function safeJson(v: unknown): string {
  return JSON.stringify(v).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
