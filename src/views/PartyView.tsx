import { useState } from 'react';
import type { PokemonEntry } from '../data/galarDex';
import { calculateMatchups } from '../utils/matchups';
import { PartySlot } from '../components/PartySlot';
import { SearchBar } from '../components/SearchBar';
import { TypeBadge } from '../components/TypeBadge';
import { EmptyState } from '../components/EmptyState';
import { SectionHeader } from '../components/SectionHeader';
import './PartyView.css';

export function PartyView() {
  const [party, setParty] = useState<(PokemonEntry | null)[]>([null, null, null, null, null, null]);
  const [target, setTarget] = useState<PokemonEntry | null>(null);
  const [addingSlot, setAddingSlot] = useState<number | null>(null);

  const addToParty = (pokemon: PokemonEntry, slot: number) => {
    const next = [...party];
    next[slot] = pokemon;
    setParty(next);
    setAddingSlot(null);
  };

  const removeFromParty = (slot: number) => {
    const next = [...party];
    next[slot] = null;
    setParty(next);
  };

  const filledParty = party.filter(Boolean) as PokemonEntry[];
  const targetMatchups = target ? calculateMatchups(target.types) : null;

  // Recommendation: for each party member, check offensive SE against target types,
  // and check how many of its own types the target is SE against
  const recommendations = target && filledParty.length > 0
    ? filledParty.map(p => {
        const matchups = calculateMatchups(p.types);
        const seCount = target.types.filter(t =>
          matchups.offensive.superEffective.some(se => se.type === t)
        ).length;
        const weakCount = p.types.filter(t =>
          targetMatchups!.offensive.superEffective.some(se => se.type === t)
        ).length;
        return { pokemon: p, seCount, weakCount, score: seCount - weakCount };
      }).sort((a, b) => b.score - a.score)
    : [];

  return (
    <div className="party-view">
      <div className="view-header">
        <h2>⚔️ Party Advisor</h2>
        <p>{filledParty.length}/6 Pokémon in your party</p>
      </div>

      {/* Party Grid */}
      <div className="party-grid">
        {party.map((p, i) => (
          <PartySlot
            key={i}
            pokemon={p}
            onRemove={() => removeFromParty(i)}
            onAdd={() => setAddingSlot(addingSlot === i ? null : i)}
          />
        ))}
      </div>

      {/* Add Pokémon (shown when a slot is clicked) */}
      {addingSlot !== null && (
        <div className="party-add">
          <p className="party-add-label">Add Pokémon to slot {addingSlot + 1}</p>
          <SearchBar onSelect={(p) => addToParty(p, addingSlot)} />
        </div>
      )}

      {/* Target Selection */}
      {filledParty.length > 0 && (
        <div className="party-target-section">
          <SectionHeader icon="🎯" title="Select Opponent" subtitle="Who are you fighting?" />
          <SearchBar onSelect={setTarget} />

          {target && (
            <div className="target-info">
              <span className="target-name">
                {target.name.charAt(0).toUpperCase() + target.name.slice(1)}
              </span>
              <div className="target-types">
                {target.types.map(t => <TypeBadge key={t} type={t} />)}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Recommendations */}
      {recommendations.length > 0 && target && (
        <div className="party-recs">
          <SectionHeader
            icon="🏆"
            title="Recommended Picks"
            subtitle={`Best matchups against ${target.name}`}
          />
          <div className="rec-list">
            {recommendations.map((rec, i) => (
              <div key={rec.pokemon.name} className={`rec-item ${i === 0 ? 'rec-best' : ''}`}>
                <span className="rec-rank">{i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}</span>
                <span className="rec-name">
                  {rec.pokemon.name.charAt(0).toUpperCase() + rec.pokemon.name.slice(1)}
                </span>
                <div className="rec-types">
                  {rec.pokemon.types.map(t => <TypeBadge key={t} type={t} />)}
                </div>
                {rec.seCount > 0 && <span className="rec-good">SE vs {rec.seCount} type{rec.seCount > 1 ? 's' : ''}</span>}
                {rec.weakCount > 0 && <span className="rec-warn">⚠️ Weak to {rec.weakCount}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {filledParty.length === 0 && (
        <EmptyState message="Add Pokémon to your party to get matchup advice" />
      )}
    </div>
  );
}
