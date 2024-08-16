import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { packsSelector } from '../../state/app.selectors';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrl: './packs.component.scss'
})
export class PacksComponent {

  packList$ = this.store.select(packsSelector);

  constructor(
    private router: Router,
    private store: Store
  ) {

  }

  goToCreatePackPage() {
    this.router.navigate(['packs/create']);
  }
  
}
