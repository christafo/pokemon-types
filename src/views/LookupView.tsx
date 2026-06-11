import { useState } from 'react';
import type { PokemonEntry } from '../data/galarDex';
import { calculateMatchups } from '../utils/matchups';
import { SearchBar } from '../components/SearchBar';
import { MatchupCard } from '../components/MatchupCard';
import { EmptyState } from '../components/EmptyState';

export function LookupView() {
  const [selected, setSelected] = useState<PokemonEntry | null>(null);
  const matchups = selected ? calculateMatchups(selected.types) : null;

  return (
    <div className="lookup-view">
      <SearchBar onSelect={setSelected} />
      {selected && matchups ? (
        <MatchupCard pokemon={selected} matchups={matchups} />
      ) : (
        <EmptyState message="Search for a Pokémon to see type matchups" />
      )}
    </div>
  );
}
