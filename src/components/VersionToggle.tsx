import './VersionToggle.css';

interface VersionToggleProps {
  value: 'shield' | 'sword';
  onChange: (v: 'shield' | 'sword') => void;
}

export function VersionToggle({ value, onChange }: VersionToggleProps) {
  return (
    <div className="version-toggle">
      <button className={value === 'shield' ? 'active' : ''} onClick={() => onChange('shield')}>Shield</button>
      <button className={value === 'sword' ? 'active' : ''} onClick={() => onChange('sword')}>Sword</button>
    </div>
  );
}
