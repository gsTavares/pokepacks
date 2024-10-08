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
    selectedPack: Pack,

    loading: boolean;
    message: string
}

const initialState: State = {
    pokemonCards: {cards: [], totalCount: 0},
    pokemonRarities: [],
    pokemonSubtypes: [],
    pokemonSupertypes: [],
    pokemonTypes: [],

    packs: [],
    selectedPack: {} as Pack,

    loading: false,
    message: ''
}

export { State, initialState, PokemonCardsState };