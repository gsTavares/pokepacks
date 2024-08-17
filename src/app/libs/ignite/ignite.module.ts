import { NgModule } from '@angular/core';
import { IgxButtonModule, IgxCardModule, IgxChipsModule, IgxDialogModule, IgxIconModule, IgxInputGroupModule, IgxNavigationDrawerModule, IgxOverlayOutletDirective, IgxPaginatorModule, IgxRippleModule, IgxSelectModule, IgxSnackbarModule, IgxStepperModule, IgxToastModule } from 'igniteui-angular';



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
    IgxSnackbarModule,
    IgxDialogModule
  ]
})
export class IgniteModule { }
