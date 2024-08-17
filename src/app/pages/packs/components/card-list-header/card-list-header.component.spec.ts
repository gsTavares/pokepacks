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
});
