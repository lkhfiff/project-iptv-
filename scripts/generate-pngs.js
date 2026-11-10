const sharp = require('sharp');
const fs = require('fs');

async function generateAllPngs() {
  // 1. CANAL+ transparent PNG
  const canalSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 160" width="500" height="160">
  <g transform="translate(250, 80)">
    <rect x="-160" y="-45" width="320" height="90" rx="16" fill="#000000" stroke="#FFFFFF" stroke-width="4" />
    <text x="0" y="16" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="48" font-weight="900" letter-spacing="6" text-anchor="middle">CANAL+</text>
  </g>
</svg>
`;

  // 2. Prime Video transparent PNG
  const primeSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" width="600" height="240">
  <g transform="translate(300, 100)">
    <g transform="translate(0, -10)">
      <text x="-140" y="20" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="72" font-weight="800" letter-spacing="-1.5">prime</text>
      <text x="40" y="20" fill="#00A8E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="72" font-weight="300" letter-spacing="0">video</text>
    </g>
    <!-- Smile Arrow -->
    <path d="M -170,42 C -80,72 80,72 170,42 C 145,54 120,60 90,64 C -20,70 -120,58 -170,42 Z" fill="#00A8E1" />
    <path d="M 160,36 L 186,45 L 172,66 C 168,57 165,48 160,36 Z" fill="#00A8E1" />
  </g>
</svg>
`;

  // 3. HBO Max transparent PNG
  const hboSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="600" height="200">
  <g transform="translate(300, 100)">
    <text x="-70" y="28" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif" font-size="96" font-weight="900" letter-spacing="2" text-anchor="middle">HBO</text>
    <g transform="translate(85, -42)">
      <rect x="0" y="0" width="135" height="84" rx="16" fill="#9900FF" />
      <text x="67.5" y="60" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif" font-size="50" font-weight="900" font-style="italic" letter-spacing="2" text-anchor="middle">MAX</text>
    </g>
  </g>
</svg>
`;

  await sharp(Buffer.from(canalSvg)).trim().png().toFile('public/brands/canalplus.png');
  await sharp(Buffer.from(primeSvg)).trim().png().toFile('public/brands/primevideo.png');
  await sharp(Buffer.from(hboSvg)).trim().png().toFile('public/brands/hbomax.png');

  console.log('Created canalplus.png, primevideo.png, hbomax.png successfully!');
}

generateAllPngs();
