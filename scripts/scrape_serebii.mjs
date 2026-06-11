// Scrape Serebii Pokéarth for Galar wild Pokémon encounter data
// Fetches all ~90 Galar locations and saves structured encounter data
import { writeFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

// Complete list from https://www.serebii.net/pokearth/galar/index.shtml
const LOCATIONS = [
  { slug: 'route1', name: 'Route 1' },
  { slug: 'route2', name: 'Route 2' },
  { slug: 'route3', name: 'Route 3' },
  { slug: 'route4', name: 'Route 4' },
  { slug: 'route5', name: 'Route 5' },
  { slug: 'route6', name: 'Route 6' },
  { slug: 'route7', name: 'Route 7' },
  { slug: 'route8', name: 'Route 8' },
  { slug: 'route9', name: 'Route 9' },
  { slug: 'route10', name: 'Route 10' },
  { slug: 'slumberingweald', name: 'Slumbering Weald' },
  { slug: 'wedgehurst', name: 'Wedgehurst' },
  { slug: 'motostokeoutskirts', name: 'Motostoke Outskirts' },
  { slug: 'motostokeriverbank', name: 'Motostoke Riverbank' },
  { slug: 'motostoke', name: 'Motostoke' },
  { slug: 'postwick', name: 'Postwick' },
  { slug: 'galarmineno.2', name: 'Galar Mine No. 2' },
  { slug: 'galarmine', name: 'Galar Mine' },
  { slug: 'turffield', name: 'Turffield' },
  { slug: 'hulbury', name: 'Hulbury' },
  { slug: 'stow-on-side', name: 'Stow-on-Side' },
  { slug: 'glimwoodtangle', name: 'Glimwood Tangle' },
  { slug: 'circhester', name: 'Circhester' },
  { slug: 'spikemuth', name: 'Spikemuth' },
  { slug: 'hammerlocke', name: 'Hammerlocke' },
  { slug: 'hammerlockehills', name: 'Hammerlocke Hills' },
  { slug: 'wyndon', name: 'Wyndon' },
  { slug: 'wyndonstadium', name: 'Wyndon Stadium' },
  { slug: 'route9tunnel', name: 'Route 9 Tunnel' },
  { slug: 'rosetower', name: 'Rose Tower' },
  { slug: 'energyplant', name: 'Energy Plant' },
  { slug: 'battletower', name: 'Battle Tower' },
  { slug: 'ballonlea', name: 'Ballonlea' },
  { slug: 'meetupspot', name: 'Meetup Spot' },
  // Wild Area
  { slug: 'rollingfields', name: 'Rolling Fields' },
  { slug: 'dappledgrove', name: 'Dappled Grove' },
  { slug: 'westlakeaxewell', name: 'West Lake Axewell' },
  { slug: 'eastlakeaxewell', name: 'East Lake Axewell' },
  { slug: 'southlakemiloch', name: 'South Lake Miloch' },
  { slug: 'northlakemiloch', name: 'North Lake Miloch' },
  { slug: 'stonywilderness', name: 'Stony Wilderness' },
  { slug: 'dustybowl', name: 'Dusty Bowl' },
  { slug: "giant'smirror", name: "Giant's Mirror" },
  { slug: "giant'sseat", name: "Giant's Seat" },
  { slug: "giant'scap", name: "Giant's Cap" },
  { slug: 'bridgefield', name: 'Bridge Field' },
  { slug: "axew'seye", name: "Axew's Eye" },
  { slug: 'lakeofoutrage', name: 'Lake of Outrage' },
  { slug: 'watchtowerruins', name: 'Watchtower Ruins' },
  // Isle of Armor
  { slug: 'brawlers\'cave', name: "Brawlers' Cave" },
  { slug: 'challengebeach', name: 'Challenge Beach' },
  { slug: 'challengeroad', name: 'Challenge Road' },
  { slug: 'courageouscavern', name: 'Courageous Cavern' },
  { slug: 'fieldsofhonor', name: 'Fields of Honor' },
  { slug: 'forestoffocus', name: 'Forest of Focus' },
  { slug: 'honeycalmisland', name: 'Honeycalm Island' },
  { slug: 'honeycalmsea', name: 'Honeycalm Sea' },
  { slug: 'insularsea', name: 'Insular Sea' },
  { slug: 'looplagoon', name: 'Loop Lagoon' },
  { slug: 'masterdojo', name: 'Master Dojo' },
  { slug: 'potbottomdesert', name: 'Potbottom Desert' },
  { slug: 'soothingwetlands', name: 'Soothing Wetlands' },
  { slug: 'stepping-stonesea', name: 'Stepping-Stone Sea' },
  { slug: 'towerofdarkness', name: 'Tower of Darkness' },
  { slug: 'towerofwaters', name: 'Tower of Waters' },
  { slug: 'traininglowlands', name: 'Training Lowlands' },
  { slug: 'warm-uptunnel', name: 'Warm-Up Tunnel' },
  { slug: 'workoutsea', name: 'Workout Sea' },
  // Crown Tundra
  { slug: 'slipperyslope', name: 'Slippery Slope' },
  { slug: 'freezington', name: 'Freezington' },
  { slug: 'frostpointfield', name: 'Frostpoint Field' },
  { slug: "giant'sbed", name: "Giant's Bed" },
  { slug: 'oldcemetery', name: 'Old Cemetery' },
  { slug: 'snowslideslope', name: 'Snowslide Slope' },
  { slug: 'tunneltothetop', name: 'Tunnel to the Top' },
  { slug: 'pathtothepeak', name: 'Path to the Peak' },
  { slug: 'crownshrine', name: 'Crown Shrine' },
  { slug: "giant'sfoot", name: "Giant's Foot" },
  { slug: 'roaring-seacaves', name: 'Roaring-Sea Caves' },
  { slug: 'frigidsea', name: 'Frigid Sea' },
  { slug: 'three-pointpass', name: 'Three-Point Pass' },
  { slug: 'ballimerelake', name: 'Ballimere Lake' },
  { slug: 'lakesidecave', name: 'Lakeside Cave' },
  { slug: 'dynatreehill', name: 'Dyna Tree Hill' },
  { slug: 'rockpeakruins', name: 'Rock Peak Ruins' },
  { slug: 'icebergruins', name: 'Iceberg Ruins' },
  { slug: 'ironruins', name: 'Iron Ruins' },
  { slug: 'split-decisionruins', name: 'Split-Decision Ruins' },
  { slug: 'maxlair', name: 'Max Lair' },
];

const BASE_URL = 'https://www.serebii.net/pokearth/galar/';

// HTML entity decoder
function decodeEntities(text) {
  return text
    .replace(/&eacute;/g, 'é')
    .replace(/&egrave;/g, 'è')
    .replace(/&ecirc;/g, 'ê')
    .replace(/&euml;/g, 'ë')
    .replace(/&aacute;/g, 'á')
    .replace(/&agrave;/g, 'à')
    .replace(/&acirc;/g, 'â')
    .replace(/&auml;/g, 'ä')
    .replace(/&iacute;/g, 'í')
    .replace(/&igrave;/g, 'ì')
    .replace(/&icirc;/g, 'î')
    .replace(/&iuml;/g, 'ï')
    .replace(/&oacute;/g, 'ó')
    .replace(/&ograve;/g, 'ò')
    .replace(/&ocirc;/g, 'ô')
    .replace(/&ouml;/g, 'ö')
    .replace(/&uacute;/g, 'ú')
    .replace(/&ugrave;/g, 'ù')
    .replace(/&ucirc;/g, 'û')
    .replace(/&uuml;/g, 'ü')
    .replace(/&ntilde;/g, 'ñ')
    .replace(/&ccedil;/g, 'ç')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code)))
    .replace(/<br\s*\/?>/gi, ' ')
    .trim();
}

