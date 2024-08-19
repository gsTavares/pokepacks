import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';
import { IgniteModule } from '../../libs/ignite/ignite.module';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgniteModule],
      declarations: [NotFoundComponent],
      providers: [
        provideAnimations()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
