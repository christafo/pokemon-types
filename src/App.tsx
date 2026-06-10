import { useState, useEffect } from 'react';
import type { PokemonEntry } from './data/galarDex';
import { calculateMatchups } from './utils/matchups';
import { SearchBar } from './components/SearchBar';
import { MatchupCard } from './components/MatchupCard';
import './App.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('pokemon-types-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pokemon-types-theme', theme);
  }, [theme]);

  const [selected, setSelected] = useState<PokemonEntry | null>(null);
  const matchups = selected ? calculateMatchups(selected.types) : null;

  return (
    <div className="app">
      <button
        className="theme-toggle"
        onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <h1 className="app-title">Pokémon Shield — Type Matchups</h1>
      <p className="app-subtitle">Galar Pokédex type matchups at a glance</p>
      <SearchBar onSelect={setSelected} />
      {selected && matchups && (
        <MatchupCard pokemon={selected} matchups={matchups} />
      )}
    </div>
  );
}

export default App;
