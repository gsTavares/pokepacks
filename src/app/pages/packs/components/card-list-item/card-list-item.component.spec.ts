import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgniteModule } from '../../../../libs/ignite/ignite.module';
import { BASTIODON_MOCK, CARD_MOCK, SELECTED_CARDS_WITH_4_BASTIODON_MOCK, SELECTED_CARDS_EXCLUDING_CARD_INPUT_MOCK, SELECTED_CARDS_INCLUDING_CARD_INPUT_MOCK } from '../../../../utils/mocks/pokemonctg.mocks';
import { CardListItemComponent } from './card-list-item.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Pokemontcg } from '../../../../models/pokemontcg.models';

describe('CardListItemComponent', () => {
  let component: CardListItemComponent;
  let fixture: ComponentFixture<CardListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListItemComponent],
      imports: [
        IgniteModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        provideAnimations()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardListItemComponent);
    component = fixture.componentInstance;
    component.card = CARD_MOCK;
    component.selectedCardsFormControl = new FormControl([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test isCardAlreadySelected behavior with empty selected cards control', () => {
    const result = component.isCardAlreadySelected(component.card);

    expect(result).toBe(false);
  });

  it('should test isCardAlreadySelected behavior with filled selected cards control excluding the card passed as input', () => {
    component.selectedCardsFormControl.patchValue(SELECTED_CARDS_EXCLUDING_CARD_INPUT_MOCK);
    fixture.detectChanges();

    const result = component.isCardAlreadySelected(component.card);

    expect(result).toBe(false);
  });

  it('should test isCardAlreadySelected behavior with filled selected cards control including the card passed as input', () => {
    component.selectedCardsFormControl.patchValue(SELECTED_CARDS_INCLUDING_CARD_INPUT_MOCK);
    fixture.detectChanges();

    const result = component.isCardAlreadySelected(component.card);


    expect(result).toBe(true);
  });

  it('should add component card to selected cards control', () => {
    component.selectedCardsFormControl.patchValue(SELECTED_CARDS_EXCLUDING_CARD_INPUT_MOCK);
    fixture.detectChanges();
    
    component.selectCard(component.card);

    expect(component.selectedCardsFormControl.value.some((c: Pokemontcg) => c.id === component.card.id))
      .toBe(true);
  });

  it('should validate the 4 cards rule', () => {
    component.selectedCardsFormControl.patchValue(SELECTED_CARDS_WITH_4_BASTIODON_MOCK);
    component.card = BASTIODON_MOCK;
    fixture.detectChanges();
  
    const onCardSelectionFailsSpy = spyOn(component.onCardSelectionFails, 'emit');

    component.selectCard(component.card);

    expect(onCardSelectionFailsSpy).toHaveBeenCalledWith('Só podem ter 4 cartas com o mesmo nome no baralho');
  });

  it('should validate remove card function behavior', () => {
    component.selectedCardsFormControl.patchValue(SELECTED_CARDS_INCLUDING_CARD_INPUT_MOCK);
    fixture.detectChanges();

    component.removeCard(component.card.id);

    expect(component.selectedCardsFormControl.value.indexOf(component.card)).toBe(-1);
  })

});
