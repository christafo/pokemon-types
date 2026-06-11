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
  bst: number; // base stat total — used for sorting when no target
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

  // Two modes:
  // 1. Level-only: show Pokémon available at that level, sorted by BST (strongest first)
  // 2. Target + level: show counters against the target available at that level
  const candidates = useMemo(() => {
    if (level <= 0 && !target) return [];

    const candidateMap = new Map<string, CatchCandidate>();

    // If we have a target, calculate which types are SE against it
    const seTypes = target ? new Map<string, number>() : null;
    if (target && seTypes) {
      for (const [type, chart] of Object.entries(typeChart)) {
        const mult = target.types.reduce((acc, tt) => acc * (chart[tt] ?? 1), 1);
        if (mult > 1) seTypes.set(type, mult);
      }
    }

    for (const loc of locationEncounters) {
      for (const enc of loc.encounters) {
        // Filter by level (if set)
        if (level > 0 && (enc.levelMin > level || enc.levelMax < level)) continue;

        // Filter by version
        if (enc.version !== 'both' && enc.version !== version) continue;

        // Get the dex entry for this Pokémon
        const dexEntry = dexByName.get(enc.normalizedName);
        if (!dexEntry) continue;

        const key = enc.normalizedName;

        // If we have a target, check if this Pokémon is a counter
        if (seTypes && target) {
          const bestMult = dexEntry.types.reduce((best, t) => {
            const m = seTypes.get(t) || 1;
            return m > best ? m : best;
          }, 0);

          if (bestMult <= 1) continue; // Not a counter, skip

          const existing = candidateMap.get(key);
          const locationInfo = {
            name: loc.name,
            method: enc.method,
            rate: enc.rate,
            levelMin: enc.levelMin,
            levelMax: enc.levelMax,
          };

          const details = pokemonDetails[key];
          const bst = details
            ? Object.values(details.stats).reduce((a, b) => a + b, 0)
            : 0;

          if (existing) {
            existing.locations.push(locationInfo);
            if (bestMult > existing.multiplier) {
              existing.multiplier = bestMult;
              existing.score = bestMult * dexEntry.types.filter(t => seTypes.has(t)).length;
            }
          } else {
            candidateMap.set(key, {
              name: dexEntry.name,
              types: dexEntry.types,
              id: dexEntry.id || details?.id,
              locations: [locationInfo],
              score: bestMult * dexEntry.types.filter(t => seTypes.has(t)).length,
              multiplier: bestMult,
              bst,
            });
          }
        } else {
          // No target — just collect all available Pokémon
          const existing = candidateMap.get(key);
          const locationInfo = {
            name: loc.name,
            method: enc.method,
            rate: enc.rate,
            levelMin: enc.levelMin,
            levelMax: enc.levelMax,
          };

          const details = pokemonDetails[key];
          const bst = details
            ? Object.values(details.stats).reduce((a, b) => a + b, 0)
            : 0;

          if (existing) {
            existing.locations.push(locationInfo);
            // Keep the highest rate location as the primary
            if (locationInfo.rate > existing.locations[0].rate) {
              existing.locations.unshift(locationInfo);
            }
          } else {
            candidateMap.set(key, {
              name: dexEntry.name,
              types: dexEntry.types,
              id: dexEntry.id || details?.id,
              locations: [locationInfo],
              score: bst, // Use BST as score when no target
              multiplier: 1,
              bst,
            });
          }
        }
      }
    }

    const results = [...candidateMap.values()];

    if (seTypes && target) {
      // Sort by counter score (best counter first)
      results.sort((a, b) => b.score - a.score || b.multiplier - a.multiplier);
    } else {
      // Sort by BST (strongest Pokémon first) then by encounter rate
      results.sort((a, b) => b.bst - a.bst);
    }

    return results.slice(0, 15);

  }, [target, level, version, dexByName]);

  const hasLevel = level > 0;

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
        <SectionHeader icon="🎯" title="What are you fighting?" subtitle="Optional — set a target for counter suggestions" />
        <SearchBar onSelect={setTarget} />

        {target && (
          <div className="catch-target-info">
            <span className="catch-target-name">
              {target.name.charAt(0).toUpperCase() + target.name.slice(1)}
            </span>
            <div className="catch-target-types">
              {target.types.map(t => <TypeBadge key={t} type={t} />)}
            </div>
            <button className="catch-target-clear" onClick={() => setTarget(null)}>✕</button>
          </div>
        )}
      </div>

      {candidates.length > 0 ? (
        <div className="catch-results">
          <SectionHeader
            icon={target ? '⚔️' : '🌐'}
            title={target ? 'Best Counters' : 'Available to Catch'}
            subtitle={hasLevel
              ? target
                ? `Strong against ${target.name} at Lv${level}`
                : `Pokémon available around Lv${level}, strongest first`
              : target
                ? `Strong against ${target.name} from all levels`
                : 'Set your level to see available Pokémon'
            }
          />
          {candidates.map(c => (
            <div key={c.name} className="counter-group">
              <div className="counter-header">
                {c.id && <PokemonSprite id={c.id} size="thumb" types={c.types} />}
                <span className="counter-name">{c.name.charAt(0).toUpperCase() + c.name.slice(1)}</span>
                <div className="counter-types">
                  {c.types.map(t => <TypeBadge key={t} type={t} />)}
                </div>
                {target && <span className="counter-mult">×{c.multiplier}</span>}
                {!target && c.bst > 0 && <span className="counter-bst">BST {c.bst}</span>}
              </div>
              <div className="counter-locations">
                {c.locations.slice(0, 3).map((loc, i) => (
                  <div key={i} className="counter-location">
                    <span className="loc-name">{loc.name}</span>
                    <span className="loc-detail">{loc.method}</span>
                    <span className="loc-detail">Lv {loc.levelMin}–{loc.levelMax}</span>
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
      ) : hasLevel || target ? (
        <EmptyState message={hasLevel
          ? target
            ? `No strong counters found at Lv${level}. Try a different level.`
            : `No Pokémon found at Lv${level} for ${version}. Try adjusting the level.`
          : "No strong counter types found for this Pokémon"
        } />
      ) : (
        <EmptyState message="Set your level to see available Pokémon, or search for a target to get counter suggestions" />
      )}
    </div>
  );
}
