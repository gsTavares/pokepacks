import { Pokemontcg } from "../../models/pokemontcg.models";

const CARD_MOCK: Pokemontcg = {
    "id": "pl1-1",
    "name": "Ampharos",
    "supertype": "Pokémon",
    "subtypes": [
        "Stage 2"
    ],
    "types": [
        "Lightning"
    ],
    "images": {
        "small": "https://images.pokemontcg.io/pl1/1.png",
        "large": "https://images.pokemontcg.io/pl1/1_hires.png"
    }
}

const SELECTED_CARDS_EXCLUDING_CARD_INPUT_MOCK: Pokemontcg[] = [
    {
        "id": "pop6-1",
        "name": "Bastiodon",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pop6/1.png",
            "large": "https://images.pokemontcg.io/pop6/1_hires.png"
        }
    },
    {
        "id": "ecard2-H2",
        "name": "Arcanine",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Fire"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ecard2/H2.png",
            "large": "https://images.pokemontcg.io/ecard2/H2_hires.png"
        }
    },
    {
        "id": "hgss4-2",
        "name": "Altaria",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Colorless"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/hgss4/2.png",
            "large": "https://images.pokemontcg.io/hgss4/2_hires.png"
        }
    }
]

const SELECTED_CARDS_INCLUDING_CARD_INPUT_MOCK: Pokemontcg[] = [
    CARD_MOCK,
    {
        "id": "pop6-1",
        "name": "Bastiodon",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pop6/1.png",
            "large": "https://images.pokemontcg.io/pop6/1_hires.png"
        }
    },
    {
        "id": "ecard2-H2",
        "name": "Arcanine",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Fire"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ecard2/H2.png",
            "large": "https://images.pokemontcg.io/ecard2/H2_hires.png"
        }
    },
    {
        "id": "hgss4-2",
        "name": "Altaria",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Colorless"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/hgss4/2.png",
            "large": "https://images.pokemontcg.io/hgss4/2_hires.png"
        }
    }
]

const SELECTED_CARDS_WITH_4_BASTIODON_MOCK: Pokemontcg[] = [
    {
        "id": "pop6-1",
        "name": "Bastiodon",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pop6/1.png",
            "large": "https://images.pokemontcg.io/pop6/1_hires.png"
        }
    },
    {
        "id": "ru1-14",
        "name": "Bastiodon",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ru1/14.png",
            "large": "https://images.pokemontcg.io/ru1/14_hires.png"
        }
    },
    {
        "id": "pl1-20",
        "name": "Bastiodon",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pl1/20.png",
            "large": "https://images.pokemontcg.io/pl1/20_hires.png"
        }
    },
    {
        "id": "dp2-21",
        "name": "Bastiodon",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/dp2/21.png",
            "large": "https://images.pokemontcg.io/dp2/21_hires.png"
        }
    },
]

