import { createActionGroup, props } from "@ngrx/store";
import { Pack } from "../models/pack.models";
import { Pokemontcg } from "../models/pokemontcg.models";

const PokemonCardsActions = createActionGroup({
    source: 'pokemonCards',
    events: {
        'Fetch Cards': props<{ q: string, page: number, pageSize: number }>(),
        'Select Card': props<{ cardId: string, packId?: number }>(),
        'Remove Card': props<{ cardId: string, packId?: number }>(),
        'Get Cards': props<{cards: Pokemontcg[]}>()
    }
});

const PacksActions = createActionGroup({
    source: 'packs',
    events: {
        'Create Pack': props<{ pack: Pack }>(),
        'Edit Pack': props<{ data: Pack }>(),
        'Delete pack': props<{ packId: number }>(),
        'Get All Packs': props<any>(),
    }
});

const SelectedPackActions = createActionGroup({
    source: '[selectedPack]',
    events: {
        '[selectedPack] Get Selected Pack': props<any>(),
        '[selectedPack] Set Selected Pack': props<{ packId: number }>
    }
});

export { PokemonCardsActions, PacksActions, SelectedPackActions }