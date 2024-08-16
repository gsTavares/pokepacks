import { createActionGroup, props } from "@ngrx/store";
import { Pack } from "../models/pack.models";
import { Pokemontcg } from "../models/pokemontcg.models";

const PokemonCardsActions = createActionGroup({
    source: 'pokemonCards',
    events: {
        'Fetch Cards': props<{ q: string, page: number, pageSize: number }>(),
        'Select Card': props<{ cardId: string, packId?: number }>(),
        'Remove Card': props<{ cardId: string, packId?: number }>(),
        'Get Cards': props<{cards: Pokemontcg[], totalCount: number}>(),
        'Clear Cards': props<any>(),
    }
});

const PacksActions = createActionGroup({
    source: 'packs',
    events: {
        'Create Pack': props<{ pack: Pack }>(),
        'Edit Pack': props<{ pack: Pack }>(),
        'Delete pack': props<{ packId: number }>(),
        'Get All Packs': props<any>(),
    }
});

const SelectedPackActions = createActionGroup({
    source: '[selectedPack]',
    events: {
        'Get Selected Pack': props<any>(),
        'Set Selected Pack': props<{ packId: number }>
    }
});

const PokemonTypesActions = createActionGroup({
    source: '[pokemonTypes]',
    events: {
        'Fetch Pokemon Types': props<any>(),
        'Get Pokemon Types': props<{ pokemonTypes: string[] }>(),
    }
});

const PokemonSubtypesActions = createActionGroup({
    source: '[pokemonSubtypes]',
    events: {
        'Fetch Pokemon Subtypes': props<any>(),
        'Get Pokemon Subtypes': props<{ pokemonSubtypes: string[] }>(),
    }
});

const PokemonSupertypesActions = createActionGroup({
    source: '[pokemonSupertypes]',
    events: {
        'Fetch Pokemon Supertypes': props<any>(),
        'Get Pokemon Supertypes': props<{ pokemonSupertypes: string[] }>(),
    }
});

const PokemonRaritiesActions = createActionGroup({
    source: '[pokemonRarities]',
    events: {
        'Fetch Pokemon Rarities': props<any>(),
        'Get Pokemon Rarities': props<{ pokemonRarities: string[] }>(),
    }
});

const LoadingActions = createActionGroup({
    source: '[loading]',
    events: {
        'Set Loading': props<{ loadingValue: boolean }>(),
    }
})

export { PokemonCardsActions, PacksActions, SelectedPackActions, PokemonTypesActions, PokemonSubtypesActions, PokemonSupertypesActions, PokemonRaritiesActions, LoadingActions }