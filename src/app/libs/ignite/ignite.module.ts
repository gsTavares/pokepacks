import { NgModule } from '@angular/core';
import { IgxButtonModule, IgxCardModule, IgxChipsModule, IgxIconModule, IgxNavigationDrawerModule, IgxRippleModule } from 'igniteui-angular';



@NgModule({
  exports: [
    IgxNavigationDrawerModule,
    IgxIconModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxChipsModule
  ]
})
export class IgniteModule { }
