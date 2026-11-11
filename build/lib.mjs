// Reads parts/, templates/, tokens.css and themes.json. Shared by build.mjs and check.mjs. No dependencies.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

// Groups in sprue order; the letter is the part's group code (A1, B2, ...).
export const GROUPS = [
  { id: 'navigation', letter: 'A', name: 'Navigation' },
  { id: 'hero', letter: 'B', name: 'Heroes' },
  { id: 'content', letter: 'C', name: 'Content' },
  { id: 'forms', letter: 'D', name: 'Forms' },
  { id: 'places', letter: 'E', name: 'Places' },
  { id: 'dividers', letter: 'F', name: 'Dividers' },
  { id: 'footers', letter: 'G', name: 'Footers' },
];

const HEAD = /^<!--sr:part\s*([\s\S]*?)-->\s*/;

export function readPart(file) {
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(HEAD);
  if (!m) throw new Error(`${file}: missing <!--sr:part {json} --> header`);
  let meta;
  try { meta = JSON.parse(m[1]); } catch (e) { throw new Error(`${file}: header is not valid JSON: ${e.message}`); }
  for (const k of ['id', 'title', 'category', 'summary', 'slots', 'needs', 'a11y']) if (!(k in meta)) throw new Error(`${file}: header lacks "${k}"`);
  if (path.basename(file, '.html') !== meta.id) throw new Error(`${file}: id "${meta.id}" does not match the file name`);
  if (!GROUPS.some(g => g.id === meta.category)) throw new Error(`${file}: unknown category "${meta.category}"`);
  const body = src.slice(m[0].length).trim();
  for (const slot of Object.keys(meta.slots)) {
    const inBody = new RegExp(`data-slot="[^"]*\\b${slot}\\b`).test(body) || /^(current|featured|brand-href)$/.test(slot);
    if (!inBody) throw new Error(`${file}: slot "${slot}" is declared but no element has data-slot="${slot}"`);
  }
  return { ...meta, file: path.relative(ROOT, file), source: src, body, sha256: crypto.createHash('sha256').update(src).digest('hex'), bytes: Buffer.byteLength(src) };
}

export function loadAll() {
  const tokensCss = fs.readFileSync(path.join(ROOT, 'tokens.css'), 'utf8');
  const themes = JSON.parse(fs.readFileSync(path.join(ROOT, 'themes.json'), 'utf8'));
  const files = fs.readdirSync(path.join(ROOT, 'parts')).filter(f => f.endsWith('.html')).map(f => path.join(ROOT, 'parts', f));
  const parts = files.map(readPart);
  // number in group order, then by the order given here (most useful first), then alphabetically
  const ORDER = ['nav-bar', 'breadcrumb', 'hero-split', 'hero-statement', 'feature-grid', 'steps', 'stats', 'testimonial', 'pricing', 'faq', 'gallery', 'cta-band', 'contact-form', 'newsletter', 'map-embed', 'divider-or', 'divider-mark', 'footer-social'];
  const rank = p => [GROUPS.findIndex(g => g.id === p.category), ORDER.includes(p.id) ? ORDER.indexOf(p.id) : 999, p.id];
  parts.sort((a, b) => { const x = rank(a), y = rank(b); return x[0] - y[0] || x[1] - y[1] || x[2].localeCompare(y[2]); });
  const counters = {};
  parts.forEach((p, i) => {
    const g = GROUPS.find(g => g.id === p.category);
    counters[g.id] = (counters[g.id] || 0) + 1;
    p.no = i + 1;
    p.code = `${g.letter}${counters[g.id]}`;
    p.group = g;
  });
  const byId = Object.fromEntries(parts.map(p => [p.id, p]));
  const templates = fs.readdirSync(path.join(ROOT, 'templates')).filter(f => f.endsWith('.json')).sort().map(f => {
    const t = JSON.parse(fs.readFileSync(path.join(ROOT, 'templates', f), 'utf8'));
    for (const ref of t.parts) {
      if (!byId[ref.id]) throw new Error(`templates/${f}: unknown part ${ref.id}`);
      for (const from of Object.keys(ref.replace || {})) if (!byId[ref.id].body.includes(from)) throw new Error(`templates/${f}: part ${ref.id} has no text "${from.slice(0, 50)}" to replace`);
    }
    return t;
  });
  return { tokensCss, themes, parts, byId, templates };
}

// The tokens block for a theme (or the defaults when theme is null).
export function tokensFor(tokensCss, themes, theme) {
  if (!theme || !themes[theme]) return tokensCss.trim();
  const t = themes[theme];
  let css = tokensCss.trim();
  for (const [k, v] of Object.entries(t)) if (k.startsWith('--')) css = css.replace(new RegExp(`(${k}:\\s*)[^;]+;`), `$1${v};`);
  return css;
}

// A whole, standalone HTML document: the exact text the sandbox shows and copies.
export function documentFor({ title, lang = 'en', tokens, bodies }) {
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<style>
/* sr:tokens */
${tokens}
/* /sr:tokens */
*,*::before,*::after{box-sizing:border-box}
body{margin:0;background:var(--sr-paper,#fbfaf7);color:var(--sr-ink,#17181c);font-family:var(--sr-font-body,system-ui,sans-serif);line-height:var(--sr-leading,1.55)}
img{max-width:100%}
</style>
</head>
<body>
${bodies.join('\n')}
</body>
</html>
`;
}

export function partBody(p, replace = {}) {
  let b = p.body;
  for (const [from, to] of Object.entries(replace)) b = b.split(from).join(to);
  return `<!-- part ${p.code} ${p.id} -->\n${b}`;
}

export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
