import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = 'public/linkedin-banner-samples';
mkdirSync(outputDir, { recursive: true });

const width = 1584;
const height = 396;
const graphTop = 78;
const headline = 'Fractional CTO & Principal Engineer';
const subheadline = 'Helping climate & mission-driven organisations build, scale & stabilise digital products';
const smallLine = 'Senior hands-on engineering leadership across startups, scale-ups and complex systems';

const palette = {
  deepBlue: '#08306b',
  blue: '#2171b5',
  midBlue: '#6baed6',
  paleBlue: '#c6dbef',
  nearWhite: '#f7fbff',
  paleWarm: '#fee0d2',
  coral: '#fb6a4a',
  red: '#de2d26',
  deepRed: '#a50f15',
};

function colorFor(value) {
  if (value < -1.25) return palette.deepBlue;
  if (value < -0.85) return palette.blue;
  if (value < -0.45) return palette.midBlue;
  if (value < -0.12) return palette.paleBlue;
  if (value < 0.16) return palette.nearWhite;
  if (value < 0.45) return palette.paleWarm;
  if (value < 0.85) return palette.coral;
  if (value < 1.25) return palette.red;
  return palette.deepRed;
}

function stripes(opacity, blur = 0) {
  const years = 174;
  const stripeWidth = width / years;
  const rects = [];

  for (let i = 0; i < years; i += 1) {
    const t = i / (years - 1);
    const longTermWarming = -0.76 + (t ** 2.22) * 2.35;
    const oscillation = Math.sin(i * 0.27) * 0.33 + Math.sin(i * 0.91 + 0.8) * 0.19;
    const lateAcceleration = t > 0.72 ? (t - 0.72) * 1.05 : 0;
    const value = longTermWarming + oscillation + lateAcceleration;
    const x = (i * stripeWidth).toFixed(2);
    const w = (stripeWidth + 0.95).toFixed(2);
    rects.push(`    <rect x="${x}" y="${graphTop}" width="${w}" height="${height - graphTop}" fill="${colorFor(value)}" />`);
  }

  const filter = blur > 0 ? ' filter="url(#soften-bars)"' : '';
  return `  <g opacity="${opacity}"${filter}>\n${rects.join('\n')}\n  </g>`;
}

function svgVariant({ id, title, description, bgOpacity, blur, leftGradient, panel, headlineY, includeSmall, footerNote }) {
  const defs = `  <defs>
    <linearGradient id="left-fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${leftGradient[0]}" stop-opacity="${leftGradient[1]}" />
      <stop offset="58%" stop-color="${leftGradient[0]}" stop-opacity="${leftGradient[2]}" />
      <stop offset="100%" stop-color="${leftGradient[0]}" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="top-shadow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#05070a" stop-opacity="0.72" />
      <stop offset="100%" stop-color="#05070a" stop-opacity="0" />
    </linearGradient>
    <filter id="soften-bars">
      <feGaussianBlur stdDeviation="${blur}" />
    </filter>
  </defs>`;

  const optionalPanel = panel
    ? `  <rect x="96" y="96" width="1010" height="210" rx="28" fill="#07111f" opacity="${panel}" />\n  <rect x="96" y="96" width="1010" height="210" rx="28" fill="none" stroke="#ffffff" stroke-opacity="0.09" />`
    : '';

  const small = includeSmall
    ? `  <text x="120" y="${headlineY + 126}" class="small">${smallLine}</text>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title>
  <desc id="desc">${description}</desc>
${defs}
  <style>
    .source { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 34px; letter-spacing: -0.02em; fill: #ffffff; opacity: 0.22; }
    .headline { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 64px; font-weight: 760; letter-spacing: -0.045em; fill: #ffffff; }
    .subheadline { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 30px; font-weight: 480; letter-spacing: -0.018em; fill: #e6edf6; }
    .small { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 24px; font-weight: 430; letter-spacing: -0.012em; fill: #b6c3d3; }
  </style>
  <rect width="${width}" height="${height}" fill="#101820" />
  <rect y="0" width="${width}" height="${graphTop}" fill="#222426" />
  <text x="28" y="47" class="source">Temperature change in Edinburgh since 1850</text>
${stripes(bgOpacity, blur)}
  <rect width="${width}" height="${height}" fill="url(#left-fade)" />
  <rect y="0" width="${width}" height="160" fill="url(#top-shadow)" />
${optionalPanel}
  <text x="120" y="${headlineY}" class="headline">${headline}</text>
  <text x="120" y="${headlineY + 62}" class="subheadline">${subheadline}</text>
${small}
  <text x="120" y="348" class="small" opacity="0.46">${footerNote}</text>
</svg>
`;
}

const variants = [
  {
    filename: 'linkedin-banner-version-a.svg',
    id: 'A',
    title: 'LinkedIn banner version A — recommended senior fractional CTO header',
    description: 'Recommended version with climate anomaly stripes at subtle opacity and clear text hierarchy for fractional CTO services.',
    bgOpacity: '0.18',
    blur: 0,
    leftGradient: ['#08111d', '0.92', '0.48'],
    panel: 0,
    headlineY: 182,
    includeSmall: true,
    footerNote: 'Version A · recommended · climate data as subtle texture',
  },
  {
    filename: 'linkedin-banner-version-b.svg',
    id: 'B',
    title: 'LinkedIn banner version B — calmer minimal senior fractional CTO header',
    description: 'Minimal version with more whitespace and reduced climate stripe intensity for a calm executive feel.',
    bgOpacity: '0.10',
    blur: 0.15,
    leftGradient: ['#0a121b', '0.96', '0.62'],
    panel: 0,
    headlineY: 176,
    includeSmall: false,
    footerNote: 'Version B · calmer minimal background · more whitespace',
  },
  {
    filename: 'linkedin-banner-version-c.svg',
    id: 'C',
    title: 'LinkedIn banner version C — design-forward senior fractional CTO header',
    description: 'Design-forward version with a mild gradient panel while retaining the climate anomaly stripe identity layer.',
    bgOpacity: '0.24',
    blur: 0.25,
    leftGradient: ['#06101d', '0.88', '0.32'],
    panel: 0.42,
    headlineY: 176,
    includeSmall: true,
    footerNote: 'Version C · mild gradient panel · polished but restrained',
  },
];

for (const variant of variants) {
  const svg = svgVariant(variant);
  writeFileSync(join(outputDir, variant.filename), svg, 'utf8');
}

const readme = `# LinkedIn banner sample variants

These SVG samples preserve the original climate temperature-anomaly stripe concept as a subtle background identity layer while foregrounding the professional positioning for a senior fractional CTO / principal engineer.

- \`linkedin-banner-version-a.svg\`: recommended version with the climate graph at 18% opacity and the full three-line hierarchy.
- \`linkedin-banner-version-b.svg\`: calmer minimal version with the climate graph at 10% opacity and more open space.
- \`linkedin-banner-version-c.svg\`: slightly more design-forward version with a mild text panel and 24% graph opacity.

All three variants use the headline “${headline}” and preserve a data-driven climate-stripe texture in the background.
`;

writeFileSync(join(outputDir, 'README.md'), readme, 'utf8');
