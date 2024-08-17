import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-list-header',
  templateUrl: './card-list-header.component.html',
  styleUrl: './card-list-header.component.scss'
})
export class CardListHeaderComponent {

  @Input({required: true})
  filterData$?: Observable<{
    types: string[],
    subtypes: string[],
    supertypes: string[],
    rarities: string[]
  }>;

  @Input({required: true})
  selectedCardsFormControl!: FormControl;

  @Input({required: true})
  cardSearchFormControl!: FormControl;

  @Input({required: true})
  cardTypeFormControl!: FormControl;

  @Input({required: true})
  cardSubtypeFormControl!: FormControl;

  @Input({required: true})
  cardSupertypeFormControl!: FormControl;

  @Input({required: true})
  cardRarityFormControl!: FormControl;

  @Input({required: true})
  savePackButtonLabel!: string;

  @Output()
  onSavePack: EventEmitter<void> = new EventEmitter();

  @Output()
  onFilterReady: EventEmitter<void> = new EventEmitter();

  savePack() {
    this.onSavePack.emit();
  }

  doFilter() {
    this.onFilterReady.emit();
  }

}
