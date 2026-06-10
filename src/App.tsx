import { useState } from 'react';
import type { PokemonEntry } from './data/galarDex';
import { calculateMatchups } from './utils/matchups';
import { SearchBar } from './components/SearchBar';
import { MatchupCard } from './components/MatchupCard';
import './App.css';

function App() {
  const [selected, setSelected] = useState<PokemonEntry | null>(null);
  const matchups = selected ? calculateMatchups(selected.types) : null;

  return (
    <div className="app">
      <h1 className="app-title">Pokémon Shield — Type Matchups</h1>
      <SearchBar onSelect={setSelected} />
      {selected && matchups && (
        <MatchupCard pokemon={selected} matchups={matchups} />
      )}
    </div>
  );
}

export default App;
