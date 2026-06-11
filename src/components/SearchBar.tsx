import { useState, useRef, useEffect, useMemo } from 'react';
import { galarDex } from '../data/galarDex';
import type { PokemonEntry } from '../data/galarDex';
import './SearchBar.css';

interface SearchBarProps {
  onSelect: (pokemon: PokemonEntry) => void;
}

function simpleFuzzyMatch(query: string, name: string): boolean {
  const q = query.toLowerCase().trim();
  const n = name.toLowerCase();
  if (n.includes(q)) return true;
  // Simple Levenshtein-like for close matches
  return n.split('').filter((c, i) => q[i] === c).length > q.length * 0.6;
}

export function SearchBar({ onSelect }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (query.trim() === '') return [];
    const q = query.toLowerCase().trim();
    return galarDex
      .filter(p => simpleFuzzyMatch(q, p.name))
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 12);
  }, [query]);

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container" ref={containerRef}>
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
              onMouseDown={(e) => { e.preventDefault(); handleSelect(p); }}
              onTouchEnd={(e) => { e.preventDefault(); handleSelect(p); }}
            >
              <span className="dropdown-name">{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</span>
              <span className="dropdown-id">#{p.id}</span>
            </li>
          ))}
        </ul>
      )}
      {showDropdown && query && filtered.length === 0 && (
        <div className="no-results">No matching Pokémon found. Try another name!</div>
      )}
    </div>
  );
}
