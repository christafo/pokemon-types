// Auto-generated from Pokemon Showdown data
// Run: node scripts/fetch_showdown_data.mjs

export interface PokemonDetails {
  id: number;
  stats: { hp: number; atk: number; def: number; spa: number; spd: number; spe: number };
  abilities: Record<string, string>;
  heightm: number;
  weightkg: number;
  color: string;
  evos: string[];
  prevo: string | null;
  evoLevel: number | null;
  evoCondition: string | null;
  genderRatio: { M: number; F: number } | null;
  eggGroups: string[];
}

export const pokemonDetails: Record<string, PokemonDetails> = {
  "abomasnow": {
    "id": 460,
    "stats": {
      "hp": 90,
      "atk": 92,
      "def": 75,
      "spa": 92,
      "spd": 85,
      "spe": 60
    },
    "abilities": {
      "0": "Snow Warning",
      "H": "Soundproof"
    },
    "heightm": 2.2,
    "weightkg": 135.5,
    "color": "White",
    "evos": [],
    "prevo": "Snover",
    "evoLevel": 40,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Grass"
    ]
  },
  "accelgor": {
    "id": 617,
    "stats": {
      "hp": 80,
      "atk": 70,
      "def": 40,
      "spa": 100,
      "spd": 60,
      "spe": 145
    },
    "abilities": {
      "0": "Hydration",
      "1": "Sticky Hold",
      "H": "Unburden"
    },
    "heightm": 0.8,
    "weightkg": 25.3,
    "color": "Red",
    "evos": [],
    "prevo": "Shelmet",
    "evoLevel": null,
    "evoCondition": "with a Karrablast",
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "aegislash": {
    "id": 681,
    "stats": {
      "hp": 60,
      "atk": 50,
      "def": 140,
      "spa": 50,
      "spd": 140,
      "spe": 60
    },
    "abilities": {
      "0": "Stance Change"
    },
    "heightm": 1.7,
    "weightkg": 53,
    "color": "Brown",
    "evos": [],
    "prevo": "Doublade",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "alcremie": {
    "id": 869,
    "stats": {
      "hp": 65,
      "atk": 60,
      "def": 75,
      "spa": 110,
      "spd": 121,
      "spe": 64
    },
    "abilities": {
      "0": "Sweet Veil",
      "H": "Aroma Veil"
    },
    "heightm": 0.3,
    "weightkg": 0.5,
    "color": "White",
    "evos": [],
    "prevo": "Milcery",
    "evoLevel": null,
    "evoCondition": "spin while holding a Sweet",
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Amorphous"
    ]
  },
  "appletun": {
    "id": 842,
    "stats": {
      "hp": 110,
      "atk": 85,
      "def": 80,
      "spa": 100,
      "spd": 80,
      "spe": 30
    },
    "abilities": {
      "0": "Ripen",
      "1": "Gluttony",
      "H": "Thick Fat"
    },
    "heightm": 0.4,
    "weightkg": 13,
    "color": "Green",
    "evos": [],
    "prevo": "Applin",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass",
      "Dragon"
    ]
  },
  "applin": {
    "id": 840,
    "stats": {
      "hp": 40,
      "atk": 40,
      "def": 80,
      "spa": 40,
      "spd": 40,
      "spe": 20
    },
    "abilities": {
      "0": "Ripen",
      "1": "Gluttony",
      "H": "Bulletproof"
    },
    "heightm": 0.2,
    "weightkg": 0.5,
    "color": "Green",
    "evos": [
      "Flapple",
      "Appletun",
      "Dipplin"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass",
      "Dragon"
    ]
  },
  "araquanid": {
    "id": 752,
    "stats": {
      "hp": 68,
      "atk": 70,
      "def": 92,
      "spa": 50,
      "spd": 132,
      "spe": 42
    },
    "abilities": {
      "0": "Water Bubble",
      "H": "Water Absorb"
    },
    "heightm": 1.8,
    "weightkg": 82,
    "color": "Green",
    "evos": [],
    "prevo": "Dewpider",
    "evoLevel": 22,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Bug"
    ]
  },
  "arcanine": {
    "id": 59,
    "stats": {
      "hp": 90,
      "atk": 110,
      "def": 80,
      "spa": 100,
      "spd": 80,
      "spe": 95
    },
    "abilities": {
      "0": "Intimidate",
      "1": "Flash Fire",
      "H": "Justified"
    },
    "heightm": 1.9,
    "weightkg": 155,
    "color": "Brown",
    "evos": [],
    "prevo": "Growlithe",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.75,
      "F": 0.25
    },
    "eggGroups": [
      "Field"
    ]
  },
  "arctovish": {
    "id": 883,
    "stats": {
      "hp": 90,
      "atk": 90,
      "def": 100,
      "spa": 80,
      "spd": 90,
      "spe": 55
    },
    "abilities": {
      "0": "Water Absorb",
      "1": "Ice Body",
      "H": "Slush Rush"
    },
    "heightm": 2,
    "weightkg": 175,
    "color": "Blue",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "arctozolt": {
    "id": 881,
    "stats": {
      "hp": 90,
      "atk": 100,
      "def": 90,
      "spa": 90,
      "spd": 80,
      "spe": 55
    },
    "abilities": {
      "0": "Volt Absorb",
      "1": "Static",
      "H": "Slush Rush"
    },
    "heightm": 2.3,
    "weightkg": 150,
    "color": "Blue",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "aromatisse": {
    "id": 683,
    "stats": {
      "hp": 101,
      "atk": 72,
      "def": 72,
      "spa": 99,
      "spd": 89,
      "spe": 29
    },
    "abilities": {
      "0": "Healer",
      "H": "Aroma Veil"
    },
    "heightm": 0.8,
    "weightkg": 15.5,
    "color": "Pink",
    "evos": [],
    "prevo": "Spritzee",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy"
    ]
  },
  "arrokuda": {
    "id": 846,
    "stats": {
      "hp": 41,
      "atk": 63,
      "def": 40,
      "spa": 40,
      "spd": 30,
      "spe": 66
    },
    "abilities": {
      "0": "Swift Swim",
      "H": "Propeller Tail"
    },
    "heightm": 0.5,
    "weightkg": 1,
    "color": "Brown",
    "evos": [
      "Barraskewda"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 2"
    ]
  },
  "avalugg": {
    "id": 713,
    "stats": {
      "hp": 95,
      "atk": 117,
      "def": 184,
      "spa": 44,
      "spd": 46,
      "spe": 28
    },
    "abilities": {
      "0": "Own Tempo",
      "1": "Ice Body",
      "H": "Sturdy"
    },
    "heightm": 2,
    "weightkg": 505,
    "color": "Blue",
    "evos": [],
    "prevo": "Bergmite",
    "evoLevel": 37,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Mineral"
    ]
  },
  "axew": {
    "id": 610,
    "stats": {
      "hp": 46,
      "atk": 87,
      "def": 60,
      "spa": 30,
      "spd": 40,
      "spe": 57
    },
    "abilities": {
      "0": "Rivalry",
      "1": "Mold Breaker",
      "H": "Unnerve"
    },
    "heightm": 0.6,
    "weightkg": 18,
    "color": "Green",
    "evos": [
      "Fraxure"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Dragon"
    ]
  },
  "baltoy": {
    "id": 343,
    "stats": {
      "hp": 40,
      "atk": 40,
      "def": 55,
      "spa": 40,
      "spd": 70,
      "spe": 55
    },
    "abilities": {
      "0": "Levitate"
    },
    "heightm": 0.5,
    "weightkg": 21.5,
    "color": "Brown",
    "evos": [
      "Claydol"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "barbaracle": {
    "id": 689,
    "stats": {
      "hp": 72,
      "atk": 105,
      "def": 115,
      "spa": 54,
      "spd": 86,
      "spe": 68
    },
    "abilities": {
      "0": "Tough Claws",
      "1": "Sniper",
      "H": "Pickpocket"
    },
    "heightm": 1.3,
    "weightkg": 96,
    "color": "Brown",
    "evos": [],
    "prevo": "Binacle",
    "evoLevel": 39,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 3"
    ]
  },
  "barboach": {
    "id": 339,
    "stats": {
      "hp": 50,
      "atk": 48,
      "def": 43,
      "spa": 46,
      "spd": 41,
      "spe": 60
    },
    "abilities": {
      "0": "Oblivious",
      "1": "Anticipation",
      "H": "Hydration"
    },
    "heightm": 0.4,
    "weightkg": 1.9,
    "color": "Gray",
    "evos": [
      "Whiscash"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 2"
    ]
  },
  "barraskewda": {
    "id": 847,
    "stats": {
      "hp": 61,
      "atk": 123,
      "def": 60,
      "spa": 60,
      "spd": 50,
      "spe": 136
    },
    "abilities": {
      "0": "Swift Swim",
      "H": "Propeller Tail"
    },
    "heightm": 1.3,
    "weightkg": 30,
    "color": "Brown",
    "evos": [],
    "prevo": "Arrokuda",
    "evoLevel": 26,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 2"
    ]
  },
  "basculin": {
    "id": 550,
    "stats": {
      "hp": 70,
      "atk": 92,
      "def": 65,
      "spa": 80,
      "spd": 55,
      "spe": 98
    },
    "abilities": {
      "0": "Reckless",
      "1": "Adaptability",
      "H": "Mold Breaker"
    },
    "heightm": 1,
    "weightkg": 18,
    "color": "Green",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 2"
    ]
  },
  "beartic": {
    "id": 614,
    "stats": {
      "hp": 95,
      "atk": 130,
      "def": 80,
      "spa": 70,
      "spd": 80,
      "spe": 50
    },
    "abilities": {
      "0": "Snow Cloak",
      "1": "Slush Rush",
      "H": "Swift Swim"
    },
    "heightm": 2.6,
    "weightkg": 260,
    "color": "White",
    "evos": [],
    "prevo": "Cubchoo",
    "evoLevel": 37,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "beheeyem": {
    "id": 606,
    "stats": {
      "hp": 75,
      "atk": 75,
      "def": 75,
      "spa": 125,
      "spd": 95,
      "spe": 40
    },
    "abilities": {
      "0": "Telepathy",
      "1": "Synchronize",
      "H": "Analytic"
    },
    "heightm": 1,
    "weightkg": 34.5,
    "color": "Brown",
    "evos": [],
    "prevo": "Elgyem",
    "evoLevel": 42,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "bellossom": {
    "id": 182,
    "stats": {
      "hp": 75,
      "atk": 80,
      "def": 95,
      "spa": 90,
      "spd": 100,
      "spe": 50
    },
    "abilities": {
      "0": "Chlorophyll",
      "H": "Healer"
    },
    "heightm": 0.4,
    "weightkg": 5.8,
    "color": "Green",
    "evos": [],
    "prevo": "Gloom",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass"
    ]
  },
  "bergmite": {
    "id": 712,
    "stats": {
      "hp": 55,
      "atk": 69,
      "def": 85,
      "spa": 32,
      "spd": 35,
      "spe": 28
    },
    "abilities": {
      "0": "Own Tempo",
      "1": "Ice Body",
      "H": "Sturdy"
    },
    "heightm": 1,
    "weightkg": 99.5,
    "color": "Blue",
    "evos": [
      "Avalugg",
      "Avalugg-Hisui"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Mineral"
    ]
  },
  "bewear": {
    "id": 760,
    "stats": {
      "hp": 120,
      "atk": 125,
      "def": 80,
      "spa": 55,
      "spd": 60,
      "spe": 60
    },
    "abilities": {
      "0": "Fluffy",
      "1": "Klutz",
      "H": "Unnerve"
    },
    "heightm": 2.1,
    "weightkg": 135,
    "color": "Pink",
    "evos": [],
    "prevo": "Stufful",
    "evoLevel": 27,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "binacle": {
    "id": 688,
    "stats": {
      "hp": 42,
      "atk": 52,
      "def": 67,
      "spa": 39,
      "spd": 56,
      "spe": 50
    },
    "abilities": {
      "0": "Tough Claws",
      "1": "Sniper",
      "H": "Pickpocket"
    },
    "heightm": 0.5,
    "weightkg": 31,
    "color": "Brown",
    "evos": [
      "Barbaracle"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 3"
    ]
  },
  "bisharp": {
    "id": 625,
    "stats": {
      "hp": 65,
      "atk": 125,
      "def": 100,
      "spa": 60,
      "spd": 70,
      "spe": 70
    },
    "abilities": {
      "0": "Defiant",
      "1": "Inner Focus",
      "H": "Pressure"
    },
    "heightm": 1.6,
    "weightkg": 70,
    "color": "Red",
    "evos": [
      "Kingambit"
    ],
    "prevo": "Pawniard",
    "evoLevel": 52,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "blipbug": {
    "id": 824,
    "stats": {
      "hp": 25,
      "atk": 20,
      "def": 20,
      "spa": 25,
      "spd": 45,
      "spe": 45
    },
    "abilities": {
      "0": "Swarm",
      "1": "Compound Eyes",
      "H": "Telepathy"
    },
    "heightm": 0.4,
    "weightkg": 8,
    "color": "Blue",
    "evos": [
      "Dottler"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "boldore": {
    "id": 525,
    "stats": {
      "hp": 70,
      "atk": 105,
      "def": 105,
      "spa": 50,
      "spd": 40,
      "spe": 20
    },
    "abilities": {
      "0": "Sturdy",
      "1": "Weak Armor",
      "H": "Sand Force"
    },
    "heightm": 0.9,
    "weightkg": 102,
    "color": "Blue",
    "evos": [
      "Gigalith"
    ],
    "prevo": "Roggenrola",
    "evoLevel": 25,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "boltund": {
    "id": 836,
    "stats": {
      "hp": 69,
      "atk": 90,
      "def": 60,
      "spa": 90,
      "spd": 60,
      "spe": 121
    },
    "abilities": {
      "0": "Strong Jaw",
      "H": "Competitive"
    },
    "heightm": 1,
    "weightkg": 34,
    "color": "Yellow",
    "evos": [],
    "prevo": "Yamper",
    "evoLevel": 25,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "bonsly": {
    "id": 438,
    "stats": {
      "hp": 50,
      "atk": 80,
      "def": 95,
      "spa": 10,
      "spd": 45,
      "spe": 10
    },
    "abilities": {
      "0": "Sturdy",
      "1": "Rock Head",
      "H": "Rattled"
    },
    "heightm": 0.5,
    "weightkg": 15,
    "color": "Brown",
    "evos": [
      "Sudowoodo"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "bounsweet": {
    "id": 761,
    "stats": {
      "hp": 42,
      "atk": 30,
      "def": 38,
      "spa": 30,
      "spd": 38,
      "spe": 32
    },
    "abilities": {
      "0": "Leaf Guard",
      "1": "Oblivious",
      "H": "Sweet Veil"
    },
    "heightm": 0.3,
    "weightkg": 3.2,
    "color": "Purple",
    "evos": [
      "Steenee"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass"
    ]
  },
  "braviary": {
    "id": 628,
    "stats": {
      "hp": 100,
      "atk": 123,
      "def": 75,
      "spa": 57,
      "spd": 75,
      "spe": 80
    },
    "abilities": {
      "0": "Keen Eye",
      "1": "Sheer Force",
      "H": "Defiant"
    },
    "heightm": 1.5,
    "weightkg": 41,
    "color": "Red",
    "evos": [],
    "prevo": "Rufflet",
    "evoLevel": 54,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "bronzong": {
    "id": 437,
    "stats": {
      "hp": 67,
      "atk": 89,
      "def": 116,
      "spa": 79,
      "spd": 116,
      "spe": 33
    },
    "abilities": {
      "0": "Levitate",
      "1": "Heatproof",
      "H": "Heavy Metal"
    },
    "heightm": 1.3,
    "weightkg": 187,
    "color": "Green",
    "evos": [],
    "prevo": "Bronzor",
    "evoLevel": 33,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "bronzor": {
    "id": 436,
    "stats": {
      "hp": 57,
      "atk": 24,
      "def": 86,
      "spa": 24,
      "spd": 86,
      "spe": 23
    },
    "abilities": {
      "0": "Levitate",
      "1": "Heatproof",
      "H": "Heavy Metal"
    },
    "heightm": 0.5,
    "weightkg": 60.5,
    "color": "Green",
    "evos": [
      "Bronzong"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "budew": {
    "id": 406,
    "stats": {
      "hp": 40,
      "atk": 30,
      "def": 35,
      "spa": 50,
      "spd": 70,
      "spe": 55
    },
    "abilities": {
      "0": "Natural Cure",
      "1": "Poison Point",
      "H": "Leaf Guard"
    },
    "heightm": 0.2,
    "weightkg": 1.2,
    "color": "Green",
    "evos": [
      "Roselia"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "bunnelby": {
    "id": 659,
    "stats": {
      "hp": 38,
      "atk": 36,
      "def": 38,
      "spa": 32,
      "spd": 36,
      "spe": 57
    },
    "abilities": {
      "0": "Pickup",
      "1": "Cheek Pouch",
      "H": "Huge Power"
    },
    "heightm": 0.4,
    "weightkg": 5,
    "color": "Brown",
    "evos": [
      "Diggersby"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "butterfree": {
    "id": 12,
    "stats": {
      "hp": 60,
      "atk": 45,
      "def": 50,
      "spa": 90,
      "spd": 80,
      "spe": 70
    },
    "abilities": {
      "0": "Compound Eyes",
      "H": "Tinted Lens"
    },
    "heightm": 1.1,
    "weightkg": 32,
    "color": "White",
    "evos": [],
    "prevo": "Metapod",
    "evoLevel": 10,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "carkol": {
    "id": 838,
    "stats": {
      "hp": 80,
      "atk": 60,
      "def": 90,
      "spa": 60,
      "spd": 70,
      "spe": 50
    },
    "abilities": {
      "0": "Steam Engine",
      "1": "Flame Body",
      "H": "Flash Fire"
    },
    "heightm": 1.1,
    "weightkg": 78,
    "color": "Black",
    "evos": [
      "Coalossal"
    ],
    "prevo": "Rolycoly",
    "evoLevel": 18,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "caterpie": {
    "id": 10,
    "stats": {
      "hp": 45,
      "atk": 30,
      "def": 35,
      "spa": 20,
      "spd": 20,
      "spe": 45
    },
    "abilities": {
      "0": "Shield Dust",
      "H": "Run Away"
    },
    "heightm": 0.3,
    "weightkg": 2.9,
    "color": "Green",
    "evos": [
      "Metapod"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "centiskorch": {
    "id": 851,
    "stats": {
      "hp": 100,
      "atk": 115,
      "def": 65,
      "spa": 90,
      "spd": 90,
      "spe": 65
    },
    "abilities": {
      "0": "Flash Fire",
      "1": "White Smoke",
      "H": "Flame Body"
    },
    "heightm": 3,
    "weightkg": 120,
    "color": "Red",
    "evos": [],
    "prevo": "Sizzlipede",
    "evoLevel": 28,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "chandelure": {
    "id": 609,
    "stats": {
      "hp": 60,
      "atk": 55,
      "def": 90,
      "spa": 145,
      "spd": 90,
      "spe": 80
    },
    "abilities": {
      "0": "Flash Fire",
      "1": "Flame Body",
      "H": "Infiltrator"
    },
    "heightm": 1,
    "weightkg": 34.3,
    "color": "Black",
    "evos": [],
    "prevo": "Lampent",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "charizard": {
    "id": 6,
    "stats": {
      "hp": 78,
      "atk": 84,
      "def": 78,
      "spa": 109,
      "spd": 85,
      "spe": 100
    },
    "abilities": {
      "0": "Blaze",
      "H": "Solar Power"
    },
    "heightm": 1.7,
    "weightkg": 90.5,
    "color": "Red",
    "evos": [],
    "prevo": "Charmeleon",
    "evoLevel": 36,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Monster",
      "Dragon"
    ]
  },
  "charjabug": {
    "id": 737,
    "stats": {
      "hp": 57,
      "atk": 82,
      "def": 95,
      "spa": 55,
      "spd": 75,
      "spe": 36
    },
    "abilities": {
      "0": "Battery"
    },
    "heightm": 0.5,
    "weightkg": 10.5,
    "color": "Green",
    "evos": [
      "Vikavolt"
    ],
    "prevo": "Grubbin",
    "evoLevel": 20,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "charmander": {
    "id": 4,
    "stats": {
      "hp": 39,
      "atk": 52,
      "def": 43,
      "spa": 60,
      "spd": 50,
      "spe": 65
    },
    "abilities": {
      "0": "Blaze",
      "H": "Solar Power"
    },
    "heightm": 0.6,
    "weightkg": 8.5,
    "color": "Red",
    "evos": [
      "Charmeleon"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Monster",
      "Dragon"
    ]
  },
  "charmeleon": {
    "id": 5,
    "stats": {
      "hp": 58,
      "atk": 64,
      "def": 58,
      "spa": 80,
      "spd": 65,
      "spe": 80
    },
    "abilities": {
      "0": "Blaze",
      "H": "Solar Power"
    },
    "heightm": 1.1,
    "weightkg": 19,
    "color": "Red",
    "evos": [
      "Charizard"
    ],
    "prevo": "Charmander",
    "evoLevel": 16,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Monster",
      "Dragon"
    ]
  },
  "cherrim": {
    "id": 421,
    "stats": {
      "hp": 70,
      "atk": 60,
      "def": 70,
      "spa": 87,
      "spd": 78,
      "spe": 85
    },
    "abilities": {
      "0": "Flower Gift"
    },
    "heightm": 0.5,
    "weightkg": 9.3,
    "color": "Purple",
    "evos": [],
    "prevo": "Cherubi",
    "evoLevel": 25,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Grass"
    ]
  },
  "cherubi": {
    "id": 420,
    "stats": {
      "hp": 45,
      "atk": 35,
      "def": 45,
      "spa": 62,
      "spd": 53,
      "spe": 35
    },
    "abilities": {
      "0": "Chlorophyll"
    },
    "heightm": 0.4,
    "weightkg": 3.3,
    "color": "Pink",
    "evos": [
      "Cherrim"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Grass"
    ]
  },
  "chewtle": {
    "id": 833,
    "stats": {
      "hp": 50,
      "atk": 64,
      "def": 50,
      "spa": 38,
      "spd": 38,
      "spe": 44
    },
    "abilities": {
      "0": "Strong Jaw",
      "1": "Shell Armor",
      "H": "Swift Swim"
    },
    "heightm": 0.3,
    "weightkg": 8.5,
    "color": "Green",
    "evos": [
      "Drednaw"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Water 1"
    ]
  },
  "chinchou": {
    "id": 170,
    "stats": {
      "hp": 75,
      "atk": 38,
      "def": 38,
      "spa": 56,
      "spd": 56,
      "spe": 67
    },
    "abilities": {
      "0": "Volt Absorb",
      "1": "Illuminate",
      "H": "Water Absorb"
    },
    "heightm": 0.5,
    "weightkg": 12,
    "color": "Blue",
    "evos": [
      "Lanturn"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 2"
    ]
  },
  "cinccino": {
    "id": 573,
    "stats": {
      "hp": 75,
      "atk": 95,
      "def": 60,
      "spa": 65,
      "spd": 60,
      "spe": 115
    },
    "abilities": {
      "0": "Cute Charm",
      "1": "Technician",
      "H": "Skill Link"
    },
    "heightm": 0.5,
    "weightkg": 7.5,
    "color": "Gray",
    "evos": [],
    "prevo": "Minccino",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.25,
      "F": 0.75
    },
    "eggGroups": [
      "Field"
    ]
  },
  "cinderace": {
    "id": 815,
    "stats": {
      "hp": 80,
      "atk": 116,
      "def": 75,
      "spa": 65,
      "spd": 75,
      "spe": 119
    },
    "abilities": {
      "0": "Blaze",
      "H": "Libero"
    },
    "heightm": 1.4,
    "weightkg": 33,
    "color": "White",
    "evos": [],
    "prevo": "Raboot",
    "evoLevel": 35,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field",
      "Human-Like"
    ]
  },
  "claydol": {
    "id": 344,
    "stats": {
      "hp": 60,
      "atk": 70,
      "def": 105,
      "spa": 70,
      "spd": 120,
      "spe": 75
    },
    "abilities": {
      "0": "Levitate"
    },
    "heightm": 1.5,
    "weightkg": 108,
    "color": "Black",
    "evos": [],
    "prevo": "Baltoy",
    "evoLevel": 36,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "clefable": {
    "id": 36,
    "stats": {
      "hp": 95,
      "atk": 70,
      "def": 73,
      "spa": 95,
      "spd": 90,
      "spe": 60
    },
    "abilities": {
      "0": "Cute Charm",
      "1": "Magic Guard",
      "H": "Unaware"
    },
    "heightm": 1.3,
    "weightkg": 40,
    "color": "Pink",
    "evos": [],
    "prevo": "Clefairy",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.25,
      "F": 0.75
    },
    "eggGroups": [
      "Fairy"
    ]
  },
  "clefairy": {
    "id": 35,
    "stats": {
      "hp": 70,
      "atk": 45,
      "def": 48,
      "spa": 60,
      "spd": 65,
      "spe": 35
    },
    "abilities": {
      "0": "Cute Charm",
      "1": "Magic Guard",
      "H": "Friend Guard"
    },
    "heightm": 0.6,
    "weightkg": 7.5,
    "color": "Pink",
    "evos": [
      "Clefable"
    ],
    "prevo": "Cleffa",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.25,
      "F": 0.75
    },
    "eggGroups": [
      "Fairy"
    ]
  },
  "cleffa": {
    "id": 173,
    "stats": {
      "hp": 50,
      "atk": 25,
      "def": 28,
      "spa": 45,
      "spd": 55,
      "spe": 15
    },
    "abilities": {
      "0": "Cute Charm",
      "1": "Magic Guard",
      "H": "Friend Guard"
    },
    "heightm": 0.3,
    "weightkg": 3,
    "color": "Pink",
    "evos": [
      "Clefairy"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.25,
      "F": 0.75
    },
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "clobbopus": {
    "id": 852,
    "stats": {
      "hp": 50,
      "atk": 68,
      "def": 60,
      "spa": 50,
      "spd": 50,
      "spe": 32
    },
    "abilities": {
      "0": "Limber",
      "H": "Technician"
    },
    "heightm": 0.6,
    "weightkg": 4,
    "color": "Brown",
    "evos": [
      "Grapploct"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Human-Like"
    ]
  },
  "cloyster": {
    "id": 91,
    "stats": {
      "hp": 50,
      "atk": 95,
      "def": 180,
      "spa": 85,
      "spd": 45,
      "spe": 70
    },
    "abilities": {
      "0": "Shell Armor",
      "1": "Skill Link",
      "H": "Overcoat"
    },
    "heightm": 1.5,
    "weightkg": 132.5,
    "color": "Purple",
    "evos": [],
    "prevo": "Shellder",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 3"
    ]
  },
  "coalossal": {
    "id": 839,
    "stats": {
      "hp": 110,
      "atk": 80,
      "def": 120,
      "spa": 80,
      "spd": 90,
      "spe": 30
    },
    "abilities": {
      "0": "Steam Engine",
      "1": "Flame Body",
      "H": "Flash Fire"
    },
    "heightm": 2.8,
    "weightkg": 310.5,
    "color": "Black",
    "evos": [],
    "prevo": "Carkol",
    "evoLevel": 34,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "cofagrigus": {
    "id": 563,
    "stats": {
      "hp": 58,
      "atk": 50,
      "def": 145,
      "spa": 95,
      "spd": 105,
      "spe": 30
    },
    "abilities": {
      "0": "Mummy"
    },
    "heightm": 1.7,
    "weightkg": 76.5,
    "color": "Yellow",
    "evos": [],
    "prevo": "Yamask",
    "evoLevel": 34,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral",
      "Amorphous"
    ]
  },
  "combee": {
    "id": 415,
    "stats": {
      "hp": 30,
      "atk": 30,
      "def": 42,
      "spa": 30,
      "spd": 42,
      "spe": 70
    },
    "abilities": {
      "0": "Honey Gather",
      "H": "Hustle"
    },
    "heightm": 0.3,
    "weightkg": 5.5,
    "color": "Yellow",
    "evos": [
      "Vespiquen"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Bug"
    ]
  },
  "conkeldurr": {
    "id": 534,
    "stats": {
      "hp": 105,
      "atk": 140,
      "def": 95,
      "spa": 55,
      "spd": 65,
      "spe": 45
    },
    "abilities": {
      "0": "Guts",
      "1": "Sheer Force",
      "H": "Iron Fist"
    },
    "heightm": 1.4,
    "weightkg": 87,
    "color": "Brown",
    "evos": [],
    "prevo": "Gurdurr",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.75,
      "F": 0.25
    },
    "eggGroups": [
      "Human-Like"
    ]
  },
  "copperajah": {
    "id": 879,
    "stats": {
      "hp": 122,
      "atk": 130,
      "def": 69,
      "spa": 80,
      "spd": 69,
      "spe": 30
    },
    "abilities": {
      "0": "Sheer Force",
      "H": "Heavy Metal"
    },
    "heightm": 3,
    "weightkg": 650,
    "color": "Green",
    "evos": [],
    "prevo": "Cufant",
    "evoLevel": 34,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Mineral"
    ]
  },
  "corphish": {
    "id": 341,
    "stats": {
      "hp": 43,
      "atk": 80,
      "def": 65,
      "spa": 50,
      "spd": 35,
      "spe": 35
    },
    "abilities": {
      "0": "Hyper Cutter",
      "1": "Shell Armor",
      "H": "Adaptability"
    },
    "heightm": 0.6,
    "weightkg": 11.5,
    "color": "Red",
    "evos": [
      "Crawdaunt"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Water 3"
    ]
  },
  "corsola": {
    "id": 222,
    "stats": {
      "hp": 65,
      "atk": 55,
      "def": 95,
      "spa": 65,
      "spd": 95,
      "spe": 35
    },
    "abilities": {
      "0": "Hustle",
      "1": "Natural Cure",
      "H": "Regenerator"
    },
    "heightm": 0.6,
    "weightkg": 5,
    "color": "Pink",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.25,
      "F": 0.75
    },
    "eggGroups": [
      "Water 1",
      "Water 3"
    ]
  },
  "corviknight": {
    "id": 823,
    "stats": {
      "hp": 98,
      "atk": 87,
      "def": 105,
      "spa": 53,
      "spd": 85,
      "spe": 67
    },
    "abilities": {
      "0": "Pressure",
      "1": "Unnerve",
      "H": "Mirror Armor"
    },
    "heightm": 2.2,
    "weightkg": 75,
    "color": "Purple",
    "evos": [],
    "prevo": "Corvisquire",
    "evoLevel": 38,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "corvisquire": {
    "id": 822,
    "stats": {
      "hp": 68,
      "atk": 67,
      "def": 55,
      "spa": 43,
      "spd": 55,
      "spe": 77
    },
    "abilities": {
      "0": "Keen Eye",
      "1": "Unnerve",
      "H": "Big Pecks"
    },
    "heightm": 0.8,
    "weightkg": 16,
    "color": "Blue",
    "evos": [
      "Corviknight"
    ],
    "prevo": "Rookidee",
    "evoLevel": 18,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "cottonee": {
    "id": 546,
    "stats": {
      "hp": 40,
      "atk": 27,
      "def": 60,
      "spa": 37,
      "spd": 50,
      "spe": 66
    },
    "abilities": {
      "0": "Prankster",
      "1": "Infiltrator",
      "H": "Chlorophyll"
    },
    "heightm": 0.3,
    "weightkg": 0.6,
    "color": "Green",
    "evos": [
      "Whimsicott"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Grass"
    ]
  },
  "cramorant": {
    "id": 845,
    "stats": {
      "hp": 70,
      "atk": 85,
      "def": 55,
      "spa": 85,
      "spd": 95,
      "spe": 85
    },
    "abilities": {
      "0": "Gulp Missile"
    },
    "heightm": 0.8,
    "weightkg": 18,
    "color": "Blue",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Flying"
    ]
  },
  "crawdaunt": {
    "id": 342,
    "stats": {
      "hp": 63,
      "atk": 120,
      "def": 85,
      "spa": 90,
      "spd": 55,
      "spe": 55
    },
    "abilities": {
      "0": "Hyper Cutter",
      "1": "Shell Armor",
      "H": "Adaptability"
    },
    "heightm": 1.1,
    "weightkg": 32.8,
    "color": "Red",
    "evos": [],
    "prevo": "Corphish",
    "evoLevel": 30,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Water 3"
    ]
  },
  "croagunk": {
    "id": 453,
    "stats": {
      "hp": 48,
      "atk": 61,
      "def": 40,
      "spa": 61,
      "spd": 40,
      "spe": 50
    },
    "abilities": {
      "0": "Anticipation",
      "1": "Dry Skin",
      "H": "Poison Touch"
    },
    "heightm": 0.7,
    "weightkg": 23,
    "color": "Blue",
    "evos": [
      "Toxicroak"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "crustle": {
    "id": 558,
    "stats": {
      "hp": 70,
      "atk": 105,
      "def": 125,
      "spa": 65,
      "spd": 75,
      "spe": 45
    },
    "abilities": {
      "0": "Sturdy",
      "1": "Shell Armor",
      "H": "Weak Armor"
    },
    "heightm": 1.4,
    "weightkg": 200,
    "color": "Red",
    "evos": [],
    "prevo": "Dwebble",
    "evoLevel": 34,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug",
      "Mineral"
    ]
  },
  "cubchoo": {
    "id": 613,
    "stats": {
      "hp": 55,
      "atk": 70,
      "def": 40,
      "spa": 60,
      "spd": 40,
      "spe": 40
    },
    "abilities": {
      "0": "Snow Cloak",
      "1": "Slush Rush",
      "H": "Rattled"
    },
    "heightm": 0.5,
    "weightkg": 8.5,
    "color": "White",
    "evos": [
      "Beartic"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "cufant": {
    "id": 878,
    "stats": {
      "hp": 72,
      "atk": 80,
      "def": 49,
      "spa": 40,
      "spd": 49,
      "spe": 40
    },
    "abilities": {
      "0": "Sheer Force",
      "H": "Heavy Metal"
    },
    "heightm": 1.2,
    "weightkg": 100,
    "color": "Yellow",
    "evos": [
      "Copperajah"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Mineral"
    ]
  },
  "cursola": {
    "id": 864,
    "stats": {
      "hp": 60,
      "atk": 95,
      "def": 50,
      "spa": 145,
      "spd": 130,
      "spe": 30
    },
    "abilities": {
      "0": "Weak Armor",
      "H": "Perish Body"
    },
    "heightm": 1,
    "weightkg": 0.4,
    "color": "White",
    "evos": [],
    "prevo": "Corsola-Galar",
    "evoLevel": 38,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.25,
      "F": 0.75
    },
    "eggGroups": [
      "Water 1",
      "Water 3"
    ]
  },
  "cutiefly": {
    "id": 742,
    "stats": {
      "hp": 40,
      "atk": 45,
      "def": 40,
      "spa": 55,
      "spd": 40,
      "spe": 84
    },
    "abilities": {
      "0": "Honey Gather",
      "1": "Shield Dust",
      "H": "Sweet Veil"
    },
    "heightm": 0.1,
    "weightkg": 0.2,
    "color": "Yellow",
    "evos": [
      "Ribombee"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug",
      "Fairy"
    ]
  },
  "darmanitan": {
    "id": 555,
    "stats": {
      "hp": 105,
      "atk": 140,
      "def": 55,
      "spa": 30,
      "spd": 55,
      "spe": 95
    },
    "abilities": {
      "0": "Sheer Force",
      "H": "Zen Mode"
    },
    "heightm": 1.3,
    "weightkg": 92.9,
    "color": "Red",
    "evos": [],
    "prevo": "Darumaka",
    "evoLevel": 35,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "darumaka": {
    "id": 554,
    "stats": {
      "hp": 70,
      "atk": 90,
      "def": 45,
      "spa": 15,
      "spd": 45,
      "spe": 50
    },
    "abilities": {
      "0": "Hustle",
      "H": "Inner Focus"
    },
    "heightm": 0.6,
    "weightkg": 37.5,
    "color": "Red",
    "evos": [
      "Darmanitan"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "deino": {
    "id": 633,
    "stats": {
      "hp": 52,
      "atk": 65,
      "def": 50,
      "spa": 45,
      "spd": 50,
      "spe": 38
    },
    "abilities": {
      "0": "Hustle"
    },
    "heightm": 0.8,
    "weightkg": 17.3,
    "color": "Blue",
    "evos": [
      "Zweilous"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Dragon"
    ]
  },
  "delibird": {
    "id": 225,
    "stats": {
      "hp": 45,
      "atk": 55,
      "def": 45,
      "spa": 65,
      "spd": 45,
      "spe": 75
    },
    "abilities": {
      "0": "Vital Spirit",
      "1": "Hustle",
      "H": "Insomnia"
    },
    "heightm": 0.9,
    "weightkg": 16,
    "color": "Red",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Field"
    ]
  },
  "dewpider": {
    "id": 751,
    "stats": {
      "hp": 38,
      "atk": 40,
      "def": 52,
      "spa": 40,
      "spd": 72,
      "spe": 27
    },
    "abilities": {
      "0": "Water Bubble",
      "H": "Water Absorb"
    },
    "heightm": 0.3,
    "weightkg": 4,
    "color": "Green",
    "evos": [
      "Araquanid"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Bug"
    ]
  },
  "dhelmise": {
    "id": 781,
    "stats": {
      "hp": 70,
      "atk": 131,
      "def": 100,
      "spa": 86,
      "spd": 90,
      "spe": 40
    },
    "abilities": {
      "0": "Steelworker"
    },
    "heightm": 3.9,
    "weightkg": 210,
    "color": "Green",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "diggersby": {
    "id": 660,
    "stats": {
      "hp": 85,
      "atk": 56,
      "def": 77,
      "spa": 50,
      "spd": 77,
      "spe": 78
    },
    "abilities": {
      "0": "Pickup",
      "1": "Cheek Pouch",
      "H": "Huge Power"
    },
    "heightm": 1,
    "weightkg": 42.4,
    "color": "Brown",
    "evos": [],
    "prevo": "Bunnelby",
    "evoLevel": 20,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "diglett": {
    "id": 50,
    "stats": {
      "hp": 10,
      "atk": 55,
      "def": 25,
      "spa": 35,
      "spd": 45,
      "spe": 95
    },
    "abilities": {
      "0": "Sand Veil",
      "1": "Arena Trap",
      "H": "Sand Force"
    },
    "heightm": 0.2,
    "weightkg": 0.8,
    "color": "Brown",
    "evos": [
      "Dugtrio"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "ditto": {
    "id": 132,
    "stats": {
      "hp": 48,
      "atk": 48,
      "def": 48,
      "spa": 48,
      "spd": 48,
      "spe": 48
    },
    "abilities": {
      "0": "Limber",
      "H": "Imposter"
    },
    "heightm": 0.3,
    "weightkg": 4,
    "color": "Purple",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Ditto"
    ]
  },
  "dottler": {
    "id": 825,
    "stats": {
      "hp": 50,
      "atk": 35,
      "def": 80,
      "spa": 50,
      "spd": 90,
      "spe": 30
    },
    "abilities": {
      "0": "Swarm",
      "1": "Compound Eyes",
      "H": "Telepathy"
    },
    "heightm": 0.4,
    "weightkg": 19.5,
    "color": "Yellow",
    "evos": [
      "Orbeetle"
    ],
    "prevo": "Blipbug",
    "evoLevel": 10,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "doublade": {
    "id": 680,
    "stats": {
      "hp": 59,
      "atk": 110,
      "def": 150,
      "spa": 45,
      "spd": 49,
      "spe": 35
    },
    "abilities": {
      "0": "No Guard"
    },
    "heightm": 0.8,
    "weightkg": 4.5,
    "color": "Brown",
    "evos": [
      "Aegislash"
    ],
    "prevo": "Honedge",
    "evoLevel": 35,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "dracovish": {
    "id": 882,
    "stats": {
      "hp": 90,
      "atk": 90,
      "def": 100,
      "spa": 70,
      "spd": 80,
      "spe": 75
    },
    "abilities": {
      "0": "Water Absorb",
      "1": "Strong Jaw",
      "H": "Sand Rush"
    },
    "heightm": 2.3,
    "weightkg": 215,
    "color": "Green",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "dracozolt": {
    "id": 880,
    "stats": {
      "hp": 90,
      "atk": 100,
      "def": 90,
      "spa": 80,
      "spd": 70,
      "spe": 75
    },
    "abilities": {
      "0": "Volt Absorb",
      "1": "Hustle",
      "H": "Sand Rush"
    },
    "heightm": 1.8,
    "weightkg": 190,
    "color": "Green",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "dragapult": {
    "id": 887,
    "stats": {
      "hp": 88,
      "atk": 120,
      "def": 75,
      "spa": 100,
      "spd": 75,
      "spe": 142
    },
    "abilities": {
      "0": "Clear Body",
      "1": "Infiltrator",
      "H": "Cursed Body"
    },
    "heightm": 3,
    "weightkg": 50,
    "color": "Green",
    "evos": [],
    "prevo": "Drakloak",
    "evoLevel": 60,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous",
      "Dragon"
    ]
  },
  "drakloak": {
    "id": 886,
    "stats": {
      "hp": 68,
      "atk": 80,
      "def": 50,
      "spa": 60,
      "spd": 50,
      "spe": 102
    },
    "abilities": {
      "0": "Clear Body",
      "1": "Infiltrator",
      "H": "Cursed Body"
    },
    "heightm": 1.4,
    "weightkg": 11,
    "color": "Green",
    "evos": [
      "Dragapult"
    ],
    "prevo": "Dreepy",
    "evoLevel": 50,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous",
      "Dragon"
    ]
  },
  "drampa": {
    "id": 780,
    "stats": {
      "hp": 78,
      "atk": 60,
      "def": 85,
      "spa": 135,
      "spd": 91,
      "spe": 36
    },
    "abilities": {
      "0": "Berserk",
      "1": "Sap Sipper",
      "H": "Cloud Nine"
    },
    "heightm": 3,
    "weightkg": 185,
    "color": "White",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Dragon"
    ]
  },
  "drapion": {
    "id": 452,
    "stats": {
      "hp": 70,
      "atk": 90,
      "def": 110,
      "spa": 60,
      "spd": 75,
      "spe": 95
    },
    "abilities": {
      "0": "Battle Armor",
      "1": "Sniper",
      "H": "Keen Eye"
    },
    "heightm": 1.3,
    "weightkg": 61.5,
    "color": "Purple",
    "evos": [],
    "prevo": "Skorupi",
    "evoLevel": 40,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug",
      "Water 3"
    ]
  },
  "drednaw": {
    "id": 834,
    "stats": {
      "hp": 90,
      "atk": 115,
      "def": 90,
      "spa": 48,
      "spd": 68,
      "spe": 74
    },
    "abilities": {
      "0": "Strong Jaw",
      "1": "Shell Armor",
      "H": "Swift Swim"
    },
    "heightm": 1,
    "weightkg": 115.5,
    "color": "Green",
    "evos": [],
    "prevo": "Chewtle",
    "evoLevel": 22,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Water 1"
    ]
  },
  "dreepy": {
    "id": 885,
    "stats": {
      "hp": 28,
      "atk": 60,
      "def": 30,
      "spa": 40,
      "spd": 30,
      "spe": 82
    },
    "abilities": {
      "0": "Clear Body",
      "1": "Infiltrator",
      "H": "Cursed Body"
    },
    "heightm": 0.5,
    "weightkg": 2,
    "color": "Green",
    "evos": [
      "Drakloak"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous",
      "Dragon"
    ]
  },
  "drifblim": {
    "id": 426,
    "stats": {
      "hp": 150,
      "atk": 80,
      "def": 44,
      "spa": 90,
      "spd": 54,
      "spe": 80
    },
    "abilities": {
      "0": "Aftermath",
      "1": "Unburden",
      "H": "Flare Boost"
    },
    "heightm": 1.2,
    "weightkg": 15,
    "color": "Purple",
    "evos": [],
    "prevo": "Drifloon",
    "evoLevel": 28,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "drifloon": {
    "id": 425,
    "stats": {
      "hp": 90,
      "atk": 50,
      "def": 34,
      "spa": 60,
      "spd": 44,
      "spe": 70
    },
    "abilities": {
      "0": "Aftermath",
      "1": "Unburden",
      "H": "Flare Boost"
    },
    "heightm": 0.4,
    "weightkg": 1.2,
    "color": "Purple",
    "evos": [
      "Drifblim"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "drilbur": {
    "id": 529,
    "stats": {
      "hp": 60,
      "atk": 85,
      "def": 40,
      "spa": 30,
      "spd": 45,
      "spe": 68
    },
    "abilities": {
      "0": "Sand Rush",
      "1": "Sand Force",
      "H": "Mold Breaker"
    },
    "heightm": 0.3,
    "weightkg": 8.5,
    "color": "Gray",
    "evos": [
      "Excadrill"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "drizzile": {
    "id": 817,
    "stats": {
      "hp": 65,
      "atk": 60,
      "def": 55,
      "spa": 95,
      "spd": 55,
      "spe": 90
    },
    "abilities": {
      "0": "Torrent",
      "H": "Sniper"
    },
    "heightm": 0.7,
    "weightkg": 11.5,
    "color": "Blue",
    "evos": [
      "Inteleon"
    ],
    "prevo": "Sobble",
    "evoLevel": 16,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Water 1",
      "Field"
    ]
  },
  "dubwool": {
    "id": 832,
    "stats": {
      "hp": 72,
      "atk": 80,
      "def": 100,
      "spa": 60,
      "spd": 90,
      "spe": 88
    },
    "abilities": {
      "0": "Fluffy",
      "1": "Steadfast",
      "H": "Bulletproof"
    },
    "heightm": 1.3,
    "weightkg": 43,
    "color": "White",
    "evos": [],
    "prevo": "Wooloo",
    "evoLevel": 24,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "dugtrio": {
    "id": 51,
    "stats": {
      "hp": 35,
      "atk": 100,
      "def": 50,
      "spa": 50,
      "spd": 70,
      "spe": 120
    },
    "abilities": {
      "0": "Sand Veil",
      "1": "Arena Trap",
      "H": "Sand Force"
    },
    "heightm": 0.7,
    "weightkg": 33.3,
    "color": "Brown",
    "evos": [],
    "prevo": "Diglett",
    "evoLevel": 26,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "duosion": {
    "id": 578,
    "stats": {
      "hp": 65,
      "atk": 40,
      "def": 50,
      "spa": 125,
      "spd": 60,
      "spe": 30
    },
    "abilities": {
      "0": "Overcoat",
      "1": "Magic Guard",
      "H": "Regenerator"
    },
    "heightm": 0.6,
    "weightkg": 8,
    "color": "Green",
    "evos": [
      "Reuniclus"
    ],
    "prevo": "Solosis",
    "evoLevel": 32,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "duraludon": {
    "id": 884,
    "stats": {
      "hp": 70,
      "atk": 95,
      "def": 115,
      "spa": 120,
      "spd": 50,
      "spe": 85
    },
    "abilities": {
      "0": "Light Metal",
      "1": "Heavy Metal",
      "H": "Stalwart"
    },
    "heightm": 1.8,
    "weightkg": 40,
    "color": "White",
    "evos": [
      "Archaludon"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral",
      "Dragon"
    ]
  },
  "durant": {
    "id": 632,
    "stats": {
      "hp": 58,
      "atk": 109,
      "def": 112,
      "spa": 48,
      "spd": 48,
      "spe": 109
    },
    "abilities": {
      "0": "Swarm",
      "1": "Hustle",
      "H": "Truant"
    },
    "heightm": 0.3,
    "weightkg": 33,
    "color": "Gray",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "dusclops": {
    "id": 356,
    "stats": {
      "hp": 40,
      "atk": 70,
      "def": 130,
      "spa": 60,
      "spd": 130,
      "spe": 25
    },
    "abilities": {
      "0": "Pressure",
      "H": "Frisk"
    },
    "heightm": 1.6,
    "weightkg": 30.6,
    "color": "Black",
    "evos": [
      "Dusknoir"
    ],
    "prevo": "Duskull",
    "evoLevel": 37,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "dusknoir": {
    "id": 477,
    "stats": {
      "hp": 45,
      "atk": 100,
      "def": 135,
      "spa": 65,
      "spd": 135,
      "spe": 45
    },
    "abilities": {
      "0": "Pressure",
      "H": "Frisk"
    },
    "heightm": 2.2,
    "weightkg": 106.6,
    "color": "Black",
    "evos": [],
    "prevo": "Dusclops",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "duskull": {
    "id": 355,
    "stats": {
      "hp": 20,
      "atk": 40,
      "def": 90,
      "spa": 30,
      "spd": 90,
      "spe": 25
    },
    "abilities": {
      "0": "Levitate",
      "H": "Frisk"
    },
    "heightm": 0.8,
    "weightkg": 15,
    "color": "Black",
    "evos": [
      "Dusclops"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "dwebble": {
    "id": 557,
    "stats": {
      "hp": 50,
      "atk": 65,
      "def": 85,
      "spa": 35,
      "spd": 35,
      "spe": 55
    },
    "abilities": {
      "0": "Sturdy",
      "1": "Shell Armor",
      "H": "Weak Armor"
    },
    "heightm": 0.3,
    "weightkg": 14.5,
    "color": "Red",
    "evos": [
      "Crustle"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug",
      "Mineral"
    ]
  },
  "eevee": {
    "id": 133,
    "stats": {
      "hp": 55,
      "atk": 55,
      "def": 50,
      "spa": 45,
      "spd": 65,
      "spe": 55
    },
    "abilities": {
      "0": "Run Away",
      "1": "Adaptability",
      "H": "Anticipation"
    },
    "heightm": 0.3,
    "weightkg": 6.5,
    "color": "Brown",
    "evos": [
      "Vaporeon",
      "Jolteon",
      "Flareon",
      "Espeon",
      "Umbreon",
      "Leafeon",
      "Glaceon",
      "Sylveon"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field"
    ]
  },
  "eiscue": {
    "id": 875,
    "stats": {
      "hp": 75,
      "atk": 80,
      "def": 110,
      "spa": 65,
      "spd": 90,
      "spe": 50
    },
    "abilities": {
      "0": "Ice Face"
    },
    "heightm": 1.4,
    "weightkg": 89,
    "color": "Blue",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Field"
    ]
  },
  "eldegoss": {
    "id": 830,
    "stats": {
      "hp": 60,
      "atk": 50,
      "def": 90,
      "spa": 80,
      "spd": 120,
      "spe": 60
    },
    "abilities": {
      "0": "Cotton Down",
      "1": "Regenerator",
      "H": "Effect Spore"
    },
    "heightm": 0.5,
    "weightkg": 2.5,
    "color": "Green",
    "evos": [],
    "prevo": "Gossifleur",
    "evoLevel": 20,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass"
    ]
  },
  "electrike": {
    "id": 309,
    "stats": {
      "hp": 40,
      "atk": 45,
      "def": 40,
      "spa": 65,
      "spd": 40,
      "spe": 65
    },
    "abilities": {
      "0": "Static",
      "1": "Lightning Rod",
      "H": "Minus"
    },
    "heightm": 0.6,
    "weightkg": 15.2,
    "color": "Green",
    "evos": [
      "Manectric"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "elgyem": {
    "id": 605,
    "stats": {
      "hp": 55,
      "atk": 55,
      "def": 55,
      "spa": 85,
      "spd": 55,
      "spe": 30
    },
    "abilities": {
      "0": "Telepathy",
      "1": "Synchronize",
      "H": "Analytic"
    },
    "heightm": 0.5,
    "weightkg": 9,
    "color": "Blue",
    "evos": [
      "Beheeyem"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "escavalier": {
    "id": 589,
    "stats": {
      "hp": 70,
      "atk": 135,
      "def": 105,
      "spa": 60,
      "spd": 105,
      "spe": 20
    },
    "abilities": {
      "0": "Swarm",
      "1": "Shell Armor",
      "H": "Overcoat"
    },
    "heightm": 1,
    "weightkg": 33,
    "color": "Gray",
    "evos": [],
    "prevo": "Karrablast",
    "evoLevel": null,
    "evoCondition": "with a Shelmet",
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "espeon": {
    "id": 196,
    "stats": {
      "hp": 65,
      "atk": 65,
      "def": 60,
      "spa": 130,
      "spd": 95,
      "spe": 110
    },
    "abilities": {
      "0": "Synchronize",
      "H": "Magic Bounce"
    },
    "heightm": 0.9,
    "weightkg": 26.5,
    "color": "Purple",
    "evos": [],
    "prevo": "Eevee",
    "evoLevel": null,
    "evoCondition": "during the day",
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field"
    ]
  },
  "espurr": {
    "id": 677,
    "stats": {
      "hp": 62,
      "atk": 48,
      "def": 54,
      "spa": 63,
      "spd": 60,
      "spe": 68
    },
    "abilities": {
      "0": "Keen Eye",
      "1": "Infiltrator",
      "H": "Own Tempo"
    },
    "heightm": 0.3,
    "weightkg": 3.5,
    "color": "Gray",
    "evos": [
      "Meowstic",
      "Meowstic-F"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "eternatus": {
    "id": 890,
    "stats": {
      "hp": 140,
      "atk": 85,
      "def": 95,
      "spa": 145,
      "spd": 95,
      "spe": 130
    },
    "abilities": {
      "0": "Pressure"
    },
    "heightm": 20,
    "weightkg": 950,
    "color": "Purple",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "excadrill": {
    "id": 530,
    "stats": {
      "hp": 110,
      "atk": 135,
      "def": 60,
      "spa": 50,
      "spd": 65,
      "spe": 88
    },
    "abilities": {
      "0": "Sand Rush",
      "1": "Sand Force",
      "H": "Mold Breaker"
    },
    "heightm": 0.7,
    "weightkg": 40.4,
    "color": "Gray",
    "evos": [],
    "prevo": "Drilbur",
    "evoLevel": 31,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "falinks": {
    "id": 870,
    "stats": {
      "hp": 65,
      "atk": 100,
      "def": 100,
      "spa": 70,
      "spd": 60,
      "spe": 75
    },
    "abilities": {
      "0": "Battle Armor",
      "H": "Defiant"
    },
    "heightm": 3,
    "weightkg": 62,
    "color": "Yellow",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Mineral"
    ]
  },
  "farfetchd": {
    "id": 83,
    "stats": {
      "hp": 52,
      "atk": 90,
      "def": 55,
      "spa": 58,
      "spd": 62,
      "spe": 60
    },
    "abilities": {
      "0": "Keen Eye",
      "1": "Inner Focus",
      "H": "Defiant"
    },
    "heightm": 0.8,
    "weightkg": 15,
    "color": "Brown",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying",
      "Field"
    ]
  },
  "feebas": {
    "id": 349,
    "stats": {
      "hp": 20,
      "atk": 15,
      "def": 20,
      "spa": 10,
      "spd": 55,
      "spe": 80
    },
    "abilities": {
      "0": "Swift Swim",
      "1": "Oblivious",
      "H": "Adaptability"
    },
    "heightm": 0.6,
    "weightkg": 7.4,
    "color": "Brown",
    "evos": [
      "Milotic"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Dragon"
    ]
  },
  "ferroseed": {
    "id": 597,
    "stats": {
      "hp": 44,
      "atk": 50,
      "def": 91,
      "spa": 24,
      "spd": 86,
      "spe": 10
    },
    "abilities": {
      "0": "Iron Barbs"
    },
    "heightm": 0.6,
    "weightkg": 18.8,
    "color": "Gray",
    "evos": [
      "Ferrothorn"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass",
      "Mineral"
    ]
  },
  "ferrothorn": {
    "id": 598,
    "stats": {
      "hp": 74,
      "atk": 94,
      "def": 131,
      "spa": 54,
      "spd": 116,
      "spe": 20
    },
    "abilities": {
      "0": "Iron Barbs",
      "H": "Anticipation"
    },
    "heightm": 1,
    "weightkg": 110,
    "color": "Gray",
    "evos": [],
    "prevo": "Ferroseed",
    "evoLevel": 40,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass",
      "Mineral"
    ]
  },
  "flapple": {
    "id": 841,
    "stats": {
      "hp": 70,
      "atk": 110,
      "def": 80,
      "spa": 95,
      "spd": 60,
      "spe": 70
    },
    "abilities": {
      "0": "Ripen",
      "1": "Gluttony",
      "H": "Hustle"
    },
    "heightm": 0.3,
    "weightkg": 1,
    "color": "Green",
    "evos": [],
    "prevo": "Applin",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass",
      "Dragon"
    ]
  },
  "flareon": {
    "id": 136,
    "stats": {
      "hp": 65,
      "atk": 130,
      "def": 60,
      "spa": 95,
      "spd": 110,
      "spe": 65
    },
    "abilities": {
      "0": "Flash Fire",
      "H": "Guts"
    },
    "heightm": 0.9,
    "weightkg": 25,
    "color": "Red",
    "evos": [],
    "prevo": "Eevee",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field"
    ]
  },
  "flygon": {
    "id": 330,
    "stats": {
      "hp": 80,
      "atk": 100,
      "def": 80,
      "spa": 80,
      "spd": 80,
      "spe": 100
    },
    "abilities": {
      "0": "Levitate"
    },
    "heightm": 2,
    "weightkg": 82,
    "color": "Green",
    "evos": [],
    "prevo": "Vibrava",
    "evoLevel": 45,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug",
      "Dragon"
    ]
  },
  "fraxure": {
    "id": 611,
    "stats": {
      "hp": 66,
      "atk": 117,
      "def": 70,
      "spa": 40,
      "spd": 50,
      "spe": 67
    },
    "abilities": {
      "0": "Rivalry",
      "1": "Mold Breaker",
      "H": "Unnerve"
    },
    "heightm": 1,
    "weightkg": 36,
    "color": "Green",
    "evos": [
      "Haxorus"
    ],
    "prevo": "Axew",
    "evoLevel": 38,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Dragon"
    ]
  },
  "frillish": {
    "id": 592,
    "stats": {
      "hp": 55,
      "atk": 40,
      "def": 50,
      "spa": 65,
      "spd": 85,
      "spe": 40
    },
    "abilities": {
      "0": "Water Absorb",
      "1": "Cursed Body",
      "H": "Damp"
    },
    "heightm": 1.2,
    "weightkg": 33,
    "color": "White",
    "evos": [
      "Jellicent"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "froslass": {
    "id": 478,
    "stats": {
      "hp": 70,
      "atk": 80,
      "def": 70,
      "spa": 80,
      "spd": 70,
      "spe": 110
    },
    "abilities": {
      "0": "Snow Cloak",
      "H": "Cursed Body"
    },
    "heightm": 1.3,
    "weightkg": 26.6,
    "color": "White",
    "evos": [],
    "prevo": "Snorunt",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Mineral"
    ]
  },
  "frosmoth": {
    "id": 873,
    "stats": {
      "hp": 70,
      "atk": 65,
      "def": 60,
      "spa": 125,
      "spd": 90,
      "spe": 65
    },
    "abilities": {
      "0": "Shield Dust",
      "H": "Ice Scales"
    },
    "heightm": 1.3,
    "weightkg": 42,
    "color": "White",
    "evos": [],
    "prevo": "Snom",
    "evoLevel": null,
    "evoCondition": "at night",
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "gallade": {
    "id": 475,
    "stats": {
      "hp": 68,
      "atk": 125,
      "def": 65,
      "spa": 65,
      "spd": 115,
      "spe": 80
    },
    "abilities": {
      "0": "Steadfast",
      "1": "Sharpness",
      "H": "Justified"
    },
    "heightm": 1.6,
    "weightkg": 52,
    "color": "White",
    "evos": [],
    "prevo": "Kirlia",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like",
      "Amorphous"
    ]
  },
  "galvantula": {
    "id": 596,
    "stats": {
      "hp": 70,
      "atk": 77,
      "def": 60,
      "spa": 97,
      "spd": 60,
      "spe": 108
    },
    "abilities": {
      "0": "Compound Eyes",
      "1": "Unnerve",
      "H": "Swarm"
    },
    "heightm": 0.8,
    "weightkg": 14.3,
    "color": "Yellow",
    "evos": [],
    "prevo": "Joltik",
    "evoLevel": 36,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "garbodor": {
    "id": 569,
    "stats": {
      "hp": 80,
      "atk": 95,
      "def": 82,
      "spa": 60,
      "spd": 82,
      "spe": 75
    },
    "abilities": {
      "0": "Stench",
      "1": "Weak Armor",
      "H": "Aftermath"
    },
    "heightm": 1.9,
    "weightkg": 107.3,
    "color": "Green",
    "evos": [],
    "prevo": "Trubbish",
    "evoLevel": 36,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "gardevoir": {
    "id": 282,
    "stats": {
      "hp": 68,
      "atk": 65,
      "def": 65,
      "spa": 125,
      "spd": 115,
      "spe": 80
    },
    "abilities": {
      "0": "Synchronize",
      "1": "Trace",
      "H": "Telepathy"
    },
    "heightm": 1.6,
    "weightkg": 48.4,
    "color": "White",
    "evos": [],
    "prevo": "Kirlia",
    "evoLevel": 30,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like",
      "Amorphous"
    ]
  },
  "gastly": {
    "id": 92,
    "stats": {
      "hp": 30,
      "atk": 35,
      "def": 30,
      "spa": 100,
      "spd": 35,
      "spe": 80
    },
    "abilities": {
      "0": "Levitate"
    },
    "heightm": 1.3,
    "weightkg": 0.1,
    "color": "Purple",
    "evos": [
      "Haunter"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "gastrodon": {
    "id": 423,
    "stats": {
      "hp": 111,
      "atk": 83,
      "def": 68,
      "spa": 92,
      "spd": 82,
      "spe": 39
    },
    "abilities": {
      "0": "Sticky Hold",
      "1": "Storm Drain",
      "H": "Sand Force"
    },
    "heightm": 0.9,
    "weightkg": 29.9,
    "color": "Purple",
    "evos": [],
    "prevo": "Shellos",
    "evoLevel": 30,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Amorphous"
    ]
  },
  "gengar": {
    "id": 94,
    "stats": {
      "hp": 60,
      "atk": 65,
      "def": 60,
      "spa": 130,
      "spd": 75,
      "spe": 110
    },
    "abilities": {
      "0": "Cursed Body"
    },
    "heightm": 1.5,
    "weightkg": 40.5,
    "color": "Purple",
    "evos": [],
    "prevo": "Haunter",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "gigalith": {
    "id": 526,
    "stats": {
      "hp": 85,
      "atk": 135,
      "def": 130,
      "spa": 60,
      "spd": 80,
      "spe": 25
    },
    "abilities": {
      "0": "Sturdy",
      "1": "Sand Stream",
      "H": "Sand Force"
    },
    "heightm": 1.7,
    "weightkg": 260,
    "color": "Blue",
    "evos": [],
    "prevo": "Boldore",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "glaceon": {
    "id": 471,
    "stats": {
      "hp": 65,
      "atk": 60,
      "def": 110,
      "spa": 130,
      "spd": 95,
      "spe": 65
    },
    "abilities": {
      "0": "Snow Cloak",
      "H": "Ice Body"
    },
    "heightm": 0.8,
    "weightkg": 25.9,
    "color": "Blue",
    "evos": [],
    "prevo": "Eevee",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field"
    ]
  },
  "glalie": {
    "id": 362,
    "stats": {
      "hp": 80,
      "atk": 80,
      "def": 80,
      "spa": 80,
      "spd": 80,
      "spe": 80
    },
    "abilities": {
      "0": "Inner Focus",
      "1": "Ice Body",
      "H": "Moody"
    },
    "heightm": 1.5,
    "weightkg": 256.5,
    "color": "Gray",
    "evos": [],
    "prevo": "Snorunt",
    "evoLevel": 42,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Mineral"
    ]
  },
  "gloom": {
    "id": 44,
    "stats": {
      "hp": 60,
      "atk": 65,
      "def": 70,
      "spa": 85,
      "spd": 75,
      "spe": 40
    },
    "abilities": {
      "0": "Chlorophyll",
      "H": "Stench"
    },
    "heightm": 0.8,
    "weightkg": 8.6,
    "color": "Blue",
    "evos": [
      "Vileplume",
      "Bellossom"
    ],
    "prevo": "Oddish",
    "evoLevel": 21,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass"
    ]
  },
  "goldeen": {
    "id": 118,
    "stats": {
      "hp": 45,
      "atk": 67,
      "def": 60,
      "spa": 35,
      "spd": 50,
      "spe": 63
    },
    "abilities": {
      "0": "Swift Swim",
      "1": "Water Veil",
      "H": "Lightning Rod"
    },
    "heightm": 0.6,
    "weightkg": 15,
    "color": "Red",
    "evos": [
      "Seaking"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 2"
    ]
  },
  "golett": {
    "id": 622,
    "stats": {
      "hp": 59,
      "atk": 74,
      "def": 50,
      "spa": 35,
      "spd": 50,
      "spe": 35
    },
    "abilities": {
      "0": "Iron Fist",
      "1": "Klutz",
      "H": "No Guard"
    },
    "heightm": 1,
    "weightkg": 92,
    "color": "Green",
    "evos": [
      "Golurk"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "golisopod": {
    "id": 768,
    "stats": {
      "hp": 75,
      "atk": 125,
      "def": 140,
      "spa": 60,
      "spd": 90,
      "spe": 40
    },
    "abilities": {
      "0": "Emergency Exit"
    },
    "heightm": 2,
    "weightkg": 108,
    "color": "Gray",
    "evos": [],
    "prevo": "Wimpod",
    "evoLevel": 30,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug",
      "Water 3"
    ]
  },
  "golurk": {
    "id": 623,
    "stats": {
      "hp": 89,
      "atk": 124,
      "def": 80,
      "spa": 55,
      "spd": 80,
      "spe": 55
    },
    "abilities": {
      "0": "Iron Fist",
      "1": "Klutz",
      "H": "No Guard"
    },
    "heightm": 2.8,
    "weightkg": 330,
    "color": "Green",
    "evos": [],
    "prevo": "Golett",
    "evoLevel": 43,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "goodra": {
    "id": 706,
    "stats": {
      "hp": 90,
      "atk": 100,
      "def": 70,
      "spa": 110,
      "spd": 150,
      "spe": 80
    },
    "abilities": {
      "0": "Sap Sipper",
      "1": "Hydration",
      "H": "Gooey"
    },
    "heightm": 2,
    "weightkg": 150.5,
    "color": "Purple",
    "evos": [],
    "prevo": "Sliggoo",
    "evoLevel": 50,
    "evoCondition": "during rain",
    "genderRatio": null,
    "eggGroups": [
      "Dragon"
    ]
  },
  "goomy": {
    "id": 704,
    "stats": {
      "hp": 45,
      "atk": 50,
      "def": 35,
      "spa": 55,
      "spd": 75,
      "spe": 40
    },
    "abilities": {
      "0": "Sap Sipper",
      "1": "Hydration",
      "H": "Gooey"
    },
    "heightm": 0.3,
    "weightkg": 2.8,
    "color": "Purple",
    "evos": [
      "Sliggoo",
      "Sliggoo-Hisui"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Dragon"
    ]
  },
  "gossifleur": {
    "id": 829,
    "stats": {
      "hp": 40,
      "atk": 40,
      "def": 60,
      "spa": 40,
      "spd": 60,
      "spe": 10
    },
    "abilities": {
      "0": "Cotton Down",
      "1": "Regenerator",
      "H": "Effect Spore"
    },
    "heightm": 0.4,
    "weightkg": 2.2,
    "color": "Green",
    "evos": [
      "Eldegoss"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass"
    ]
  },
  "gothita": {
    "id": 574,
    "stats": {
      "hp": 45,
      "atk": 30,
      "def": 50,
      "spa": 55,
      "spd": 65,
      "spe": 45
    },
    "abilities": {
      "0": "Frisk",
      "1": "Competitive",
      "H": "Shadow Tag"
    },
    "heightm": 0.4,
    "weightkg": 5.8,
    "color": "Purple",
    "evos": [
      "Gothorita"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.25,
      "F": 0.75
    },
    "eggGroups": [
      "Human-Like"
    ]
  },
  "gothitelle": {
    "id": 576,
    "stats": {
      "hp": 70,
      "atk": 55,
      "def": 95,
      "spa": 95,
      "spd": 110,
      "spe": 65
    },
    "abilities": {
      "0": "Frisk",
      "1": "Competitive",
      "H": "Shadow Tag"
    },
    "heightm": 1.5,
    "weightkg": 44,
    "color": "Purple",
    "evos": [],
    "prevo": "Gothorita",
    "evoLevel": 41,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.25,
      "F": 0.75
    },
    "eggGroups": [
      "Human-Like"
    ]
  },
  "gothorita": {
    "id": 575,
    "stats": {
      "hp": 60,
      "atk": 45,
      "def": 70,
      "spa": 75,
      "spd": 85,
      "spe": 55
    },
    "abilities": {
      "0": "Frisk",
      "1": "Competitive",
      "H": "Shadow Tag"
    },
    "heightm": 0.7,
    "weightkg": 18,
    "color": "Purple",
    "evos": [
      "Gothitelle"
    ],
    "prevo": "Gothita",
    "evoLevel": 32,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.25,
      "F": 0.75
    },
    "eggGroups": [
      "Human-Like"
    ]
  },
  "gourgeist": {
    "id": 711,
    "stats": {
      "hp": 65,
      "atk": 90,
      "def": 122,
      "spa": 58,
      "spd": 75,
      "spe": 84
    },
    "abilities": {
      "0": "Pickup",
      "1": "Frisk",
      "H": "Insomnia"
    },
    "heightm": 0.9,
    "weightkg": 12.5,
    "color": "Brown",
    "evos": [],
    "prevo": "Pumpkaboo",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "grapploct": {
    "id": 853,
    "stats": {
      "hp": 80,
      "atk": 118,
      "def": 90,
      "spa": 70,
      "spd": 80,
      "spe": 42
    },
    "abilities": {
      "0": "Limber",
      "H": "Technician"
    },
    "heightm": 1.6,
    "weightkg": 39,
    "color": "Blue",
    "evos": [],
    "prevo": "Clobbopus",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Human-Like"
    ]
  },
  "greedent": {
    "id": 820,
    "stats": {
      "hp": 120,
      "atk": 95,
      "def": 95,
      "spa": 55,
      "spd": 75,
      "spe": 20
    },
    "abilities": {
      "0": "Cheek Pouch",
      "H": "Gluttony"
    },
    "heightm": 0.6,
    "weightkg": 6,
    "color": "Brown",
    "evos": [],
    "prevo": "Skwovet",
    "evoLevel": 24,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "grimmsnarl": {
    "id": 861,
    "stats": {
      "hp": 95,
      "atk": 120,
      "def": 65,
      "spa": 95,
      "spd": 75,
      "spe": 60
    },
    "abilities": {
      "0": "Prankster",
      "1": "Frisk",
      "H": "Pickpocket"
    },
    "heightm": 1.5,
    "weightkg": 61,
    "color": "Purple",
    "evos": [],
    "prevo": "Morgrem",
    "evoLevel": 42,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Human-Like"
    ]
  },
  "grookey": {
    "id": 810,
    "stats": {
      "hp": 50,
      "atk": 65,
      "def": 50,
      "spa": 40,
      "spd": 40,
      "spe": 65
    },
    "abilities": {
      "0": "Overgrow",
      "H": "Grassy Surge"
    },
    "heightm": 0.3,
    "weightkg": 5,
    "color": "Green",
    "evos": [
      "Thwackey"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field",
      "Grass"
    ]
  },
  "growlithe": {
    "id": 58,
    "stats": {
      "hp": 55,
      "atk": 70,
      "def": 45,
      "spa": 70,
      "spd": 50,
      "spe": 60
    },
    "abilities": {
      "0": "Intimidate",
      "1": "Flash Fire",
      "H": "Justified"
    },
    "heightm": 0.7,
    "weightkg": 19,
    "color": "Brown",
    "evos": [
      "Arcanine"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.75,
      "F": 0.25
    },
    "eggGroups": [
      "Field"
    ]
  },
  "grubbin": {
    "id": 736,
    "stats": {
      "hp": 47,
      "atk": 62,
      "def": 45,
      "spa": 55,
      "spd": 45,
      "spe": 46
    },
    "abilities": {
      "0": "Swarm"
    },
    "heightm": 0.4,
    "weightkg": 4.4,
    "color": "Gray",
    "evos": [
      "Charjabug"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "gurdurr": {
    "id": 533,
    "stats": {
      "hp": 85,
      "atk": 105,
      "def": 85,
      "spa": 40,
      "spd": 50,
      "spe": 40
    },
    "abilities": {
      "0": "Guts",
      "1": "Sheer Force",
      "H": "Iron Fist"
    },
    "heightm": 1.2,
    "weightkg": 40,
    "color": "Gray",
    "evos": [
      "Conkeldurr"
    ],
    "prevo": "Timburr",
    "evoLevel": 25,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.75,
      "F": 0.25
    },
    "eggGroups": [
      "Human-Like"
    ]
  },
  "gyarados": {
    "id": 130,
    "stats": {
      "hp": 95,
      "atk": 125,
      "def": 79,
      "spa": 60,
      "spd": 100,
      "spe": 81
    },
    "abilities": {
      "0": "Intimidate",
      "H": "Moxie"
    },
    "heightm": 6.5,
    "weightkg": 235,
    "color": "Blue",
    "evos": [],
    "prevo": "Magikarp",
    "evoLevel": 20,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 2",
      "Dragon"
    ]
  },
  "hakamo-o": {
    "id": 783,
    "stats": {
      "hp": 55,
      "atk": 75,
      "def": 90,
      "spa": 65,
      "spd": 70,
      "spe": 65
    },
    "abilities": {
      "0": "Bulletproof",
      "1": "Soundproof",
      "H": "Overcoat"
    },
    "heightm": 1.2,
    "weightkg": 47,
    "color": "Gray",
    "evos": [
      "Kommo-o"
    ],
    "prevo": "Jangmo-o",
    "evoLevel": 35,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Dragon"
    ]
  },
  "hatenna": {
    "id": 856,
    "stats": {
      "hp": 42,
      "atk": 30,
      "def": 45,
      "spa": 56,
      "spd": 53,
      "spe": 39
    },
    "abilities": {
      "0": "Healer",
      "1": "Anticipation",
      "H": "Magic Bounce"
    },
    "heightm": 0.4,
    "weightkg": 3.4,
    "color": "Pink",
    "evos": [
      "Hattrem"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy"
    ]
  },
  "hatterene": {
    "id": 858,
    "stats": {
      "hp": 57,
      "atk": 90,
      "def": 95,
      "spa": 136,
      "spd": 103,
      "spe": 29
    },
    "abilities": {
      "0": "Healer",
      "1": "Anticipation",
      "H": "Magic Bounce"
    },
    "heightm": 2.1,
    "weightkg": 5.1,
    "color": "Pink",
    "evos": [],
    "prevo": "Hattrem",
    "evoLevel": 42,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy"
    ]
  },
  "hattrem": {
    "id": 857,
    "stats": {
      "hp": 57,
      "atk": 40,
      "def": 65,
      "spa": 86,
      "spd": 73,
      "spe": 49
    },
    "abilities": {
      "0": "Healer",
      "1": "Anticipation",
      "H": "Magic Bounce"
    },
    "heightm": 0.6,
    "weightkg": 4.8,
    "color": "Pink",
    "evos": [
      "Hatterene"
    ],
    "prevo": "Hatenna",
    "evoLevel": 32,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy"
    ]
  },
  "haunter": {
    "id": 93,
    "stats": {
      "hp": 45,
      "atk": 50,
      "def": 45,
      "spa": 115,
      "spd": 55,
      "spe": 95
    },
    "abilities": {
      "0": "Levitate"
    },
    "heightm": 1.6,
    "weightkg": 0.1,
    "color": "Purple",
    "evos": [
      "Gengar"
    ],
    "prevo": "Gastly",
    "evoLevel": 25,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "hawlucha": {
    "id": 701,
    "stats": {
      "hp": 78,
      "atk": 92,
      "def": 75,
      "spa": 74,
      "spd": 63,
      "spe": 118
    },
    "abilities": {
      "0": "Limber",
      "1": "Unburden",
      "H": "Mold Breaker"
    },
    "heightm": 0.8,
    "weightkg": 21.5,
    "color": "Green",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying",
      "Human-Like"
    ]
  },
  "haxorus": {
    "id": 612,
    "stats": {
      "hp": 76,
      "atk": 147,
      "def": 90,
      "spa": 60,
      "spd": 70,
      "spe": 97
    },
    "abilities": {
      "0": "Rivalry",
      "1": "Mold Breaker",
      "H": "Unnerve"
    },
    "heightm": 1.8,
    "weightkg": 105.5,
    "color": "Yellow",
    "evos": [],
    "prevo": "Fraxure",
    "evoLevel": 48,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Dragon"
    ]
  },
  "heatmor": {
    "id": 631,
    "stats": {
      "hp": 85,
      "atk": 97,
      "def": 66,
      "spa": 105,
      "spd": 66,
      "spe": 65
    },
    "abilities": {
      "0": "Gluttony",
      "1": "Flash Fire",
      "H": "White Smoke"
    },
    "heightm": 1.4,
    "weightkg": 58,
    "color": "Red",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "heliolisk": {
    "id": 695,
    "stats": {
      "hp": 62,
      "atk": 55,
      "def": 52,
      "spa": 109,
      "spd": 94,
      "spe": 109
    },
    "abilities": {
      "0": "Dry Skin",
      "1": "Sand Veil",
      "H": "Solar Power"
    },
    "heightm": 1,
    "weightkg": 21,
    "color": "Yellow",
    "evos": [],
    "prevo": "Helioptile",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Dragon"
    ]
  },
  "helioptile": {
    "id": 694,
    "stats": {
      "hp": 44,
      "atk": 38,
      "def": 33,
      "spa": 61,
      "spd": 43,
      "spe": 70
    },
    "abilities": {
      "0": "Dry Skin",
      "1": "Sand Veil",
      "H": "Solar Power"
    },
    "heightm": 0.5,
    "weightkg": 6,
    "color": "Yellow",
    "evos": [
      "Heliolisk"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Dragon"
    ]
  },
  "hippopotas": {
    "id": 449,
    "stats": {
      "hp": 68,
      "atk": 72,
      "def": 78,
      "spa": 38,
      "spd": 42,
      "spe": 32
    },
    "abilities": {
      "0": "Sand Stream",
      "H": "Sand Force"
    },
    "heightm": 0.8,
    "weightkg": 49.5,
    "color": "Brown",
    "evos": [
      "Hippowdon"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "hippowdon": {
    "id": 450,
    "stats": {
      "hp": 108,
      "atk": 112,
      "def": 118,
      "spa": 68,
      "spd": 72,
      "spe": 47
    },
    "abilities": {
      "0": "Sand Stream",
      "H": "Sand Force"
    },
    "heightm": 2,
    "weightkg": 300,
    "color": "Brown",
    "evos": [],
    "prevo": "Hippopotas",
    "evoLevel": 34,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "hitmonchan": {
    "id": 107,
    "stats": {
      "hp": 50,
      "atk": 105,
      "def": 79,
      "spa": 35,
      "spd": 110,
      "spe": 76
    },
    "abilities": {
      "0": "Keen Eye",
      "1": "Iron Fist",
      "H": "Inner Focus"
    },
    "heightm": 1.4,
    "weightkg": 50.2,
    "color": "Brown",
    "evos": [],
    "prevo": "Tyrogue",
    "evoLevel": 20,
    "evoCondition": "with an Atk stat < its Def stat",
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "hitmonlee": {
    "id": 106,
    "stats": {
      "hp": 50,
      "atk": 120,
      "def": 53,
      "spa": 35,
      "spd": 110,
      "spe": 87
    },
    "abilities": {
      "0": "Limber",
      "1": "Reckless",
      "H": "Unburden"
    },
    "heightm": 1.5,
    "weightkg": 49.8,
    "color": "Brown",
    "evos": [],
    "prevo": "Tyrogue",
    "evoLevel": 20,
    "evoCondition": "with an Atk stat > its Def stat",
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "hitmontop": {
    "id": 237,
    "stats": {
      "hp": 50,
      "atk": 95,
      "def": 95,
      "spa": 35,
      "spd": 110,
      "spe": 70
    },
    "abilities": {
      "0": "Intimidate",
      "1": "Technician",
      "H": "Steadfast"
    },
    "heightm": 1.4,
    "weightkg": 48,
    "color": "Brown",
    "evos": [],
    "prevo": "Tyrogue",
    "evoLevel": 20,
    "evoCondition": "with an Atk stat equal to its Def stat",
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "honedge": {
    "id": 679,
    "stats": {
      "hp": 45,
      "atk": 80,
      "def": 100,
      "spa": 35,
      "spd": 37,
      "spe": 28
    },
    "abilities": {
      "0": "No Guard"
    },
    "heightm": 0.8,
    "weightkg": 2,
    "color": "Brown",
    "evos": [
      "Doublade"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "hoothoot": {
    "id": 163,
    "stats": {
      "hp": 60,
      "atk": 30,
      "def": 30,
      "spa": 36,
      "spd": 56,
      "spe": 50
    },
    "abilities": {
      "0": "Insomnia",
      "1": "Keen Eye",
      "H": "Tinted Lens"
    },
    "heightm": 0.7,
    "weightkg": 21.2,
    "color": "Brown",
    "evos": [
      "Noctowl"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "hydreigon": {
    "id": 635,
    "stats": {
      "hp": 92,
      "atk": 105,
      "def": 90,
      "spa": 125,
      "spd": 90,
      "spe": 98
    },
    "abilities": {
      "0": "Levitate"
    },
    "heightm": 1.8,
    "weightkg": 160,
    "color": "Blue",
    "evos": [],
    "prevo": "Zweilous",
    "evoLevel": 64,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Dragon"
    ]
  },
  "impidimp": {
    "id": 859,
    "stats": {
      "hp": 45,
      "atk": 45,
      "def": 30,
      "spa": 55,
      "spd": 40,
      "spe": 50
    },
    "abilities": {
      "0": "Prankster",
      "1": "Frisk",
      "H": "Pickpocket"
    },
    "heightm": 0.4,
    "weightkg": 5.5,
    "color": "Pink",
    "evos": [
      "Morgrem"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Human-Like"
    ]
  },
  "indeedee": {
    "id": 876,
    "stats": {
      "hp": 60,
      "atk": 65,
      "def": 55,
      "spa": 105,
      "spd": 95,
      "spe": 95
    },
    "abilities": {
      "0": "Inner Focus",
      "1": "Synchronize",
      "H": "Psychic Surge"
    },
    "heightm": 0.9,
    "weightkg": 28,
    "color": "Purple",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy"
    ]
  },
  "inkay": {
    "id": 686,
    "stats": {
      "hp": 53,
      "atk": 54,
      "def": 53,
      "spa": 37,
      "spd": 46,
      "spe": 45
    },
    "abilities": {
      "0": "Contrary",
      "1": "Suction Cups",
      "H": "Infiltrator"
    },
    "heightm": 0.4,
    "weightkg": 3.5,
    "color": "Blue",
    "evos": [
      "Malamar"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Water 2"
    ]
  },
  "inteleon": {
    "id": 818,
    "stats": {
      "hp": 70,
      "atk": 85,
      "def": 65,
      "spa": 125,
      "spd": 65,
      "spe": 120
    },
    "abilities": {
      "0": "Torrent",
      "H": "Sniper"
    },
    "heightm": 1.9,
    "weightkg": 45.2,
    "color": "Blue",
    "evos": [],
    "prevo": "Drizzile",
    "evoLevel": 35,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Water 1",
      "Field"
    ]
  },
  "jangmo-o": {
    "id": 782,
    "stats": {
      "hp": 45,
      "atk": 55,
      "def": 65,
      "spa": 45,
      "spd": 45,
      "spe": 45
    },
    "abilities": {
      "0": "Bulletproof",
      "1": "Soundproof",
      "H": "Overcoat"
    },
    "heightm": 0.6,
    "weightkg": 29.7,
    "color": "Gray",
    "evos": [
      "Hakamo-o"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Dragon"
    ]
  },
  "jellicent": {
    "id": 593,
    "stats": {
      "hp": 100,
      "atk": 60,
      "def": 70,
      "spa": 85,
      "spd": 105,
      "spe": 60
    },
    "abilities": {
      "0": "Water Absorb",
      "1": "Cursed Body",
      "H": "Damp"
    },
    "heightm": 2.2,
    "weightkg": 135,
    "color": "White",
    "evos": [],
    "prevo": "Frillish",
    "evoLevel": 40,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "jolteon": {
    "id": 135,
    "stats": {
      "hp": 65,
      "atk": 65,
      "def": 60,
      "spa": 110,
      "spd": 95,
      "spe": 130
    },
    "abilities": {
      "0": "Volt Absorb",
      "H": "Quick Feet"
    },
    "heightm": 0.8,
    "weightkg": 24.5,
    "color": "Yellow",
    "evos": [],
    "prevo": "Eevee",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field"
    ]
  },
  "joltik": {
    "id": 595,
    "stats": {
      "hp": 50,
      "atk": 47,
      "def": 50,
      "spa": 57,
      "spd": 50,
      "spe": 65
    },
    "abilities": {
      "0": "Compound Eyes",
      "1": "Unnerve",
      "H": "Swarm"
    },
    "heightm": 0.1,
    "weightkg": 0.6,
    "color": "Yellow",
    "evos": [
      "Galvantula"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "karrablast": {
    "id": 588,
    "stats": {
      "hp": 50,
      "atk": 75,
      "def": 45,
      "spa": 40,
      "spd": 45,
      "spe": 60
    },
    "abilities": {
      "0": "Swarm",
      "1": "Shed Skin",
      "H": "No Guard"
    },
    "heightm": 0.5,
    "weightkg": 5.9,
    "color": "Blue",
    "evos": [
      "Escavalier"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "kingler": {
    "id": 99,
    "stats": {
      "hp": 55,
      "atk": 130,
      "def": 115,
      "spa": 50,
      "spd": 50,
      "spe": 75
    },
    "abilities": {
      "0": "Hyper Cutter",
      "1": "Shell Armor",
      "H": "Sheer Force"
    },
    "heightm": 1.3,
    "weightkg": 60,
    "color": "Red",
    "evos": [],
    "prevo": "Krabby",
    "evoLevel": 28,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 3"
    ]
  },
  "kirlia": {
    "id": 281,
    "stats": {
      "hp": 38,
      "atk": 35,
      "def": 35,
      "spa": 65,
      "spd": 55,
      "spe": 50
    },
    "abilities": {
      "0": "Synchronize",
      "1": "Trace",
      "H": "Telepathy"
    },
    "heightm": 0.8,
    "weightkg": 20.2,
    "color": "White",
    "evos": [
      "Gardevoir",
      "Gallade"
    ],
    "prevo": "Ralts",
    "evoLevel": 20,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like",
      "Amorphous"
    ]
  },
  "klang": {
    "id": 600,
    "stats": {
      "hp": 60,
      "atk": 80,
      "def": 95,
      "spa": 70,
      "spd": 85,
      "spe": 50
    },
    "abilities": {
      "0": "Plus",
      "1": "Minus",
      "H": "Clear Body"
    },
    "heightm": 0.6,
    "weightkg": 51,
    "color": "Gray",
    "evos": [
      "Klinklang"
    ],
    "prevo": "Klink",
    "evoLevel": 38,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "klink": {
    "id": 599,
    "stats": {
      "hp": 40,
      "atk": 55,
      "def": 70,
      "spa": 45,
      "spd": 60,
      "spe": 30
    },
    "abilities": {
      "0": "Plus",
      "1": "Minus",
      "H": "Clear Body"
    },
    "heightm": 0.3,
    "weightkg": 21,
    "color": "Gray",
    "evos": [
      "Klang"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "klinklang": {
    "id": 601,
    "stats": {
      "hp": 60,
      "atk": 100,
      "def": 115,
      "spa": 70,
      "spd": 85,
      "spe": 90
    },
    "abilities": {
      "0": "Plus",
      "1": "Minus",
      "H": "Clear Body"
    },
    "heightm": 0.6,
    "weightkg": 81,
    "color": "Gray",
    "evos": [],
    "prevo": "Klang",
    "evoLevel": 49,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "koffing": {
    "id": 109,
    "stats": {
      "hp": 40,
      "atk": 65,
      "def": 95,
      "spa": 60,
      "spd": 45,
      "spe": 35
    },
    "abilities": {
      "0": "Levitate",
      "1": "Neutralizing Gas",
      "H": "Stench"
    },
    "heightm": 0.6,
    "weightkg": 1,
    "color": "Purple",
    "evos": [
      "Weezing",
      "Weezing-Galar"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "kommo-o": {
    "id": 784,
    "stats": {
      "hp": 75,
      "atk": 110,
      "def": 125,
      "spa": 100,
      "spd": 105,
      "spe": 85
    },
    "abilities": {
      "0": "Bulletproof",
      "1": "Soundproof",
      "H": "Overcoat"
    },
    "heightm": 1.6,
    "weightkg": 78.2,
    "color": "Gray",
    "evos": [],
    "prevo": "Hakamo-o",
    "evoLevel": 45,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Dragon"
    ]
  },
  "krabby": {
    "id": 98,
    "stats": {
      "hp": 30,
      "atk": 105,
      "def": 90,
      "spa": 25,
      "spd": 25,
      "spe": 50
    },
    "abilities": {
      "0": "Hyper Cutter",
      "1": "Shell Armor",
      "H": "Sheer Force"
    },
    "heightm": 0.4,
    "weightkg": 6.5,
    "color": "Red",
    "evos": [
      "Kingler"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 3"
    ]
  },
  "lampent": {
    "id": 608,
    "stats": {
      "hp": 60,
      "atk": 40,
      "def": 60,
      "spa": 95,
      "spd": 60,
      "spe": 55
    },
    "abilities": {
      "0": "Flash Fire",
      "1": "Flame Body",
      "H": "Infiltrator"
    },
    "heightm": 0.6,
    "weightkg": 13,
    "color": "Black",
    "evos": [
      "Chandelure"
    ],
    "prevo": "Litwick",
    "evoLevel": 41,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "lanturn": {
    "id": 171,
    "stats": {
      "hp": 125,
      "atk": 58,
      "def": 58,
      "spa": 76,
      "spd": 76,
      "spe": 67
    },
    "abilities": {
      "0": "Volt Absorb",
      "1": "Illuminate",
      "H": "Water Absorb"
    },
    "heightm": 1.2,
    "weightkg": 22.5,
    "color": "Blue",
    "evos": [],
    "prevo": "Chinchou",
    "evoLevel": 27,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 2"
    ]
  },
  "lapras": {
    "id": 131,
    "stats": {
      "hp": 130,
      "atk": 85,
      "def": 80,
      "spa": 85,
      "spd": 95,
      "spe": 60
    },
    "abilities": {
      "0": "Water Absorb",
      "1": "Shell Armor",
      "H": "Hydration"
    },
    "heightm": 2.5,
    "weightkg": 220,
    "color": "Blue",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Water 1"
    ]
  },
  "larvitar": {
    "id": 246,
    "stats": {
      "hp": 50,
      "atk": 64,
      "def": 50,
      "spa": 45,
      "spd": 50,
      "spe": 41
    },
    "abilities": {
      "0": "Guts",
      "H": "Sand Veil"
    },
    "heightm": 0.6,
    "weightkg": 72,
    "color": "Green",
    "evos": [
      "Pupitar"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster"
    ]
  },
  "leafeon": {
    "id": 470,
    "stats": {
      "hp": 65,
      "atk": 110,
      "def": 130,
      "spa": 60,
      "spd": 65,
      "spe": 95
    },
    "abilities": {
      "0": "Leaf Guard",
      "H": "Chlorophyll"
    },
    "heightm": 1,
    "weightkg": 25.5,
    "color": "Green",
    "evos": [],
    "prevo": "Eevee",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field"
    ]
  },
  "liepard": {
    "id": 510,
    "stats": {
      "hp": 64,
      "atk": 88,
      "def": 50,
      "spa": 88,
      "spd": 50,
      "spe": 106
    },
    "abilities": {
      "0": "Limber",
      "1": "Unburden",
      "H": "Prankster"
    },
    "heightm": 1.1,
    "weightkg": 37.5,
    "color": "Purple",
    "evos": [],
    "prevo": "Purrloin",
    "evoLevel": 20,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "linoone": {
    "id": 264,
    "stats": {
      "hp": 78,
      "atk": 70,
      "def": 61,
      "spa": 50,
      "spd": 61,
      "spe": 100
    },
    "abilities": {
      "0": "Pickup",
      "1": "Gluttony",
      "H": "Quick Feet"
    },
    "heightm": 0.5,
    "weightkg": 32.5,
    "color": "White",
    "evos": [],
    "prevo": "Zigzagoon",
    "evoLevel": 20,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "litwick": {
    "id": 607,
    "stats": {
      "hp": 50,
      "atk": 30,
      "def": 55,
      "spa": 65,
      "spd": 55,
      "spe": 20
    },
    "abilities": {
      "0": "Flash Fire",
      "1": "Flame Body",
      "H": "Infiltrator"
    },
    "heightm": 0.3,
    "weightkg": 3.1,
    "color": "White",
    "evos": [
      "Lampent"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "lombre": {
    "id": 271,
    "stats": {
      "hp": 60,
      "atk": 50,
      "def": 50,
      "spa": 60,
      "spd": 70,
      "spe": 50
    },
    "abilities": {
      "0": "Swift Swim",
      "1": "Rain Dish",
      "H": "Own Tempo"
    },
    "heightm": 1.2,
    "weightkg": 32.5,
    "color": "Green",
    "evos": [
      "Ludicolo"
    ],
    "prevo": "Lotad",
    "evoLevel": 14,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Grass"
    ]
  },
  "lotad": {
    "id": 270,
    "stats": {
      "hp": 40,
      "atk": 30,
      "def": 30,
      "spa": 40,
      "spd": 50,
      "spe": 30
    },
    "abilities": {
      "0": "Swift Swim",
      "1": "Rain Dish",
      "H": "Own Tempo"
    },
    "heightm": 0.5,
    "weightkg": 2.6,
    "color": "Green",
    "evos": [
      "Lombre"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Grass"
    ]
  },
  "lucario": {
    "id": 448,
    "stats": {
      "hp": 70,
      "atk": 110,
      "def": 70,
      "spa": 115,
      "spd": 70,
      "spe": 90
    },
    "abilities": {
      "0": "Steadfast",
      "1": "Inner Focus",
      "H": "Justified"
    },
    "heightm": 1.2,
    "weightkg": 54,
    "color": "Blue",
    "evos": [],
    "prevo": "Riolu",
    "evoLevel": null,
    "evoCondition": "during the day",
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field",
      "Human-Like"
    ]
  },
  "ludicolo": {
    "id": 272,
    "stats": {
      "hp": 80,
      "atk": 70,
      "def": 70,
      "spa": 90,
      "spd": 100,
      "spe": 70
    },
    "abilities": {
      "0": "Swift Swim",
      "1": "Rain Dish",
      "H": "Own Tempo"
    },
    "heightm": 1.5,
    "weightkg": 55,
    "color": "Green",
    "evos": [],
    "prevo": "Lombre",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Grass"
    ]
  },
  "lunatone": {
    "id": 337,
    "stats": {
      "hp": 90,
      "atk": 55,
      "def": 65,
      "spa": 95,
      "spd": 85,
      "spe": 70
    },
    "abilities": {
      "0": "Levitate"
    },
    "heightm": 1,
    "weightkg": 168,
    "color": "Yellow",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "machamp": {
    "id": 68,
    "stats": {
      "hp": 90,
      "atk": 130,
      "def": 80,
      "spa": 65,
      "spd": 85,
      "spe": 55
    },
    "abilities": {
      "0": "Guts",
      "1": "No Guard",
      "H": "Steadfast"
    },
    "heightm": 1.6,
    "weightkg": 130,
    "color": "Gray",
    "evos": [],
    "prevo": "Machoke",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.75,
      "F": 0.25
    },
    "eggGroups": [
      "Human-Like"
    ]
  },
  "machoke": {
    "id": 67,
    "stats": {
      "hp": 80,
      "atk": 100,
      "def": 70,
      "spa": 50,
      "spd": 60,
      "spe": 45
    },
    "abilities": {
      "0": "Guts",
      "1": "No Guard",
      "H": "Steadfast"
    },
    "heightm": 1.5,
    "weightkg": 70.5,
    "color": "Gray",
    "evos": [
      "Machamp"
    ],
    "prevo": "Machop",
    "evoLevel": 28,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.75,
      "F": 0.25
    },
    "eggGroups": [
      "Human-Like"
    ]
  },
  "machop": {
    "id": 66,
    "stats": {
      "hp": 70,
      "atk": 80,
      "def": 50,
      "spa": 35,
      "spd": 35,
      "spe": 35
    },
    "abilities": {
      "0": "Guts",
      "1": "No Guard",
      "H": "Steadfast"
    },
    "heightm": 0.8,
    "weightkg": 19.5,
    "color": "Gray",
    "evos": [
      "Machoke"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.75,
      "F": 0.25
    },
    "eggGroups": [
      "Human-Like"
    ]
  },
  "magikarp": {
    "id": 129,
    "stats": {
      "hp": 20,
      "atk": 10,
      "def": 55,
      "spa": 15,
      "spd": 20,
      "spe": 80
    },
    "abilities": {
      "0": "Swift Swim",
      "H": "Rattled"
    },
    "heightm": 0.9,
    "weightkg": 10,
    "color": "Red",
    "evos": [
      "Gyarados"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 2",
      "Dragon"
    ]
  },
  "malamar": {
    "id": 687,
    "stats": {
      "hp": 86,
      "atk": 92,
      "def": 88,
      "spa": 68,
      "spd": 75,
      "spe": 73
    },
    "abilities": {
      "0": "Contrary",
      "1": "Suction Cups",
      "H": "Infiltrator"
    },
    "heightm": 1.5,
    "weightkg": 47,
    "color": "Blue",
    "evos": [],
    "prevo": "Inkay",
    "evoLevel": 30,
    "evoCondition": "with the console turned upside-down",
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Water 2"
    ]
  },
  "mamoswine": {
    "id": 473,
    "stats": {
      "hp": 110,
      "atk": 130,
      "def": 80,
      "spa": 70,
      "spd": 60,
      "spe": 80
    },
    "abilities": {
      "0": "Oblivious",
      "1": "Snow Cloak",
      "H": "Thick Fat"
    },
    "heightm": 2.5,
    "weightkg": 291,
    "color": "Brown",
    "evos": [],
    "prevo": "Piloswine",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "mandibuzz": {
    "id": 630,
    "stats": {
      "hp": 110,
      "atk": 65,
      "def": 105,
      "spa": 55,
      "spd": 95,
      "spe": 80
    },
    "abilities": {
      "0": "Big Pecks",
      "1": "Overcoat",
      "H": "Weak Armor"
    },
    "heightm": 1.2,
    "weightkg": 39.5,
    "color": "Brown",
    "evos": [],
    "prevo": "Vullaby",
    "evoLevel": 54,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "manectric": {
    "id": 310,
    "stats": {
      "hp": 70,
      "atk": 75,
      "def": 60,
      "spa": 105,
      "spd": 60,
      "spe": 105
    },
    "abilities": {
      "0": "Static",
      "1": "Lightning Rod",
      "H": "Minus"
    },
    "heightm": 1.5,
    "weightkg": 40.2,
    "color": "Yellow",
    "evos": [],
    "prevo": "Electrike",
    "evoLevel": 26,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "mantine": {
    "id": 226,
    "stats": {
      "hp": 85,
      "atk": 40,
      "def": 70,
      "spa": 80,
      "spd": 140,
      "spe": 70
    },
    "abilities": {
      "0": "Swift Swim",
      "1": "Water Absorb",
      "H": "Water Veil"
    },
    "heightm": 2.1,
    "weightkg": 220,
    "color": "Purple",
    "evos": [],
    "prevo": "Mantyke",
    "evoLevel": null,
    "evoCondition": "with a Remoraid in party",
    "genderRatio": null,
    "eggGroups": [
      "Water 1"
    ]
  },
  "mantyke": {
    "id": 458,
    "stats": {
      "hp": 45,
      "atk": 20,
      "def": 50,
      "spa": 60,
      "spd": 120,
      "spe": 50
    },
    "abilities": {
      "0": "Swift Swim",
      "1": "Water Absorb",
      "H": "Water Veil"
    },
    "heightm": 1,
    "weightkg": 65,
    "color": "Blue",
    "evos": [
      "Mantine"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "maractus": {
    "id": 556,
    "stats": {
      "hp": 75,
      "atk": 86,
      "def": 67,
      "spa": 106,
      "spd": 67,
      "spe": 60
    },
    "abilities": {
      "0": "Water Absorb",
      "1": "Chlorophyll",
      "H": "Storm Drain"
    },
    "heightm": 1,
    "weightkg": 28,
    "color": "Green",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass"
    ]
  },
  "mareanie": {
    "id": 747,
    "stats": {
      "hp": 50,
      "atk": 53,
      "def": 62,
      "spa": 43,
      "spd": 52,
      "spe": 45
    },
    "abilities": {
      "0": "Merciless",
      "1": "Limber",
      "H": "Regenerator"
    },
    "heightm": 0.4,
    "weightkg": 8,
    "color": "Blue",
    "evos": [
      "Toxapex"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1"
    ]
  },
  "mawile": {
    "id": 303,
    "stats": {
      "hp": 50,
      "atk": 85,
      "def": 85,
      "spa": 55,
      "spd": 55,
      "spe": 50
    },
    "abilities": {
      "0": "Hyper Cutter",
      "1": "Intimidate",
      "H": "Sheer Force"
    },
    "heightm": 0.6,
    "weightkg": 11.5,
    "color": "Black",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Fairy"
    ]
  },
  "meowstic": {
    "id": 678,
    "stats": {
      "hp": 74,
      "atk": 48,
      "def": 76,
      "spa": 83,
      "spd": 81,
      "spe": 104
    },
    "abilities": {
      "0": "Keen Eye",
      "1": "Infiltrator",
      "H": "Prankster"
    },
    "heightm": 0.6,
    "weightkg": 8.5,
    "color": "Blue",
    "evos": [],
    "prevo": "Espurr",
    "evoLevel": 25,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "meowth": {
    "id": 52,
    "stats": {
      "hp": 40,
      "atk": 45,
      "def": 35,
      "spa": 40,
      "spd": 40,
      "spe": 90
    },
    "abilities": {
      "0": "Pickup",
      "1": "Technician",
      "H": "Unnerve"
    },
    "heightm": 0.4,
    "weightkg": 4.2,
    "color": "Yellow",
    "evos": [
      "Persian"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "metapod": {
    "id": 11,
    "stats": {
      "hp": 50,
      "atk": 20,
      "def": 55,
      "spa": 25,
      "spd": 25,
      "spe": 30
    },
    "abilities": {
      "0": "Shed Skin"
    },
    "heightm": 0.7,
    "weightkg": 9.9,
    "color": "Green",
    "evos": [
      "Butterfree"
    ],
    "prevo": "Caterpie",
    "evoLevel": 7,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "milcery": {
    "id": 868,
    "stats": {
      "hp": 45,
      "atk": 40,
      "def": 40,
      "spa": 50,
      "spd": 61,
      "spe": 34
    },
    "abilities": {
      "0": "Sweet Veil",
      "H": "Aroma Veil"
    },
    "heightm": 0.2,
    "weightkg": 0.3,
    "color": "White",
    "evos": [
      "Alcremie"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Amorphous"
    ]
  },
  "milotic": {
    "id": 350,
    "stats": {
      "hp": 95,
      "atk": 60,
      "def": 79,
      "spa": 100,
      "spd": 125,
      "spe": 81
    },
    "abilities": {
      "0": "Marvel Scale",
      "1": "Competitive",
      "H": "Cute Charm"
    },
    "heightm": 6.2,
    "weightkg": 162,
    "color": "Pink",
    "evos": [],
    "prevo": "Feebas",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Dragon"
    ]
  },
  "mime-jr": {
    "id": 439,
    "stats": {
      "hp": 20,
      "atk": 25,
      "def": 45,
      "spa": 70,
      "spd": 90,
      "spe": 60
    },
    "abilities": {
      "0": "Soundproof",
      "1": "Filter",
      "H": "Technician"
    },
    "heightm": 0.6,
    "weightkg": 13,
    "color": "Pink",
    "evos": [
      "Mr. Mime",
      "Mr. Mime-Galar"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "mimikyu": {
    "id": 778,
    "stats": {
      "hp": 55,
      "atk": 90,
      "def": 80,
      "spa": 50,
      "spd": 105,
      "spe": 96
    },
    "abilities": {
      "0": "Disguise"
    },
    "heightm": 0.2,
    "weightkg": 0.7,
    "color": "Yellow",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "minccino": {
    "id": 572,
    "stats": {
      "hp": 55,
      "atk": 50,
      "def": 40,
      "spa": 40,
      "spd": 40,
      "spe": 75
    },
    "abilities": {
      "0": "Cute Charm",
      "1": "Technician",
      "H": "Skill Link"
    },
    "heightm": 0.4,
    "weightkg": 5.8,
    "color": "Gray",
    "evos": [
      "Cinccino"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.25,
      "F": 0.75
    },
    "eggGroups": [
      "Field"
    ]
  },
  "morelull": {
    "id": 755,
    "stats": {
      "hp": 40,
      "atk": 35,
      "def": 55,
      "spa": 65,
      "spd": 75,
      "spe": 15
    },
    "abilities": {
      "0": "Illuminate",
      "1": "Effect Spore",
      "H": "Rain Dish"
    },
    "heightm": 0.2,
    "weightkg": 1.5,
    "color": "Purple",
    "evos": [
      "Shiinotic"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass"
    ]
  },
  "morgrem": {
    "id": 860,
    "stats": {
      "hp": 65,
      "atk": 60,
      "def": 45,
      "spa": 75,
      "spd": 55,
      "spe": 70
    },
    "abilities": {
      "0": "Prankster",
      "1": "Frisk",
      "H": "Pickpocket"
    },
    "heightm": 0.8,
    "weightkg": 12.5,
    "color": "Pink",
    "evos": [
      "Grimmsnarl"
    ],
    "prevo": "Impidimp",
    "evoLevel": 32,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Human-Like"
    ]
  },
  "morpeko": {
    "id": 877,
    "stats": {
      "hp": 58,
      "atk": 95,
      "def": 58,
      "spa": 70,
      "spd": 58,
      "spe": 97
    },
    "abilities": {
      "0": "Hunger Switch"
    },
    "heightm": 0.3,
    "weightkg": 3,
    "color": "Yellow",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Fairy"
    ]
  },
  "mr-mime": {
    "id": 122,
    "stats": {
      "hp": 40,
      "atk": 45,
      "def": 65,
      "spa": 100,
      "spd": 120,
      "spe": 90
    },
    "abilities": {
      "0": "Soundproof",
      "1": "Filter",
      "H": "Technician"
    },
    "heightm": 1.3,
    "weightkg": 54.5,
    "color": "Pink",
    "evos": [],
    "prevo": "Mime Jr.",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "mr-rime": {
    "id": 866,
    "stats": {
      "hp": 80,
      "atk": 85,
      "def": 75,
      "spa": 110,
      "spd": 100,
      "spe": 70
    },
    "abilities": {
      "0": "Tangled Feet",
      "1": "Screen Cleaner",
      "H": "Ice Body"
    },
    "heightm": 1.5,
    "weightkg": 58.2,
    "color": "Purple",
    "evos": [],
    "prevo": "Mr. Mime-Galar",
    "evoLevel": 42,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "mudbray": {
    "id": 749,
    "stats": {
      "hp": 70,
      "atk": 100,
      "def": 70,
      "spa": 45,
      "spd": 55,
      "spe": 45
    },
    "abilities": {
      "0": "Own Tempo",
      "1": "Stamina",
      "H": "Inner Focus"
    },
    "heightm": 1,
    "weightkg": 110,
    "color": "Brown",
    "evos": [
      "Mudsdale"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "mudsdale": {
    "id": 750,
    "stats": {
      "hp": 100,
      "atk": 125,
      "def": 100,
      "spa": 55,
      "spd": 85,
      "spe": 35
    },
    "abilities": {
      "0": "Own Tempo",
      "1": "Stamina",
      "H": "Inner Focus"
    },
    "heightm": 2.5,
    "weightkg": 920,
    "color": "Brown",
    "evos": [],
    "prevo": "Mudbray",
    "evoLevel": 30,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "munchlax": {
    "id": 446,
    "stats": {
      "hp": 135,
      "atk": 85,
      "def": 40,
      "spa": 40,
      "spd": 85,
      "spe": 5
    },
    "abilities": {
      "0": "Pickup",
      "1": "Thick Fat",
      "H": "Gluttony"
    },
    "heightm": 0.6,
    "weightkg": 105,
    "color": "Black",
    "evos": [
      "Snorlax"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "munna": {
    "id": 517,
    "stats": {
      "hp": 76,
      "atk": 25,
      "def": 45,
      "spa": 67,
      "spd": 55,
      "spe": 24
    },
    "abilities": {
      "0": "Forewarn",
      "1": "Synchronize",
      "H": "Telepathy"
    },
    "heightm": 0.6,
    "weightkg": 23.3,
    "color": "Pink",
    "evos": [
      "Musharna"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "musharna": {
    "id": 518,
    "stats": {
      "hp": 116,
      "atk": 55,
      "def": 85,
      "spa": 107,
      "spd": 95,
      "spe": 29
    },
    "abilities": {
      "0": "Forewarn",
      "1": "Synchronize",
      "H": "Telepathy"
    },
    "heightm": 1.1,
    "weightkg": 60.5,
    "color": "Pink",
    "evos": [],
    "prevo": "Munna",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "natu": {
    "id": 177,
    "stats": {
      "hp": 40,
      "atk": 50,
      "def": 45,
      "spa": 70,
      "spd": 45,
      "spe": 70
    },
    "abilities": {
      "0": "Synchronize",
      "1": "Early Bird",
      "H": "Magic Bounce"
    },
    "heightm": 0.2,
    "weightkg": 2,
    "color": "Green",
    "evos": [
      "Xatu"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "nickit": {
    "id": 827,
    "stats": {
      "hp": 40,
      "atk": 28,
      "def": 28,
      "spa": 47,
      "spd": 52,
      "spe": 50
    },
    "abilities": {
      "0": "Run Away",
      "1": "Unburden",
      "H": "Stakeout"
    },
    "heightm": 0.6,
    "weightkg": 8.9,
    "color": "Brown",
    "evos": [
      "Thievul"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "nincada": {
    "id": 290,
    "stats": {
      "hp": 31,
      "atk": 45,
      "def": 90,
      "spa": 30,
      "spd": 30,
      "spe": 40
    },
    "abilities": {
      "0": "Compound Eyes",
      "H": "Run Away"
    },
    "heightm": 0.5,
    "weightkg": 5.5,
    "color": "Gray",
    "evos": [
      "Ninjask",
      "Shedinja"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "ninetales": {
    "id": 38,
    "stats": {
      "hp": 73,
      "atk": 76,
      "def": 75,
      "spa": 81,
      "spd": 100,
      "spe": 100
    },
    "abilities": {
      "0": "Flash Fire",
      "H": "Drought"
    },
    "heightm": 1.1,
    "weightkg": 19.9,
    "color": "Yellow",
    "evos": [],
    "prevo": "Vulpix",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.25,
      "F": 0.75
    },
    "eggGroups": [
      "Field"
    ]
  },
  "ninjask": {
    "id": 291,
    "stats": {
      "hp": 61,
      "atk": 90,
      "def": 45,
      "spa": 50,
      "spd": 50,
      "spe": 160
    },
    "abilities": {
      "0": "Speed Boost",
      "H": "Infiltrator"
    },
    "heightm": 0.8,
    "weightkg": 12,
    "color": "Yellow",
    "evos": [],
    "prevo": "Nincada",
    "evoLevel": 20,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "noctowl": {
    "id": 164,
    "stats": {
      "hp": 100,
      "atk": 50,
      "def": 50,
      "spa": 86,
      "spd": 96,
      "spe": 70
    },
    "abilities": {
      "0": "Insomnia",
      "1": "Keen Eye",
      "H": "Tinted Lens"
    },
    "heightm": 1.6,
    "weightkg": 40.8,
    "color": "Brown",
    "evos": [],
    "prevo": "Hoothoot",
    "evoLevel": 20,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "noibat": {
    "id": 714,
    "stats": {
      "hp": 40,
      "atk": 30,
      "def": 35,
      "spa": 45,
      "spd": 40,
      "spe": 55
    },
    "abilities": {
      "0": "Frisk",
      "1": "Infiltrator",
      "H": "Telepathy"
    },
    "heightm": 0.5,
    "weightkg": 8,
    "color": "Purple",
    "evos": [
      "Noivern"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying",
      "Dragon"
    ]
  },
  "noivern": {
    "id": 715,
    "stats": {
      "hp": 85,
      "atk": 70,
      "def": 80,
      "spa": 97,
      "spd": 80,
      "spe": 123
    },
    "abilities": {
      "0": "Frisk",
      "1": "Infiltrator",
      "H": "Telepathy"
    },
    "heightm": 1.5,
    "weightkg": 85,
    "color": "Purple",
    "evos": [],
    "prevo": "Noibat",
    "evoLevel": 48,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying",
      "Dragon"
    ]
  },
  "nuzleaf": {
    "id": 274,
    "stats": {
      "hp": 70,
      "atk": 70,
      "def": 40,
      "spa": 60,
      "spd": 40,
      "spe": 60
    },
    "abilities": {
      "0": "Chlorophyll",
      "1": "Early Bird",
      "H": "Pickpocket"
    },
    "heightm": 1,
    "weightkg": 28,
    "color": "Brown",
    "evos": [
      "Shiftry"
    ],
    "prevo": "Seedot",
    "evoLevel": 14,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Grass"
    ]
  },
  "obstagoon": {
    "id": 862,
    "stats": {
      "hp": 93,
      "atk": 90,
      "def": 101,
      "spa": 60,
      "spd": 81,
      "spe": 95
    },
    "abilities": {
      "0": "Reckless",
      "1": "Guts",
      "H": "Defiant"
    },
    "heightm": 1.6,
    "weightkg": 46,
    "color": "Gray",
    "evos": [],
    "prevo": "Linoone-Galar",
    "evoLevel": 35,
    "evoCondition": "at night",
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "octillery": {
    "id": 224,
    "stats": {
      "hp": 75,
      "atk": 105,
      "def": 75,
      "spa": 105,
      "spd": 75,
      "spe": 45
    },
    "abilities": {
      "0": "Suction Cups",
      "1": "Sniper",
      "H": "Moody"
    },
    "heightm": 0.9,
    "weightkg": 28.5,
    "color": "Red",
    "evos": [],
    "prevo": "Remoraid",
    "evoLevel": 25,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Water 2"
    ]
  },
  "oddish": {
    "id": 43,
    "stats": {
      "hp": 45,
      "atk": 50,
      "def": 55,
      "spa": 75,
      "spd": 65,
      "spe": 30
    },
    "abilities": {
      "0": "Chlorophyll",
      "H": "Run Away"
    },
    "heightm": 0.5,
    "weightkg": 5.4,
    "color": "Blue",
    "evos": [
      "Gloom"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass"
    ]
  },
  "onix": {
    "id": 95,
    "stats": {
      "hp": 35,
      "atk": 45,
      "def": 160,
      "spa": 30,
      "spd": 45,
      "spe": 70
    },
    "abilities": {
      "0": "Rock Head",
      "1": "Sturdy",
      "H": "Weak Armor"
    },
    "heightm": 8.8,
    "weightkg": 210,
    "color": "Gray",
    "evos": [
      "Steelix"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "oranguru": {
    "id": 765,
    "stats": {
      "hp": 90,
      "atk": 60,
      "def": 80,
      "spa": 90,
      "spd": 110,
      "spe": 60
    },
    "abilities": {
      "0": "Inner Focus",
      "1": "Telepathy",
      "H": "Symbiosis"
    },
    "heightm": 1.5,
    "weightkg": 76,
    "color": "White",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "orbeetle": {
    "id": 826,
    "stats": {
      "hp": 60,
      "atk": 45,
      "def": 110,
      "spa": 80,
      "spd": 120,
      "spe": 90
    },
    "abilities": {
      "0": "Swarm",
      "1": "Frisk",
      "H": "Telepathy"
    },
    "heightm": 0.4,
    "weightkg": 40.8,
    "color": "Red",
    "evos": [],
    "prevo": "Dottler",
    "evoLevel": 30,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "palpitoad": {
    "id": 536,
    "stats": {
      "hp": 75,
      "atk": 65,
      "def": 55,
      "spa": 65,
      "spd": 55,
      "spe": 69
    },
    "abilities": {
      "0": "Swift Swim",
      "1": "Hydration",
      "H": "Water Absorb"
    },
    "heightm": 0.8,
    "weightkg": 17,
    "color": "Blue",
    "evos": [
      "Seismitoad"
    ],
    "prevo": "Tympole",
    "evoLevel": 25,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1"
    ]
  },
  "pancham": {
    "id": 674,
    "stats": {
      "hp": 67,
      "atk": 82,
      "def": 62,
      "spa": 46,
      "spd": 48,
      "spe": 43
    },
    "abilities": {
      "0": "Iron Fist",
      "1": "Mold Breaker",
      "H": "Scrappy"
    },
    "heightm": 0.6,
    "weightkg": 8,
    "color": "White",
    "evos": [
      "Pangoro"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Human-Like"
    ]
  },
  "pangoro": {
    "id": 675,
    "stats": {
      "hp": 95,
      "atk": 124,
      "def": 78,
      "spa": 69,
      "spd": 71,
      "spe": 58
    },
    "abilities": {
      "0": "Iron Fist",
      "1": "Mold Breaker",
      "H": "Scrappy"
    },
    "heightm": 2.1,
    "weightkg": 136,
    "color": "White",
    "evos": [],
    "prevo": "Pancham",
    "evoLevel": 32,
    "evoCondition": "with a Dark-type in the party",
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Human-Like"
    ]
  },
  "passimian": {
    "id": 766,
    "stats": {
      "hp": 100,
      "atk": 120,
      "def": 90,
      "spa": 40,
      "spd": 60,
      "spe": 80
    },
    "abilities": {
      "0": "Receiver",
      "H": "Defiant"
    },
    "heightm": 2,
    "weightkg": 82.8,
    "color": "White",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "pawniard": {
    "id": 624,
    "stats": {
      "hp": 45,
      "atk": 85,
      "def": 70,
      "spa": 40,
      "spd": 40,
      "spe": 60
    },
    "abilities": {
      "0": "Defiant",
      "1": "Inner Focus",
      "H": "Pressure"
    },
    "heightm": 0.5,
    "weightkg": 10.2,
    "color": "Red",
    "evos": [
      "Bisharp"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "pelipper": {
    "id": 279,
    "stats": {
      "hp": 60,
      "atk": 50,
      "def": 100,
      "spa": 95,
      "spd": 70,
      "spe": 65
    },
    "abilities": {
      "0": "Keen Eye",
      "1": "Drizzle",
      "H": "Rain Dish"
    },
    "heightm": 1.2,
    "weightkg": 28,
    "color": "Yellow",
    "evos": [],
    "prevo": "Wingull",
    "evoLevel": 25,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Flying"
    ]
  },
  "perrserker": {
    "id": 863,
    "stats": {
      "hp": 70,
      "atk": 110,
      "def": 100,
      "spa": 50,
      "spd": 60,
      "spe": 50
    },
    "abilities": {
      "0": "Battle Armor",
      "1": "Tough Claws",
      "H": "Steely Spirit"
    },
    "heightm": 0.8,
    "weightkg": 28,
    "color": "Brown",
    "evos": [],
    "prevo": "Meowth-Galar",
    "evoLevel": 28,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "persian": {
    "id": 53,
    "stats": {
      "hp": 65,
      "atk": 70,
      "def": 60,
      "spa": 65,
      "spd": 65,
      "spe": 115
    },
    "abilities": {
      "0": "Limber",
      "1": "Technician",
      "H": "Unnerve"
    },
    "heightm": 1,
    "weightkg": 32,
    "color": "Yellow",
    "evos": [],
    "prevo": "Meowth",
    "evoLevel": 28,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "phantump": {
    "id": 708,
    "stats": {
      "hp": 43,
      "atk": 70,
      "def": 48,
      "spa": 50,
      "spd": 60,
      "spe": 38
    },
    "abilities": {
      "0": "Natural Cure",
      "1": "Frisk",
      "H": "Harvest"
    },
    "heightm": 0.4,
    "weightkg": 7,
    "color": "Brown",
    "evos": [
      "Trevenant"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass",
      "Amorphous"
    ]
  },
  "pichu": {
    "id": 172,
    "stats": {
      "hp": 20,
      "atk": 40,
      "def": 15,
      "spa": 35,
      "spd": 35,
      "spe": 60
    },
    "abilities": {
      "0": "Static",
      "H": "Lightning Rod"
    },
    "heightm": 0.3,
    "weightkg": 2,
    "color": "Yellow",
    "evos": [
      "Pikachu"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "pidove": {
    "id": 519,
    "stats": {
      "hp": 50,
      "atk": 55,
      "def": 50,
      "spa": 36,
      "spd": 30,
      "spe": 43
    },
    "abilities": {
      "0": "Big Pecks",
      "1": "Super Luck",
      "H": "Rivalry"
    },
    "heightm": 0.3,
    "weightkg": 2.1,
    "color": "Gray",
    "evos": [
      "Tranquill"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "pikachu": {
    "id": 25,
    "stats": {
      "hp": 35,
      "atk": 55,
      "def": 40,
      "spa": 50,
      "spd": 50,
      "spe": 90
    },
    "abilities": {
      "0": "Static",
      "H": "Lightning Rod"
    },
    "heightm": 0.4,
    "weightkg": 6,
    "color": "Yellow",
    "evos": [
      "Raichu",
      "Raichu-Alola"
    ],
    "prevo": "Pichu",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Fairy"
    ]
  },
  "piloswine": {
    "id": 221,
    "stats": {
      "hp": 100,
      "atk": 100,
      "def": 80,
      "spa": 60,
      "spd": 60,
      "spe": 50
    },
    "abilities": {
      "0": "Oblivious",
      "1": "Snow Cloak",
      "H": "Thick Fat"
    },
    "heightm": 1.1,
    "weightkg": 55.8,
    "color": "Brown",
    "evos": [
      "Mamoswine"
    ],
    "prevo": "Swinub",
    "evoLevel": 33,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "pincurchin": {
    "id": 871,
    "stats": {
      "hp": 48,
      "atk": 101,
      "def": 95,
      "spa": 91,
      "spd": 85,
      "spe": 15
    },
    "abilities": {
      "0": "Lightning Rod",
      "H": "Electric Surge"
    },
    "heightm": 0.3,
    "weightkg": 1,
    "color": "Purple",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Amorphous"
    ]
  },
  "polteageist": {
    "id": 855,
    "stats": {
      "hp": 60,
      "atk": 65,
      "def": 65,
      "spa": 134,
      "spd": 114,
      "spe": 70
    },
    "abilities": {
      "0": "Weak Armor",
      "H": "Cursed Body"
    },
    "heightm": 0.2,
    "weightkg": 0.4,
    "color": "Purple",
    "evos": [],
    "prevo": "Sinistea",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral",
      "Amorphous"
    ]
  },
  "ponyta": {
    "id": 77,
    "stats": {
      "hp": 50,
      "atk": 85,
      "def": 55,
      "spa": 65,
      "spd": 65,
      "spe": 90
    },
    "abilities": {
      "0": "Run Away",
      "1": "Flash Fire",
      "H": "Flame Body"
    },
    "heightm": 1,
    "weightkg": 30,
    "color": "Yellow",
    "evos": [
      "Rapidash"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "pumpkaboo": {
    "id": 710,
    "stats": {
      "hp": 49,
      "atk": 66,
      "def": 70,
      "spa": 44,
      "spd": 55,
      "spe": 51
    },
    "abilities": {
      "0": "Pickup",
      "1": "Frisk",
      "H": "Insomnia"
    },
    "heightm": 0.4,
    "weightkg": 5,
    "color": "Brown",
    "evos": [
      "Gourgeist"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "pupitar": {
    "id": 247,
    "stats": {
      "hp": 70,
      "atk": 84,
      "def": 70,
      "spa": 65,
      "spd": 70,
      "spe": 51
    },
    "abilities": {
      "0": "Shed Skin"
    },
    "heightm": 1.2,
    "weightkg": 152,
    "color": "Gray",
    "evos": [
      "Tyranitar"
    ],
    "prevo": "Larvitar",
    "evoLevel": 30,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster"
    ]
  },
  "purrloin": {
    "id": 509,
    "stats": {
      "hp": 41,
      "atk": 50,
      "def": 37,
      "spa": 50,
      "spd": 37,
      "spe": 66
    },
    "abilities": {
      "0": "Limber",
      "1": "Unburden",
      "H": "Prankster"
    },
    "heightm": 0.4,
    "weightkg": 10.1,
    "color": "Purple",
    "evos": [
      "Liepard"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "pyukumuku": {
    "id": 771,
    "stats": {
      "hp": 55,
      "atk": 60,
      "def": 130,
      "spa": 30,
      "spd": 130,
      "spe": 5
    },
    "abilities": {
      "0": "Innards Out",
      "H": "Unaware"
    },
    "heightm": 0.3,
    "weightkg": 1.2,
    "color": "Black",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1"
    ]
  },
  "quagsire": {
    "id": 195,
    "stats": {
      "hp": 95,
      "atk": 85,
      "def": 85,
      "spa": 65,
      "spd": 65,
      "spe": 35
    },
    "abilities": {
      "0": "Damp",
      "1": "Water Absorb",
      "H": "Unaware"
    },
    "heightm": 1.4,
    "weightkg": 75,
    "color": "Blue",
    "evos": [],
    "prevo": "Wooper",
    "evoLevel": 20,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Field"
    ]
  },
  "qwilfish": {
    "id": 211,
    "stats": {
      "hp": 65,
      "atk": 95,
      "def": 85,
      "spa": 55,
      "spd": 55,
      "spe": 85
    },
    "abilities": {
      "0": "Poison Point",
      "1": "Swift Swim",
      "H": "Intimidate"
    },
    "heightm": 0.5,
    "weightkg": 3.9,
    "color": "Gray",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 2"
    ]
  },
  "raboot": {
    "id": 814,
    "stats": {
      "hp": 65,
      "atk": 86,
      "def": 60,
      "spa": 55,
      "spd": 60,
      "spe": 94
    },
    "abilities": {
      "0": "Blaze",
      "H": "Libero"
    },
    "heightm": 0.6,
    "weightkg": 9,
    "color": "Gray",
    "evos": [
      "Cinderace"
    ],
    "prevo": "Scorbunny",
    "evoLevel": 16,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field",
      "Human-Like"
    ]
  },
  "raichu": {
    "id": 26,
    "stats": {
      "hp": 60,
      "atk": 90,
      "def": 55,
      "spa": 90,
      "spd": 80,
      "spe": 110
    },
    "abilities": {
      "0": "Static",
      "H": "Lightning Rod"
    },
    "heightm": 0.8,
    "weightkg": 30,
    "color": "Yellow",
    "evos": [],
    "prevo": "Pikachu",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Fairy"
    ]
  },
  "ralts": {
    "id": 280,
    "stats": {
      "hp": 28,
      "atk": 25,
      "def": 25,
      "spa": 45,
      "spd": 35,
      "spe": 40
    },
    "abilities": {
      "0": "Synchronize",
      "1": "Trace",
      "H": "Telepathy"
    },
    "heightm": 0.4,
    "weightkg": 6.6,
    "color": "White",
    "evos": [
      "Kirlia"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like",
      "Amorphous"
    ]
  },
  "rapidash": {
    "id": 78,
    "stats": {
      "hp": 65,
      "atk": 100,
      "def": 70,
      "spa": 80,
      "spd": 80,
      "spe": 105
    },
    "abilities": {
      "0": "Run Away",
      "1": "Flash Fire",
      "H": "Flame Body"
    },
    "heightm": 1.7,
    "weightkg": 95,
    "color": "Yellow",
    "evos": [],
    "prevo": "Ponyta",
    "evoLevel": 40,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "remoraid": {
    "id": 223,
    "stats": {
      "hp": 35,
      "atk": 65,
      "def": 35,
      "spa": 65,
      "spd": 35,
      "spe": 65
    },
    "abilities": {
      "0": "Hustle",
      "1": "Sniper",
      "H": "Moody"
    },
    "heightm": 0.6,
    "weightkg": 12,
    "color": "Gray",
    "evos": [
      "Octillery"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Water 2"
    ]
  },
  "reuniclus": {
    "id": 579,
    "stats": {
      "hp": 110,
      "atk": 65,
      "def": 75,
      "spa": 125,
      "spd": 85,
      "spe": 30
    },
    "abilities": {
      "0": "Overcoat",
      "1": "Magic Guard",
      "H": "Regenerator"
    },
    "heightm": 1,
    "weightkg": 20.1,
    "color": "Green",
    "evos": [],
    "prevo": "Duosion",
    "evoLevel": 41,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "rhydon": {
    "id": 112,
    "stats": {
      "hp": 105,
      "atk": 130,
      "def": 120,
      "spa": 45,
      "spd": 45,
      "spe": 40
    },
    "abilities": {
      "0": "Lightning Rod",
      "1": "Rock Head",
      "H": "Reckless"
    },
    "heightm": 1.9,
    "weightkg": 120,
    "color": "Gray",
    "evos": [
      "Rhyperior"
    ],
    "prevo": "Rhyhorn",
    "evoLevel": 42,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Field"
    ]
  },
  "rhyhorn": {
    "id": 111,
    "stats": {
      "hp": 80,
      "atk": 85,
      "def": 95,
      "spa": 30,
      "spd": 30,
      "spe": 25
    },
    "abilities": {
      "0": "Lightning Rod",
      "1": "Rock Head",
      "H": "Reckless"
    },
    "heightm": 1,
    "weightkg": 115,
    "color": "Gray",
    "evos": [
      "Rhydon"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Field"
    ]
  },
  "rhyperior": {
    "id": 464,
    "stats": {
      "hp": 115,
      "atk": 140,
      "def": 130,
      "spa": 55,
      "spd": 55,
      "spe": 40
    },
    "abilities": {
      "0": "Lightning Rod",
      "1": "Solid Rock",
      "H": "Reckless"
    },
    "heightm": 2.4,
    "weightkg": 282.8,
    "color": "Gray",
    "evos": [],
    "prevo": "Rhydon",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Field"
    ]
  },
  "ribombee": {
    "id": 743,
    "stats": {
      "hp": 60,
      "atk": 55,
      "def": 60,
      "spa": 95,
      "spd": 70,
      "spe": 124
    },
    "abilities": {
      "0": "Honey Gather",
      "1": "Shield Dust",
      "H": "Sweet Veil"
    },
    "heightm": 0.2,
    "weightkg": 0.5,
    "color": "Yellow",
    "evos": [],
    "prevo": "Cutiefly",
    "evoLevel": 25,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug",
      "Fairy"
    ]
  },
  "rillaboom": {
    "id": 812,
    "stats": {
      "hp": 100,
      "atk": 125,
      "def": 90,
      "spa": 60,
      "spd": 70,
      "spe": 85
    },
    "abilities": {
      "0": "Overgrow",
      "H": "Grassy Surge"
    },
    "heightm": 2.1,
    "weightkg": 90,
    "color": "Green",
    "evos": [],
    "prevo": "Thwackey",
    "evoLevel": 35,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field",
      "Grass"
    ]
  },
  "riolu": {
    "id": 447,
    "stats": {
      "hp": 40,
      "atk": 70,
      "def": 40,
      "spa": 35,
      "spd": 40,
      "spe": 60
    },
    "abilities": {
      "0": "Steadfast",
      "1": "Inner Focus",
      "H": "Prankster"
    },
    "heightm": 0.7,
    "weightkg": 20.2,
    "color": "Blue",
    "evos": [
      "Lucario"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "roggenrola": {
    "id": 524,
    "stats": {
      "hp": 55,
      "atk": 75,
      "def": 85,
      "spa": 25,
      "spd": 25,
      "spe": 15
    },
    "abilities": {
      "0": "Sturdy",
      "1": "Weak Armor",
      "H": "Sand Force"
    },
    "heightm": 0.4,
    "weightkg": 18,
    "color": "Blue",
    "evos": [
      "Boldore"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "rolycoly": {
    "id": 837,
    "stats": {
      "hp": 30,
      "atk": 40,
      "def": 50,
      "spa": 40,
      "spd": 50,
      "spe": 30
    },
    "abilities": {
      "0": "Steam Engine",
      "1": "Heatproof",
      "H": "Flash Fire"
    },
    "heightm": 0.3,
    "weightkg": 12,
    "color": "Black",
    "evos": [
      "Carkol"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "rookidee": {
    "id": 821,
    "stats": {
      "hp": 38,
      "atk": 47,
      "def": 35,
      "spa": 33,
      "spd": 35,
      "spe": 57
    },
    "abilities": {
      "0": "Keen Eye",
      "1": "Unnerve",
      "H": "Big Pecks"
    },
    "heightm": 0.2,
    "weightkg": 1.8,
    "color": "Blue",
    "evos": [
      "Corvisquire"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "roselia": {
    "id": 315,
    "stats": {
      "hp": 50,
      "atk": 60,
      "def": 45,
      "spa": 100,
      "spd": 80,
      "spe": 65
    },
    "abilities": {
      "0": "Natural Cure",
      "1": "Poison Point",
      "H": "Leaf Guard"
    },
    "heightm": 0.3,
    "weightkg": 2,
    "color": "Green",
    "evos": [
      "Roserade"
    ],
    "prevo": "Budew",
    "evoLevel": null,
    "evoCondition": "during the day",
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Grass"
    ]
  },
  "roserade": {
    "id": 407,
    "stats": {
      "hp": 60,
      "atk": 70,
      "def": 65,
      "spa": 125,
      "spd": 105,
      "spe": 90
    },
    "abilities": {
      "0": "Natural Cure",
      "1": "Poison Point",
      "H": "Technician"
    },
    "heightm": 0.9,
    "weightkg": 14.5,
    "color": "Green",
    "evos": [],
    "prevo": "Roselia",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Grass"
    ]
  },
  "rotom": {
    "id": 479,
    "stats": {
      "hp": 50,
      "atk": 50,
      "def": 77,
      "spa": 95,
      "spd": 77,
      "spe": 91
    },
    "abilities": {
      "0": "Levitate"
    },
    "heightm": 0.3,
    "weightkg": 0.3,
    "color": "Red",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "rufflet": {
    "id": 627,
    "stats": {
      "hp": 70,
      "atk": 83,
      "def": 50,
      "spa": 37,
      "spd": 50,
      "spe": 60
    },
    "abilities": {
      "0": "Keen Eye",
      "1": "Sheer Force",
      "H": "Hustle"
    },
    "heightm": 0.5,
    "weightkg": 10.5,
    "color": "White",
    "evos": [
      "Braviary",
      "Braviary-Hisui"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "runerigus": {
    "id": 867,
    "stats": {
      "hp": 58,
      "atk": 95,
      "def": 145,
      "spa": 50,
      "spd": 105,
      "spe": 30
    },
    "abilities": {
      "0": "Wandering Spirit"
    },
    "heightm": 1.6,
    "weightkg": 66.6,
    "color": "Gray",
    "evos": [],
    "prevo": "Yamask-Galar",
    "evoLevel": null,
    "evoCondition": "Have 49+ HP lost and walk under stone sculpture in Dusty Bowl",
    "genderRatio": null,
    "eggGroups": [
      "Mineral",
      "Amorphous"
    ]
  },
  "sableye": {
    "id": 302,
    "stats": {
      "hp": 50,
      "atk": 75,
      "def": 75,
      "spa": 65,
      "spd": 65,
      "spe": 50
    },
    "abilities": {
      "0": "Keen Eye",
      "1": "Stall",
      "H": "Prankster"
    },
    "heightm": 0.5,
    "weightkg": 11,
    "color": "Purple",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "salandit": {
    "id": 757,
    "stats": {
      "hp": 48,
      "atk": 44,
      "def": 40,
      "spa": 71,
      "spd": 40,
      "spe": 77
    },
    "abilities": {
      "0": "Corrosion",
      "H": "Oblivious"
    },
    "heightm": 0.6,
    "weightkg": 4.8,
    "color": "Black",
    "evos": [
      "Salazzle"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Monster",
      "Dragon"
    ]
  },
  "salazzle": {
    "id": 758,
    "stats": {
      "hp": 68,
      "atk": 64,
      "def": 60,
      "spa": 111,
      "spd": 60,
      "spe": 117
    },
    "abilities": {
      "0": "Corrosion",
      "H": "Oblivious"
    },
    "heightm": 1.2,
    "weightkg": 22.2,
    "color": "Black",
    "evos": [],
    "prevo": "Salandit",
    "evoLevel": 33,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Dragon"
    ]
  },
  "sandaconda": {
    "id": 844,
    "stats": {
      "hp": 72,
      "atk": 107,
      "def": 125,
      "spa": 65,
      "spd": 70,
      "spe": 71
    },
    "abilities": {
      "0": "Sand Spit",
      "1": "Shed Skin",
      "H": "Sand Veil"
    },
    "heightm": 3.8,
    "weightkg": 65.5,
    "color": "Green",
    "evos": [],
    "prevo": "Silicobra",
    "evoLevel": 36,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Dragon"
    ]
  },
  "sawk": {
    "id": 539,
    "stats": {
      "hp": 75,
      "atk": 125,
      "def": 75,
      "spa": 30,
      "spd": 75,
      "spe": 85
    },
    "abilities": {
      "0": "Sturdy",
      "1": "Inner Focus",
      "H": "Mold Breaker"
    },
    "heightm": 1.4,
    "weightkg": 51,
    "color": "Blue",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "scorbunny": {
    "id": 813,
    "stats": {
      "hp": 50,
      "atk": 71,
      "def": 40,
      "spa": 40,
      "spd": 40,
      "spe": 69
    },
    "abilities": {
      "0": "Blaze",
      "H": "Libero"
    },
    "heightm": 0.3,
    "weightkg": 4.5,
    "color": "White",
    "evos": [
      "Raboot"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field",
      "Human-Like"
    ]
  },
  "scrafty": {
    "id": 560,
    "stats": {
      "hp": 65,
      "atk": 90,
      "def": 115,
      "spa": 45,
      "spd": 115,
      "spe": 58
    },
    "abilities": {
      "0": "Shed Skin",
      "1": "Moxie",
      "H": "Intimidate"
    },
    "heightm": 1.1,
    "weightkg": 30,
    "color": "Red",
    "evos": [],
    "prevo": "Scraggy",
    "evoLevel": 39,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Dragon"
    ]
  },
  "scraggy": {
    "id": 559,
    "stats": {
      "hp": 50,
      "atk": 75,
      "def": 70,
      "spa": 35,
      "spd": 70,
      "spe": 48
    },
    "abilities": {
      "0": "Shed Skin",
      "1": "Moxie",
      "H": "Intimidate"
    },
    "heightm": 0.6,
    "weightkg": 11.8,
    "color": "Yellow",
    "evos": [
      "Scrafty"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Dragon"
    ]
  },
  "seaking": {
    "id": 119,
    "stats": {
      "hp": 80,
      "atk": 92,
      "def": 65,
      "spa": 65,
      "spd": 80,
      "spe": 68
    },
    "abilities": {
      "0": "Swift Swim",
      "1": "Water Veil",
      "H": "Lightning Rod"
    },
    "heightm": 1.3,
    "weightkg": 39,
    "color": "Red",
    "evos": [],
    "prevo": "Goldeen",
    "evoLevel": 33,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 2"
    ]
  },
  "seedot": {
    "id": 273,
    "stats": {
      "hp": 40,
      "atk": 40,
      "def": 50,
      "spa": 30,
      "spd": 30,
      "spe": 30
    },
    "abilities": {
      "0": "Chlorophyll",
      "1": "Early Bird",
      "H": "Pickpocket"
    },
    "heightm": 0.5,
    "weightkg": 4,
    "color": "Brown",
    "evos": [
      "Nuzleaf"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Grass"
    ]
  },
  "seismitoad": {
    "id": 537,
    "stats": {
      "hp": 105,
      "atk": 95,
      "def": 75,
      "spa": 85,
      "spd": 75,
      "spe": 74
    },
    "abilities": {
      "0": "Swift Swim",
      "1": "Poison Touch",
      "H": "Water Absorb"
    },
    "heightm": 1.5,
    "weightkg": 62,
    "color": "Blue",
    "evos": [],
    "prevo": "Palpitoad",
    "evoLevel": 36,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1"
    ]
  },
  "shedinja": {
    "id": 292,
    "stats": {
      "hp": 1,
      "atk": 90,
      "def": 45,
      "spa": 30,
      "spd": 30,
      "spe": 40
    },
    "abilities": {
      "0": "Wonder Guard"
    },
    "heightm": 0.8,
    "weightkg": 1.2,
    "color": "Brown",
    "evos": [],
    "prevo": "Nincada",
    "evoLevel": 20,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "shellder": {
    "id": 90,
    "stats": {
      "hp": 30,
      "atk": 65,
      "def": 100,
      "spa": 45,
      "spd": 25,
      "spe": 40
    },
    "abilities": {
      "0": "Shell Armor",
      "1": "Skill Link",
      "H": "Overcoat"
    },
    "heightm": 0.3,
    "weightkg": 4,
    "color": "Purple",
    "evos": [
      "Cloyster"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 3"
    ]
  },
  "shellos": {
    "id": 422,
    "stats": {
      "hp": 76,
      "atk": 48,
      "def": 48,
      "spa": 57,
      "spd": 62,
      "spe": 34
    },
    "abilities": {
      "0": "Sticky Hold",
      "1": "Storm Drain",
      "H": "Sand Force"
    },
    "heightm": 0.3,
    "weightkg": 6.3,
    "color": "Purple",
    "evos": [
      "Gastrodon"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Amorphous"
    ]
  },
  "shelmet": {
    "id": 616,
    "stats": {
      "hp": 50,
      "atk": 40,
      "def": 85,
      "spa": 40,
      "spd": 65,
      "spe": 25
    },
    "abilities": {
      "0": "Hydration",
      "1": "Shell Armor",
      "H": "Overcoat"
    },
    "heightm": 0.4,
    "weightkg": 7.7,
    "color": "Red",
    "evos": [
      "Accelgor"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "shiftry": {
    "id": 275,
    "stats": {
      "hp": 90,
      "atk": 100,
      "def": 60,
      "spa": 90,
      "spd": 60,
      "spe": 80
    },
    "abilities": {
      "0": "Chlorophyll",
      "1": "Wind Rider",
      "H": "Pickpocket"
    },
    "heightm": 1.3,
    "weightkg": 59.6,
    "color": "Brown",
    "evos": [],
    "prevo": "Nuzleaf",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Grass"
    ]
  },
  "shiinotic": {
    "id": 756,
    "stats": {
      "hp": 60,
      "atk": 45,
      "def": 80,
      "spa": 90,
      "spd": 100,
      "spe": 30
    },
    "abilities": {
      "0": "Illuminate",
      "1": "Effect Spore",
      "H": "Rain Dish"
    },
    "heightm": 1,
    "weightkg": 11.5,
    "color": "Purple",
    "evos": [],
    "prevo": "Morelull",
    "evoLevel": 24,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass"
    ]
  },
  "shuckle": {
    "id": 213,
    "stats": {
      "hp": 20,
      "atk": 10,
      "def": 230,
      "spa": 10,
      "spd": 230,
      "spe": 5
    },
    "abilities": {
      "0": "Sturdy",
      "1": "Gluttony",
      "H": "Contrary"
    },
    "heightm": 0.6,
    "weightkg": 20.5,
    "color": "Yellow",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "sigilyph": {
    "id": 561,
    "stats": {
      "hp": 72,
      "atk": 58,
      "def": 80,
      "spa": 103,
      "spd": 80,
      "spe": 97
    },
    "abilities": {
      "0": "Wonder Skin",
      "1": "Magic Guard",
      "H": "Tinted Lens"
    },
    "heightm": 1.4,
    "weightkg": 14,
    "color": "Black",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "silicobra": {
    "id": 843,
    "stats": {
      "hp": 52,
      "atk": 57,
      "def": 75,
      "spa": 35,
      "spd": 50,
      "spe": 46
    },
    "abilities": {
      "0": "Sand Spit",
      "1": "Shed Skin",
      "H": "Sand Veil"
    },
    "heightm": 2.2,
    "weightkg": 7.6,
    "color": "Green",
    "evos": [
      "Sandaconda"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Dragon"
    ]
  },
  "silvally": {
    "id": 773,
    "stats": {
      "hp": 95,
      "atk": 95,
      "def": 95,
      "spa": 95,
      "spd": 95,
      "spe": 95
    },
    "abilities": {
      "0": "RKS System"
    },
    "heightm": 2.3,
    "weightkg": 100.5,
    "color": "Gray",
    "evos": [],
    "prevo": "Type: Null",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "sinistea": {
    "id": 854,
    "stats": {
      "hp": 40,
      "atk": 45,
      "def": 45,
      "spa": 74,
      "spd": 54,
      "spe": 50
    },
    "abilities": {
      "0": "Weak Armor",
      "H": "Cursed Body"
    },
    "heightm": 0.1,
    "weightkg": 0.2,
    "color": "Purple",
    "evos": [
      "Polteageist"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral",
      "Amorphous"
    ]
  },
  "sirfetchd": {
    "id": 865,
    "stats": {
      "hp": 62,
      "atk": 135,
      "def": 95,
      "spa": 68,
      "spd": 82,
      "spe": 65
    },
    "abilities": {
      "0": "Steadfast",
      "H": "Scrappy"
    },
    "heightm": 0.8,
    "weightkg": 117,
    "color": "White",
    "evos": [],
    "prevo": "Farfetch’d-Galar",
    "evoLevel": null,
    "evoCondition": "Land 3 critical hits in 1 battle",
    "genderRatio": null,
    "eggGroups": [
      "Flying",
      "Field"
    ]
  },
  "sizzlipede": {
    "id": 850,
    "stats": {
      "hp": 50,
      "atk": 65,
      "def": 45,
      "spa": 50,
      "spd": 50,
      "spe": 45
    },
    "abilities": {
      "0": "Flash Fire",
      "1": "White Smoke",
      "H": "Flame Body"
    },
    "heightm": 0.7,
    "weightkg": 1,
    "color": "Red",
    "evos": [
      "Centiskorch"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "skorupi": {
    "id": 451,
    "stats": {
      "hp": 40,
      "atk": 50,
      "def": 90,
      "spa": 30,
      "spd": 55,
      "spe": 65
    },
    "abilities": {
      "0": "Battle Armor",
      "1": "Sniper",
      "H": "Keen Eye"
    },
    "heightm": 0.8,
    "weightkg": 12,
    "color": "Purple",
    "evos": [
      "Drapion"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug",
      "Water 3"
    ]
  },
  "skuntank": {
    "id": 435,
    "stats": {
      "hp": 103,
      "atk": 93,
      "def": 67,
      "spa": 71,
      "spd": 61,
      "spe": 84
    },
    "abilities": {
      "0": "Stench",
      "1": "Aftermath",
      "H": "Keen Eye"
    },
    "heightm": 1,
    "weightkg": 38,
    "color": "Purple",
    "evos": [],
    "prevo": "Stunky",
    "evoLevel": 34,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "skwovet": {
    "id": 819,
    "stats": {
      "hp": 70,
      "atk": 55,
      "def": 55,
      "spa": 35,
      "spd": 35,
      "spe": 25
    },
    "abilities": {
      "0": "Cheek Pouch",
      "H": "Gluttony"
    },
    "heightm": 0.3,
    "weightkg": 2.5,
    "color": "Brown",
    "evos": [
      "Greedent"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "sliggoo": {
    "id": 705,
    "stats": {
      "hp": 68,
      "atk": 75,
      "def": 53,
      "spa": 83,
      "spd": 113,
      "spe": 60
    },
    "abilities": {
      "0": "Sap Sipper",
      "1": "Hydration",
      "H": "Gooey"
    },
    "heightm": 0.8,
    "weightkg": 17.5,
    "color": "Purple",
    "evos": [
      "Goodra"
    ],
    "prevo": "Goomy",
    "evoLevel": 40,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Dragon"
    ]
  },
  "slurpuff": {
    "id": 685,
    "stats": {
      "hp": 82,
      "atk": 80,
      "def": 86,
      "spa": 85,
      "spd": 75,
      "spe": 72
    },
    "abilities": {
      "0": "Sweet Veil",
      "H": "Unburden"
    },
    "heightm": 0.8,
    "weightkg": 5,
    "color": "White",
    "evos": [],
    "prevo": "Swirlix",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy"
    ]
  },
  "sneasel": {
    "id": 215,
    "stats": {
      "hp": 55,
      "atk": 95,
      "def": 55,
      "spa": 35,
      "spd": 75,
      "spe": 115
    },
    "abilities": {
      "0": "Inner Focus",
      "1": "Keen Eye",
      "H": "Pickpocket"
    },
    "heightm": 0.9,
    "weightkg": 28,
    "color": "Black",
    "evos": [
      "Weavile"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "snom": {
    "id": 872,
    "stats": {
      "hp": 30,
      "atk": 25,
      "def": 35,
      "spa": 45,
      "spd": 30,
      "spe": 20
    },
    "abilities": {
      "0": "Shield Dust",
      "H": "Ice Scales"
    },
    "heightm": 0.3,
    "weightkg": 3.8,
    "color": "White",
    "evos": [
      "Frosmoth"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "snorlax": {
    "id": 143,
    "stats": {
      "hp": 160,
      "atk": 110,
      "def": 65,
      "spa": 65,
      "spd": 110,
      "spe": 30
    },
    "abilities": {
      "0": "Immunity",
      "1": "Thick Fat",
      "H": "Gluttony"
    },
    "heightm": 2.1,
    "weightkg": 460,
    "color": "Black",
    "evos": [],
    "prevo": "Munchlax",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Monster"
    ]
  },
  "snorunt": {
    "id": 361,
    "stats": {
      "hp": 50,
      "atk": 50,
      "def": 50,
      "spa": 50,
      "spd": 50,
      "spe": 50
    },
    "abilities": {
      "0": "Inner Focus",
      "1": "Ice Body",
      "H": "Moody"
    },
    "heightm": 0.7,
    "weightkg": 16.8,
    "color": "Gray",
    "evos": [
      "Glalie",
      "Froslass"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Mineral"
    ]
  },
  "snover": {
    "id": 459,
    "stats": {
      "hp": 60,
      "atk": 62,
      "def": 50,
      "spa": 62,
      "spd": 60,
      "spe": 40
    },
    "abilities": {
      "0": "Snow Warning",
      "H": "Soundproof"
    },
    "heightm": 1,
    "weightkg": 50.5,
    "color": "White",
    "evos": [
      "Abomasnow"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Grass"
    ]
  },
  "sobble": {
    "id": 816,
    "stats": {
      "hp": 50,
      "atk": 40,
      "def": 40,
      "spa": 70,
      "spd": 40,
      "spe": 70
    },
    "abilities": {
      "0": "Torrent",
      "H": "Sniper"
    },
    "heightm": 0.3,
    "weightkg": 4,
    "color": "Blue",
    "evos": [
      "Drizzile"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Water 1",
      "Field"
    ]
  },
  "solosis": {
    "id": 577,
    "stats": {
      "hp": 45,
      "atk": 30,
      "def": 40,
      "spa": 105,
      "spd": 50,
      "spe": 20
    },
    "abilities": {
      "0": "Overcoat",
      "1": "Magic Guard",
      "H": "Regenerator"
    },
    "heightm": 0.3,
    "weightkg": 1,
    "color": "Green",
    "evos": [
      "Duosion"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "solrock": {
    "id": 338,
    "stats": {
      "hp": 90,
      "atk": 95,
      "def": 85,
      "spa": 55,
      "spd": 65,
      "spe": 70
    },
    "abilities": {
      "0": "Levitate"
    },
    "heightm": 1.2,
    "weightkg": 154,
    "color": "Red",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "spritzee": {
    "id": 682,
    "stats": {
      "hp": 78,
      "atk": 52,
      "def": 60,
      "spa": 63,
      "spd": 65,
      "spe": 23
    },
    "abilities": {
      "0": "Healer",
      "H": "Aroma Veil"
    },
    "heightm": 0.2,
    "weightkg": 0.5,
    "color": "Pink",
    "evos": [
      "Aromatisse"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy"
    ]
  },
  "steelix": {
    "id": 208,
    "stats": {
      "hp": 75,
      "atk": 85,
      "def": 200,
      "spa": 55,
      "spd": 65,
      "spe": 30
    },
    "abilities": {
      "0": "Rock Head",
      "1": "Sturdy",
      "H": "Sheer Force"
    },
    "heightm": 9.2,
    "weightkg": 400,
    "color": "Gray",
    "evos": [],
    "prevo": "Onix",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "steenee": {
    "id": 762,
    "stats": {
      "hp": 52,
      "atk": 40,
      "def": 48,
      "spa": 40,
      "spd": 48,
      "spe": 62
    },
    "abilities": {
      "0": "Leaf Guard",
      "1": "Oblivious",
      "H": "Sweet Veil"
    },
    "heightm": 0.7,
    "weightkg": 8.2,
    "color": "Purple",
    "evos": [
      "Tsareena"
    ],
    "prevo": "Bounsweet",
    "evoLevel": 18,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass"
    ]
  },
  "stonjourner": {
    "id": 874,
    "stats": {
      "hp": 100,
      "atk": 125,
      "def": 135,
      "spa": 20,
      "spd": 20,
      "spe": 70
    },
    "abilities": {
      "0": "Power Spot"
    },
    "heightm": 2.5,
    "weightkg": 520,
    "color": "Gray",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "stufful": {
    "id": 759,
    "stats": {
      "hp": 70,
      "atk": 75,
      "def": 50,
      "spa": 45,
      "spd": 50,
      "spe": 50
    },
    "abilities": {
      "0": "Fluffy",
      "1": "Klutz",
      "H": "Cute Charm"
    },
    "heightm": 0.5,
    "weightkg": 6.8,
    "color": "Pink",
    "evos": [
      "Bewear"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "stunfisk": {
    "id": 618,
    "stats": {
      "hp": 109,
      "atk": 66,
      "def": 84,
      "spa": 81,
      "spd": 99,
      "spe": 32
    },
    "abilities": {
      "0": "Static",
      "1": "Limber",
      "H": "Sand Veil"
    },
    "heightm": 0.7,
    "weightkg": 11,
    "color": "Brown",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Amorphous"
    ]
  },
  "stunky": {
    "id": 434,
    "stats": {
      "hp": 63,
      "atk": 63,
      "def": 47,
      "spa": 41,
      "spd": 41,
      "spe": 74
    },
    "abilities": {
      "0": "Stench",
      "1": "Aftermath",
      "H": "Keen Eye"
    },
    "heightm": 0.4,
    "weightkg": 19.2,
    "color": "Purple",
    "evos": [
      "Skuntank"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "sudowoodo": {
    "id": 185,
    "stats": {
      "hp": 70,
      "atk": 100,
      "def": 115,
      "spa": 30,
      "spd": 65,
      "spe": 30
    },
    "abilities": {
      "0": "Sturdy",
      "1": "Rock Head",
      "H": "Rattled"
    },
    "heightm": 1.2,
    "weightkg": 38,
    "color": "Brown",
    "evos": [],
    "prevo": "Bonsly",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "swinub": {
    "id": 220,
    "stats": {
      "hp": 50,
      "atk": 50,
      "def": 40,
      "spa": 30,
      "spd": 30,
      "spe": 50
    },
    "abilities": {
      "0": "Oblivious",
      "1": "Snow Cloak",
      "H": "Thick Fat"
    },
    "heightm": 0.4,
    "weightkg": 6.5,
    "color": "Brown",
    "evos": [
      "Piloswine"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "swirlix": {
    "id": 684,
    "stats": {
      "hp": 62,
      "atk": 48,
      "def": 66,
      "spa": 59,
      "spd": 57,
      "spe": 49
    },
    "abilities": {
      "0": "Sweet Veil",
      "H": "Unburden"
    },
    "heightm": 0.4,
    "weightkg": 3.5,
    "color": "White",
    "evos": [
      "Slurpuff"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy"
    ]
  },
  "swoobat": {
    "id": 528,
    "stats": {
      "hp": 67,
      "atk": 57,
      "def": 55,
      "spa": 77,
      "spd": 55,
      "spe": 114
    },
    "abilities": {
      "0": "Unaware",
      "1": "Klutz",
      "H": "Simple"
    },
    "heightm": 0.9,
    "weightkg": 10.5,
    "color": "Blue",
    "evos": [],
    "prevo": "Woobat",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying",
      "Field"
    ]
  },
  "sylveon": {
    "id": 700,
    "stats": {
      "hp": 95,
      "atk": 65,
      "def": 65,
      "spa": 110,
      "spd": 130,
      "spe": 60
    },
    "abilities": {
      "0": "Cute Charm",
      "H": "Pixilate"
    },
    "heightm": 1,
    "weightkg": 23.5,
    "color": "Pink",
    "evos": [],
    "prevo": "Eevee",
    "evoLevel": null,
    "evoCondition": "with a Fairy-type move and two levels of Affection",
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field"
    ]
  },
  "thievul": {
    "id": 828,
    "stats": {
      "hp": 70,
      "atk": 58,
      "def": 58,
      "spa": 87,
      "spd": 92,
      "spe": 90
    },
    "abilities": {
      "0": "Run Away",
      "1": "Unburden",
      "H": "Stakeout"
    },
    "heightm": 1.2,
    "weightkg": 19.9,
    "color": "Brown",
    "evos": [],
    "prevo": "Nickit",
    "evoLevel": 18,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "throh": {
    "id": 538,
    "stats": {
      "hp": 120,
      "atk": 100,
      "def": 85,
      "spa": 30,
      "spd": 85,
      "spe": 45
    },
    "abilities": {
      "0": "Guts",
      "1": "Inner Focus",
      "H": "Mold Breaker"
    },
    "heightm": 1.3,
    "weightkg": 55.5,
    "color": "Red",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "thwackey": {
    "id": 811,
    "stats": {
      "hp": 70,
      "atk": 85,
      "def": 70,
      "spa": 55,
      "spd": 60,
      "spe": 80
    },
    "abilities": {
      "0": "Overgrow",
      "H": "Grassy Surge"
    },
    "heightm": 0.7,
    "weightkg": 14,
    "color": "Green",
    "evos": [
      "Rillaboom"
    ],
    "prevo": "Grookey",
    "evoLevel": 16,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field",
      "Grass"
    ]
  },
  "timburr": {
    "id": 532,
    "stats": {
      "hp": 75,
      "atk": 80,
      "def": 55,
      "spa": 25,
      "spd": 35,
      "spe": 35
    },
    "abilities": {
      "0": "Guts",
      "1": "Sheer Force",
      "H": "Iron Fist"
    },
    "heightm": 0.6,
    "weightkg": 12.5,
    "color": "Gray",
    "evos": [
      "Gurdurr"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.75,
      "F": 0.25
    },
    "eggGroups": [
      "Human-Like"
    ]
  },
  "togedemaru": {
    "id": 777,
    "stats": {
      "hp": 65,
      "atk": 98,
      "def": 63,
      "spa": 40,
      "spd": 73,
      "spe": 96
    },
    "abilities": {
      "0": "Iron Barbs",
      "1": "Lightning Rod",
      "H": "Sturdy"
    },
    "heightm": 0.3,
    "weightkg": 3.3,
    "color": "Gray",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Fairy"
    ]
  },
  "togekiss": {
    "id": 468,
    "stats": {
      "hp": 85,
      "atk": 50,
      "def": 95,
      "spa": 120,
      "spd": 115,
      "spe": 80
    },
    "abilities": {
      "0": "Hustle",
      "1": "Serene Grace",
      "H": "Super Luck"
    },
    "heightm": 1.5,
    "weightkg": 38,
    "color": "White",
    "evos": [],
    "prevo": "Togetic",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Flying",
      "Fairy"
    ]
  },
  "togepi": {
    "id": 175,
    "stats": {
      "hp": 35,
      "atk": 20,
      "def": 65,
      "spa": 40,
      "spd": 65,
      "spe": 20
    },
    "abilities": {
      "0": "Hustle",
      "1": "Serene Grace",
      "H": "Super Luck"
    },
    "heightm": 0.3,
    "weightkg": 1.5,
    "color": "White",
    "evos": [
      "Togetic"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "togetic": {
    "id": 176,
    "stats": {
      "hp": 55,
      "atk": 40,
      "def": 85,
      "spa": 80,
      "spd": 105,
      "spe": 40
    },
    "abilities": {
      "0": "Hustle",
      "1": "Serene Grace",
      "H": "Super Luck"
    },
    "heightm": 0.6,
    "weightkg": 3.2,
    "color": "White",
    "evos": [
      "Togekiss"
    ],
    "prevo": "Togepi",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Flying",
      "Fairy"
    ]
  },
  "torkoal": {
    "id": 324,
    "stats": {
      "hp": 70,
      "atk": 85,
      "def": 140,
      "spa": 85,
      "spd": 70,
      "spe": 20
    },
    "abilities": {
      "0": "White Smoke",
      "1": "Drought",
      "H": "Shell Armor"
    },
    "heightm": 0.5,
    "weightkg": 80.4,
    "color": "Brown",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "toxapex": {
    "id": 748,
    "stats": {
      "hp": 50,
      "atk": 63,
      "def": 152,
      "spa": 53,
      "spd": 142,
      "spe": 35
    },
    "abilities": {
      "0": "Merciless",
      "1": "Limber",
      "H": "Regenerator"
    },
    "heightm": 0.7,
    "weightkg": 14.5,
    "color": "Blue",
    "evos": [],
    "prevo": "Mareanie",
    "evoLevel": 38,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1"
    ]
  },
  "toxel": {
    "id": 848,
    "stats": {
      "hp": 40,
      "atk": 38,
      "def": 35,
      "spa": 54,
      "spd": 35,
      "spe": 40
    },
    "abilities": {
      "0": "Rattled",
      "1": "Static",
      "H": "Klutz"
    },
    "heightm": 0.4,
    "weightkg": 11,
    "color": "Purple",
    "evos": [
      "Toxtricity",
      "Toxtricity-Low-Key"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "toxicroak": {
    "id": 454,
    "stats": {
      "hp": 83,
      "atk": 106,
      "def": 65,
      "spa": 86,
      "spd": 65,
      "spe": 85
    },
    "abilities": {
      "0": "Anticipation",
      "1": "Dry Skin",
      "H": "Poison Touch"
    },
    "heightm": 1.3,
    "weightkg": 44.4,
    "color": "Blue",
    "evos": [],
    "prevo": "Croagunk",
    "evoLevel": 37,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "toxtricity": {
    "id": 849,
    "stats": {
      "hp": 75,
      "atk": 98,
      "def": 70,
      "spa": 114,
      "spd": 70,
      "spe": 75
    },
    "abilities": {
      "0": "Punk Rock",
      "1": "Plus",
      "H": "Technician"
    },
    "heightm": 1.6,
    "weightkg": 40,
    "color": "Purple",
    "evos": [],
    "prevo": "Toxel",
    "evoLevel": 30,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Human-Like"
    ]
  },
  "tranquill": {
    "id": 520,
    "stats": {
      "hp": 62,
      "atk": 77,
      "def": 62,
      "spa": 50,
      "spd": 42,
      "spe": 65
    },
    "abilities": {
      "0": "Big Pecks",
      "1": "Super Luck",
      "H": "Rivalry"
    },
    "heightm": 0.6,
    "weightkg": 15,
    "color": "Gray",
    "evos": [
      "Unfezant"
    ],
    "prevo": "Pidove",
    "evoLevel": 21,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "trapinch": {
    "id": 328,
    "stats": {
      "hp": 45,
      "atk": 100,
      "def": 45,
      "spa": 45,
      "spd": 45,
      "spe": 10
    },
    "abilities": {
      "0": "Hyper Cutter",
      "1": "Arena Trap",
      "H": "Sheer Force"
    },
    "heightm": 0.7,
    "weightkg": 15,
    "color": "Brown",
    "evos": [
      "Vibrava"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug",
      "Dragon"
    ]
  },
  "trevenant": {
    "id": 709,
    "stats": {
      "hp": 85,
      "atk": 110,
      "def": 76,
      "spa": 65,
      "spd": 82,
      "spe": 56
    },
    "abilities": {
      "0": "Natural Cure",
      "1": "Frisk",
      "H": "Harvest"
    },
    "heightm": 1.5,
    "weightkg": 71,
    "color": "Brown",
    "evos": [],
    "prevo": "Phantump",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass",
      "Amorphous"
    ]
  },
  "trubbish": {
    "id": 568,
    "stats": {
      "hp": 50,
      "atk": 50,
      "def": 62,
      "spa": 40,
      "spd": 62,
      "spe": 65
    },
    "abilities": {
      "0": "Stench",
      "1": "Sticky Hold",
      "H": "Aftermath"
    },
    "heightm": 0.6,
    "weightkg": 31,
    "color": "Green",
    "evos": [
      "Garbodor"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "tsareena": {
    "id": 763,
    "stats": {
      "hp": 72,
      "atk": 120,
      "def": 98,
      "spa": 50,
      "spd": 98,
      "spe": 72
    },
    "abilities": {
      "0": "Leaf Guard",
      "1": "Queenly Majesty",
      "H": "Sweet Veil"
    },
    "heightm": 1.2,
    "weightkg": 21.4,
    "color": "Purple",
    "evos": [],
    "prevo": "Steenee",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass"
    ]
  },
  "turtonator": {
    "id": 776,
    "stats": {
      "hp": 60,
      "atk": 78,
      "def": 135,
      "spa": 91,
      "spd": 85,
      "spe": 36
    },
    "abilities": {
      "0": "Shell Armor"
    },
    "heightm": 2,
    "weightkg": 212,
    "color": "Red",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster",
      "Dragon"
    ]
  },
  "tympole": {
    "id": 535,
    "stats": {
      "hp": 50,
      "atk": 50,
      "def": 40,
      "spa": 50,
      "spd": 40,
      "spe": 64
    },
    "abilities": {
      "0": "Swift Swim",
      "1": "Hydration",
      "H": "Water Absorb"
    },
    "heightm": 0.5,
    "weightkg": 4.5,
    "color": "Blue",
    "evos": [
      "Palpitoad"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1"
    ]
  },
  "type-null": {
    "id": 772,
    "stats": {
      "hp": 95,
      "atk": 95,
      "def": 95,
      "spa": 95,
      "spd": 95,
      "spe": 59
    },
    "abilities": {
      "0": "Battle Armor"
    },
    "heightm": 1.9,
    "weightkg": 120.5,
    "color": "Gray",
    "evos": [
      "Silvally"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "tyranitar": {
    "id": 248,
    "stats": {
      "hp": 100,
      "atk": 134,
      "def": 110,
      "spa": 95,
      "spd": 100,
      "spe": 61
    },
    "abilities": {
      "0": "Sand Stream",
      "H": "Unnerve"
    },
    "heightm": 2,
    "weightkg": 202,
    "color": "Green",
    "evos": [],
    "prevo": "Pupitar",
    "evoLevel": 55,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Monster"
    ]
  },
  "tyrogue": {
    "id": 236,
    "stats": {
      "hp": 35,
      "atk": 35,
      "def": 35,
      "spa": 35,
      "spd": 35,
      "spe": 35
    },
    "abilities": {
      "0": "Guts",
      "1": "Steadfast",
      "H": "Vital Spirit"
    },
    "heightm": 0.7,
    "weightkg": 21,
    "color": "Purple",
    "evos": [
      "Hitmonlee",
      "Hitmonchan",
      "Hitmontop"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "umbreon": {
    "id": 197,
    "stats": {
      "hp": 95,
      "atk": 65,
      "def": 110,
      "spa": 60,
      "spd": 130,
      "spe": 65
    },
    "abilities": {
      "0": "Synchronize",
      "H": "Inner Focus"
    },
    "heightm": 1,
    "weightkg": 27,
    "color": "Black",
    "evos": [],
    "prevo": "Eevee",
    "evoLevel": null,
    "evoCondition": "at night",
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field"
    ]
  },
  "unfezant": {
    "id": 521,
    "stats": {
      "hp": 80,
      "atk": 115,
      "def": 80,
      "spa": 65,
      "spd": 55,
      "spe": 93
    },
    "abilities": {
      "0": "Big Pecks",
      "1": "Super Luck",
      "H": "Rivalry"
    },
    "heightm": 1.2,
    "weightkg": 29,
    "color": "Gray",
    "evos": [],
    "prevo": "Tranquill",
    "evoLevel": 32,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "vanillish": {
    "id": 583,
    "stats": {
      "hp": 51,
      "atk": 65,
      "def": 65,
      "spa": 80,
      "spd": 75,
      "spe": 59
    },
    "abilities": {
      "0": "Ice Body",
      "1": "Snow Cloak",
      "H": "Weak Armor"
    },
    "heightm": 1.1,
    "weightkg": 41,
    "color": "White",
    "evos": [
      "Vanilluxe"
    ],
    "prevo": "Vanillite",
    "evoLevel": 35,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "vanillite": {
    "id": 582,
    "stats": {
      "hp": 36,
      "atk": 50,
      "def": 50,
      "spa": 65,
      "spd": 60,
      "spe": 44
    },
    "abilities": {
      "0": "Ice Body",
      "1": "Snow Cloak",
      "H": "Weak Armor"
    },
    "heightm": 0.4,
    "weightkg": 5.7,
    "color": "White",
    "evos": [
      "Vanillish"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "vanilluxe": {
    "id": 584,
    "stats": {
      "hp": 71,
      "atk": 95,
      "def": 85,
      "spa": 110,
      "spd": 95,
      "spe": 79
    },
    "abilities": {
      "0": "Ice Body",
      "1": "Snow Warning",
      "H": "Weak Armor"
    },
    "heightm": 1.3,
    "weightkg": 57.5,
    "color": "White",
    "evos": [],
    "prevo": "Vanillish",
    "evoLevel": 47,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral"
    ]
  },
  "vaporeon": {
    "id": 134,
    "stats": {
      "hp": 130,
      "atk": 65,
      "def": 60,
      "spa": 110,
      "spd": 95,
      "spe": 65
    },
    "abilities": {
      "0": "Water Absorb",
      "H": "Hydration"
    },
    "heightm": 1,
    "weightkg": 29,
    "color": "Blue",
    "evos": [],
    "prevo": "Eevee",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.875,
      "F": 0.125
    },
    "eggGroups": [
      "Field"
    ]
  },
  "vespiquen": {
    "id": 416,
    "stats": {
      "hp": 70,
      "atk": 80,
      "def": 102,
      "spa": 80,
      "spd": 102,
      "spe": 40
    },
    "abilities": {
      "0": "Pressure",
      "H": "Unnerve"
    },
    "heightm": 1.2,
    "weightkg": 38.5,
    "color": "Yellow",
    "evos": [],
    "prevo": "Combee",
    "evoLevel": 21,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "vibrava": {
    "id": 329,
    "stats": {
      "hp": 50,
      "atk": 70,
      "def": 50,
      "spa": 50,
      "spd": 50,
      "spe": 70
    },
    "abilities": {
      "0": "Levitate"
    },
    "heightm": 1.1,
    "weightkg": 15.3,
    "color": "Green",
    "evos": [
      "Flygon"
    ],
    "prevo": "Trapinch",
    "evoLevel": 35,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug",
      "Dragon"
    ]
  },
  "vikavolt": {
    "id": 738,
    "stats": {
      "hp": 77,
      "atk": 70,
      "def": 90,
      "spa": 145,
      "spd": 75,
      "spe": 43
    },
    "abilities": {
      "0": "Levitate"
    },
    "heightm": 1.5,
    "weightkg": 45,
    "color": "Blue",
    "evos": [],
    "prevo": "Charjabug",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug"
    ]
  },
  "vileplume": {
    "id": 45,
    "stats": {
      "hp": 75,
      "atk": 80,
      "def": 85,
      "spa": 110,
      "spd": 90,
      "spe": 50
    },
    "abilities": {
      "0": "Chlorophyll",
      "H": "Effect Spore"
    },
    "heightm": 1.2,
    "weightkg": 18.6,
    "color": "Red",
    "evos": [],
    "prevo": "Gloom",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Grass"
    ]
  },
  "vullaby": {
    "id": 629,
    "stats": {
      "hp": 70,
      "atk": 55,
      "def": 75,
      "spa": 45,
      "spd": 65,
      "spe": 60
    },
    "abilities": {
      "0": "Big Pecks",
      "1": "Overcoat",
      "H": "Weak Armor"
    },
    "heightm": 0.5,
    "weightkg": 9,
    "color": "Brown",
    "evos": [
      "Mandibuzz"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "vulpix": {
    "id": 37,
    "stats": {
      "hp": 38,
      "atk": 41,
      "def": 40,
      "spa": 50,
      "spd": 65,
      "spe": 65
    },
    "abilities": {
      "0": "Flash Fire",
      "H": "Drought"
    },
    "heightm": 0.6,
    "weightkg": 9.9,
    "color": "Brown",
    "evos": [
      "Ninetales"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": {
      "M": 0.25,
      "F": 0.75
    },
    "eggGroups": [
      "Field"
    ]
  },
  "wailmer": {
    "id": 320,
    "stats": {
      "hp": 130,
      "atk": 70,
      "def": 35,
      "spa": 70,
      "spd": 35,
      "spe": 60
    },
    "abilities": {
      "0": "Water Veil",
      "1": "Oblivious",
      "H": "Pressure"
    },
    "heightm": 2,
    "weightkg": 130,
    "color": "Blue",
    "evos": [
      "Wailord"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Water 2"
    ]
  },
  "wailord": {
    "id": 321,
    "stats": {
      "hp": 170,
      "atk": 90,
      "def": 45,
      "spa": 90,
      "spd": 45,
      "spe": 60
    },
    "abilities": {
      "0": "Water Veil",
      "1": "Oblivious",
      "H": "Pressure"
    },
    "heightm": 14.5,
    "weightkg": 398,
    "color": "Blue",
    "evos": [],
    "prevo": "Wailmer",
    "evoLevel": 40,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field",
      "Water 2"
    ]
  },
  "weavile": {
    "id": 461,
    "stats": {
      "hp": 70,
      "atk": 120,
      "def": 65,
      "spa": 45,
      "spd": 85,
      "spe": 125
    },
    "abilities": {
      "0": "Pressure",
      "H": "Pickpocket"
    },
    "heightm": 1.1,
    "weightkg": 34,
    "color": "Black",
    "evos": [],
    "prevo": "Sneasel",
    "evoLevel": null,
    "evoCondition": "at night",
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "weezing": {
    "id": 110,
    "stats": {
      "hp": 65,
      "atk": 90,
      "def": 120,
      "spa": 85,
      "spd": 70,
      "spe": 60
    },
    "abilities": {
      "0": "Levitate",
      "1": "Neutralizing Gas",
      "H": "Stench"
    },
    "heightm": 1.2,
    "weightkg": 9.5,
    "color": "Purple",
    "evos": [],
    "prevo": "Koffing",
    "evoLevel": 35,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "whimsicott": {
    "id": 547,
    "stats": {
      "hp": 60,
      "atk": 67,
      "def": 85,
      "spa": 77,
      "spd": 75,
      "spe": 116
    },
    "abilities": {
      "0": "Prankster",
      "1": "Infiltrator",
      "H": "Chlorophyll"
    },
    "heightm": 0.7,
    "weightkg": 6.6,
    "color": "Green",
    "evos": [],
    "prevo": "Cottonee",
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Fairy",
      "Grass"
    ]
  },
  "whiscash": {
    "id": 340,
    "stats": {
      "hp": 110,
      "atk": 78,
      "def": 73,
      "spa": 76,
      "spd": 71,
      "spe": 60
    },
    "abilities": {
      "0": "Oblivious",
      "1": "Anticipation",
      "H": "Hydration"
    },
    "heightm": 0.9,
    "weightkg": 23.6,
    "color": "Blue",
    "evos": [],
    "prevo": "Barboach",
    "evoLevel": 30,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 2"
    ]
  },
  "wimpod": {
    "id": 767,
    "stats": {
      "hp": 25,
      "atk": 35,
      "def": 40,
      "spa": 20,
      "spd": 30,
      "spe": 80
    },
    "abilities": {
      "0": "Wimp Out"
    },
    "heightm": 0.5,
    "weightkg": 12,
    "color": "Gray",
    "evos": [
      "Golisopod"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Bug",
      "Water 3"
    ]
  },
  "wingull": {
    "id": 278,
    "stats": {
      "hp": 40,
      "atk": 30,
      "def": 30,
      "spa": 55,
      "spd": 30,
      "spe": 85
    },
    "abilities": {
      "0": "Keen Eye",
      "1": "Hydration",
      "H": "Rain Dish"
    },
    "heightm": 0.6,
    "weightkg": 9.5,
    "color": "White",
    "evos": [
      "Pelipper"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Flying"
    ]
  },
  "wishiwashi": {
    "id": 746,
    "stats": {
      "hp": 45,
      "atk": 20,
      "def": 20,
      "spa": 25,
      "spd": 25,
      "spe": 40
    },
    "abilities": {
      "0": "Schooling"
    },
    "heightm": 0.2,
    "weightkg": 0.3,
    "color": "Blue",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 2"
    ]
  },
  "wobbuffet": {
    "id": 202,
    "stats": {
      "hp": 190,
      "atk": 33,
      "def": 58,
      "spa": 33,
      "spd": 58,
      "spe": 33
    },
    "abilities": {
      "0": "Shadow Tag",
      "H": "Telepathy"
    },
    "heightm": 1.3,
    "weightkg": 28.5,
    "color": "Blue",
    "evos": [],
    "prevo": "Wynaut",
    "evoLevel": 15,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Amorphous"
    ]
  },
  "woobat": {
    "id": 527,
    "stats": {
      "hp": 65,
      "atk": 45,
      "def": 43,
      "spa": 55,
      "spd": 43,
      "spe": 72
    },
    "abilities": {
      "0": "Unaware",
      "1": "Klutz",
      "H": "Simple"
    },
    "heightm": 0.4,
    "weightkg": 2.1,
    "color": "Blue",
    "evos": [
      "Swoobat"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying",
      "Field"
    ]
  },
  "wooloo": {
    "id": 831,
    "stats": {
      "hp": 42,
      "atk": 40,
      "def": 55,
      "spa": 40,
      "spd": 45,
      "spe": 48
    },
    "abilities": {
      "0": "Fluffy",
      "1": "Run Away",
      "H": "Bulletproof"
    },
    "heightm": 0.6,
    "weightkg": 6,
    "color": "White",
    "evos": [
      "Dubwool"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "wooper": {
    "id": 194,
    "stats": {
      "hp": 55,
      "atk": 45,
      "def": 45,
      "spa": 25,
      "spd": 25,
      "spe": 15
    },
    "abilities": {
      "0": "Damp",
      "1": "Water Absorb",
      "H": "Unaware"
    },
    "heightm": 0.4,
    "weightkg": 8.5,
    "color": "Blue",
    "evos": [
      "Quagsire"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Water 1",
      "Field"
    ]
  },
  "wynaut": {
    "id": 360,
    "stats": {
      "hp": 95,
      "atk": 23,
      "def": 48,
      "spa": 23,
      "spd": 48,
      "spe": 23
    },
    "abilities": {
      "0": "Shadow Tag",
      "H": "Telepathy"
    },
    "heightm": 0.6,
    "weightkg": 14,
    "color": "Blue",
    "evos": [
      "Wobbuffet"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "xatu": {
    "id": 178,
    "stats": {
      "hp": 65,
      "atk": 75,
      "def": 70,
      "spa": 95,
      "spd": 70,
      "spe": 95
    },
    "abilities": {
      "0": "Synchronize",
      "1": "Early Bird",
      "H": "Magic Bounce"
    },
    "heightm": 1.5,
    "weightkg": 15,
    "color": "Green",
    "evos": [],
    "prevo": "Natu",
    "evoLevel": 25,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Flying"
    ]
  },
  "yamask": {
    "id": 562,
    "stats": {
      "hp": 38,
      "atk": 30,
      "def": 85,
      "spa": 55,
      "spd": 65,
      "spe": 30
    },
    "abilities": {
      "0": "Mummy"
    },
    "heightm": 0.5,
    "weightkg": 1.5,
    "color": "Black",
    "evos": [
      "Cofagrigus"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Mineral",
      "Amorphous"
    ]
  },
  "yamper": {
    "id": 835,
    "stats": {
      "hp": 59,
      "atk": 45,
      "def": 50,
      "spa": 40,
      "spd": 50,
      "spe": 26
    },
    "abilities": {
      "0": "Ball Fetch",
      "H": "Rattled"
    },
    "heightm": 0.3,
    "weightkg": 13.5,
    "color": "Yellow",
    "evos": [
      "Boltund"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "zacian": {
    "id": 888,
    "stats": {
      "hp": 92,
      "atk": 120,
      "def": 115,
      "spa": 80,
      "spd": 115,
      "spe": 138
    },
    "abilities": {
      "0": "Intrepid Sword"
    },
    "heightm": 2.8,
    "weightkg": 110,
    "color": "Blue",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "zamazenta": {
    "id": 889,
    "stats": {
      "hp": 92,
      "atk": 120,
      "def": 115,
      "spa": 80,
      "spd": 115,
      "spe": 138
    },
    "abilities": {
      "0": "Dauntless Shield"
    },
    "heightm": 2.9,
    "weightkg": 210,
    "color": "Red",
    "evos": [],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Undiscovered"
    ]
  },
  "zigzagoon": {
    "id": 263,
    "stats": {
      "hp": 38,
      "atk": 30,
      "def": 41,
      "spa": 30,
      "spd": 41,
      "spe": 60
    },
    "abilities": {
      "0": "Pickup",
      "1": "Gluttony",
      "H": "Quick Feet"
    },
    "heightm": 0.4,
    "weightkg": 17.5,
    "color": "Brown",
    "evos": [
      "Linoone"
    ],
    "prevo": null,
    "evoLevel": null,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Field"
    ]
  },
  "zweilous": {
    "id": 634,
    "stats": {
      "hp": 72,
      "atk": 85,
      "def": 70,
      "spa": 65,
      "spd": 70,
      "spe": 58
    },
    "abilities": {
      "0": "Hustle"
    },
    "heightm": 1.4,
    "weightkg": 50,
    "color": "Blue",
    "evos": [
      "Hydreigon"
    ],
    "prevo": "Deino",
    "evoLevel": 50,
    "evoCondition": null,
    "genderRatio": null,
    "eggGroups": [
      "Dragon"
    ]
  }
} as const;
