import type { PokemonDetails } from '../data/pokemonDetails';
import './StatBars.css';

const STAT_LABELS: Record<string, string> = {
  hp: 'HP',
  atk: 'ATK',
  def: 'DEF',
  spa: 'SP.ATK',
  spd: 'SP.DEF',
  spe: 'SPEED',
};

const STAT_COLORS: Record<string, string> = {
  hp: '#ff5959',
  atk: '#f5ac78',
  def: '#fae078',
  spa: '#9db7f5',
  spd: '#a7db8d',
  spe: '#fa92b2',
};

interface StatBarsProps {
  stats: PokemonDetails['stats'];
}

export function StatBars({ stats }: StatBarsProps) {
  const total = Object.values(stats).reduce((a, b) => a + b, 0);

  return (
    <div className="stat-bars">
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="stat-row">
          <span className="stat-label">{STAT_LABELS[key] || key}</span>
          <div className="stat-bar-track">
            <div
              className="stat-bar-fill"
              style={{
                width: `${Math.min((value / 255) * 100, 100)}%`,
                background: STAT_COLORS[key] || '#888',
              }}
            />
          </div>
          <span className="stat-value">{value}</span>
        </div>
      ))}
      <div className="stat-total">
        <span className="stat-label">TOTAL</span>
        <span className="stat-value">{total}</span>
      </div>
    </div>
  );
}
