import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, RouterModule } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IgxSnackbarComponent } from 'igniteui-angular';
import { of } from 'rxjs';
import { IgniteModule } from '../../../libs/ignite/ignite.module';
import { PacksActions } from '../../../state/app.actions';
import { messageSelector, pokemonCardsSelector } from '../../../state/app.selectors';
import { State } from '../../../state/app.state';
import { PACK_LIST_MOCK } from '../../../utils/mocks/pack.mocks';
import { BASTIODON_MOCK, SELECTED_24_CARDS_MOCK, SELECTED_MORE_THAN_60_CARDS_MOCK } from '../../../utils/mocks/pokemonctg.mocks';
import { CardListHeaderComponent } from '../components/card-list-header/card-list-header.component';
import { CardListItemComponent } from '../components/card-list-item/card-list-item.component';
import { CreatePackComponent } from '../create-pack/create-pack.component';
import { PacksComponent } from '../packs.component';
import { EditPackComponent } from './edit-pack.component';

describe('EditPackComponent', () => {
  let component: EditPackComponent;
  let fixture: ComponentFixture<EditPackComponent>;
  let store: MockStore;

  beforeEach(async () => {

    const initialState: State = {
      pokemonCards: { cards: [], totalCount: 0 },
      pokemonRarities: [],
      pokemonSubtypes: [],
      pokemonSupertypes: [],
      pokemonTypes: [],

      packs: PACK_LIST_MOCK,
      selectedPack: PACK_LIST_MOCK[0],

      loading: false,
      message: ''
    }

    await TestBed.configureTestingModule({
      imports: [
        RouterModule,
        IgniteModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        provideRouter([
          {
            path: 'list',
            component: PacksComponent
          },
          {
            path: 'create',
            component: CreatePackComponent
          },
          {
            path: 'edit',
            component: EditPackComponent
          },
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          }
        ]),
        provideMockStore({ initialState }),
        provideAnimations()
      ],
      declarations: [
        EditPackComponent,
        CardListHeaderComponent,
        CardListItemComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPackComponent);
    component = fixture.componentInstance;
    component.selectedPack$ = of(PACK_LIST_MOCK[0]);
    
    fixture.detectChanges();
    
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init', () => {
    const onInitSpy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    fixture.detectChanges();

    expect(onInitSpy).toHaveBeenCalled();
  });

  it('should test apply filter behavior', () => {
    const fetchCardsSpy = spyOn(component, 'fetchCards');

    component.cardSearchFormControl.patchValue('charizard');
    component.cardTypeFormControl.patchValue('Water');
    fixture.detectChanges();

    component.applyFilter();

    expect(fetchCardsSpy).toHaveBeenCalled();
  });

  it('should test editPack behavior', () => {
    const action = PacksActions.editPack({
      pack: {
        id: PACK_LIST_MOCK[0].id!,
        name: PACK_LIST_MOCK[0].name,
        cards: PACK_LIST_MOCK[0].cards,
        createdAt: PACK_LIST_MOCK[0].createdAt
      }
    });
    const storeSpy = spyOn(component['store'], 'dispatch');

    component.packNameFormControl.patchValue(PACK_LIST_MOCK[0].name);
    component.selectedCardsFormControl.patchValue(PACK_LIST_MOCK[0].cards);

    component.editPack();
    fixture.detectChanges();

    expect(component.submitted).toBe(true);
    expect(storeSpy).toHaveBeenCalledWith(action);
  });

  it('should test selectedCardsFormControl custom validator', () => {

    component.selectedCardsFormControl.patchValue('string');

    expect(component.selectedCardsFormControl.valid).toBe(false);

    component.selectedCardsFormControl.patchValue([]);

    expect(component.selectedCardsFormControl.valid).toBe(false);

    component.selectedCardsFormControl.patchValue([BASTIODON_MOCK]);

    expect(component.selectedCardsFormControl.valid).toBe(false);

    component.selectedCardsFormControl.patchValue(SELECTED_24_CARDS_MOCK);

    expect(component.selectedCardsFormControl.valid).toBe(true);

    component.selectedCardsFormControl.patchValue(SELECTED_MORE_THAN_60_CARDS_MOCK);

    expect(component.selectedCardsFormControl.valid).toBe(false);
  });

  it('should test redirect to list page', () => {
    component.submitted = true;

    store.overrideSelector(messageSelector, 'string');

    const navigateSpy = spyOn(component['router'], 'navigate');

    component['subscribeToMessage']();

    store.refreshState();

    expect(navigateSpy).toHaveBeenCalledWith(['packs/list']);
  });

  it('should set totalCount based on cards search request', () => {
    store.overrideSelector(pokemonCardsSelector, { cards: SELECTED_24_CARDS_MOCK, totalCount: 992 });

    component.pokemonCards$.subscribe();

    store.refreshState();

    expect(component.totalCount).toBe(992);
  });

  it('should test showValidationMessage behavior', () => {
    component.validationSnackbar = TestBed.createComponent(IgxSnackbarComponent).componentInstance;

    const snackbarSpy = spyOn(component.validationSnackbar, 'open');

    component.showValidationMessage('string');

    expect(component.validationMessage).toBe('string');
    expect(snackbarSpy).toHaveBeenCalled();
  });

  it('should change current page on pagination triggered', () => {
    component.fetchCards(2);
    expect(component.page).toBe(2);
  });

  it('should teste goBackToList behavior', () => {
    const spy = spyOn(component['router'], 'navigate');

    component.goBackToList();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith(['packs/list']);
  });

});
