import { typeColors } from '../data/typeColors';
import './TypeBadge.css';

interface TypeBadgeProps {
  type: string;
  multiplier?: number;
}

export function TypeBadge({ type, multiplier }: TypeBadgeProps) {
  const bg = typeColors[type] || '#888';
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  const multText = multiplier !== undefined && multiplier !== 2
    ? ` ×${multiplier}`
    : '';
  return (
    <span className="type-badge" style={{ background: bg }}>
      {label}{multText}
    </span>
  );
}
