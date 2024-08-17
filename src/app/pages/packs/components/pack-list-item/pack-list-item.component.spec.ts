import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackListItemComponent } from './pack-list-item.component';

describe('PackListItemComponent', () => {
  let component: PackListItemComponent;
  let fixture: ComponentFixture<PackListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
