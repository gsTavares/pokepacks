import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: 'packs', 
    title: 'Baralhos',
    loadChildren: () => import('./packs/packs.module').then(m => m.PacksModule)
  },
  {
    path: '', 
    redirectTo: 'packs',
    pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

export { routes };

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { } 
