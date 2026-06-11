import type { PokemonEntry } from '../data/galarDex';
import { TypeBadge } from './TypeBadge';
import { PokemonSprite } from './PokemonSprite';
import './PartySlot.css';

interface Props {
  pokemon: PokemonEntry | null;
  onRemove: () => void;
  onAdd: () => void;
}

export function PartySlot({ pokemon, onRemove, onAdd }: Props) {
  if (!pokemon) {
    return (
      <button className="party-slot empty" onClick={onAdd}>
        <span className="party-slot-plus">+</span>
      </button>
    );
  }

  const displayName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="party-slot filled">
      <button className="party-slot-remove" onClick={onRemove} aria-label="Remove">✕</button>
      <div className="party-slot-sprite">
        <PokemonSprite id={pokemon.id} size="thumb" types={pokemon.types} />
      </div>
      <div className="party-slot-name">{displayName}</div>
      <div className="party-slot-types">
        {pokemon.types.map(t => <TypeBadge key={t} type={t} />)}
      </div>
    </div>
  );
}
