import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemontcg } from '../../../../models/pokemontcg.models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-list-item',
  templateUrl: './card-list-item.component.html',
  styleUrl: './card-list-item.component.scss'
})
export class CardListItemComponent {

  @Input({ required: true })
  card!: Pokemontcg

  @Input({required: true})
  selectedCardsFormControl!: FormControl

  @Output()
  onCardSelectionFails: EventEmitter<string> = new EventEmitter();

  isCardAlreadySelected(card: Pokemontcg): boolean {
    const sCards = this.selectedCardsFormControl.value as Pokemontcg[];
    if (sCards.length === 0) {
      return false
    }
    return sCards.some(c => c.id === card.id);
  }

  selectCard(card: Pokemontcg) {
    const sCards = this.selectedCardsFormControl.value as Pokemontcg[];
    const withSameNameOnPack = sCards.filter(c => c.name === card.name)
      .map(_ => 1);

    let quantity = 0;

    if (withSameNameOnPack.length > 0) {
      quantity = withSameNameOnPack.reduce((a, b) => a + b);
    }

    if (quantity === 4) {
      this.onCardSelectionFails.emit('Só podem ter 4 cartas com o mesmo nome no baralho');
      return;
    }

    this.selectedCardsFormControl.patchValue([...sCards, card]);
  }

  removeCard(cardId: string) {
    const newValue = (this.selectedCardsFormControl.value as Pokemontcg[])
      .filter(c => c.id !== cardId);
    this.selectedCardsFormControl.patchValue(newValue);
  }

}
