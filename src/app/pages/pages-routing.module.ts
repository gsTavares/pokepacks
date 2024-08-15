import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
  }
];

export { routes };

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { } 
