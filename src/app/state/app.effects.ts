import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, finalize, map, of, tap } from "rxjs";
import { PokemontcgResponse } from "../models/pokemontcg.models";
import { PokemontcgService } from "../services/pokemontcg.service";
import { LoadingActions, PokemonCardsActions, PokemonRaritiesActions, PokemonSubtypesActions, PokemonSupertypesActions, PokemonTypesActions } from "./app.actions";
import { Store } from "@ngrx/store";

@Injectable()
class AppEffects {

    private _mock: PokemontcgResponse = {
        count: 0,
        data: [
            {
                id: 'shiba',
                images: {
                    large: 'string',
                    small: 'string'
                },
                name: 'string',
                subtypes: ['s'],
                supertype: 's',
                types: ['tes']
            }
        ],
        page: 0,
        pageSize: 0,
        totalCount: 1
    }

    constructor(
        private actions$: Actions,
        private api: PokemontcgService,
        private store: Store
    ) { }

    getPokemonCards$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonCardsActions.fetchCards),
        tap(() => this.store.dispatch(LoadingActions.setLoading({ loadingValue: true }))),
        exhaustMap((searchParams) => this.api.getCards(searchParams.q, searchParams.page, searchParams.pageSize)
            .pipe(
                map(response => PokemonCardsActions.getCards({ cards: response.data, totalCount: response.totalCount })),
                catchError(() => EMPTY),
                finalize(() => this.store.dispatch(LoadingActions.setLoading({ loadingValue: false })))
            )
        )
    ));

    getPokemonTypes$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonTypesActions.fetchPokemonTypes),
        exhaustMap(() => this.api.getTypes()
            .pipe(
                map(response => PokemonTypesActions.getPokemonTypes({ pokemonTypes: response.data })),
                catchError(() => EMPTY)
            )
        )
    ));

    getPokemonSubtypes$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonSubtypesActions.fetchPokemonSubtypes),
        exhaustMap(() => this.api.getSubtypes()
            .pipe(
                map(response => PokemonSubtypesActions.getPokemonSubtypes({ pokemonSubtypes: response.data })),
                catchError(() => EMPTY)
            )
        )
    ));

    getPokemonSupertypes$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonSupertypesActions.fetchPokemonSupertypes),
        exhaustMap(() => this.api.getSupertypes()
            .pipe(
                map(response => PokemonSupertypesActions.getPokemonSupertypes({ pokemonSupertypes: response.data })),
                catchError(() => EMPTY)
            )
        )
    ));

    getPokemonRarities$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonRaritiesActions.fetchPokemonRarities),
        exhaustMap(() => this.api.getRarities()
            .pipe(
                map(response => PokemonRaritiesActions.getPokemonRarities({ pokemonRarities: response.data })),
                catchError(() => EMPTY)
            )
        )
    ));

}

export { AppEffects };

