import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CardsComponent } from './cards/cards.component';
import { PacksComponent } from './packs/packs.component';


@NgModule({
  declarations: [
    CardsComponent,
    PacksComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
