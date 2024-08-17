import { Component, OnInit, ViewChild } from '@angular/core';
import { routes } from './pages/pages-routing.module';
import { IgxNavigationDrawerComponent, IgxSnackbarComponent } from 'igniteui-angular';
import { Route, Router } from '@angular/router';
import { snackbarPositionSettings } from './utils/component-settings/snackbar.settings';
import { Store } from '@ngrx/store';
import { messageSelector } from './state/app.selectors';
import { MessageActions } from './state/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  @ViewChild(IgxNavigationDrawerComponent, {static: true})
  drawer!: IgxNavigationDrawerComponent

  @ViewChild('globalMessagesSnackbar', { read: IgxSnackbarComponent })
  globalMessagesSnackbar!: IgxSnackbarComponent

  snackbarPositionSettings = snackbarPositionSettings;

  readonly pages = routes.filter(item => item.path);

  activePage?: string;

  message$ = this.store.select(messageSelector);

  constructor(private router: Router, private store: Store) {
    this.activePage = this.pages[0].title as string
  }

  ngOnInit(): void {
    this.subscribeToMessage();
  }

  navigate(route: Route): void {
    this.router.navigate([`${route.path}`]);
    this.activePage = route.title as string;
    this.drawer.close();
  }

  resetMessageState() {
    this.store.dispatch(MessageActions.setMessage({message: ''}));
  }

  private subscribeToMessage() {
    this.message$.subscribe({
      next: (response) => {
        if(response) {
          this.globalMessagesSnackbar.open();
        }
      }
    })
  }
  
}
