import { createReducer, on } from "@ngrx/store";
import { initalState } from "./app.state";
import { PokemonCardsActions } from "./app.actions";

const pokemonCardsReducer = createReducer(
    initalState,
    on(PokemonCardsActions.getCards, (state, { cards }) => ({
        ...state,
        pokemonCards: cards
    }))
);

export { pokemonCardsReducer };