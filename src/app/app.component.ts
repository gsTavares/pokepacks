import { Component, OnInit, ViewChild } from '@angular/core';
import { routes } from './pages/pages-routing.module';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  @ViewChild(IgxNavigationDrawerComponent, {static: true})
  drawer!: IgxNavigationDrawerComponent

  readonly pages = routes.filter(item => item.path);

  activePage?: string;

  constructor(private router: Router) {
    this.activePage = this.pages[0].title as string
  }

  ngOnInit(): void {
    
  }

  navigate(route: Route): void {
    this.router.navigate([`${route.path}`]);
    this.activePage = route.title as string;
    this.drawer.close();
  }
  
}
