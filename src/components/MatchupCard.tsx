import { useState } from 'react';
import type { PokemonEntry } from '../data/galarDex';
import type { MatchupResult } from '../utils/matchups';
import { TypeBadge } from './TypeBadge';
import { PokemonSprite } from './PokemonSprite';
import { StatBars } from './StatBars';
import { pokemonDetails } from '../data/pokemonDetails';
import { galarDex } from '../data/galarDex';
import './MatchupCard.css';

type CardTab = 'matchups' | 'stats' | 'evolutions';

interface MatchupCardProps {
  pokemon: PokemonEntry;
  matchups: MatchupResult;
}

function getEvolutionChain(pokemon: PokemonEntry) {
  const details = pokemonDetails[pokemon.name.toLowerCase()];
  if (!details) return null;

  // Find the base of the chain (follow prevo links)
  let base = pokemon.name.toLowerCase();
  let current = details;
  while (current.prevo) {
    base = current.prevo.toLowerCase();
    current = pokemonDetails[base];
    if (!current) break;
  }

  // Now build the chain from base forward
  const chain: { name: string; id?: number; types: string[]; evoLevel?: number | null; evoCondition?: string | null }[] = [];

  function addToChain(name: string) {
    const d = pokemonDetails[name];
    const entry = galarDex.find(p => p.name.toLowerCase() === name);
    if (d) {
      chain.push({
        name,
        id: d.id,
        types: entry?.types || [],
        evoLevel: d.evoLevel,
        evoCondition: d.evoCondition,
      });
      // Add evolutions recursively
      if (d.evos) {
        for (const evo of d.evos) {
          addToChain(evo.toLowerCase());
        }
      }
    }
  }

  addToChain(base);
  return chain.length > 1 ? chain : null;
}

export function MatchupCard({ pokemon, matchups }: MatchupCardProps) {
  const [tab, setTab] = useState<CardTab>('matchups');
  const displayName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const details = pokemonDetails[pokemon.name.toLowerCase()];
  const spriteId = pokemon.id || details?.id;
  const evoChain = getEvolutionChain(pokemon);

  return (
    <div className="matchup-card">
      {/* Sprite */}
      {spriteId && (
        <div className="pokemon-sprite-area">
          <PokemonSprite id={spriteId} size="medium" glow types={pokemon.types} />
        </div>
      )}

      {/* Header */}
      <div className="pokemon-header">
        <h2 className="pokemon-name">
          {displayName}
          {details && <span className="pokemon-dex-number">#{details.id}</span>}
        </h2>
        {details && (
          <div className="pokemon-meta">
            {details.heightm && <span>{details.heightm}m</span>}
            {details.weightkg && <span>{details.weightkg}kg</span>}
          </div>
        )}
        <div className="pokemon-types">
          {pokemon.types.map(t => <TypeBadge key={t} type={t} />)}
        </div>
      </div>

      {/* Tab Bar */}
      <div className="card-tabs">
        <button className={`card-tab ${tab === 'matchups' ? 'active' : ''}`} onClick={() => setTab('matchups')}>Matchups</button>
        <button className={`card-tab ${tab === 'stats' ? 'active' : ''}`} onClick={() => setTab('stats')}>Stats</button>
        {evoChain && (
          <button className={`card-tab ${tab === 'evolutions' ? 'active' : ''}`} onClick={() => setTab('evolutions')}>Evolutions</button>
        )}
      </div>

      {/* Tab Content */}
      {tab === 'matchups' && (
        <>
          <div className="matchup-section">
            <h3 className="section-title offense-title">⚔️ Offense</h3>
            <div className="matchup-group">
              <span className="group-label">Super Effective (2×):</span>
              <div className="badge-row">
                {matchups.offensive.superEffective.length > 0
                  ? matchups.offensive.superEffective.map(m => <TypeBadge key={m.type} type={m.type} multiplier={m.multiplier} />)
                  : <span className="empty-note">None</span>}
              </div>
            </div>
            {matchups.offensive.notEffective.length > 0 && (
              <div className="matchup-group">
                <span className="group-label">Not Very Effective (0.5×):</span>
                <div className="badge-row">
                  {matchups.offensive.notEffective.map(m => <TypeBadge key={m.type} type={m.type} multiplier={m.multiplier} />)}
                </div>
              </div>
            )}
            {matchups.offensive.noEffect.length > 0 && (
              <div className="matchup-group">
                <span className="group-label">No Effect (0×):</span>
                <div className="badge-row">
                  {matchups.offensive.noEffect.map(m => <TypeBadge key={m.type} type={m.type} multiplier={0} />)}
                </div>
              </div>
            )}
          </div>

          <div className="matchup-section">
            <h3 className="section-title defense-title">🛡️ Defense</h3>
            <div className="matchup-group">
              <span className="group-label">Weak To:</span>
              <div className="badge-row">
                {matchups.defensive.weakTo.length > 0
                  ? matchups.defensive.weakTo.map(m => <TypeBadge key={m.type} type={m.type} multiplier={m.multiplier} />)
                  : <span className="empty-note">None</span>}
              </div>
            </div>
            <div className="matchup-group">
              <span className="group-label">Resists:</span>
              <div className="badge-row">
                {matchups.defensive.resistantTo.length > 0
                  ? matchups.defensive.resistantTo.map(m => <TypeBadge key={m.type} type={m.type} multiplier={m.multiplier} />)
                  : <span className="empty-note">None</span>}
              </div>
            </div>
            {matchups.defensive.immuneTo.length > 0 && (
              <div className="matchup-group">
                <span className="group-label">Immune To:</span>
                <div className="badge-row">
                  {matchups.defensive.immuneTo.map(m => <TypeBadge key={m.type} type={m.type} multiplier={0} />)}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {tab === 'stats' && details && <StatBars stats={details.stats} />}

      {tab === 'evolutions' && evoChain && (
        <div className="evolution-chain">
          {evoChain.map((stage, i) => (
            <div key={stage.name} className="evo-stage">
              {i > 0 && (
                <div className="evo-arrow">
                  <span className="evo-method">
                    {stage.evoLevel ? `Lv ${stage.evoLevel}` : stage.evoCondition || 'Trade'}
                  </span>
                  <span className="evo-arrow-icon">→</span>
                </div>
              )}
              <div className="evo-pokemon">
                {stage.id && <PokemonSprite id={stage.id} size="small" types={stage.types} />}
                <span className="evo-name">{stage.name.charAt(0).toUpperCase() + stage.name.slice(1)}</span>
                <div className="evo-types">
                  {stage.types.map(t => <TypeBadge key={t} type={t} />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
