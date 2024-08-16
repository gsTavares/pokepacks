import { Pack } from "../models/pack.models"
import { Pokemontcg } from "../models/pokemontcg.models"

type State = {
    pokemonCards: {cards: Pokemontcg[], totalCount: number},
    pokemonTypes: string[],
    pokemonSubtypes: string[],
    pokemonSupertypes: string[],
    pokemonRarities: string[],
    
    packs: Pack[],
    selectedPack?: Pack,
}

const initalState: State = {
    pokemonCards: {cards: [], totalCount: 0},
    pokemonRarities: [],
    pokemonSubtypes: [],
    pokemonSupertypes: [],
    pokemonTypes: [],

    packs: [],
}

export { State, initalState };