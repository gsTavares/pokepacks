import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { PacksComponent } from './packs/packs.component';

const routes: Routes = [
  {
    path: 'cards', 
    title: 'Cartas',
    component: CardsComponent
  },
  {
    path: 'packs', 
    title: 'Baralhos',
    component: PacksComponent
  },
  {
    path: '', 
    redirectTo: 'cards',
    pathMatch: 'full'
  }
];

export { routes };

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { } 
