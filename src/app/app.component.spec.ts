import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, Route, RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { IgxNavigationDrawerComponent, IgxSnackbarComponent } from 'igniteui-angular';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { IgniteModule } from './libs/ignite/ignite.module';
import { Pack } from './models/pack.models';
import { State } from './state/app.state';
import { MessageActions } from './state/app.actions';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

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
        BrowserModule,
        BrowserAnimationsModule,
        IgniteModule
      ],
      providers: [
        provideHttpClient(),
        provideRouter([
          {
            path: '',
            loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
          }
        ]),
        provideMockStore({ initialState })
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    fixture.detectChanges();
    const onInitSpy = spyOn(app, 'ngOnInit');
    app.ngOnInit();
    fixture.detectChanges();

    expect(onInitSpy).toHaveBeenCalled();
  });

  it('should open global snackbar if receive a message', () => {
    const igxSnackBar = TestBed.createComponent(IgxSnackbarComponent);

    app.globalMessagesSnackbar = igxSnackBar.componentInstance;
    app.message$ = of('string');

    const openSpy = spyOn(app.globalMessagesSnackbar, 'open');

    fixture.detectChanges();

    expect(openSpy).toHaveBeenCalled();
  });

  it('should test navigate behavior', () => {
    fixture.detectChanges();
    const drawer = TestBed.createComponent(IgxNavigationDrawerComponent)
    const route: Route = {path: 'packs', title: 'Baralhos'};

    app.drawer = drawer.componentInstance;

    const routerSpy = spyOn(app['router'], 'navigate');
    const drawerSpy = spyOn(app.drawer, 'close');

    app.navigate(route);
    fixture.detectChanges();

    expect(routerSpy).toHaveBeenCalledWith(['packs']);
    expect(app.activePage).toBe('Baralhos');
    expect(drawerSpy).toHaveBeenCalled();
  });

  it('should test resetMessageState behavior', () => {
    fixture.detectChanges();
    const action = MessageActions.setMessage({message: ''});

    const storeSpy = spyOn(app['store'], 'dispatch');

    app.resetMessageState();
    fixture.detectChanges();

    expect(storeSpy).toHaveBeenCalledWith(action);
  });

});
