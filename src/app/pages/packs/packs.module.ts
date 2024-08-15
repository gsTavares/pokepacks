import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IgniteModule } from '../../libs/ignite/ignite.module';
import { PacksRoutingModule } from './packs-routing.module';
import { PacksComponent } from './packs.component';
import { CreatePackComponent } from './create-pack/create-pack.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PacksComponent,
    CreatePackComponent
  ],
  imports: [
    CommonModule,
    IgniteModule,
    FormsModule,
    ReactiveFormsModule,
    PacksRoutingModule
  ]
})
export class PacksModule { }
