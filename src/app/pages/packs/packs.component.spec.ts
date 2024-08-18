import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { IgniteModule } from '../../libs/ignite/ignite.module';
import { Pack } from '../../models/pack.models';
import { State } from '../../state/app.state';
import { PackListItemComponent } from './components/pack-list-item/pack-list-item.component';
import { CreatePackComponent } from './create-pack/create-pack.component';
import { EditPackComponent } from './edit-pack/edit-pack.component';
import { PacksComponent } from './packs.component';

describe('PacksComponent', () => {
  let component: PacksComponent;
  let fixture: ComponentFixture<PacksComponent>;

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
        CommonModule,
        IgniteModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
      ],
      providers: [
        provideHttpClient(),
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
        PackListItemComponent,
        PacksComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test goToCreatePack behavior', () => {
    const routerSpy = spyOn(component['router'], 'navigate');

    component.goToCreatePackPage();
    fixture.detectChanges();

    expect(routerSpy).toHaveBeenCalledWith(['packs/create']);
  });

});
