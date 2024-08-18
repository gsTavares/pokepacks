import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { IgniteModule } from '../../../../libs/ignite/ignite.module';
import { Pack } from '../../../../models/pack.models';
import { PacksActions, SelectedPackActions } from '../../../../state/app.actions';
import { State } from '../../../../state/app.state';
import { POKEMON_PACK_MOCK, TRAINER_PACK_MOCK } from '../../../../utils/mocks/pack.mocks';
import { CreatePackComponent } from '../../create-pack/create-pack.component';
import { EditPackComponent } from '../../edit-pack/edit-pack.component';
import { PacksComponent } from '../../packs.component';
import { PackListItemComponent } from './pack-list-item.component';

describe('PackListItemComponent', () => {
  let component: PackListItemComponent;
  let fixture: ComponentFixture<PackListItemComponent>;

  beforeEach(async () => {

    const initialState: State = {
      pokemonCards: { cards: [], totalCount: 0 },
      pokemonRarities: [],
      pokemonSubtypes: [],
      pokemonSupertypes: [],
      pokemonTypes: [],

      packs: [],
      selectedPack: {} as Pack,

      loading: false,
      message: ''
    }

    await TestBed.configureTestingModule({
      imports: [
        RouterModule,
        IgniteModule
      ],
      providers: [
        provideAnimations(),
        provideMockStore({ initialState }),
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
        ]
        )],
      declarations: [
        PackListItemComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PackListItemComponent);
    component = fixture.componentInstance;
    component.pack = TRAINER_PACK_MOCK;
    fixture.detectChanges();
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

  it('should extract pack info containing pokemon cards', () => {
    component.pack = POKEMON_PACK_MOCK;

    fixture.detectChanges();

    component.extractPackInfo();

    fixture.detectChanges();

    expect(component.pokemonQuantity).toBe(1);
  });

  it('should test deletePack behavior', () => {
    const action = PacksActions.deletePack({ packId: component.pack.id! });

    const storeSpy = spyOn(component['store'], 'dispatch');

    component.deletePack();

    fixture.detectChanges();

    expect(storeSpy).toHaveBeenCalledWith(action);
  });

  it('should test setSelectedPack behavior', () => {
    const action = SelectedPackActions.setSelectedPack({ pack: component.pack });

    const storeSpy = spyOn(component['store'], 'dispatch');
    const routerSpy = spyOn(component['router'], 'navigate');

    component.setSelectedPack();

    fixture.detectChanges();

    expect(storeSpy).toHaveBeenCalledWith(action);
    expect(routerSpy).toHaveBeenCalledWith(['packs/edit']);
  });

});
