import type { ViewType } from './AppShell';
import './MobileNav.css';

interface MobileNavProps {
  current: ViewType;
  onChange: (view: ViewType) => void;
}

const items: { view: ViewType; icon: string; label: string }[] = [
  { view: 'lookup', icon: '🔍', label: 'Lookup' },
  { view: 'party', icon: '⚔️', label: 'Party' },
  { view: 'catch', icon: '🎯', label: 'Catch' },
  { view: 'dex', icon: '📖', label: 'Dex' },
];

export function MobileNav({ current, onChange }: MobileNavProps) {
  return (
    <nav className="mobile-nav">
      {items.map(({ view, icon, label }) => (
        <button
          key={view}
          className={`mobile-nav-item${current === view ? ' active' : ''}`}
          onClick={() => onChange(view)}
        >
          <span className="mobile-nav-dot" />
          <span className="mobile-nav-icon">{icon}</span>
          <span className="mobile-nav-label">{label}</span>
        </button>
      ))}
    </nav>
  );
}
