import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./app.state";

const pokemonCardsFeatureSelector = createFeatureSelector<State>('pokemonCards');
const packsFeatureSelector = createFeatureSelector<State>('packs');
const pokemonTypesFeatureSelector = createFeatureSelector<State>('pokemonTypes');
const pokemonSubtypesFeatureSelector = createFeatureSelector<State>('pokemonSubtypes');
const pokemonSupertypesFeatureSelector = createFeatureSelector<State>('pokemonSupertypes');
const pokemonRaritiesFeatureSelector = createFeatureSelector<State>('pokemonRarities');
const loadingFeatureSelector = createFeatureSelector<State>('loading');

const pokemonCardsSelector = createSelector(
    pokemonCardsFeatureSelector,
    (state) => state.pokemonCards
);

const packsSelector = createSelector(
    packsFeatureSelector,
    (state) => state.packs
);

const pokemonTypesSelector = createSelector(
    pokemonTypesFeatureSelector,
    (state) => state.pokemonTypes
);

const pokemonSubtypesSelector = createSelector(
    pokemonSubtypesFeatureSelector,
    (state) => state.pokemonSubtypes
);

const pokemonSupertypesSelector = createSelector(
    pokemonSupertypesFeatureSelector,
    (state) => state.pokemonSupertypes
);

const pokemonRaritiesSelector = createSelector(
    pokemonRaritiesFeatureSelector,
    (state) => state.pokemonRarities
);

const loadingSelector = createSelector(
    loadingFeatureSelector,
    (state) => state.loading
)

export { pokemonCardsSelector, packsSelector, pokemonTypesSelector, pokemonSubtypesSelector, pokemonSupertypesSelector, pokemonRaritiesSelector, loadingSelector };
