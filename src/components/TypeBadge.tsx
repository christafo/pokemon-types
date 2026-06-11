import { typeColors } from '../data/typeColors';
import './TypeBadge.css';

interface TypeBadgeProps {
  type: string;
  multiplier?: number;
}

export function TypeBadge({ type, multiplier }: TypeBadgeProps) {
  const bg = typeColors[type] || '#888';
  const label = type.charAt(0).toUpperCase() + type.slice(1);

  let multText = '';
  let severityClass = '';
  if (multiplier !== undefined) {
    if (multiplier > 2) { multText = ` ×${multiplier}`; severityClass = 'badge-severe'; }
    else if (multiplier > 1) { multText = ''; severityClass = 'badge-strong'; }
    else if (multiplier < 1 && multiplier > 0) { multText = ` ×${multiplier}`; severityClass = 'badge-resist'; }
    else if (multiplier === 0) { multText = ' ×0'; severityClass = 'badge-immune'; }
  }

  return (
    <span className={`type-badge ${severityClass}`} style={{ background: bg }}>
      {label}{multText}
    </span>
  );
}
