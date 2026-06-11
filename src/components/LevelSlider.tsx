import './LevelSlider.css';

interface LevelSliderProps {
  value: number;
  onChange: (level: number) => void;
  compact?: boolean;
}

function getProgressInfo(level: number): string {
  if (level <= 7) return 'Starting area — Route 1';
  if (level <= 12) return 'Gym 1 area — Routes 2-3';
  if (level <= 18) return 'Gym 2 area — Routes 4-5';
  if (level <= 24) return 'Gym 3 area — Route 6';
  if (level <= 30) return 'Gym 4 area — Routes 7-8';
  if (level <= 36) return 'Gym 5 area — Route 9-10';
  if (level <= 42) return 'Gym 6 area — Hammerlocke';
  if (level <= 48) return 'Gym 7 area — Lake of Outrage';
  if (level <= 55) return 'Champion Cup';
  return 'Post-game — Wild Area Lv60+';
}

export function LevelSlider({ value, onChange, compact = false }: LevelSliderProps) {
  return (
    <div className={`level-slider ${compact ? 'compact' : ''}`}>
      <div className="level-slider-header">
        <span className="level-label">Lv {value || '—'}</span>
        {!compact && <span className="level-progress">{value ? getProgressInfo(value) : 'Set your level'}</span>}
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="level-range"
      />
      {compact && value > 0 && (
        <span className="level-progress-compact">{getProgressInfo(value)}</span>
      )}
    </div>
  );
}
