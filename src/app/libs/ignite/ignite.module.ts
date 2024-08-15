import { NgModule } from '@angular/core';
import { IgxButtonModule, IgxCardModule, IgxChipsModule, IgxIconModule, IgxInputGroupModule, IgxNavigationDrawerModule, IgxRippleModule, IgxSelectModule, IgxStepperModule } from 'igniteui-angular';



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
  ]
})
export class IgniteModule { }
