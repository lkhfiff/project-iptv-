const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main() {
  const brandsDir = path.join(process.cwd(), 'public', 'brands');

  // Unified luxury card size: 600 x 900
  const W = 600;
  const H = 900;

  // Helper to generate a luxury obsidian glass card base with subtle brand ambient backlight
  function createCardSvg({ glowColor, glowOpacity = 0.22, glowRadius = '55%', topGlow = false }) {
    return `
      <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Deep luxury dark card base -->
          <linearGradient id="cardBase" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#141416" />
            <stop offset="40%" stop-color="#0b0b0d" />
            <stop offset="100%" stop-color="#050506" />
          </linearGradient>

          <!-- Subtle glass surface highlight on top edge -->
          <linearGradient id="glassSheen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.10" />
            <stop offset="35%" stop-color="#ffffff" stop-opacity="0.02" />
            <stop offset="100%" stop-color="#000000" stop-opacity="0.6" />
          </linearGradient>

          <!-- Ambient brand backlight glow in center -->
          <radialGradient id="ambientGlow" cx="50%" cy="50%" r="${glowRadius}">
            <stop offset="0%" stop-color="${glowColor}" stop-opacity="${glowOpacity}" />
            <stop offset="45%" stop-color="${glowColor}" stop-opacity="${glowOpacity * 0.4}" />
            <stop offset="100%" stop-color="${glowColor}" stop-opacity="0" />
          </radialGradient>
        </defs>

        <!-- Base background -->
        <rect width="${W}" height="${H}" fill="url(#cardBase)" />

        <!-- Ambient glow behind the logo -->
        <circle cx="${W / 2}" cy="${H / 2}" r="${W * 0.7}" fill="url(#ambientGlow)" />

        <!-- Glass sheen -->
        <rect width="${W}" height="${H}" fill="url(#glassSheen)" />
      </svg>
    `;
  }

  // 1. Netflix: Deep obsidian card with subtle red ambient backlight
  const netflixSvg = createCardSvg({ glowColor: '#E50914', glowOpacity: 0.28, glowRadius: '50%' });
  const netflixBase = await sharp(Buffer.from(netflixSvg)).png().toBuffer();
  // Logo from netflix-transparent.png
  const netflixLogo = await sharp(path.join(brandsDir, 'netflix-transparent.png'))
    .resize(220, null, { fit: 'inside' })
    .toBuffer();
  await sharp(netflixBase)
    .composite([{ input: netflixLogo, gravity: 'center' }])
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-netflix.png'));
  console.log('1. card-netflix.png generated');

  // 2. beIN SPORTS: Deep obsidian card with subtle royal violet ambient backlight
  const beInSvg = createCardSvg({ glowColor: '#5c2c90', glowOpacity: 0.35, glowRadius: '55%' });
  const beInBase = await sharp(Buffer.from(beInSvg)).png().toBuffer();
  const beInLogo = await sharp(path.join(brandsDir, 'beinsports-transparent.png'))
    .resize(340, null, { fit: 'inside' })
    .toBuffer();
  await sharp(beInBase)
    .composite([{ input: beInLogo, gravity: 'center' }])
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-beinsports.png'));
  console.log('2. card-beinsports.png generated');

  // 3. Apple TV+: Deep obsidian card with graphite silver backlight
  const appleSvg = createCardSvg({ glowColor: '#FFFFFF', glowOpacity: 0.14, glowRadius: '45%' });
  const appleBase = await sharp(Buffer.from(appleSvg)).png().toBuffer();
  const appleLogo = await sharp(path.join(brandsDir, 'appletv-transparent.png'))
    .resize(300, null, { fit: 'inside' })
    .toBuffer();
  await sharp(appleBase)
    .composite([{ input: appleLogo, gravity: 'center' }])
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-appletv.png'));
  console.log('3. card-appletv.png generated');

  // 4. CANAL+: Pure luxury deep black with subtle silver halo
  const canalSvg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="canalBase" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#141416" />
          <stop offset="40%" stop-color="#0b0b0d" />
          <stop offset="100%" stop-color="#050506" />
        </linearGradient>
        <radialGradient id="canalHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.10" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#canalBase)" />
      <circle cx="${W / 2}" cy="${H / 2}" r="${W * 0.6}" fill="url(#canalHalo)" />
      <!-- CANAL+ framed capsule -->
      <g transform="translate(300, 450) scale(1.65)">
        <rect x="-105" y="-32" width="210" height="64" rx="8" fill="#000000" stroke="#444444" stroke-width="2" />
        <text x="0" y="10" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="900" letter-spacing="4" text-anchor="middle">CANAL+</text>
      </g>
    </svg>
  `;
  await sharp(Buffer.from(canalSvg))
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-canalplus.png'));
  console.log('4. card-canalplus.png generated');

  // 5. Disney+: Deep obsidian card with subtle cosmic cyan/blue backlight
  const disneySvg = createCardSvg({ glowColor: '#00A8E1', glowOpacity: 0.30, glowRadius: '55%' });
  const disneyBase = await sharp(Buffer.from(disneySvg)).png().toBuffer();
  const disneyLogo = await sharp(path.join(brandsDir, 'disneyplus-transparent.png'))
    .resize(360, null, { fit: 'inside' })
    .toBuffer();
  await sharp(disneyBase)
    .composite([{ input: disneyLogo, gravity: 'center' }])
    .png({ quality: 95 })
    .toFile(path.join(brandsDir, 'card-disneyplus.png'));
  console.log('5. card-disneyplus.png generated');

  // 6. Prime Video: Deep obsidian card with subtle cyan smile backlight
  const primeSvg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="primeBase" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#141416" />
          <stop offset="40%" stop-color="#0b0b0d" />
          <stop offset="100%" stop-color="#050506" />
        </linearGradient>
        <radialGradient id="primeGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#00A8E1" stop-opacity="0.25" />
          <stop offset="60%" stop-color="#00A8E1" stop-opacity="0.05" />
          <stop offset="100%" stop-color="#00A8E1" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#primeBase)" />
      <circle cx="${W / 2}" cy="${H / 2}" r="${W * 0.6}" fill="url(#primeGlow)" />
      <!-- Prime Video wordmark & smile arrow centered -->
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
  console.log('6. card-primevideo.png generated');

  // 7. HBO Max: Deep obsidian card with subtle violet backlight
  const hboSvg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hboBase" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#141416" />
          <stop offset="40%" stop-color="#0b0b0d" />
          <stop offset="100%" stop-color="#050506" />
        </linearGradient>
        <radialGradient id="hboGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#7B2CBF" stop-opacity="0.30" />
          <stop offset="60%" stop-color="#7B2CBF" stop-opacity="0.06" />
          <stop offset="100%" stop-color="#7B2CBF" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#hboBase)" />
      <circle cx="${W / 2}" cy="${H / 2}" r="${W * 0.6}" fill="url(#hboGlow)" />
      <!-- HBO MAX wordmark centered -->
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
  console.log('7. card-hbomax.png generated');

  console.log('ALL 7 CARDS COMPILED WITH UNIFIED OBSIDIAN CINEMATIC BACKGROUNDS!');
}

main().catch(console.error);

