import { NgModule } from '@angular/core';
import { IgxIconModule, IgxNavigationDrawerModule } from 'igniteui-angular';



@NgModule({
  exports: [
    IgxNavigationDrawerModule,
    IgxIconModule
  ]
})
export class IgniteModule { }
