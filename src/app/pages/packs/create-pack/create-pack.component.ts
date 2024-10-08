import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IgxSnackbarComponent } from 'igniteui-angular';
import { combineLatest, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { Pack } from '../../../models/pack.models';
import { PacksActions, PokemonCardsActions, PokemonRaritiesActions, PokemonSubtypesActions, PokemonSupertypesActions, PokemonTypesActions } from '../../../state/app.actions';
import { loadingSelector, messageSelector, pokemonCardsSelector, pokemonRaritiesSelector, pokemonSubtypesSelector, pokemonSupertypesSelector, pokemonTypesSelector } from '../../../state/app.selectors';
import { snackbarPositionSettings } from '../../../utils/component-settings/snackbar.settings';
import { validateCardQuantity } from '../../../utils/validators/card-quantity.validator';

@Component({
  selector: 'app-create-pack',
  templateUrl: './create-pack.component.html',
  styleUrl: './create-pack.component.scss'
})
export class CreatePackComponent implements OnInit, OnDestroy {

  @ViewChild('validationSnackbar', { read: IgxSnackbarComponent })
  validationSnackbar!: IgxSnackbarComponent

  q: string = '';
  page: number = 0;
  pageSize: number = 20;
  totalCount: number = 0;

  pokemonCards$ = this.store.select(pokemonCardsSelector).pipe(tap(response => {
    if (response.totalCount > 0) {
      this.totalCount = response.totalCount
    }
  }));

  // Pack name step
  packNameFormControl: FormControl = new FormControl('', Validators.required);

  // Cards step
  cardSearchFormControl: FormControl = new FormControl('');
  cardTypeFormControl: FormControl = new FormControl('');
  cardSubtypeFormControl: FormControl = new FormControl('');
  cardSupertypeFormControl: FormControl = new FormControl('');
  cardRarityFormControl: FormControl = new FormControl('');
  selectedCardsFormControl: FormControl = new FormControl([], validateCardQuantity());

  types$ = this.store.select(pokemonTypesSelector);
  subtypes$ = this.store.select(pokemonSubtypesSelector);
  supertypes$ = this.store.select(pokemonSupertypesSelector);
  rarities$ = this.store.select(pokemonRaritiesSelector);

  filterData$?: Observable<{
    types: string[],
    subtypes: string[],
    supertypes: string[],
    rarities: string[]
  }>

  perPageOptions = [5, 10, 20, 50, 100, 250];

  loading$ = this.store.select(loadingSelector);

  validationMessage: string = '';

  snackbarPositionSettings = snackbarPositionSettings;

  submitted: boolean = false;

  unsub$: Subject<void> = new Subject();

  constructor(
    private store: Store, 
    private router: Router
  ) {

  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

  ngOnInit(): void {
    this.mapFilterData();
    this.subscribeToMessage();
    this.fetchCards();
    this.fetchTypes();
    this.fetchSubtypes();
    this.fetchSupertypes();
    this.fetchRarities();
  }

  showValidationMessage(message: string) {
    this.validationMessage = message;
    this.validationSnackbar.open();
  }

  fetchCards(event?: number) {

    this.store.dispatch(PokemonCardsActions.clearCards());

    if (event) {
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

  applyFilter() {

    this.page = 0;
    this.totalCount = 0;

    this.q = '';

    const name = this.cardSearchFormControl.value;
    const type = this.cardTypeFormControl.value;
    const subtype = this.cardSubtypeFormControl.value;
    const supertype = this.cardSupertypeFormControl.value;
    const rarity = this.cardRarityFormControl.value;

    const query = [
      { name: 'name', value: name },
      { name: 'types', value: type },
      { name: 'subtypes', value: subtype },
      { name: 'supertype', value: supertype },
      { name: 'rarity', value: rarity }
    ].filter(part => part.value && part.value !== '')
      .map(part => `${part.name}:"${part.value}${part.name === 'name' ? '*' : ''}"`).join(' ');

    this.q = query;

    this.fetchCards();

  }

  createPack() {
    this.submitted = true;

    const payload: Pack = {
      name: this.packNameFormControl.value,
      cards: [...this.selectedCardsFormControl.value]
    };

    this.store.dispatch(PacksActions.createPack({ pack: payload }));
  }

  private subscribeToMessage() {
    this.store.select(messageSelector).pipe(takeUntil(this.unsub$)).subscribe({
      next: (response) => {
        if(response && this.submitted) {
          this.router.navigate(['packs/list']);
        }
      }
    });
  }

  private mapFilterData() {
    this.filterData$ = combineLatest([
      this.types$,
      this.subtypes$,
      this.supertypes$,
      this.rarities$
    ]).pipe(
      map(([types, subtypes, supertypes, rarities]) => ({
        rarities: rarities,
        subtypes: subtypes,
        types: types,
        supertypes: supertypes
      }))
    );
  }

}
