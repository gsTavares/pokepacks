import { createReducer, on } from "@ngrx/store";
import { initalState } from "./app.state";
import { PacksActions, PokemonCardsActions, PokemonRaritiesActions, PokemonSubtypesActions, PokemonSupertypesActions, PokemonTypesActions } from "./app.actions";

const pokemonCardsReducer = createReducer(
    initalState,
    on(PokemonCardsActions.getCards, (state, { cards, totalCount }) => ({
        ...state,
        pokemonCards: {cards: cards, totalCount: totalCount},
        totalPokemonCardCount: totalCount
    }))
)

const packsReducer = createReducer(
    initalState,
    on(PacksActions.getAllPacks, (state, _) => ({
        ...state
    })),
    on(PacksActions.createPack, (state, { pack }) => {
        if(state.packs.length === 0) {
            pack.id = 1
        } else {
            const lastPackId = state.packs[state.packs.length - 1].id!;
            pack.id = lastPackId + 1;
        }

        state.packs = [...state.packs, pack];

        return {...state};
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

export { pokemonCardsReducer, packsReducer, pokemonTypesReducer, pokemonSubtypesReducer, pokemonSupertypesReducer, pokemonRaritiesReducer };