import { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { LookupView } from '../views/LookupView';
import { PartyView } from '../views/PartyView';
import { CatchView } from '../views/CatchView';
import { DexView } from '../views/DexView';

export type ViewType = 'lookup' | 'party' | 'catch' | 'dex';

interface AppShellProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function AppShell({ theme, onToggleTheme }: AppShellProps) {
  const [view, setView] = useState<ViewType>('lookup');
  return (
    <div className="app-shell">
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <div className="app-body">
        <Sidebar current={view} onChange={setView} />
        <main className="app-content">
          {view === 'lookup' && <LookupView />}
          {view === 'party' && <PartyView />}
          {view === 'catch' && <CatchView />}
          {view === 'dex' && <DexView />}
        </main>
      </div>
      <MobileNav current={view} onChange={setView} />
    </div>
  );
}
