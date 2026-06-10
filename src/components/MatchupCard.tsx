import type { PokemonEntry } from '../data/galarDex';
import type { MatchupResult } from '../utils/matchups';
import { TypeBadge } from './TypeBadge';
import './MatchupCard.css';

interface MatchupCardProps {
  pokemon: PokemonEntry;
  matchups: MatchupResult;
}

export function MatchupCard({ pokemon, matchups }: MatchupCardProps) {
  const displayName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="matchup-card">
      <div className="pokemon-header">
        <h2 className="pokemon-name">{displayName}</h2>
        <div className="pokemon-types">
          {pokemon.types.map(t => <TypeBadge key={t} type={t} />)}
        </div>
      </div>

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
    </div>
  );
}
