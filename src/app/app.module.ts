import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgniteModule } from './libs/ignite/ignite.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { AppEffects } from './state/app.effects';
import { loadingReducer, packsReducer, pokemonCardsReducer, pokemonRaritiesReducer, pokemonSubtypesReducer, pokemonSupertypesReducer, pokemonTypesReducer } from './state/app.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgniteModule,
    StoreModule.forRoot(
      {
        pokemonCards: pokemonCardsReducer, 
        packs: packsReducer, 
        pokemonTypes: pokemonTypesReducer,
        pokemonSubtypes: pokemonSubtypesReducer, 
        pokemonSupertypes: pokemonSupertypesReducer, 
        pokemonRarities: pokemonRaritiesReducer,
        loading: loadingReducer
      }, {}),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
