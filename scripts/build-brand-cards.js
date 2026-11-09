const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main() {
  const brandsDir = path.join(process.cwd(), 'public', 'brands');
  if (!fs.existsSync(brandsDir)) {
    fs.mkdirSync(brandsDir, { recursive: true });
  }

  // Helper to create edge-faded buffer
  async function fadeEdges(buffer, width, height, padY = 0.15, padX = 0.12) {
    const maskSvg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fadeY" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
            <stop offset="${Math.round(padY * 100)}%" stop-color="#ffffff" stop-opacity="1" />
            <stop offset="${Math.round((1 - padY) * 100)}%" stop-color="#ffffff" stop-opacity="1" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="fadeX" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
            <stop offset="${Math.round(padX * 100)}%" stop-color="#ffffff" stop-opacity="1" />
            <stop offset="${Math.round((1 - padX) * 100)}%" stop-color="#ffffff" stop-opacity="1" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
          </linearGradient>
        </defs>
        <rect width="${width}" height="${height}" fill="url(#fadeY)" />
        <rect width="${width}" height="${height}" fill="url(#fadeX)" style="mix-blend-mode: multiply;" />
      </svg>
    `;
    const maskBuffer = await sharp(Buffer.from(maskSvg)).png().toBuffer();
    const imgWithAlpha = await sharp(buffer).ensureAlpha().toBuffer();
    return sharp(imgWithAlpha)
      .composite([{ input: maskBuffer, blend: 'dest-in' }])
      .png()
      .toBuffer();
  }

  // 1. beIN SPORTS (User upload: public/brands/beinsports.png)
  const beInOriginal = fs.readFileSync(path.join(brandsDir, 'beinsports.png'));
  const beInResized = await sharp(beInOriginal)
    .resize(400, null, { fit: 'inside' })
    .toBuffer();
  const beInMeta = await sharp(beInResized).metadata();
  const beInFaded = await fadeEdges(beInResized, beInMeta.width, beInMeta.height, 0.1, 0.08);

  await sharp({
    create: {
      width: 600,
      height: 900,
      channels: 4,
      background: { r: 92, g: 44, b: 144, alpha: 1 },
    },
  })
    .composite([{ input: beInFaded, gravity: 'center' }])
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-beinsports.png'));

  // 2. Netflix (User upload: public/brands/netflix.png)
  const netflixOriginal = fs.readFileSync(path.join(brandsDir, 'netflix.png'));
  const netflixResized = await sharp(netflixOriginal)
    .resize(480, null, { fit: 'inside' })
    .toBuffer();
  await sharp({
    create: {
      width: 600,
      height: 900,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    },
  })
    .composite([{ input: netflixResized, gravity: 'center' }])
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-netflix.png'));

  // 3. Apple TV+ (User upload: public/brands/appletv.png)
  const appleSvg = `
    <svg width="600" height="900" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gApple" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#343437" />
          <stop offset="50%" stop-color="#212123" />
          <stop offset="100%" stop-color="#121214" />
        </radialGradient>
      </defs>
      <rect width="600" height="900" fill="url(#gApple)" />
    </svg>
  `;
  const appleBase = await sharp(Buffer.from(appleSvg)).png().toBuffer();
  const appleOriginal = fs.readFileSync(path.join(brandsDir, 'appletv.png'));
  const appleResized = await sharp(appleOriginal)
    .resize(380, null, { fit: 'inside' })
    .toBuffer();
  const appleMeta = await sharp(appleResized).metadata();
  const appleFaded = await fadeEdges(appleResized, appleMeta.width, appleMeta.height, 0.16, 0.12);

  await sharp(appleBase)
    .composite([{ input: appleFaded, gravity: 'center' }])
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-appletv.png'));

  // 4. Disney+ (User upload: public/brands/disneyplus.jpg)
  const disneySvg = `
    <svg width="600" height="900" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gDisney" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#021526" />
          <stop offset="25%" stop-color="#031e36" />
          <stop offset="60%" stop-color="#023b4e" />
          <stop offset="100%" stop-color="#006c7e" />
        </linearGradient>
      </defs>
      <rect width="600" height="900" fill="url(#gDisney)" />
    </svg>
  `;
  const disneyBase = await sharp(Buffer.from(disneySvg)).png().toBuffer();
  const disneyOriginal = fs.readFileSync(path.join(brandsDir, 'disneyplus.jpg'));
  const disneyResized = await sharp(disneyOriginal)
    .resize(480, null, { fit: 'inside' })
    .toBuffer();
  const disneyMeta = await sharp(disneyResized).metadata();
  const disneyFaded = await fadeEdges(disneyResized, disneyMeta.width, disneyMeta.height, 0.16, 0.12);

  await sharp(disneyBase)
    .composite([{ input: disneyFaded, gravity: 'center' }])
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-disneyplus.png'));

  // 5. CANAL+ (Vector SVG portrait 600x900)
  const canalSvg = `
    <svg width="600" height="900" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="900" fill="#050505" />
      <g transform="translate(300, 450) scale(1.65)">
        <rect x="-105" y="-32" width="210" height="64" rx="8" fill="#000000" stroke="#383838" stroke-width="2" />
        <text x="0" y="10" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="900" letter-spacing="4" text-anchor="middle">CANAL+</text>
      </g>
    </svg>
  `;
  await sharp(Buffer.from(canalSvg))
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-canalplus.png'));

  // 6. Prime Video (Vector SVG portrait 600x900 - exactly centered at x=235)
  const primeSvg = `
    <svg width="600" height="900" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gPrime" cx="50%" cy="45%" r="70%">
          <stop offset="0%" stop-color="#0f1f2e" />
          <stop offset="60%" stop-color="#09131d" />
          <stop offset="100%" stop-color="#04080d" />
        </radialGradient>
      </defs>
      <rect width="600" height="900" fill="url(#gPrime)" />
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

  // 7. HBO Max (Vector SVG portrait 600x900 - exactly centered at x=340)
  const hboSvg = `
    <svg width="600" height="900" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gHbo" cx="50%" cy="45%" r="70%">
          <stop offset="0%" stop-color="#2f074f" />
          <stop offset="60%" stop-color="#140224" />
          <stop offset="100%" stop-color="#06000c" />
        </radialGradient>
      </defs>
      <rect width="600" height="900" fill="url(#gHbo)" />
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

  console.log('RE-GENERATED ALL CARDS WITH PERFECT SYMMETRIC CENTERING');
}

main().catch(console.error);
