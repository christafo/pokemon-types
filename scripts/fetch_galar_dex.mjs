// Fetch Galar Pokédex from PokeAPI and write as TypeScript data file
import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function main() {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const outFile = `${__dirname}/../src/data/galarDex.ts`;

  console.log('Fetching Galar Pokédex from PokeAPI...');

  // Fetch the Galar Pokédex
  const galarDex = await fetchJSON('https://pokeapi.co/api/v2/pokedex/galar/');
  const pokemonEntries = galarDex.pokemon_entries;
  console.log(`Found ${pokemonEntries.length} entries in Galar Pokédex`);

  const results = [];
  const BATCH_SIZE = 20;

  // Extract Pokémon ID from species URL: https://pokeapi.co/api/v2/pokemon-species/{id}/
  for (let i = 0; i < pokemonEntries.length; i += BATCH_SIZE) {
    const batch = pokemonEntries.slice(i, i + BATCH_SIZE);
    const promises = batch.map(async (entry) => {
      const name = entry.pokemon_species.name;
      const speciesUrl = entry.pokemon_species.url;
      // Extract ID from URL
      const parts = speciesUrl.replace(/\/$/, '').split('/');
      const id = parts[parts.length - 1];
      try {
        const pokemon = await fetchJSON(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const types = pokemon.types.map((t) => t.type.name);
        return { name, types };
      } catch (err) {
        console.error(`  Failed to fetch ${name} (id=${id}): ${err.message}`);
        return null;
      }
    });

    const batchResults = await Promise.all(promises);
    results.push(...batchResults.filter(Boolean));

    console.log(`  Processed ${Math.min(i + BATCH_SIZE, pokemonEntries.length)}/${pokemonEntries.length}`);
    if (i + BATCH_SIZE < pokemonEntries.length) {
      await delay(100);
    }
  }

  // Sort by name
  results.sort((a, b) => a.name.localeCompare(b.name));

  console.log(`\nSuccessfully fetched ${results.length} Pokémon`);

  // Write the TypeScript file
  const tsContent = `export interface PokemonEntry {
  name: string;
  types: string[];
}

export const galarDex: PokemonEntry[] = ${JSON.stringify(results, null, 2)};
`;

  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, tsContent, 'utf8');
  console.log(`Written to ${outFile}`);
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
