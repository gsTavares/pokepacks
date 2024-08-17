import { createReducer, on } from "@ngrx/store";
import { LoadingActions, MessageActions, PacksActions, PokemonCardsActions, PokemonRaritiesActions, PokemonSubtypesActions, PokemonSupertypesActions, PokemonTypesActions } from "./app.actions";
import { initalState } from "./app.state";
import { Pack } from "../models/pack.models";

const pokemonCardsReducer = createReducer(
    initalState,
    on(PokemonCardsActions.setCards, (state, { cards, totalCount }) => ({
        ...state,
        pokemonCards: {cards: cards, totalCount: totalCount},
        totalPokemonCardCount: totalCount
    })),
    on(PokemonCardsActions.clearCards, (state, _) => ({
        ...state,
        pokemonCards: {cards: [], totalCount: 0}
    }))
)

const packsReducer = createReducer(
    initalState,
    on(PacksActions.createPackSuccessfully, (state, { pack }) => {
        let toSave: Pack;

        if(state.packs.length === 0) {
            toSave = {
                ...pack,
                id: 1
            }
        } else {
            const lastPackId = state.packs[state.packs.length - 1].id!;
            toSave = {
                ...pack,
                id: lastPackId + 1
            }
        }

        toSave.createdAt = new Date();

        return {
            ...state,
            packs: [...state.packs, toSave]
        };
    }),
    on(PacksActions.editPack, (state, { pack }) => {
        state.packs[pack.id! - 1] = pack;

        return {...state};
    }),
    on(PacksActions.deletePackSuccessfully, (state, {packId}) => ({
        ...state,
        packs: [...state.packs.filter(p => p.id !== packId)]
    }))
)

const pokemonTypesReducer = createReducer(
    initalState,
    on(PokemonTypesActions.setPokemonTypes, (state, { pokemonTypes }) => ({
        ...state,
        pokemonTypes: pokemonTypes
    }))
)

const pokemonSubtypesReducer = createReducer(
    initalState,
    on(PokemonSubtypesActions.setPokemonSubtypes, (state, { pokemonSubtypes }) => ({
        ...state,
        pokemonSubtypes: pokemonSubtypes
    }))
)

const pokemonSupertypesReducer = createReducer(
    initalState,
    on(PokemonSupertypesActions.setPokemonSupertypes, (state, { pokemonSupertypes }) => ({
        ...state,
        pokemonSupertypes: pokemonSupertypes
    }))
)

const pokemonRaritiesReducer = createReducer(
    initalState,
    on(PokemonRaritiesActions.setPokemonRarities, (state, { pokemonRarities }) => ({
        ...state,
        pokemonRarities: pokemonRarities
    }))
)

const loadingReducer = createReducer(
    initalState,
    on(LoadingActions.setLoading, (state, { loadingValue }) => ({
        ...state,
        loading: loadingValue
    }))
)

const messageReducer = createReducer(
    initalState,
    on(MessageActions.setMessage, (state, { message }) => ({
        ...state,
        message: message
    }))
)

export { loadingReducer, packsReducer, pokemonCardsReducer, pokemonRaritiesReducer, pokemonSubtypesReducer, pokemonSupertypesReducer, pokemonTypesReducer, messageReducer };