// Parse a level string like "28 - 30<br />60" or "3 - 6" or "42" or "60"
// After cleaning <br> tags: "28 - 30 60" → we want the first dash-separated range
function parseLevel(levelStr) {
  const cleaned = levelStr.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

  // Rebuild a dash-separated range by scanning tokens
  // Input like "3 - 6" → tokens ["3", "-", "6"] or "28 - 30 60" → tokens ["28", "-", "30", "60"]
  // We want to extract the first "X - Y" range
  const tokens = cleaned.split(' ');
  let min = 0, max = 0;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    // Look for "X - Y" pattern across 3 tokens: number, dash, number
    if (token === '-' && i > 0 && i < tokens.length - 1) {
      const a = parseInt(tokens[i - 1]);
      const b = parseInt(tokens[i + 1]);
      if (!isNaN(a) && !isNaN(b) && a > 0 && b >= a) {
        if (min === 0) {
          min = a;
          max = b;
        }
      }
    }
  }

  // If no range found, try a single number
  if (min === 0) {
    const num = parseInt(tokens[0]);
    if (!isNaN(num)) {
      min = max = num;
    }
  }

  return { min, max };
}

// Parse rate string like "50%", "27.61%", or "%" (special encounter)
function parseRate(rateStr) {
  const match = rateStr.trim().match(/([\d.]+)%/);
  if (match) return parseFloat(match[1]);
  return -1; // -1 = special/unknown encounter
}

