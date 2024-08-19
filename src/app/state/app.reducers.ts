import { createReducer, on } from "@ngrx/store";
import { LoadingActions, MessageActions, PacksActions, PokemonCardsActions, PokemonRaritiesActions, PokemonSubtypesActions, PokemonSupertypesActions, PokemonTypesActions, SelectedPackActions } from "./app.actions";
import { initialState } from "./app.state";
import { Pack } from "../models/pack.models";

const pokemonCardsReducer = createReducer(
    initialState,
    on(PokemonCardsActions.setCards, (state, { cards, totalCount }) => ({
        ...state,
        pokemonCards: { cards: cards, totalCount: totalCount },
        totalPokemonCardCount: totalCount
    })),
    on(PokemonCardsActions.clearCards, (state, _) => ({
        ...state,
        pokemonCards: { cards: [], totalCount: 0 }
    }))
)

const packsReducer = createReducer(
    initialState,
    on(PacksActions.createPackSuccessfully, (state, { pack }) => {
        let toSave: Pack;

        if (state.packs.length === 0) {
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
    on(PacksActions.editPackSuccessfully, (state, { pack }) => {
        const toEditIndex = state.packs.findIndex(p => p.id === pack.id!);

        const packWithUpdatedAt: Pack = { ...pack, updatedAt: new Date() };

        return {
            ...state,
            // get elements before the toEditIdex    add editted item     copy the rest of array after toEditIndex
            packs: [...state.packs.slice(0, toEditIndex), packWithUpdatedAt, ...state.packs.slice(toEditIndex + 1)]
        };
    }),
    on(PacksActions.deletePackSuccessfully, (state, { packId }) => ({
        ...state,
        packs: [...state.packs.filter(p => p.id !== packId)]
    }))
)

const pokemonTypesReducer = createReducer(
    initialState,
    on(PokemonTypesActions.setPokemonTypes, (state, { pokemonTypes }) => ({
        ...state,
        pokemonTypes: pokemonTypes
    }))
)

const pokemonSubtypesReducer = createReducer(
    initialState,
    on(PokemonSubtypesActions.setPokemonSubtypes, (state, { pokemonSubtypes }) => ({
        ...state,
        pokemonSubtypes: pokemonSubtypes
    }))
)

const pokemonSupertypesReducer = createReducer(
    initialState,
    on(PokemonSupertypesActions.setPokemonSupertypes, (state, { pokemonSupertypes }) => ({
        ...state,
        pokemonSupertypes: pokemonSupertypes
    }))
)

const pokemonRaritiesReducer = createReducer(
    initialState,
    on(PokemonRaritiesActions.setPokemonRarities, (state, { pokemonRarities }) => ({
        ...state,
        pokemonRarities: pokemonRarities
    }))
)

const loadingReducer = createReducer(
    initialState,
    on(LoadingActions.setLoading, (state, { loadingValue }) => ({
        ...state,
        loading: loadingValue
    }))
)

const messageReducer = createReducer(
    initialState,
    on(MessageActions.setMessage, (state, { message }) => ({
        ...state,
        message: message
    }))
)

const selectedPackReducer = createReducer(
    initialState,
    on(SelectedPackActions.setSelectedPack, (state, { pack }) => ({
        ...state,
        selectedPack: pack
    })),
)

export { loadingReducer, packsReducer, pokemonCardsReducer, pokemonRaritiesReducer, pokemonSubtypesReducer, pokemonSupertypesReducer, pokemonTypesReducer, messageReducer, selectedPackReducer };
