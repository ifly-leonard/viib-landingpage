const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.join(__dirname, "..", "public", "cover");
const W = 600;
const H = 800;

function escapeXml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function svg({ bg, stripe, title, author, label }) {
  const stripeH = Math.round(H * 0.38);
  const bodyBg = "#fdfbf7";
  const [titleFirst, ...titleRest] = title.split(" ");
  return `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${bg}"/>
        <stop offset="1" stop-color="${bg}"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="${bodyBg}"/>
    <rect width="${W}" height="${stripeH}" fill="url(#g)"/>
    <rect x="18" y="18" width="${W - 36}" height="${stripeH - 36}" fill="none" stroke="${stripe}" stroke-width="3"/>
    <!-- Title on stripe -->
    <text x="${W / 2}" y="${stripeH / 2 - 8}" font-family="Georgia, serif" font-size="46" font-weight="bold" fill="${stripe}" text-anchor="middle">${escapeXml(titleFirst)}</text>
    <text x="${W / 2}" y="${stripeH / 2 + 40}" font-family="Georgia, serif" font-size="40" font-weight="bold" fill="${stripe}" text-anchor="middle">${escapeXml(titleRest.join(" "))}</text>
    <!-- Body -->
    <text x="${W / 2}" y="${stripeH + 90}" font-family="Georgia, serif" font-size="26" font-style="italic" fill="#1f3149" text-anchor="middle">${escapeXml(label)}</text>
    <rect x="${W / 2 - 90}" y="${stripeH + 130}" width="180" height="2" fill="${bg}"/>
    <text x="${W / 2}" y="${H - 90}" font-family="Georgia, serif" font-size="24" font-style="italic" fill="#8e9197" text-anchor="middle">${escapeXml(author)}</text>
    <text x="${W / 2}" y="${H - 50}" font-family="Georgia, serif" font-size="22" fill="#1f3149" text-anchor="middle">VIIV · Varman Institute of Venture Building</text>
  </svg>`;
}

const covers = [
  {
    file: "book-student-handbook.png",
    bg: "#1f3149",
    stripe: "#fdfbf7",
    title: "Student Handbook",
    author: "The VIIV Campus Team",
    label: "Life, learning & expectations",
  },
  {
    file: "book-builder-guide.png",
    bg: "#f7bd44",
    stripe: "#1f3149",
    title: "Builder Guide",
    author: "The VIIV Venture Team",
    label: "The playbook for shipping ventures",
  },
  {
    file: "book-code-of-conduct.png",
    bg: "#bb8806",
    stripe: "#fdfbf7",
    title: "Code of Conduct",
    author: "The VIIV Community Council",
    label: "Values & standards",
  },
];

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const c of covers) {
    const svgStr = svg(c);
    const outPath = path.join(OUT_DIR, c.file);
    await sharp(Buffer.from(svgStr)).png().toFile(outPath);
    console.log("wrote", outPath);
  }
})();
