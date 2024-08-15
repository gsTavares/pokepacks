import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonCardsActions } from '../../../state/app.actions';
import { pokemonCardsSelector } from '../../../state/app.selectors';

@Component({
  selector: 'app-create-pack',
  templateUrl: './create-pack.component.html',
  styleUrl: './create-pack.component.scss'
})
export class CreatePackComponent implements OnInit {

  q: string = '';
  page: number = 1;
  pageSize: number = 20;

  pokemonCards$ = this.store.select(pokemonCardsSelector);

  constructor(private store: Store) {
    
  }

  ngOnInit(): void {
    this.fetchCards();
  }

  fetchCards() {
    this.store.dispatch(PokemonCardsActions.fetchCards({
      page: this.page,
      pageSize: this.pageSize,
      q: this.q
    }));
  }

}
