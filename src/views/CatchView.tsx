import { useState } from 'react';
import type { PokemonEntry } from '../data/galarDex';
import { galarDex } from '../data/galarDex';
import { typeChart } from '../data/typeChart';
import { LevelSlider } from '../components/LevelSlider';
import { VersionToggle } from '../components/VersionToggle';
import { SearchBar } from '../components/SearchBar';
import { TypeBadge } from '../components/TypeBadge';
import { EmptyState } from '../components/EmptyState';
import { SectionHeader } from '../components/SectionHeader';
import './CatchView.css';

export function CatchView() {
  const [level, setLevel] = useState(0);
  const [version, setVersion] = useState<'shield' | 'sword'>('shield');
  const [target, setTarget] = useState<PokemonEntry | null>(null);

  // Generic counter suggestions (no route data yet — that comes in Batch 4)
  // Find top type counters and show matching Pokémon from the dex
  const counterSuggestions = target ? (() => {
    const targetTypes = target.types;
    const seTypes: { type: string; multiplier: number }[] = [];
    for (const [type, chart] of Object.entries(typeChart)) {
      const mult = targetTypes.reduce((acc, tt) => acc * (chart[tt] ?? 1), 1);
      if (mult > 1) seTypes.push({ type, multiplier: mult });
    }
    seTypes.sort((a, b) => b.multiplier - a.multiplier);

    return seTypes.slice(0, 4).map(({ type, multiplier }) => {
      const candidates = galarDex.filter(p => p.types.includes(type)).slice(0, 3);
      return { type, multiplier, candidates };
    });
  })() : [];

  return (
    <div className="catch-view">
      <div className="view-header">
        <h2>🎯 Catch Guide</h2>
        <p>Find the best Pokémon to catch</p>
      </div>

      {/* Settings */}
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

      {/* Target Selection */}
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

      {/* Counter Suggestions */}
      {counterSuggestions.length > 0 ? (
        <div className="catch-results">
          <SectionHeader
            icon="⚔️"
            title="Best Counters"
            subtitle={level > 0 ? `Available around Lv${level}` : 'From the Galar Pokédex'}
          />
          {counterSuggestions.map(({ type, multiplier, candidates }) => (
            <div key={type} className="counter-group">
              <div className="counter-header">
                <TypeBadge type={type} multiplier={multiplier} />
                <span className="counter-mult">×{multiplier} effectiveness</span>
              </div>
              <div className="counter-candidates">
                {candidates.map(c => (
                  <div key={c.name} className="counter-pokemon">
                    <span className="counter-name">
                      {c.name.charAt(0).toUpperCase() + c.name.slice(1)}
                    </span>
                    <div className="counter-types">
                      {c.types.map(t => <TypeBadge key={t} type={t} />)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState message="Search for a Pokémon to see counter suggestions" />
      )}
    </div>
  );
}
