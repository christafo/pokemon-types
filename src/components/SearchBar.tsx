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

  const handleClear = () => {
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.parentElement?.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <span className="search-icon" aria-hidden="true">🔍</span>
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
        {query && (
          <button className="search-clear" onClick={handleClear} aria-label="Clear search" type="button">
            ×
          </button>
        )}
      </div>
      {showDropdown && filtered.length > 0 && (
        <ul className="search-dropdown">
          {filtered.map((p, i) => (
            <li
              key={p.name}
              className={`dropdown-item ${i === selectedIndex ? 'selected' : ''}`}
              onMouseEnter={() => setSelectedIndex(i)}
              onClick={() => handleSelect(p)}
            >
              <span className="dropdown-name">{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
