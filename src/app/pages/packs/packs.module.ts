import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgniteModule } from '../../libs/ignite/ignite.module';
import { CardListHeaderComponent } from './components/card-list-header/card-list-header.component';
import { CardListItemComponent } from './components/card-list-item/card-list-item.component';
import { PackListItemComponent } from './components/pack-list-item/pack-list-item.component';
import { CreatePackComponent } from './create-pack/create-pack.component';
import { EditPackComponent } from './edit-pack/edit-pack.component';
import { PacksRoutingModule } from './packs-routing.module';
import { PacksComponent } from './packs.component';

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