const SELECTED_24_CARDS_MOCK: Pokemontcg[] = [
    {
        "id": "hgss4-1",
        "name": "Aggron",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/hgss4/1.png",
            "large": "https://images.pokemontcg.io/hgss4/1_hires.png"
        }
    },
    {
        "id": "xy5-1",
        "name": "Weedle",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/xy5/1.png",
            "large": "https://images.pokemontcg.io/xy5/1_hires.png"
        }
    },
    {
        "id": "pl1-1",
        "name": "Ampharos",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Lightning"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pl1/1.png",
            "large": "https://images.pokemontcg.io/pl1/1_hires.png"
        }
    },
    {
        "id": "dp3-1",
        "name": "Ampharos",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Lightning"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/dp3/1.png",
            "large": "https://images.pokemontcg.io/dp3/1_hires.png"
        }
    },
    {
        "id": "det1-1",
        "name": "Bulbasaur",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/det1/1.png",
            "large": "https://images.pokemontcg.io/det1/1_hires.png"
        }
    },
    {
        "id": "dv1-1",
        "name": "Dratini",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Dragon"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/dv1/1.png",
            "large": "https://images.pokemontcg.io/dv1/1_hires.png"
        }
    },
    {
        "id": "mcd19-1",
        "name": "Caterpie",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/mcd19/1.png",
            "large": "https://images.pokemontcg.io/mcd19/1_hires.png"
        }
    },
    {
        "id": "pl3-1",
        "name": "Absol G",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic",
            "SP"
        ],
        "types": [
            "Darkness"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pl3/1.png",
            "large": "https://images.pokemontcg.io/pl3/1_hires.png"
        }
    },
    {
        "id": "ex12-1",
        "name": "Aerodactyl",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Colorless"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex12/1.png",
            "large": "https://images.pokemontcg.io/ex12/1_hires.png"
        }
    },
    {
        "id": "ex3-1",
        "name": "Absol",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Darkness"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex3/1.png",
            "large": "https://images.pokemontcg.io/ex3/1_hires.png"
        }
    },
    {
        "id": "ru1-1",
        "name": "Venusaur",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ru1/1.png",
            "large": "https://images.pokemontcg.io/ru1/1_hires.png"
        }
    },
    {
        "id": "ecard2-H1",
        "name": "Ampharos",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Lightning"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ecard2/H1.png",
            "large": "https://images.pokemontcg.io/ecard2/H1_hires.png"
        }
    },
    {
        "id": "base4-1",
        "name": "Alakazam",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Psychic"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/base4/1.png",
            "large": "https://images.pokemontcg.io/base4/1_hires.png"
        }
    },
    {
        "id": "hgss1-1",
        "name": "Arcanine",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Fire"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/hgss1/1.png",
            "large": "https://images.pokemontcg.io/hgss1/1_hires.png"
        }
    },
    {
        "id": "ex11-1",
        "name": "Beedrill δ",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Grass",
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex11/1.png",
            "large": "https://images.pokemontcg.io/ex11/1_hires.png"
        }
    },
    {
        "id": "ex7-1",
        "name": "Azumarill",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Water"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex7/1.png",
            "large": "https://images.pokemontcg.io/ex7/1_hires.png"
        }
    },
    {
        "id": "gym1-1",
        "name": "Blaine's Moltres",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Fire"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/gym1/1.png",
            "large": "https://images.pokemontcg.io/gym1/1_hires.png"
        }
    },
    {
        "id": "base3-1",
        "name": "Aerodactyl",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Fighting"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/base3/1.png",
            "large": "https://images.pokemontcg.io/base3/1_hires.png"
        }
    },
    {
        "id": "sm9-1",
        "name": "Celebi & Venusaur-GX",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic",
            "TAG TEAM",
            "GX"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/sm9/1.png",
            "large": "https://images.pokemontcg.io/sm9/1_hires.png"
        }
    },
    {
        "id": "xy2-1",
        "name": "Caterpie",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/xy2/1.png",
            "large": "https://images.pokemontcg.io/xy2/1_hires.png"
        }
    },
    {
        "id": "pop6-1",
        "name": "Bastiodon",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pop6/1.png",
            "large": "https://images.pokemontcg.io/pop6/1_hires.png"
        }
    },
    {
        "id": "ecard2-H2",
        "name": "Arcanine",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Fire"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ecard2/H2.png",
            "large": "https://images.pokemontcg.io/ecard2/H2_hires.png"
        }
    },
    {
        "id": "hgss4-2",
        "name": "Altaria",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Colorless"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/hgss4/2.png",
            "large": "https://images.pokemontcg.io/hgss4/2_hires.png"
        }
    },
    {
        "id": "pl1-2",
        "name": "Blastoise",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Water"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pl1/2.png",
            "large": "https://images.pokemontcg.io/pl1/2_hires.png"
        }
    }
]

