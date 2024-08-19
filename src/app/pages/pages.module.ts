import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { IgniteModule } from '../libs/ignite/ignite.module';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    IgniteModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
