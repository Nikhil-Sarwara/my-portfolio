const sharp = require('sharp');
const fs = require('fs');

const b64 = (p) => fs.readFileSync(p).toString('base64');
const F = 'public/fonts/';
const geist = (w) => `url(data:font/woff2;base64,${b64(F + 'fonts-geist-' + w + '.woff2')}) format('woff2')`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1584" height="396" viewBox="0 0 1584 396">
  <defs>
    <style>
      @font-face { font-family: 'Geist'; font-weight: 400; src: ${geist('regular')}; }
      @font-face { font-family: 'Geist'; font-weight: 500; src: ${geist('medium')}; }
      @font-face { font-family: 'Geist'; font-weight: 600; src: ${geist('semibold')}; }
      @font-face { font-family: 'Geist Mono'; font-weight: 400; src: ${geist('mono-regular')}; }
      @font-face { font-family: 'Geist Mono'; font-weight: 700; src: ${geist('mono-bold')}; }
    </style>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1c0f07"/>
      <stop offset="0.55" stop-color="#2b170c"/>
      <stop offset="1" stop-color="#3c2011"/>
    </linearGradient>
    <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f2d68c"/>
      <stop offset="0.5" stop-color="#d4a94f"/>
      <stop offset="1" stop-color="#8a6420"/>
    </linearGradient>
    <linearGradient id="brassRule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8a6420" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#d4a94f"/>
      <stop offset="1" stop-color="#8a6420" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2e2315"/>
      <stop offset="1" stop-color="#1f170d"/>
    </linearGradient>
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="n"/>
      <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.6  0 0 0 0 0.45  0 0 0 0 0.25  0 0 0 0.06 0"/>
    </filter>
  </defs>

  <!-- base wood -->
  <rect width="1584" height="396" fill="url(#bg)"/>
  <rect width="1584" height="396" filter="url(#noise)" opacity="0.9"/>

  <!-- soft vignette -->
  <rect width="1584" height="396" fill="url(#bg)" opacity="0.25"/>

  <!-- leather accent strip left edge -->
  <rect x="0" y="0" width="14" height="396" fill="#421d10"/>
  <rect x="14" y="0" width="3" height="396" fill="#8a4d28" opacity="0.7"/>

  <!-- brass rule -->
  <rect x="120" y="238" width="1344" height="2" fill="url(#brassRule)"/>

  <!-- stitch line under rule (dashed) -->
  <line x1="120" y1="252" x2="1464" y2="252" stroke="#c9a24b" stroke-opacity="0.5" stroke-width="2" stroke-dasharray="1 12" stroke-linecap="round"/>

  <!-- ==== NAME BLOCK (left-center, clears avatar zone) ==== -->
  <text x="150" y="150" font-family="Geist" font-weight="400" font-size="30" letter-spacing="6" fill="#9a7c4d">FULL STACK DEVELOPER</text>
  <text x="146" y="218" font-family="Geist" font-weight="600" font-size="86" letter-spacing="2" fill="url(#brass)">Nikhil Sarwara</text>
  <text x="152" y="292" font-family="Geist" font-weight="400" font-size="24" fill="#e2cfa9">B.Eng. Software (Honours) · Cyber Security Minor · Deakin</text>

  <!-- ==== TERMINAL CARD (right side) ==== -->
  <g transform="translate(1090, 84)">
    <rect x="0" y="0" width="380" height="228" rx="12" fill="url(#panel)" stroke="#5a4a2c" stroke-width="1.5"/>
    <!-- title bar -->
    <rect x="0" y="0" width="380" height="40" rx="12" fill="#241a10" stroke="#5a4a2c" stroke-width="1.5"/>
    <rect x="0" y="28" width="380" height="12" fill="#241a10"/>
    <circle cx="20" cy="20" r="6" fill="#ff6b5e"/>
    <circle cx="40" cy="20" r="6" fill="#ffc94d"/>
    <circle cx="60" cy="20" r="6" fill="#53e68a"/>
    <text x="172" y="27" font-family="Geist Mono" font-weight="700" font-size="14" fill="#9a7c4d" text-anchor="middle">nikhil@workbench</text>
    <!-- body -->
    <text x="22" y="76" font-family="Geist Mono" font-size="19" fill="#53e68a">$ whoami</text>
    <text x="22" y="104" font-family="Geist Mono" font-size="19" fill="#e8c884">full-stack developer</text>
    <text x="22" y="140" font-family="Geist Mono" font-size="19" fill="#53e68a">$ stack --list</text>
    <text x="22" y="168" font-family="Geist Mono" font-size="19" fill="#e8c884">astro · react · node · docker</text>
    <text x="22" y="196" font-family="Geist Mono" font-size="19" fill="#e8c884">security · bash · automation</text>
  </g>

  <!-- domain bottom-right -->
  <text x="1464" y="360" font-family="Geist Mono" font-size="18" fill="#d4a94f" text-anchor="end">nikhilsarwara.com</text>
</svg>`;

sharp(Buffer.from(svg)).png().toFile('media/banner-nikhil-sarwara.png').then((i) => {
  console.log('rendered', i.width + 'x' + i.height, (i.size / 1024).toFixed(1) + ' KB');
}).catch((e) => { console.log('ERR', e.message); process.exit(1); });