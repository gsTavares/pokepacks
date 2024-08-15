import { Component, OnInit } from '@angular/core';
import { PokemontcgService } from '../../../services/pokemontcg.service';

@Component({
  selector: 'app-create-pack',
  templateUrl: './create-pack.component.html',
  styleUrl: './create-pack.component.scss'
})
export class CreatePackComponent implements OnInit {

  constructor(private api: PokemontcgService) {
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
