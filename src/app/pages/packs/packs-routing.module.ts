import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacksComponent } from './packs.component';
import { CreatePackComponent } from './create-pack/create-pack.component';
import { EditPackComponent } from './edit-pack/edit-pack.component';

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
    path: 'edit',
    component: EditPackComponent
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