const SELECTED_MORE_THAN_60_CARDS_MOCK: Pokemontcg[] = [
    {
        "id": "hgss4-1",
        "name": "Aggron",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/hgss4/1.png",
            "large": "https://images.pokemontcg.io/hgss4/1_hires.png"
        }
    },
    {
        "id": "xy5-1",
        "name": "Weedle",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/xy5/1.png",
            "large": "https://images.pokemontcg.io/xy5/1_hires.png"
        }
    },
    {
        "id": "pl1-1",
        "name": "Ampharos",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Lightning"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pl1/1.png",
            "large": "https://images.pokemontcg.io/pl1/1_hires.png"
        }
    },
    {
        "id": "dp3-1",
        "name": "Ampharos",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Lightning"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/dp3/1.png",
            "large": "https://images.pokemontcg.io/dp3/1_hires.png"
        }
    },
    {
        "id": "det1-1",
        "name": "Bulbasaur",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/det1/1.png",
            "large": "https://images.pokemontcg.io/det1/1_hires.png"
        }
    },
    {
        "id": "dv1-1",
        "name": "Dratini",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Dragon"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/dv1/1.png",
            "large": "https://images.pokemontcg.io/dv1/1_hires.png"
        }
    },
    {
        "id": "mcd19-1",
        "name": "Caterpie",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/mcd19/1.png",
            "large": "https://images.pokemontcg.io/mcd19/1_hires.png"
        }
    },
    {
        "id": "pl3-1",
        "name": "Absol G",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic",
            "SP"
        ],
        "types": [
            "Darkness"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pl3/1.png",
            "large": "https://images.pokemontcg.io/pl3/1_hires.png"
        }
    },
    {
        "id": "ex12-1",
        "name": "Aerodactyl",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Colorless"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex12/1.png",
            "large": "https://images.pokemontcg.io/ex12/1_hires.png"
        }
    },
    {
        "id": "ex3-1",
        "name": "Absol",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Darkness"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex3/1.png",
            "large": "https://images.pokemontcg.io/ex3/1_hires.png"
        }
    },
    {
        "id": "ru1-1",
        "name": "Venusaur",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ru1/1.png",
            "large": "https://images.pokemontcg.io/ru1/1_hires.png"
        }
    },
    {
        "id": "ecard2-H1",
        "name": "Ampharos",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Lightning"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ecard2/H1.png",
            "large": "https://images.pokemontcg.io/ecard2/H1_hires.png"
        }
    },
    {
        "id": "base4-1",
        "name": "Alakazam",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Psychic"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/base4/1.png",
            "large": "https://images.pokemontcg.io/base4/1_hires.png"
        }
    },
    {
        "id": "hgss1-1",
        "name": "Arcanine",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Fire"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/hgss1/1.png",
            "large": "https://images.pokemontcg.io/hgss1/1_hires.png"
        }
    },
    {
        "id": "ex11-1",
        "name": "Beedrill δ",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Grass",
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex11/1.png",
            "large": "https://images.pokemontcg.io/ex11/1_hires.png"
        }
    },
    {
        "id": "ex7-1",
        "name": "Azumarill",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Water"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex7/1.png",
            "large": "https://images.pokemontcg.io/ex7/1_hires.png"
        }
    },
    {
        "id": "gym1-1",
        "name": "Blaine's Moltres",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Fire"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/gym1/1.png",
            "large": "https://images.pokemontcg.io/gym1/1_hires.png"
        }
    },
    {
        "id": "base3-1",
        "name": "Aerodactyl",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Fighting"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/base3/1.png",
            "large": "https://images.pokemontcg.io/base3/1_hires.png"
        }
    },
    {
        "id": "sm9-1",
        "name": "Celebi & Venusaur-GX",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic",
            "TAG TEAM",
            "GX"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/sm9/1.png",
            "large": "https://images.pokemontcg.io/sm9/1_hires.png"
        }
    },
    {
        "id": "xy2-1",
        "name": "Caterpie",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/xy2/1.png",
            "large": "https://images.pokemontcg.io/xy2/1_hires.png"
        }
    },
    {
        "id": "pop6-1",
        "name": "Bastiodon",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pop6/1.png",
            "large": "https://images.pokemontcg.io/pop6/1_hires.png"
        }
    },
    {
        "id": "ecard2-H2",
        "name": "Arcanine",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Fire"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ecard2/H2.png",
            "large": "https://images.pokemontcg.io/ecard2/H2_hires.png"
        }
    },
    {
        "id": "hgss4-2",
        "name": "Altaria",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Colorless"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/hgss4/2.png",
            "large": "https://images.pokemontcg.io/hgss4/2_hires.png"
        }
    },
    {
        "id": "pl1-2",
        "name": "Blastoise",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Water"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pl1/2.png",
            "large": "https://images.pokemontcg.io/pl1/2_hires.png"
        }
    },
    {
        "id": "ex3-2",
        "name": "Altaria",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Colorless"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex3/2.png",
            "large": "https://images.pokemontcg.io/ex3/2_hires.png"
        }
    },
    {
        "id": "dp3-2",
        "name": "Blastoise",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Water"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/dp3/2.png",
            "large": "https://images.pokemontcg.io/dp3/2_hires.png"
        }
    },
    {
        "id": "base3-2",
        "name": "Articuno",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Water"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/base3/2.png",
            "large": "https://images.pokemontcg.io/base3/2_hires.png"
        }
    },
    {
        "id": "pl3-2",
        "name": "Blaziken FB",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic",
            "SP"
        ],
        "types": [
            "Fire"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pl3/2.png",
            "large": "https://images.pokemontcg.io/pl3/2_hires.png"
        }
    },
    {
        "id": "ex11-2",
        "name": "Crobat δ",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Grass",
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex11/2.png",
            "large": "https://images.pokemontcg.io/ex11/2_hires.png"
        }
    },
    {
        "id": "pop6-2",
        "name": "Lucario",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Fighting"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pop6/2.png",
            "large": "https://images.pokemontcg.io/pop6/2_hires.png"
        }
    },
    {
        "id": "xy2-2",
        "name": "Metapod",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/xy2/2.png",
            "large": "https://images.pokemontcg.io/xy2/2_hires.png"
        }
    },
    {
        "id": "base4-2",
        "name": "Blastoise",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Water"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/base4/2.png",
            "large": "https://images.pokemontcg.io/base4/2_hires.png"
        }
    },
    {
        "id": "gym1-2",
        "name": "Brock's Rhydon",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Fighting"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/gym1/2.png",
            "large": "https://images.pokemontcg.io/gym1/2_hires.png"
        }
    },
    {
        "id": "hgss1-2",
        "name": "Azumarill",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Water"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/hgss1/2.png",
            "large": "https://images.pokemontcg.io/hgss1/2_hires.png"
        }
    },
    {
        "id": "det1-2",
        "name": "Ludicolo",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/det1/2.png",
            "large": "https://images.pokemontcg.io/det1/2_hires.png"
        }
    },
    {
        "id": "sm9-2",
        "name": "Weedle",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/sm9/2.png",
            "large": "https://images.pokemontcg.io/sm9/2_hires.png"
        }
    },
    {
        "id": "ex12-2",
        "name": "Aggron",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex12/2.png",
            "large": "https://images.pokemontcg.io/ex12/2_hires.png"
        }
    },
    {
        "id": "ex7-2",
        "name": "Dark Ampharos",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Lightning",
            "Darkness"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex7/2.png",
            "large": "https://images.pokemontcg.io/ex7/2_hires.png"
        }
    },
    {
        "id": "ru1-2",
        "name": "Cherrim",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ru1/2.png",
            "large": "https://images.pokemontcg.io/ru1/2_hires.png"
        }
    },
    {
        "id": "mcd19-2",
        "name": "Alolan Exeggutor",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/mcd19/2.png",
            "large": "https://images.pokemontcg.io/mcd19/2_hires.png"
        }
    },
    {
        "id": "xy5-2",
        "name": "Kakuna",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/xy5/2.png",
            "large": "https://images.pokemontcg.io/xy5/2_hires.png"
        }
    },
    {
        "id": "xy11-1",
        "name": "Tangela",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/xy11/1.png",
            "large": "https://images.pokemontcg.io/xy11/1_hires.png"
        }
    },
    {
        "id": "ex14-1",
        "name": "Banette",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Psychic"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex14/1.png",
            "large": "https://images.pokemontcg.io/ex14/1_hires.png"
        }
    },
    {
        "id": "sm12-1",
        "name": "Venusaur & Snivy-GX",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic",
            "TAG TEAM",
            "GX"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/sm12/1.png",
            "large": "https://images.pokemontcg.io/sm12/1_hires.png"
        }
    },
    {
        "id": "bw1-1",
        "name": "Snivy",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/bw1/1.png",
            "large": "https://images.pokemontcg.io/bw1/1_hires.png"
        }
    },
    {
        "id": "sm115-1",
        "name": "Caterpie",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/sm115/1.png",
            "large": "https://images.pokemontcg.io/sm115/1_hires.png"
        }
    },
    {
        "id": "si1-1",
        "name": "Mew",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Psychic"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/si1/1.png",
            "large": "https://images.pokemontcg.io/si1/1_hires.png"
        }
    },
    {
        "id": "dp1-1",
        "name": "Dialga",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/dp1/1.png",
            "large": "https://images.pokemontcg.io/dp1/1_hires.png"
        }
    },
    {
        "id": "sm3-1",
        "name": "Caterpie",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/sm3/1.png",
            "large": "https://images.pokemontcg.io/sm3/1_hires.png"
        }
    },
    {
        "id": "pop7-1",
        "name": "Ampharos",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Lightning"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/pop7/1.png",
            "large": "https://images.pokemontcg.io/pop7/1_hires.png"
        }
    },
    {
        "id": "gym2-1",
        "name": "Blaine's Arcanine",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Fire"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/gym2/1.png",
            "large": "https://images.pokemontcg.io/gym2/1_hires.png"
        }
    },
    {
        "id": "col1-1",
        "name": "Clefable",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Colorless"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/col1/1.png",
            "large": "https://images.pokemontcg.io/col1/1_hires.png"
        }
    },
    {
        "id": "ex9-1",
        "name": "Blaziken",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Fire"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex9/1.png",
            "large": "https://images.pokemontcg.io/ex9/1_hires.png"
        }
    },
    {
        "id": "bw10-1",
        "name": "Surskit",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/bw10/1.png",
            "large": "https://images.pokemontcg.io/bw10/1_hires.png"
        }
    },
    {
        "id": "swsh35-1",
        "name": "Venusaur V",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic",
            "V"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/swsh35/1.png",
            "large": "https://images.pokemontcg.io/swsh35/1_hires.png"
        }
    },
    {
        "id": "xy7-1",
        "name": "Oddish",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/xy7/1.png",
            "large": "https://images.pokemontcg.io/xy7/1_hires.png"
        }
    },
    {
        "id": "sm1-1",
        "name": "Caterpie",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/sm1/1.png",
            "large": "https://images.pokemontcg.io/sm1/1_hires.png"
        }
    },
    {
        "id": "ex13-1",
        "name": "Armaldo δ",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 2"
        ],
        "types": [
            "Fighting",
            "Metal"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ex13/1.png",
            "large": "https://images.pokemontcg.io/ex13/1_hires.png"
        }
    },
    {
        "id": "dv1-2",
        "name": "Dratini",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Dragon"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/dv1/2.png",
            "large": "https://images.pokemontcg.io/dv1/2_hires.png"
        }
    },
    {
        "id": "ecard2-H3",
        "name": "Ariados",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/ecard2/H3.png",
            "large": "https://images.pokemontcg.io/ecard2/H3_hires.png"
        }
    },
    {
        "id": "sm12-2",
        "name": "Oddish",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic"
        ],
        "types": [
            "Grass"
        ],
        "images": {
            "small": "https://images.pokemontcg.io/sm12/2.png",
            "large": "https://images.pokemontcg.io/sm12/2_hires.png"
        }
    }
]

