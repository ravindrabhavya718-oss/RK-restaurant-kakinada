const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const fsSync = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.join(__dirname, '..');
const script = fsSync.readFileSync(path.join(root, 'js', 'script.js'), 'utf8');
const page = fsSync.readFileSync(path.join(root, 'index.html'), 'utf8');

function readConstant(name, nextConstant) {
  const expression = new RegExp(`const ${name}\\s*=\\s*([\\s\\S]*?);\\s*\\r?\\n\\s*const ${nextConstant}`);
  const match = script.match(expression);
  assert.ok(match, `Could not find ${name} in js/script.js`);
  return Function(`return ${match[1]}`)();
}

function getJpegDimensions(bytes) {
  let offset = 2;
  while (offset < bytes.length - 9) {
    if (bytes[offset] !== 0xff) {
      offset++;
      continue;
    }

    const marker = bytes[offset + 1];
    if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
      return {
        height: bytes.readUInt16BE(offset + 5),
        width: bytes.readUInt16BE(offset + 7),
      };
    }

    const segmentLength = bytes.readUInt16BE(offset + 2);
    if (segmentLength < 2) return null;
    offset += segmentLength + 2;
  }
  return null;
}

test('menu, hero, location and gallery image paths resolve to usable JPEGs', async () => {
  const menuItems = readConstant('menuItems', 'menuGrid');
  const categoryImages = readConstant('categoryImagePaths', 'categoryImageDescriptions');
  const galleryImages = readConstant('galleryImages', 'categoryImagePaths');
  const pageImages = [...page.matchAll(/data-image="(assets\/images\/[^"]+\.jpg)"/g)].map((match) => match[1]);
  const imagePaths = new Set([
    ...Object.values(categoryImages),
    ...menuItems.map((item) => item.image),
    ...galleryImages.map((item) => item.image),
    ...pageImages,
  ]);

  assert.equal(Object.keys(categoryImages).length, 15);
  assert.ok(menuItems.every((item) => categoryImages[item.category]), 'Every menu category must have a matching image');
  assert.ok(menuItems.every((item) => item.image === categoryImages[item.category]), 'API menu image paths must match their categories');

  for (const imagePath of imagePaths) {
    const bytes = await fs.readFile(path.join(root, imagePath));
    assert.equal(bytes[0], 0xff, `${imagePath} must be a JPEG`);
    assert.equal(bytes[1], 0xd8, `${imagePath} must be a JPEG`);
    const dimensions = getJpegDimensions(bytes);
    assert.ok(dimensions, `${imagePath} must have valid JPEG dimensions`);
    assert.ok(dimensions.width >= 640 && dimensions.height >= 480, `${imagePath} must be large enough for responsive cards`);
  }
});
