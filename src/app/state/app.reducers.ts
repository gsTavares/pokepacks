import { createReducer, on } from "@ngrx/store";
import { initalState } from "./app.state";
import { PacksActions, PokemonCardsActions } from "./app.actions";

const pokemonCardsReducer = createReducer(
    initalState,
    on(PokemonCardsActions.getCards, (state, { cards, totalCount }) => ({
        ...state,
        pokemonCards: {cards: cards, totalCount: totalCount},
        totalPokemonCardCount: totalCount
    }))
);

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

export { pokemonCardsReducer, packsReducer };