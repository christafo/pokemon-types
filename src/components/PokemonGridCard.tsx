import type { PokemonEntry } from '../data/galarDex';
import { TypeBadge } from './TypeBadge';
import './PokemonGridCard.css';

interface Props {
  pokemon: PokemonEntry;
  index: number;
}

export function PokemonGridCard({ pokemon, index }: Props) {
  return (
    <div className="grid-card" style={{ animationDelay: `${Math.min(index * 20, 500)}ms` }}>
      <div className="grid-card-inner">
        <div className="grid-card-types">
          {pokemon.types.map(t => (
            <TypeBadge key={t} type={t} />
          ))}
        </div>
        <div className="grid-card-name">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </div>
        <div className="grid-card-number">#{String(index + 1).padStart(3, '0')}</div>
      </div>
    </div>
  );
}
