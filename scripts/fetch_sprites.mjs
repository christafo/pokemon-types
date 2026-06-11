import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

// Read galarDex to get IDs
const content = readFileSync('src/data/galarDex.ts', 'utf8');

// Extract all entries with IDs
const entries = [];
const regex = /\{\s*id:\s*(\d+),\s*name:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = regex.exec(content)) !== null) {
  entries.push({ id: parseInt(match[1]), name: match[2] });
}

console.log(`Found ${entries.length} Pokémon to download sprites for`);

// Ensure directory exists
if (!existsSync('public/sprites')) {
  mkdirSync('public/sprites', { recursive: true });
}

let downloaded = 0;
let skipped = 0;
let failed = 0;

for (const entry of entries) {
  const filename = `public/sprites/${entry.id}.png`;
  
  // Skip if already downloaded
  if (existsSync(filename)) {
    skipped++;
    continue;
  }
  
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${entry.id}.png`;
  
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`  ✗ ${entry.name} (#${entry.id}): HTTP ${res.status}`);
      failed++;
      continue;
    }
    
    const buffer = await res.arrayBuffer();
    writeFileSync(filename, Buffer.from(buffer));
    downloaded++;
    
    if (downloaded % 50 === 0) {
      console.log(`  Progress: ${downloaded} downloaded...`);
    }
    
    // Rate limit: 50ms between requests
    await new Promise(r => setTimeout(r, 50));
  } catch (err) {
    console.warn(`  ✗ ${entry.name} (#${entry.id}): ${err.message}`);
    failed++;
  }
}

console.log(`\nDone! Downloaded: ${downloaded}, Skipped: ${skipped}, Failed: ${failed}`);
