import { Component, Input, input, OnInit } from '@angular/core';
import { Pack } from '../../../../models/pack.models';

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

  constructor() {

  }

  ngOnInit(): void {
    this.extractPackInfo();
  }

  extractPackInfo() {
    let typeSet = new Set<string>();

    for(let card of this.pack.cards) {
      for(let type of card.types) {
        typeSet.add(type)
      }
    }

    this.uniqueTypes = typeSet.size;

    let maxTypeCount = 0;

    for(let type of typeSet) {
      const quantityInPack = this.pack.cards.filter(c => c.types.includes(type)).length;
      if(quantityInPack > maxTypeCount) {
        maxTypeCount = quantityInPack;
        this.mainType = type;
      }
    }

    this.firstCardImageOfMainType = this.pack.cards.filter(c => c.types[0] === this.mainType)[0].images.large;

  }

}
