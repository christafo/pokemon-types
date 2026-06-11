import { typeChart } from '../data/typeChart';

export interface TypeMultiplier {
  type: string;
  multiplier: number;
}

export interface MatchupResult {
  offensive: {
    superEffective: TypeMultiplier[];
    notEffective: TypeMultiplier[];
    noEffect: TypeMultiplier[];
  };
  defensive: {
    weakTo: TypeMultiplier[];
    resistantTo: TypeMultiplier[];
    immuneTo: TypeMultiplier[];
  };
}

function dedupeMaxMultipliers(items: TypeMultiplier[]): TypeMultiplier[] {
  const map = new Map<string, TypeMultiplier>();
  for (const item of items) {
    const existing = map.get(item.type);
    if (!existing || item.multiplier > existing.multiplier) {
      map.set(item.type, item);
    }
  }
  return Array.from(map.values()).sort((a, b) => b.multiplier - a.multiplier);
}

export function calculateMatchups(pokemonTypes: string[]): MatchupResult {
  const allTypes = Object.keys(typeChart);

  // DEFENSIVE: for each attacking type, calculate combined multiplier across all defending types
  const defensiveMultipliers: TypeMultiplier[] = allTypes.map(attackingType => {
    const combined = pokemonTypes.reduce((acc, defType) => {
      return acc * (typeChart[attackingType]?.[defType] ?? 1);
    }, 1);
    return { type: attackingType, multiplier: combined };
  });

  const defensive = {
    weakTo: defensiveMultipliers.filter(m => m.multiplier > 1).sort((a, b) => b.multiplier - a.multiplier),
    resistantTo: defensiveMultipliers.filter(m => m.multiplier > 0 && m.multiplier < 1).sort((a, b) => a.multiplier - b.multiplier),
    immuneTo: defensiveMultipliers.filter(m => m.multiplier === 0),
  };

  // OFFENSIVE: union of each Pokémon type's effectiveness against all types, deduped
  const offensiveRaw: TypeMultiplier[] = [];
  for (const pokeType of pokemonTypes) {
    for (const targetType of allTypes) {
      const mult = typeChart[pokeType]?.[targetType] ?? 1;
      if (mult !== 1) {
        offensiveRaw.push({ type: targetType, multiplier: mult });
      }
    }
  }

  const offensive = {
    superEffective: dedupeMaxMultipliers(offensiveRaw.filter(m => m.multiplier > 1)),
    notEffective: dedupeMaxMultipliers(offensiveRaw.filter(m => m.multiplier > 0 && m.multiplier < 1)),
    noEffect: dedupeMaxMultipliers(offensiveRaw.filter(m => m.multiplier === 0)),
  };

  return { offensive, defensive };
}
