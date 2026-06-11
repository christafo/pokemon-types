import type { ViewType } from './AppShell';
import './Sidebar.css';

interface SidebarProps {
  current: ViewType;
  onChange: (view: ViewType) => void;
}

const items: { view: ViewType; icon: string; label: string }[] = [
  { view: 'lookup', icon: '🔍', label: 'Lookup' },
  { view: 'party', icon: '⚔️', label: 'Party' },
  { view: 'catch', icon: '🎯', label: 'Catch' },
  { view: 'dex', icon: '📖', label: 'Dex' },
];

export function Sidebar({ current, onChange }: SidebarProps) {
  return (
    <nav className="sidebar">
      {items.map(({ view, icon, label }) => (
        <button
          key={view}
          className={`sidebar-item${current === view ? ' active' : ''}`}
          onClick={() => onChange(view)}
        >
          <span className="sidebar-icon">{icon}</span>
          <span className="sidebar-label">{label}</span>
        </button>
      ))}
    </nav>
  );
}
