import { typeColors } from '../data/typeColors';
import './PokemonSprite.css';

interface PokemonSpriteProps {
  id?: number;
  size?: 'thumb' | 'small' | 'medium' | 'large';
  glow?: boolean;
  types?: string[];
}

const SIZES = { thumb: 40, small: 80, medium: 150, large: 200 };

export function PokemonSprite({ id, size = 'medium', glow = false, types }: PokemonSpriteProps) {
  const px = SIZES[size];
  const glowColor = types?.[0] ? typeColors[types[0]] : 'var(--accent)';
  const src = id ? `/sprites/${id}.png` : '';

  return (
    <div
      className={`pokemon-sprite sprite-${size} ${glow ? 'sprite-glow' : ''}`}
      style={glow ? { '--glow-color': glowColor } as React.CSSProperties : {}}
    >
      {id ? (
        <img
          src={src}
          alt=""
          width={px}
          height={px}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).nextElementSibling?.classList.add('show');
          }}
          loading="lazy"
        />
      ) : null}
      <div className={`sprite-placeholder ${!id ? 'show' : ''}`}>
        <svg viewBox="0 0 100 100" width={px * 0.6} height={px * 0.6}>
          <circle cx="50" cy="50" r="48" stroke="var(--text-dim)" strokeWidth="4" fill="var(--bg-card)"/>
          <path d="M2 50a48 48 0 0 1 96 0" fill="var(--accent)"/>
          <line x1="2" y1="50" x2="98" y2="50" stroke="var(--text-dim)" strokeWidth="4"/>
          <circle cx="50" cy="50" r="14" stroke="var(--text-dim)" strokeWidth="4" fill="var(--bg-card)"/>
        </svg>
      </div>
    </div>
  );
}
