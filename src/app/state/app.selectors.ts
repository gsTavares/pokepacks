import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./app.state";

const pokemonCardsFeatureSelector = createFeatureSelector<State>('pokemonCards');

const pokemonCardsSelector = createSelector(
    pokemonCardsFeatureSelector,
    (state) => state.pokemonCards
);

export { pokemonCardsSelector };
