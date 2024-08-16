import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PokemontcgService } from "../services/pokemontcg.service";
import { catchError, EMPTY, exhaustMap, map, of } from "rxjs";
import { PokemonCardsActions } from "./app.actions";
import { PokemontcgResponse } from "../models/pokemontcg.models";

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
        private api: PokemontcgService
    ) { }

    getPokemonCards$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonCardsActions.fetchCards),
        exhaustMap((searchParams) => this.api.getCards(searchParams.q, searchParams.page, searchParams.pageSize)
            .pipe(
                map(response => PokemonCardsActions.getCards({ cards: response.data, totalCount: response.totalCount })),
                catchError(() => EMPTY)
            )
        )
    ))

}

export { AppEffects };