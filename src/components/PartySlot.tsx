import type { PokemonEntry } from '../data/galarDex';
import { TypeBadge } from './TypeBadge';
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

  return (
    <div className="party-slot filled">
      <div className="party-slot-name">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </div>
      <div className="party-slot-types">
        {pokemon.types.map(t => <TypeBadge key={t} type={t} />)}
      </div>
      <button className="party-slot-remove" onClick={onRemove} aria-label="Remove">✕</button>
    </div>
  );
}
