import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const targets = [
  // Gallery images
  ...['PK8_Event1','PK8_Event2','PK8_Event3','PK8_Event4',
      'PK8_Event5','PK8_Event6','PK8_Event7','PK8_Event8'].map(name => ({
    input: `public/assets/gallery/${name}.jpg`,
    output: `public/assets/gallery/${name}.webp`,
    quality: 82,
  })),
  // Hero poster
  {
    input: 'public/assets/venue-main.jpg',
    output: 'public/assets/venue-main.webp',
    quality: 85,
  },
  // Map preview
  {
    input: 'public/assets/map-preview.png',
    output: 'public/assets/map-preview.webp',
    quality: 85,
  },
];

let totalSaved = 0;

for (const { input, output, quality } of targets) {
  const inputPath = path.join(root, input);
  const outputPath = path.join(root, output);
  try {
    const info = await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);

    const { size: origSize } = await import('fs').then(fs =>
      new Promise(res => fs.stat(inputPath, (_, s) => res(s)))
    );

    const saved = origSize - info.size;
    const pct = Math.round((saved / origSize) * 100);
    totalSaved += saved;
    console.log(`✅ ${path.basename(output)} — ${(origSize/1024).toFixed(0)}KB → ${(info.size/1024).toFixed(0)}KB (−${pct}%)`);
  } catch (err) {
    console.error(`❌ ${input}: ${err.message}`);
  }
}

console.log(`\n🎉 Celkovo ušetrených: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
