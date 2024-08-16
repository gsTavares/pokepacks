import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./app.state";

const pokemonCardsFeatureSelector = createFeatureSelector<State>('pokemonCards');
const packsFeatureSelector = createFeatureSelector<State>('packs');

const pokemonCardsSelector = createSelector(
    pokemonCardsFeatureSelector,
    (state) => state.pokemonCards
);

const packsSelector = createSelector(
    packsFeatureSelector,
    (state) => state.packs
)

export { pokemonCardsSelector, packsSelector };
