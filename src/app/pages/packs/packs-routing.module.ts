import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacksComponent } from './packs.component';

const routes: Routes = [
  {
    path: 'list',
    component: PacksComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacksRoutingModule { }
