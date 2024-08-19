import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Pack } from '../../../../models/pack.models';
import { PacksActions, SelectedPackActions } from '../../../../state/app.actions';

@Component({
  selector: 'app-pack-list-item',
  templateUrl: './pack-list-item.component.html',
  styleUrl: './pack-list-item.component.scss'
})
export class PackListItemComponent implements OnInit {

  @Input({required: true})
  pack!: Pack

  uniqueTypes: number = 0;
  mainType: string = '';

  firstCardImageOfMainType: string = '';

  packTypes: {name: string, quantity: number}[] = [];

  pokemonQuantity: number = 0;
  trainerQuantity: number = 0;

  constructor(private store: Store, private router: Router) {

  }

  ngOnInit(): void {
    this.extractPackInfo();
  }

  extractPackInfo() {
    let typeSet = new Set<string>();

    for(let card of this.pack.cards) {

      if(card.supertype === 'Trainer') {
        this.trainerQuantity++;
      } else if(card.supertype === 'Pokémon') {
        this.pokemonQuantity++;
      }

      for(let type of card.types) {
        typeSet.add(type)
      }

    }

    this.uniqueTypes = typeSet.size;

    let maxTypeCount = 0;

    const typeSetMapped: {name: string, quantity: number}[] = [];

    for(let type of typeSet) {
      const quantityInPack = this.pack.cards.filter(c => c.types.includes(type)).length;
      typeSetMapped.push({name: type, quantity: quantityInPack});
      if(quantityInPack > maxTypeCount) {
        maxTypeCount = quantityInPack;
        this.mainType = type;
      }
    }

    this.firstCardImageOfMainType = this.pack.cards.filter(c => c.types[0] === this.mainType)[0].images.large;

    this.packTypes = [...typeSetMapped];

  }

  deletePack() {
    this.store.dispatch(PacksActions.deletePack({packId: this.pack.id!}));
  }

  setSelectedPack() {
    this.store.dispatch(SelectedPackActions.setSelectedPack({pack: this.pack}));
    this.router.navigate(['packs/edit']);
  }

}
