import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PokemontcgService } from "../services/pokemontcg.service";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { PokemonCardsActions } from "./app.actions";

@Injectable()
class AppEffects {

    constructor(
        private actions$: Actions,
        private api: PokemontcgService
    ) { }

    getPokemonCards$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonCardsActions.fetchCards),
        exhaustMap((searchParams) => this.api.getCards(searchParams.q, searchParams.page, searchParams.pageSize)
            .pipe(
                map(response => PokemonCardsActions.getCards({ cards: response.data })),
                catchError(() => EMPTY)
            )
        )
    ))

}

export { AppEffects };