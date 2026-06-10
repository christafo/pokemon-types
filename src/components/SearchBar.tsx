import { useState, useRef, useEffect } from 'react';
import { galarDex } from '../data/galarDex';
import type { PokemonEntry } from '../data/galarDex';
import './SearchBar.css';

interface SearchBarProps {
  onSelect: (pokemon: PokemonEntry) => void;
}

export function SearchBar({ onSelect }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim() === '' ? [] : galarDex
    .filter(p => p.name.startsWith(query.toLowerCase()))
    .slice(0, 10);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [query]);

  const handleSelect = (pokemon: PokemonEntry) => {
    onSelect(pokemon);
    setQuery('');
    setShowDropdown(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown || filtered.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    } else if (e.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  return (
    <div className="search-container">
      <input
        ref={inputRef}
        type="text"
        className="search-input"
        placeholder="Type a Pokémon name..."
        value={query}
        onChange={e => { setQuery(e.target.value); setShowDropdown(true); }}
        onFocus={() => setShowDropdown(true)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
      {showDropdown && filtered.length > 0 && (
        <ul className="search-dropdown">
          {filtered.map((p, i) => (
            <li
              key={p.name}
              className={`dropdown-item ${i === selectedIndex ? 'selected' : ''}`}
              onMouseEnter={() => setSelectedIndex(i)}
              onClick={() => handleSelect(p)}
            >
              {p.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
