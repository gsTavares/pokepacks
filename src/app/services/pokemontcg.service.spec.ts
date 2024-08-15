import { TestBed } from '@angular/core/testing';

import { PokemontcgService } from './pokemontcg.service';

describe('PokemontcgService', () => {
  let service: PokemontcgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemontcgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
