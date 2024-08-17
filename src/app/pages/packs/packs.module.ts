import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IgniteModule } from '../../libs/ignite/ignite.module';
import { PacksRoutingModule } from './packs-routing.module';
import { PacksComponent } from './packs.component';
import { CreatePackComponent } from './create-pack/create-pack.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PackListItemComponent } from './components/pack-list-item/pack-list-item.component';
import { CardListItemComponent } from './components/card-list-item/card-list-item.component';
import { CardListHeaderComponent } from './components/card-list-header/card-list-header.component';
import { EditPackComponent } from './edit-pack/edit-pack.component';

@NgModule({
  declarations: [
    PacksComponent,
    CreatePackComponent,
    PackListItemComponent,
    CardListItemComponent,
    CardListHeaderComponent,
    EditPackComponent
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
