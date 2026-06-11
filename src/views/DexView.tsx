import { useState, useMemo } from 'react';
import { galarDex } from '../data/galarDex';
import { typeColors } from '../data/typeColors';
import { PokemonGridCard } from '../components/PokemonGridCard';
import './DexView.css';

const ALL_TYPES = Object.keys(typeColors);

export function DexView() {
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = galarDex;
    if (typeFilter) {
      list = list.filter(p => p.types.includes(typeFilter));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q));
    }
    return list;
  }, [typeFilter, search]);

  return (
    <div className="dex-view">
      <div className="view-header">
        <h2>📖 Galar Pokédex</h2>
        <p>{filtered.length} of {galarDex.length} Pokémon</p>
      </div>

      {/* Search */}
      <input
        type="text"
        className="dex-search"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Type filter bar */}
      <div className="type-filter-bar">
        <button
          className={`type-filter-btn ${!typeFilter ? 'active' : ''}`}
          onClick={() => setTypeFilter(null)}
        >
          All
        </button>
        {ALL_TYPES.map(t => (
          <button
            key={t}
            className={`type-filter-btn ${typeFilter === t ? 'active' : ''}`}
            style={typeFilter === t ? { background: typeColors[t], borderColor: typeColors[t] } : {}}
            onClick={() => setTypeFilter(typeFilter === t ? null : t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="dex-grid">
        {filtered.map((pokemon, i) => (
          <PokemonGridCard key={pokemon.name} pokemon={pokemon} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="dex-empty">
          <p>No Pokémon found matching your filters</p>
        </div>
      )}
    </div>
  );
}
