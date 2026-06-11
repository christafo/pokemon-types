import { useState, useEffect } from 'react';
import { AppShell } from './components/AppShell';
import './App.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('pokemon-types-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'light'; // Default to light mode
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pokemon-types-theme', theme);
  }, [theme]);

  return <AppShell theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />;
}

export default App;
