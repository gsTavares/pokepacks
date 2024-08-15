import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrl: './packs.component.scss'
})
export class PacksComponent {

  packList = [];

  constructor(private router: Router) {

  }

  goToCreatePackPage() {
    this.router.navigate(['packs/create']);
  }
  
}
