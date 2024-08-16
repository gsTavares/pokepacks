import { NgModule } from '@angular/core';
import { IgxButtonModule, IgxCardModule, IgxChipsModule, IgxIconModule, IgxInputGroupModule, IgxNavigationDrawerModule, IgxPaginatorModule, IgxRippleModule, IgxSelectModule, IgxStepperModule, IgxToastModule } from 'igniteui-angular';



@NgModule({
  exports: [
    IgxNavigationDrawerModule,
    IgxIconModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxChipsModule,
    IgxInputGroupModule,
    IgxStepperModule,
    IgxSelectModule,
    IgxPaginatorModule,
    IgxToastModule
  ]
})
export class IgniteModule { }
