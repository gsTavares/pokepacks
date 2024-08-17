import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, finalize, map, of, tap } from "rxjs";
import { PokemontcgResponse } from "../models/pokemontcg.models";
import { PokemontcgService } from "../services/pokemontcg.service";
import { LoadingActions, MessageActions, PacksActions, PokemonCardsActions, PokemonRaritiesActions, PokemonSubtypesActions, PokemonSupertypesActions, PokemonTypesActions } from "./app.actions";
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
                map(response => PokemonCardsActions.setCards({ cards: response.data, totalCount: response.totalCount })),
                catchError(() => EMPTY),
                finalize(() => this.store.dispatch(LoadingActions.setLoading({ loadingValue: false })))
            )
        )
    ));

    getPokemonTypes$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonTypesActions.fetchPokemonTypes),
        exhaustMap(() => this.api.getTypes()
            .pipe(
                map(response => PokemonTypesActions.setPokemonTypes({ pokemonTypes: response.data })),
                catchError(() => EMPTY)
            )
        )
    ));

    getPokemonSubtypes$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonSubtypesActions.fetchPokemonSubtypes),
        exhaustMap(() => this.api.getSubtypes()
            .pipe(
                map(response => PokemonSubtypesActions.setPokemonSubtypes({ pokemonSubtypes: response.data })),
                catchError(() => EMPTY)
            )
        )
    ));

    getPokemonSupertypes$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonSupertypesActions.fetchPokemonSupertypes),
        exhaustMap(() => this.api.getSupertypes()
            .pipe(
                map(response => PokemonSupertypesActions.setPokemonSupertypes({ pokemonSupertypes: response.data })),
                catchError(() => EMPTY)
            )
        )
    ));

    getPokemonRarities$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonRaritiesActions.fetchPokemonRarities),
        exhaustMap(() => this.api.getRarities()
            .pipe(
                map(response => PokemonRaritiesActions.setPokemonRarities({ pokemonRarities: response.data })),
                catchError(() => EMPTY)
            )
        )
    ));

    createPack$ = createEffect(() => this.actions$.pipe(
        ofType(PacksActions.createPack),
        exhaustMap(({ pack }) => of(pack)
            .pipe(
                tap(() => this.store.dispatch(MessageActions.setMessage({ message: 'Baralho criado com sucesso!' }))),
                map(response => PacksActions.createPackSuccessfully({ pack: response })),
                catchError(() => EMPTY)
            )
        )
    ))

}

export { AppEffects };