// Normalize Pokémon name to lowercase kebab-case (matching galarDex format)
function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/[''']/g, "'")  // normalize apostrophes
    .replace(/[^a-z0-9'-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function parseEncounterTables(html) {
  const encounters = [];

  // Find the Wild Pokémon section
  // Route pages use <h2>Wild Pokémon</h2>, Wild Area pages use <h3>Wild Pokémon</h3>
  // Find the section between "Wild Pokémon" header and the next major section
  const wildPokemonMatch = html.match(/<h[23][^>]*>Wild\s+Pok[^<]*<\/h[23]>/i);
  if (!wildPokemonMatch) return encounters;

  // Find the Max Raid section or Items section or next major h2/h3 to delimit end
  // Everything between Wild Pokémon and the next major section is encounter data
  const wildStart = wildPokemonMatch.index;
  // Look for the next h2 or h3 that starts a non-encounter section
  const afterWild = html.slice(wildStart + wildPokemonMatch[0].length);
  const nextSectionMatch = afterWild.match(/<(?:h[23]|p)><a\s+name="(?!pokemon)[^"]*"><h[23]>(?:Max Raid|Items|Trainers|Pokémon Camp)/i);
  const sectionEnd = nextSectionMatch ? wildStart + wildPokemonMatch[0].length + nextSectionMatch.index : html.length;

  const encounterSection = html.slice(wildStart, sectionEnd);

  // Extract all tables with class="dextable" or class="extradextable"
  const tableRegex = /<table\s+class="(?:dex|extradex)table"[^>]*>([\s\S]*?)<\/table>/gi;
  let tableMatch;

  // Track state across tables
  let currentMethod = '';
  let currentWeather = '';
  let currentArea = '';

  // Track area names from h2 tags before the tables
  const areaRegex = /<h2>([^<]+)<\/h2>/gi;
  const areas = [];
  let areaMatch;
  const sectionForAreas = html.slice(wildStart, sectionEnd);
  while ((areaMatch = areaRegex.exec(sectionForAreas)) !== null) {
    const areaName = decodeEntities(areaMatch[1]).trim();
    // Skip non-area headers
    if (areaName && !areaName.match(/Wild Pokémon|Items|Max Raid|Trainers|Pokémon Camp/i)) {
      areas.push({ name: areaName, pos: areaMatch.index });
    }
  }

  // Also extract weather headers (h4 tags with weather names)
  // and method headers (h3/h4 in td cells)

  while ((tableMatch = tableRegex.exec(encounterSection)) !== null) {
    const tableHtml = tableMatch[1];

    // Check for method header (h3 or h4 inside the table)
    const methodHeaderMatch = tableHtml.match(/<h[34][^>]*>([^<]+)<\/h[34]>/i);
    if (methodHeaderMatch) {
      const methodText = decodeEntities(methodHeaderMatch[1]).trim();
      // Check if it's a weather header or a method header
      const weatherNames = ['All Weather', 'Normal Weather', 'Overcast', 'Raining',
        'Thunderstorm', 'Snowing', 'Snowstorm', 'Sandstorm', 'Intense Sun', 'Fog',
        'Harsh Sunlight', 'Heavy Rain'];
      if (weatherNames.includes(methodText)) {
        currentWeather = methodText;
      } else {
        // It's a method header like "Overworld", "Random in Grass", "Fishing", etc.
        currentMethod = methodText;
      }
    }

    // Check for weather condition row (class="black")
    const weatherRowMatch = tableHtml.match(/class="black"[^>]*>([^<]+)</i);
    if (weatherRowMatch) {
      currentWeather = decodeEntities(weatherRowMatch[1]).trim();
    }

    // Check for version headers and parse data
    // The table can have both Sword and Shield sections
    const isSword = tableHtml.includes('class="lgpika"');
    const isShield = tableHtml.includes('class="lgeevee"');

    if (!isSword && !isShield) continue; // Skip tables without version data

    // Extract all name, rate, and level cells from the table
    const nameCells = [...tableHtml.matchAll(/<td[^>]*class="name"[^>]*>([^<]+)<\/td>/gi)]
      .map(m => decodeEntities(m[1]).trim());
    const rateCells = [...tableHtml.matchAll(/<td[^>]*class="rate"[^>]*>([^<]+)<\/td>/gi)]
      .map(m => decodeEntities(m[1]).trim());
    const levelCells = [...tableHtml.matchAll(/<td[^>]*class="level"[^>]*>([\s\S]*?)<\/td>/gi)]
      .map(m => decodeEntities(m[1]).trim());

    if (nameCells.length === 0) continue;

    // Determine version
    // If both lgpika and lgeevee appear, we need to split by version sections
    // In practice, most tables have only one version, and the other version is in the next table
    if (isSword && isShield) {
      // Both versions in one table — split rows by version
      // This is complex; for now, process as "both" and note it
      parseEncounterBlock(nameCells, rateCells, levelCells, 'both', currentMethod, currentWeather, encounters);
    } else if (isSword) {
      parseEncounterBlock(nameCells, rateCells, levelCells, 'sword', currentMethod, currentWeather, encounters);
    } else if (isShield) {
      parseEncounterBlock(nameCells, rateCells, levelCells, 'shield', currentMethod, currentWeather, encounters);
    }
  }

  return encounters;
}

function parseEncounterBlock(names, rates, levels, version, method, weather, results) {
  const count = names.length;
  for (let i = 0; i < count; i++) {
    const name = names[i];
    if (!name) continue;

    const rate = i < rates.length ? parseRate(rates[i]) : -1;
    const levelInfo = i < levels.length ? parseLevel(levels[i]) : { min: 0, max: 0 };

    results.push({
      name,
      normalizedName: normalizeName(name),
      levelMin: levelInfo.min,
      levelMax: levelInfo.max,
      rate,
      method: method || '',
      weather: weather || '',
      version,
    });
  }
}

async function scrapeLocation(loc) {
  const url = BASE_URL + loc.slug + '.shtml';
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`  ⚠ HTTP ${res.status} for ${loc.name} (${url})`);
      return null;
    }
    const html = await res.text();
    // Decode Latin-1 to UTF-8 (Serebii uses Latin-1)
    const decoded = html;
    const encs = parseEncounterTables(decoded);

    if (encs.length === 0) {
      console.log(`  ✓ ${loc.name}: 0 encounters`);
      return null;
    }

    // Deduplicate: if both versions have the same Pokémon with same levels, keep both entries
    // but remove exact duplicates (same name, same method, same version)
    const seen = new Set();
    const unique = encs.filter(e => {
      const key = `${e.name}|${e.method}|${e.version}|${e.weather}|${e.levelMin}-${e.levelMax}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    console.log(`  ✓ ${loc.name}: ${unique.length} encounters`);
    return {
      slug: loc.slug,
      name: loc.name,
      encounters: unique,
    };
  } catch (err) {
    console.warn(`  ✗ ${loc.name}: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log(`Scraping ${LOCATIONS.length} Galar locations from Serebii Pokéarth...\n`);

  const results = [];
  const failed = [];

  for (let i = 0; i < LOCATIONS.length; i++) {
    const loc = LOCATIONS[i];
    process.stdout.write(`[${String(i + 1).padStart(2)}/${LOCATIONS.length}] `);
    const data = await scrapeLocation(loc);
    if (data) {
      results.push(data);
    } else if (data === null) {
      // Could be a page with no encounters, or a failure — we don't distinguish here
    }
    await delay(300); // Rate limit
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Successfully scraped ${results.length}/${LOCATIONS.length} locations`);

  // Stats
  let totalEncounters = 0;
  const allPokemon = new Set();
  const allMethods = new Set();
  const allWeathers = new Set();

  for (const loc of results) {
    totalEncounters += loc.encounters.length;
    for (const enc of loc.encounters) {
      allPokemon.add(enc.name);
      if (enc.method) allMethods.add(enc.method);
      if (enc.weather) allWeathers.add(enc.weather);
    }
  }

  console.log(`Total encounter entries: ${totalEncounters}`);
  console.log(`Unique Pokémon: ${allPokemon.size}`);
  console.log(`Encounter methods: ${[...allMethods].join(', ')}`);
  console.log(`Weather conditions: ${[...allWeathers].join(', ')}`);

  // Write JSON
  const jsonOutput = JSON.stringify(results, null, 2);
  const jsonPath = `${__dirname}/../src/data/encounters.json`;
  writeFileSync(jsonPath, jsonOutput);
  console.log(`\nWritten JSON: ${jsonPath} (${(Buffer.byteLength(jsonOutput) / 1024).toFixed(1)} KB)`);

  // Write TypeScript
  const tsOutput = `// Auto-generated from Serebii Pokéarth encounter data
// Run: node scripts/scrape_serebii.mjs
// Data source: https://www.serebii.net/pokearth/galar/
// Generated: ${new Date().toISOString()}

export interface EncounterEntry {
  name: string;
  normalizedName: string;
  levelMin: number;
  levelMax: number;
  rate: number;
  method: string;
  weather: string;
  version: 'sword' | 'shield' | 'both';
}

export interface LocationEncounters {
  slug: string;
  name: string;
  encounters: EncounterEntry[];
}

export const locationEncounters: LocationEncounters[] = ${jsonOutput};

// Helper: find all locations where a Pokémon appears
export function findPokemonLocations(pokemonName: string): LocationEncounters[] {
  const normalized = pokemonName.toLowerCase().replace(/[^a-z0-9]/g, '');
  return locationEncounters.filter(loc =>
    loc.encounters.some(e => e.normalizedName.replace(/[^a-z0-9]/g, '').includes(normalized))
  );
}
`;
  const tsPath = `${__dirname}/../src/data/encounters.ts`;
  writeFileSync(tsPath, tsOutput);
  console.log(`Written TS:  ${tsPath} (${(Buffer.byteLength(tsOutput) / 1024).toFixed(1)} KB)`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
