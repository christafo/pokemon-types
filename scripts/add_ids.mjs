// Add national dex IDs to galarDex.ts from the generated pokemonDetails
import { readFileSync, writeFileSync } from 'fs';

// Read pokemonDetails and extract the JSON object
const detailsRaw = readFileSync('src/data/pokemonDetails.ts', 'utf8');
const jsonStart = detailsRaw.indexOf('{', detailsRaw.indexOf('='));
const jsonEnd = detailsRaw.lastIndexOf('}') + 1;
const details = JSON.parse(detailsRaw.substring(jsonStart, jsonEnd));

// Read current galarDex
const content = readFileSync('src/data/galarDex.ts', 'utf8');

// Build id map: lowercase name -> id
const idMap = {};
for (const [name, data] of Object.entries(details)) {
  idMap[name] = data.id;
}

// Replace each { "name": "xxx" with { id: NNN, name: "xxx"
let updated = content;
let count = 0;
for (const [name, id] of Object.entries(idMap)) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`\\{\\s*"name":\\s*"${escapedName}"`, 'g');
  const matches = updated.match(regex);
  if (matches) {
    updated = updated.replace(regex, `{ id: ${id}, name: "${name}"`);
    count += matches.length;
  }
}

// Update the interface
updated = updated.replace(
  'export interface PokemonEntry {\n  name: string;',
  'export interface PokemonEntry {\n  id: number;\n  name: string;'
);

writeFileSync('src/data/galarDex.ts', updated);
console.log(`Added IDs to ${count} entries in galarDex.ts`);
