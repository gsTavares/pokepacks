import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Pack } from '../../../models/pack.models';
import { PokemonCardsActions, PokemonRaritiesActions, PokemonSubtypesActions, PokemonSupertypesActions, PokemonTypesActions } from '../../../state/app.actions';
import { packsSelector, pokemonCardsSelector, pokemonRaritiesSelector, pokemonSubtypesSelector, pokemonSupertypesSelector, pokemonTypesSelector } from '../../../state/app.selectors';
import { validateCardQuantity } from '../../../utils/validators/card-quantity.validator';
import { Pokemontcg } from '../../../models/pokemontcg.models';

@Component({
  selector: 'app-create-pack',
  templateUrl: './create-pack.component.html',
  styleUrl: './create-pack.component.scss'
})
export class CreatePackComponent implements OnInit {

  q: string = '';
  page: number = 0;
  pageSize: number = 20;

  pokemonCards$ = this.store.select(pokemonCardsSelector);
  persistedPacks$ = this.store.select(packsSelector);

  private _persistedPacksLastValue: Pack[] = [];

  // Pack name step
  packNameFormControl: FormControl = new FormControl('', Validators.required);

  // Cards step
  cardSearchFormControl: FormControl = new FormControl('');
  selectedCardsFormControl: FormControl = new FormControl([], validateCardQuantity());

  types$ = this.store.select(pokemonTypesSelector);
  subtypes$ = this.store.select(pokemonSubtypesSelector);
  supertypes$ = this.store.select(pokemonSupertypesSelector);
  rarities$ = this.store.select(pokemonRaritiesSelector);

  perPageOptions = [5, 10, 20, 50, 100, 250];

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.subscribeToPacks();
    this.fetchCards();
    this.fetchTypes();
    this.fetchSubtypes();
    this.fetchSupertypes();
    this.fetchRarities();
  }

  isCardAlreadySelected(card: Pokemontcg): boolean {
    const sCards = this.selectedCardsFormControl.value as Pokemontcg[];
    if (sCards.length === 0) {
      return false
    }
    return sCards.includes(card);
  }

  selectCard(card: Pokemontcg) {
    const sCards = this.selectedCardsFormControl.value as Pokemontcg[];

    if(sCards.length > 0) {
      const withSameNameOnPack = sCards.filter(c => c.name === card.name)
        .map(_ => 1)
        .reduce((a, b) => a + b) + 1;

      if(withSameNameOnPack === 4) return;

    }

    this.selectedCardsFormControl.patchValue([...sCards, card]);
  }

  removeCard(cardId: string) {
    const newValue = (this.selectedCardsFormControl.value as Pokemontcg[])
      .filter(c => c.id !== cardId);
    this.selectedCardsFormControl.patchValue(newValue);
  }

  fetchCards(event?: number) {

    if(event) {
      this.page = event;
    }

    this.store.dispatch(PokemonCardsActions.fetchCards({
      page: this.page + 1,
      pageSize: this.pageSize,
      q: this.q
    }));
  }

  fetchTypes() {
    this.store.dispatch(PokemonTypesActions.fetchPokemonTypes());
  }

  fetchSubtypes() {
    this.store.dispatch(PokemonSubtypesActions.fetchPokemonSubtypes());
  }

  fetchSupertypes() {
    this.store.dispatch(PokemonSupertypesActions.fetchPokemonSupertypes());
  } 
  
  fetchRarities() {
    this.store.dispatch(PokemonRaritiesActions.fetchPokemonRarities());
  }

  private subscribeToPacks() {
    this.persistedPacks$.subscribe({
      next: (response) => {
        this._persistedPacksLastValue = response;
      }
    })
  }

}
