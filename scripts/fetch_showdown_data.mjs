// Fetch Showdown pokedex data and create enriched pokemon details for all Galar Pokémon
import { writeFileSync, readFileSync } from 'fs';

const SHOWDOWN_URL = 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/pokedex.ts';

async function main() {
  console.log('Fetching Showdown pokedex...');
  const res = await fetch(SHOWDOWN_URL);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();

  console.log(`Downloaded ${text.length} bytes`);

  // Also save raw file for reference
  writeFileSync('/tmp/pokedex_raw.ts', text);

  // Extract the JS object - replace the TS export with a simple const
  // The format is: export const Pokedex: import('...').SpeciesDataTable = {
  let cleaned = text.replace(
    /^export const Pokedex:\s*import\([^)]*\)\.\w+\s*=\s*/,
    'const Pokedex = '
  );

  // Evaluate as a JS module to get the object
  const pokedex = new Function(cleaned + '\nreturn Pokedex;')();

  console.log(`Parsed ${Object.keys(pokedex).length} Pokémon entries`);

  // Read our Galar dex to get the list of names
  const galarDexContent = readFileSync('src/data/galarDex.ts', 'utf8');
  const nameMatches = [...galarDexContent.matchAll(/"name":\s*"([^"]+)"/g)];
  const galarNames = nameMatches.map(m => m[1]);

  console.log(`Found ${galarNames.length} Galar dex entries`);

  // Build a lookup: lowercase name -> entry (skip formes like "Venusaur-Mega")
  const baseLookup = {};
  for (const [key, entry] of Object.entries(pokedex)) {
    // Skip formes (entries with baseSpecies that differ from name, or special suffixes)
    if (entry.baseSpecies && entry.baseSpecies !== entry.name) continue;
    baseLookup[key] = entry;
    // Also add by lowercase name
    if (entry.name) {
      baseLookup[entry.name.toLowerCase().replace(/[^a-z0-9]/g, '')] = entry;
    }
  }

  // Cross-reference and build enriched data
  const details = {};
  const missing = [];

  for (const name of galarNames) {
    const key = name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const entry = baseLookup[key];
    if (!entry) {
      missing.push(name);
      console.warn(`  Not found in Showdown: ${name} (tried key: ${key})`);
      continue;
    }

    details[name] = {
      id: entry.num,
      stats: entry.baseStats,
      abilities: entry.abilities,
      heightm: entry.heightm,
      weightkg: entry.weightkg,
      color: entry.color,
      evos: entry.evos || [],
      prevo: entry.prevo || null,
      evoLevel: entry.evoLevel ?? null,
      evoCondition: entry.evoCondition || null,
      genderRatio: entry.genderRatio || null,
      eggGroups: entry.eggGroups || [],
    };
  }

  console.log(`Enriched ${Object.keys(details).length} Pokémon`);
  if (missing.length > 0) {
    console.warn(`Missing ${missing.length}: ${missing.join(', ')}`);
  }

  // Write the enriched data as TypeScript
  const output = `// Auto-generated from Pokemon Showdown data
// Run: node scripts/fetch_showdown_data.mjs

export interface PokemonDetails {
  id: number;
  stats: { hp: number; atk: number; def: number; spa: number; spd: number; spe: number };
  abilities: Record<string, string>;
  heightm: number;
  weightkg: number;
  color: string;
  evos: string[];
  prevo: string | null;
  evoLevel: number | null;
  evoCondition: string | null;
  genderRatio: { M: number; F: number } | null;
  eggGroups: string[];
}

export const pokemonDetails: Record<string, PokemonDetails> = ${JSON.stringify(details, null, 2)} as const;
`;

  writeFileSync('src/data/pokemonDetails.ts', output);
  console.log('Written to src/data/pokemonDetails.ts');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
