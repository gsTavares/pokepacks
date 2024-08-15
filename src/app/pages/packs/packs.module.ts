import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacksRoutingModule } from './packs-routing.module';
import { IgniteModule } from '../../libs/ignite/ignite.module';
import { PacksComponent } from './packs.component';

@NgModule({
  declarations: [
    PacksComponent
  ],
  imports: [
    CommonModule,
    IgniteModule,
    PacksRoutingModule
  ]
})
export class PacksModule { }
