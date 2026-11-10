const sharp = require('sharp');
const fs = require('fs');

async function buildAllCards() {
  const cards = [
    {
      name: 'card-netflix.png',
      logo: 'public/brands/netflix.png',
      bgColor: '#000000',
      logoWidth: 260, // portrait red N
    },
    {
      name: 'card-beinsports.png',
      logo: 'public/brands/beinsports.png',
      bgColor: '#5c2c90',
      logoWidth: 380, // wide beIN SPORTS
    },
    {
      name: 'card-appletv.png',
      logo: 'public/brands/appletv.png',
      bgColor: '#1d1d1f',
      logoWidth: 320, // apple tv logo
    },
    {
      name: 'card-canalplus.png',
      logo: 'public/brands/canalplus.png',
      bgColor: '#050505',
      logoWidth: 360, // canal+ capsule
    },
    {
      name: 'card-disneyplus.png',
      logo: 'public/brands/disneyplus.png',
      bgColor: '#021424',
      logoWidth: 420, // disney+ arc
    },
    {
      name: 'card-primevideo.png',
      logo: 'public/brands/primevideo.png',
      bgColor: '#0a141e',
      logoWidth: 380, // prime video
    },
    {
      name: 'card-hbomax.png',
      logo: 'public/brands/hbomax.png',
      bgColor: '#1c0330',
      logoWidth: 380, // hbo max
    },
  ];

  for (const c of cards) {
    // 1. Create 600x900 solid background with transparent support
    const base = sharp({
      create: {
        width: 600,
        height: 900,
        channels: 4,
        background: c.bgColor,
      },
    });

    // 2. Resize logo proportionally
    const resizedLogo = await sharp(c.logo)
      .resize({ width: c.logoWidth })
      .toBuffer();

    // 3. Composite resized transparent logo in dead center
    await base
      .composite([
        {
          input: resizedLogo,
          gravity: 'center',
        },
      ])
      .png()
      .toFile('public/brands/' + c.name);

    console.log('Built', c.name, 'with transparent logo!');
  }
}

buildAllCards();

