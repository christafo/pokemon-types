import './Header.css';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-left">
        <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" fill="var(--bg-surface)" />
          <path d="M2 50a48 48 0 0 1 96 0" fill="var(--accent)" />
          <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="4" />
          <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="4" fill="var(--bg-surface)" />
        </svg>
        <span className="header-title">Galar Pokédex</span>
      </div>
      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  );
}
