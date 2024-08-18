import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListHeaderComponent } from './card-list-header.component';

describe('CardListHeaderComponent', () => {
  let component: CardListHeaderComponent;
  let fixture: ComponentFixture<CardListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onSavePack emit void when call savePack', () => {
    const spy = spyOn(component.onSavePack, 'emit');

    component.savePack();
    
    expect(spy).toHaveBeenCalled();
  });

  it('should onFilterReady emit void when call doFilter', () => {
    const spy = spyOn(component.onFilterReady, 'emit');

    component.doFilter();
    
    expect(spy).toHaveBeenCalled();
  });

  it('should onCardNumberClick emit void when call openSelectedCardsDialog', () => {
    const spy = spyOn(component.onCardNumberClick, 'emit');

    component.openSelectedCardsDialog();
    
    expect(spy).toHaveBeenCalled();
  });

});
