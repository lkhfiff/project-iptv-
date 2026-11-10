const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main() {
  const brandsDir = path.join(process.cwd(), 'public', 'brands');
  const W = 600;
  const H = 900;

  // 1. beIN SPORTS: EXACT solid purple #5c2c90 (RGB: 92, 44, 144)
  // Matching the user's uploaded beinsports.png
  console.log('Building beIN SPORTS card with exact purple #5c2c90...');
  const beInOriginal = fs.readFileSync(path.join(brandsDir, 'beinsports.png'));
  const beInResized = await sharp(beInOriginal)
    .resize(420, null, { fit: 'inside' })
    .toBuffer();
  await sharp({
    create: {
      width: W,
      height: H,
      channels: 4,
      background: { r: 92, g: 44, b: 144, alpha: 1 },
    },
  })
    .composite([{ input: beInResized, gravity: 'center' }])
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-beinsports.png'));
  console.log('✓ card-beinsports.png generated with full solid #5c2c90');

  // 2. Netflix: EXACT solid pure black #000000
  // Matching user's uploaded netflix.png
  console.log('Building Netflix card with exact pure black #000000...');
  const netflixOriginal = fs.readFileSync(path.join(brandsDir, 'netflix.png'));
  const netflixResized = await sharp(netflixOriginal)
    .resize(480, null, { fit: 'inside' })
    .toBuffer();
  await sharp({
    create: {
      width: W,
      height: H,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    },
  })
    .composite([{ input: netflixResized, gravity: 'center' }])
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-netflix.png'));
  console.log('✓ card-netflix.png generated with full solid #000000');

  // 3. Apple TV+: EXACT graphite dark UI gradient (#313131 to #151515)
  // Matching user's uploaded appletv.png
  console.log('Building Apple TV+ card with exact graphite gradient...');
  const appleSvg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gApple" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#333336" />
          <stop offset="45%" stop-color="#242426" />
          <stop offset="100%" stop-color="#141416" />
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#gApple)" />
    </svg>
  `;
  const appleBase = await sharp(Buffer.from(appleSvg)).png().toBuffer();
  const appleLogo = await sharp(path.join(brandsDir, 'appletv-transparent.png'))
    .resize(320, null, { fit: 'inside' })
    .toBuffer();
  await sharp(appleBase)
    .composite([{ input: appleLogo, gravity: 'center' }])
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-appletv.png'));
  console.log('✓ card-appletv.png generated with Apple graphite gradient');

  // 4. Disney+: EXACT Disney+ cosmic blue-to-cyan gradient (#021424 to #009ea8)
  // Matching user's uploaded disneyplus.jpg
  console.log('Building Disney+ card with exact cosmic teal gradient...');
  const disneySvg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gDisney" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#021424" />
          <stop offset="35%" stop-color="#02263d" />
          <stop offset="68%" stop-color="#00586e" />
          <stop offset="100%" stop-color="#009ea8" />
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#gDisney)" />
    </svg>
  `;
  const disneyBase = await sharp(Buffer.from(disneySvg)).png().toBuffer();
  const disneyLogo = await sharp(path.join(brandsDir, 'disneyplus-transparent.png'))
    .resize(400, null, { fit: 'inside' })
    .toBuffer();
  await sharp(disneyBase)
    .composite([{ input: disneyLogo, gravity: 'center' }])
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-disneyplus.png'));
  console.log('✓ card-disneyplus.png generated with Disney cosmic gradient');

  // 5. CANAL+: Pure luxury cinema black #000000
  console.log('Building CANAL+ card...');
  const canalSvg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${W}" height="${H}" fill="#050505" />
      <g transform="translate(300, 450) scale(1.65)">
        <rect x="-105" y="-32" width="210" height="64" rx="8" fill="#000000" stroke="#444444" stroke-width="2" />
        <text x="0" y="10" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="900" letter-spacing="4" text-anchor="middle">CANAL+</text>
      </g>
    </svg>
  `;
  await sharp(Buffer.from(canalSvg))
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-canalplus.png'));
  console.log('✓ card-canalplus.png generated');

  // 6. Prime Video: Amazon midnight blue gradient (#0f2030 to #050a0f)
  console.log('Building Prime Video card...');
  const primeSvg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gPrime" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#102131" />
          <stop offset="50%" stop-color="#0a141e" />
          <stop offset="100%" stop-color="#04080c" />
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#gPrime)" />
      <g transform="translate(230, 450) scale(1.45)">
        <g transform="translate(0, -12)">
          <text x="-48" y="16" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="800" letter-spacing="-1">prime</text>
          <text x="56" y="16" fill="#00A8E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="300" letter-spacing="0">video</text>
        </g>
        <path d="M -90,26 C -40,46 40,46 90,26 C 75,34 60,38 45,40 C -15,44 -65,36 -90,26 Z" fill="#00A8E1" />
        <path d="M 85,22 L 100,28 L 92,42 C 90,36 88,30 85,22 Z" fill="#00A8E1" />
      </g>
    </svg>
  `;
  await sharp(Buffer.from(primeSvg))
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-primevideo.png'));
  console.log('✓ card-primevideo.png generated');

  // 7. HBO Max: Deep royal purple gradient (#2d074a to #120220)
  console.log('Building HBO Max card...');
  const hboSvg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gHbo" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2d074a" />
          <stop offset="50%" stop-color="#1c0330" />
          <stop offset="100%" stop-color="#0c0116" />
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#gHbo)" />
      <g transform="translate(340, 450) scale(1.5)">
        <text x="-58" y="14" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="900" letter-spacing="-2" text-anchor="middle">HBO</text>
        <rect x="-10" y="-24" width="76" height="42" rx="8" fill="#7B2CBF" />
        <text x="28" y="7" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="900" letter-spacing="2" text-anchor="middle">MAX</text>
      </g>
    </svg>
  `;
  await sharp(Buffer.from(hboSvg))
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-hbomax.png'));
  console.log('✓ card-hbomax.png generated');

  console.log('\nALL 7 CARDS COMPILED WITH EXACT BRAND MATCHING COLORS!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

