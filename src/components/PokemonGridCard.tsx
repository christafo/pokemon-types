import type { PokemonEntry } from '../data/galarDex';
import { TypeBadge } from '../components/TypeBadge';
import { PokemonSprite } from '../components/PokemonSprite';
import './PokemonGridCard.css';

interface Props {
  pokemon: PokemonEntry;
  index: number;
}

export function PokemonGridCard({ pokemon, index }: Props) {
  const displayName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="grid-card" style={{ animationDelay: `${Math.min(index * 20, 500)}ms` }}>
      <div className="grid-card-inner">
        <div className="grid-card-sprite">
          <PokemonSprite id={pokemon.id} size="small" types={pokemon.types} />
        </div>
        <div className="grid-card-types">
          {pokemon.types.map(t => <TypeBadge key={t} type={t} />)}
        </div>
        <div className="grid-card-name">{displayName}</div>
        <div className="grid-card-number">#{String(pokemon.id || index + 1).padStart(3, '0')}</div>
      </div>
    </div>
  );
}
