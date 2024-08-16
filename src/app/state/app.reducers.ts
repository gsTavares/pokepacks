import { createReducer, on } from "@ngrx/store";
import { LoadingActions, PacksActions, PokemonCardsActions, PokemonRaritiesActions, PokemonSubtypesActions, PokemonSupertypesActions, PokemonTypesActions } from "./app.actions";
import { initalState } from "./app.state";

const pokemonCardsReducer = createReducer(
    initalState,
    on(PokemonCardsActions.getCards, (state, { cards, totalCount }) => ({
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
    on(PacksActions.getAllPacks, (state, _) => ({
        ...state
    })),
    on(PacksActions.createPack, (state, { pack }) => {
        let toSave;

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

        return {
            ...state,
            packs: [...state.packs, toSave]
        };
    }),
    on(PacksActions.editPack, (state, { pack }) => {
        state.packs[pack.id! - 1] = pack;

        return {...state};
    }),
    on(PacksActions.deletePack, (state, {packId}) => {
        state.packs = state.packs.filter(p => p.id !== packId);

        return {...state};
    })
)

const pokemonTypesReducer = createReducer(
    initalState,
    on(PokemonTypesActions.getPokemonTypes, (state, { pokemonTypes }) => ({
        ...state,
        pokemonTypes: pokemonTypes
    }))
)

const pokemonSubtypesReducer = createReducer(
    initalState,
    on(PokemonSubtypesActions.getPokemonSubtypes, (state, { pokemonSubtypes }) => ({
        ...state,
        pokemonSubtypes: pokemonSubtypes
    }))
)

const pokemonSupertypesReducer = createReducer(
    initalState,
    on(PokemonSupertypesActions.getPokemonSupertypes, (state, { pokemonSupertypes }) => ({
        ...state,
        pokemonSupertypes: pokemonSupertypes
    }))
)

const pokemonRaritiesReducer = createReducer(
    initalState,
    on(PokemonRaritiesActions.getPokemonRarities, (state, { pokemonRarities }) => ({
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

export { loadingReducer, packsReducer, pokemonCardsReducer, pokemonRaritiesReducer, pokemonSubtypesReducer, pokemonSupertypesReducer, pokemonTypesReducer };
