import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacksComponent } from './packs.component';
import { CreatePackComponent } from './create-pack/create-pack.component';

const routes: Routes = [
  {
    path: 'list',
    component: PacksComponent
  },
  {
    path: 'create',
    component: CreatePackComponent
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
