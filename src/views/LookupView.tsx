import { useState } from 'react';
import type { PokemonEntry } from '../data/galarDex';
import { calculateMatchups } from '../utils/matchups';
import { SearchBar } from '../components/SearchBar';
import { MatchupCard } from '../components/MatchupCard';

export function LookupView() {
  const [selected, setSelected] = useState<PokemonEntry | null>(null);
  const matchups = selected ? calculateMatchups(selected.types) : null;

  return (
    <div className="lookup-view">
      <div className="view-header">
        <h2>🔍 Type Lookup</h2>
        <p>Search for a Pokémon to see its type matchups</p>
      </div>
      <SearchBar onSelect={setSelected} />
      {selected && matchups && (
        <MatchupCard pokemon={selected} matchups={matchups} />
      )}
    </div>
  );
}