const BASTIODON_MOCK: Pokemontcg = {
    "id": "xy11-70",
    "name": "Bastiodon",
    "supertype": "Pokémon",
    "subtypes": [
        "Stage 1"
    ],
    "types": [
        "Metal"
    ],
    "images": {
        "small": "https://images.pokemontcg.io/xy11/70.png",
        "large": "https://images.pokemontcg.io/xy11/70_hires.png"
    }
}

const TRAINER_MOCK: Pokemontcg = {
    "id": "dpp-DP05",
    "name": "Tropical Wind",
    "types": [
        "N/A"
    ],
    "supertype": "Trainer",
    "subtypes": [
        "Item"
    ],
    "images": {
        "small": "https://images.pokemontcg.io/dpp/DP05.png",
        "large": "https://images.pokemontcg.io/dpp/DP05_hires.png"
    }
}

export { CARD_MOCK, SELECTED_CARDS_EXCLUDING_CARD_INPUT_MOCK, SELECTED_CARDS_INCLUDING_CARD_INPUT_MOCK, SELECTED_CARDS_WITH_4_BASTIODON_MOCK, BASTIODON_MOCK, TRAINER_MOCK, SELECTED_24_CARDS_MOCK, SELECTED_MORE_THAN_60_CARDS_MOCK }