import { useState, useMemo } from 'react';
import type { PokemonEntry } from '../data/galarDex';
import { galarDex } from '../data/galarDex';
import { pokemonDetails } from '../data/pokemonDetails';
import { locationEncounters } from '../data/encounters';
import { typeChart } from '../data/typeChart';
import { LevelSlider } from '../components/LevelSlider';
import { VersionToggle } from '../components/VersionToggle';
import { SearchBar } from '../components/SearchBar';
import { TypeBadge } from '../components/TypeBadge';
import { PokemonSprite } from '../components/PokemonSprite';
import { EmptyState } from '../components/EmptyState';
import { SectionHeader } from '../components/SectionHeader';
import './CatchView.css';

interface CatchCandidate {
  name: string;
  types: string[];
  id?: number;
  locations: { name: string; method: string; rate: number; levelMin: number; levelMax: number }[];
  score: number;
  multiplier: number;
}

export function CatchView() {
  const [level, setLevel] = useState(0);
  const [version, setVersion] = useState<'shield' | 'sword'>('shield');
  const [target, setTarget] = useState<PokemonEntry | null>(null);

  // Build a lookup from lowercase name to dex entry
  const dexByName = useMemo(() => {
    const map = new Map<string, PokemonEntry>();
    for (const p of galarDex) {
      map.set(p.name.toLowerCase(), p);
    }
    return map;
  }, []);

  const candidates = useMemo(() => {
    if (!target) return [];

    const targetTypes = target.types;

    // Find all types that are SE against target
    const seTypes = new Map<string, number>();
    for (const [type, chart] of Object.entries(typeChart)) {
      const mult = targetTypes.reduce((acc, tt) => acc * (chart[tt] ?? 1), 1);
      if (mult > 1) seTypes.set(type, mult);
    }

    // Find all wild encounters at the user's level (or all if no level set)
    const candidateMap = new Map<string, CatchCandidate>();

    for (const loc of locationEncounters) {
      for (const enc of loc.encounters) {
        // Filter by level
        if (level > 0 && (enc.levelMin > level || enc.levelMax < level)) continue;

        // Filter by version
        if (enc.version !== 'both' && enc.version !== version) continue;

        // Get the dex entry for this Pokémon
        const dexEntry = dexByName.get(enc.normalizedName);
        if (!dexEntry) continue;

        // Check if this Pokémon has any SE type against target
        const bestMult = dexEntry.types.reduce((best, t) => {
          const m = seTypes.get(t) || 1;
          return m > best ? m : best;
        }, 0);

        if (bestMult <= 1) continue; // Not a counter

        const key = enc.normalizedName;
        const existing = candidateMap.get(key);
        const locationInfo = {
          name: loc.name,
          method: enc.method,
          rate: enc.rate,
          levelMin: enc.levelMin,
          levelMax: enc.levelMax,
        };

        if (existing) {
          existing.locations.push(locationInfo);
          // Keep best score
          if (bestMult > existing.multiplier) {
            existing.multiplier = bestMult;
            existing.score = bestMult * (dexEntry.types.filter(t => seTypes.has(t)).length);
          }
        } else {
          const details = pokemonDetails[key];
          candidateMap.set(key, {
            name: dexEntry.name,
            types: dexEntry.types,
            id: dexEntry.id || details?.id,
            locations: [locationInfo],
            score: bestMult * dexEntry.types.filter(t => seTypes.has(t)).length,
            multiplier: bestMult,
          });
        }
      }
    }

    return [...candidateMap.values()]
      .sort((a, b) => b.score - a.score || b.multiplier - a.multiplier)
      .slice(0, 10);

  }, [target, level, version, dexByName]);

  return (
    <div className="catch-view">
      <div className="view-header">
        <h2>🎯 Catch Guide</h2>
        <p>Find the best Pokémon to catch</p>
      </div>

      <div className="catch-settings">
        <div className="catch-setting">
          <label className="catch-label">Your Level</label>
          <LevelSlider value={level} onChange={setLevel} />
        </div>
        <div className="catch-setting">
          <label className="catch-label">Game Version</label>
          <VersionToggle value={version} onChange={setVersion} />
        </div>
      </div>

      <div className="catch-target">
        <SectionHeader icon="🎯" title="What are you fighting?" />
        <SearchBar onSelect={setTarget} />

        {target && (
          <div className="catch-target-info">
            <span className="catch-target-name">
              {target.name.charAt(0).toUpperCase() + target.name.slice(1)}
            </span>
            <div className="catch-target-types">
              {target.types.map(t => <TypeBadge key={t} type={t} />)}
            </div>
          </div>
        )}
      </div>

      {candidates.length > 0 ? (
        <div className="catch-results">
          <SectionHeader
            icon="⚔️"
            title="Best Catches"
            subtitle={level > 0 ? `Available around Lv${level}` : 'From all locations'}
          />
          {candidates.map(c => (
            <div key={c.name} className="counter-group">
              <div className="counter-header">
                {c.id && <PokemonSprite id={c.id} size="thumb" types={c.types} />}
                <span className="counter-name">{c.name.charAt(0).toUpperCase() + c.name.slice(1)}</span>
                <div className="counter-types">
                  {c.types.map(t => <TypeBadge key={t} type={t} />)}
                </div>
                <span className="counter-mult">×{c.multiplier}</span>
              </div>
              <div className="counter-locations">
                {c.locations.slice(0, 3).map((loc, i) => (
                  <div key={i} className="counter-location">
                    <span className="loc-name">{loc.name}</span>
                    <span className="loc-detail">{loc.method}</span>
                    <span className="loc-detail">Lv {loc.levelMin}-{loc.levelMax}</span>
                    <span className="loc-detail">{loc.rate}%</span>
                  </div>
                ))}
                {c.locations.length > 3 && (
                  <span className="loc-more">+{c.locations.length - 3} more locations</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : target ? (
        <EmptyState message={level > 0
          ? `No strong counters found at Lv${level}. Try a different level or check all levels.`
          : "No strong counter types found for this Pokémon"}
        />
      ) : (
        <EmptyState message="Search for a Pokémon to see catch suggestions" />
      )}
    </div>
  );
}
