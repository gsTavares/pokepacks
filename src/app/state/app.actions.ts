import { createActionGroup, props } from "@ngrx/store";
import { Pack } from "../models/pack.models";
import { Pokemontcg } from "../models/pokemontcg.models";

const PokemonCardsActions = createActionGroup({
    source: 'pokemonCards',
    events: {
        'Fetch Cards': props<{ q: string, page: number, pageSize: number }>(),
        'Select Card': props<{ cardId: string, packId?: number }>(),
        'Remove Card': props<{ cardId: string, packId?: number }>(),
        'Set Cards': props<{cards: Pokemontcg[], totalCount: number}>(),
        'Clear Cards': props<any>(),
    }
});

const PacksActions = createActionGroup({
    source: 'packs',
    events: {
        'Create Pack': props<{ pack: Pack }>(),
        'Create Pack Successfully': props<{ pack: Pack }>(),
        'Edit Pack': props<{ pack: Pack }>(),
        'Edit Pack Successfully': props<{ pack: Pack }>(),
        'Delete pack': props<{ packId: number }>(),
        'Delete Pack Successfully': props<{ packId: number }>(),
    }
});

const SelectedPackActions = createActionGroup({
    source: '[selectedPack]',
    events: {
        'Set Selected Pack': props<{ pack: Pack }>()
    }
});

const PokemonTypesActions = createActionGroup({
    source: '[pokemonTypes]',
    events: {
        'Fetch Pokemon Types': props<any>(),
        'Set Pokemon Types': props<{ pokemonTypes: string[] }>(),
    }
});

const PokemonSubtypesActions = createActionGroup({
    source: '[pokemonSubtypes]',
    events: {
        'Fetch Pokemon Subtypes': props<any>(),
        'Set Pokemon Subtypes': props<{ pokemonSubtypes: string[] }>(),
    }
});

const PokemonSupertypesActions = createActionGroup({
    source: '[pokemonSupertypes]',
    events: {
        'Fetch Pokemon Supertypes': props<any>(),
        'Set Pokemon Supertypes': props<{ pokemonSupertypes: string[] }>(),
    }
});

const PokemonRaritiesActions = createActionGroup({
    source: '[pokemonRarities]',
    events: {
        'Fetch Pokemon Rarities': props<any>(),
        'Set Pokemon Rarities': props<{ pokemonRarities: string[] }>(),
    }
});

const LoadingActions = createActionGroup({
    source: '[loading]',
    events: {
        'Set Loading': props<{ loadingValue: boolean }>(),
    }
});

const MessageActions = createActionGroup({
    source: '[message]',
    events: {
        'Set Message': props<{ message: string }>(),
    }
})

export { PokemonCardsActions, PacksActions, SelectedPackActions, PokemonTypesActions, PokemonSubtypesActions, PokemonSupertypesActions, PokemonRaritiesActions, LoadingActions, MessageActions }