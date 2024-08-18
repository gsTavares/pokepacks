import { Pack } from "../../models/pack.models";
import { BASTIODON_MOCK, TRAINER_MOCK } from "./pokemonctg.mocks";

const TRAINER_PACK_MOCK: Pack = {
    id: 1,
    name: 'trainers',
    cards: [
        TRAINER_MOCK
    ],
    createdAt: new Date()
}

const POKEMON_PACK_MOCK: Pack = {
    id: 1,
    name: 'trainers',
    cards: [
        BASTIODON_MOCK
    ],
    createdAt: new Date()
}

const PACK_LIST_MOCK: Pack[] = [
    {
        "name": "teste",
        "cards": [
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
        ],
        "id": 1,
        "createdAt": new Date()
    }
]

export {TRAINER_PACK_MOCK, POKEMON_PACK_MOCK, PACK_LIST_MOCK};

