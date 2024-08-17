import { Pack } from "../models/pack.models"
import { Pokemontcg } from "../models/pokemontcg.models"

type PokemonCardsState = {
    cards: Pokemontcg[], totalCount: number
}

type State = {
    pokemonCards: PokemonCardsState,
    pokemonTypes: string[],
    pokemonSubtypes: string[],
    pokemonSupertypes: string[],
    pokemonRarities: string[],
    
    packs: Pack[],
    selectedPack?: Pack,

    loading: boolean;
    message: string
}

const initalState: State = {
    pokemonCards: {cards: [], totalCount: 0},
    pokemonRarities: [],
    pokemonSubtypes: [],
    pokemonSupertypes: [],
    pokemonTypes: [],

    packs: [],

    loading: false,
    message: ''
}

export { State, initalState, PokemonCardsState };