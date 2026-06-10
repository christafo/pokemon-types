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

  // OFFENSIVE: union of each Pokémon type's effectiveness against all types
  const offensive = {
    superEffective: [] as TypeMultiplier[],
    notEffective: [] as TypeMultiplier[],
    noEffect: [] as TypeMultiplier[],
  };

  for (const pokeType of pokemonTypes) {
    for (const targetType of allTypes) {
      const mult = typeChart[pokeType]?.[targetType] ?? 1;
      if (mult > 1) {
        offensive.superEffective.push({ type: targetType, multiplier: mult });
      } else if (mult > 0 && mult < 1) {
        offensive.notEffective.push({ type: targetType, multiplier: mult });
      } else if (mult === 0) {
        offensive.noEffect.push({ type: targetType, multiplier: mult });
      }
    }
  }

  return { offensive, defensive };
}
