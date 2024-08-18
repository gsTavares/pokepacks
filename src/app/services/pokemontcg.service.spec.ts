import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { PokemontcgService } from './pokemontcg.service';

describe('PokemontcgService', () => {
  let service: PokemontcgService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]
    });
    service = TestBed.inject(PokemontcgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test GET cards request', (done: DoneFn) => {
    service.getCards('name:"TV Reporter"', 1, 1).pipe(
      map((response) => {
        response.data.forEach(card => {
          if (!card.types) {
            card.types = ['N/A'];
          }
        });
        return response;
      })
    ).subscribe({
      next: (response) => {
        expect(response.data).toEqual([
          {
            "id": "pop2-11",
            "name": "TV Reporter",
            "supertype": "Trainer",
            "types": ["N/A"],
            "subtypes": [
              "Supporter"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/pop2/11.png",
              "large": "https://images.pokemontcg.io/pop2/11_hires.png"
            }
          }
        ]);
        done();
      }
    })
  });

  it('should test GET cards request withou page and pageSize parameters', (done: DoneFn) => {
    service.getCards('').pipe(
      map((response) => {
        response.data.forEach(card => {
          if (!card.types) {
            card.types = ['N/A'];
          }
        });
        return response;
      })
    ).subscribe({
      next: (response) => {
        expect(response.data).toEqual([
          {
            "id": "hgss4-1",
            "name": "Aggron",
            "supertype": "Pokémon",
            "subtypes": [
              "Stage 2"
            ],
            "types": [
              "Metal"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/hgss4/1.png",
              "large": "https://images.pokemontcg.io/hgss4/1_hires.png"
            }
          },
          {
            "id": "xy5-1",
            "name": "Weedle",
            "supertype": "Pokémon",
            "subtypes": [
              "Basic"
            ],
            "types": [
              "Grass"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/xy5/1.png",
              "large": "https://images.pokemontcg.io/xy5/1_hires.png"
            }
          },
          {
            "id": "pl1-1",
            "name": "Ampharos",
            "supertype": "Pokémon",
            "subtypes": [
              "Stage 2"
            ],
            "types": [
              "Lightning"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/pl1/1.png",
              "large": "https://images.pokemontcg.io/pl1/1_hires.png"
            }
          },
          {
            "id": "dp3-1",
            "name": "Ampharos",
            "supertype": "Pokémon",
            "subtypes": [
              "Stage 2"
            ],
            "types": [
              "Lightning"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/dp3/1.png",
              "large": "https://images.pokemontcg.io/dp3/1_hires.png"
            }
          },
          {
            "id": "det1-1",
            "name": "Bulbasaur",
            "supertype": "Pokémon",
            "subtypes": [
              "Basic"
            ],
            "types": [
              "Grass"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/det1/1.png",
              "large": "https://images.pokemontcg.io/det1/1_hires.png"
            }
          },
          {
            "id": "dv1-1",
            "name": "Dratini",
            "supertype": "Pokémon",
            "subtypes": [
              "Basic"
            ],
            "types": [
              "Dragon"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/dv1/1.png",
              "large": "https://images.pokemontcg.io/dv1/1_hires.png"
            }
          },
          {
            "id": "mcd19-1",
            "name": "Caterpie",
            "supertype": "Pokémon",
            "subtypes": [
              "Basic"
            ],
            "types": [
              "Grass"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/mcd19/1.png",
              "large": "https://images.pokemontcg.io/mcd19/1_hires.png"
            }
          },
          {
            "id": "pl3-1",
            "name": "Absol G",
            "supertype": "Pokémon",
            "subtypes": [
              "Basic",
              "SP"
            ],
            "types": [
              "Darkness"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/pl3/1.png",
              "large": "https://images.pokemontcg.io/pl3/1_hires.png"
            }
          },
          {
            "id": "ex12-1",
            "name": "Aerodactyl",
            "supertype": "Pokémon",
            "subtypes": [
              "Stage 1"
            ],
            "types": [
              "Colorless"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/ex12/1.png",
              "large": "https://images.pokemontcg.io/ex12/1_hires.png"
            }
          },
          {
            "id": "ex3-1",
            "name": "Absol",
            "supertype": "Pokémon",
            "subtypes": [
              "Basic"
            ],
            "types": [
              "Darkness"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/ex3/1.png",
              "large": "https://images.pokemontcg.io/ex3/1_hires.png"
            }
          },
          {
            "id": "ru1-1",
            "name": "Venusaur",
            "supertype": "Pokémon",
            "subtypes": [
              "Stage 2"
            ],
            "types": [
              "Grass"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/ru1/1.png",
              "large": "https://images.pokemontcg.io/ru1/1_hires.png"
            }
          },
          {
            "id": "ecard2-H1",
            "name": "Ampharos",
            "supertype": "Pokémon",
            "subtypes": [
              "Stage 2"
            ],
            "types": [
              "Lightning"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/ecard2/H1.png",
              "large": "https://images.pokemontcg.io/ecard2/H1_hires.png"
            }
          },
          {
            "id": "base4-1",
            "name": "Alakazam",
            "supertype": "Pokémon",
            "subtypes": [
              "Stage 2"
            ],
            "types": [
              "Psychic"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/base4/1.png",
              "large": "https://images.pokemontcg.io/base4/1_hires.png"
            }
          },
          {
            "id": "hgss1-1",
            "name": "Arcanine",
            "supertype": "Pokémon",
            "subtypes": [
              "Stage 1"
            ],
            "types": [
              "Fire"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/hgss1/1.png",
              "large": "https://images.pokemontcg.io/hgss1/1_hires.png"
            }
          },
          {
            "id": "ex11-1",
            "name": "Beedrill δ",
            "supertype": "Pokémon",
            "subtypes": [
              "Stage 2"
            ],
            "types": [
              "Grass",
              "Metal"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/ex11/1.png",
              "large": "https://images.pokemontcg.io/ex11/1_hires.png"
            }
          },
          {
            "id": "ex7-1",
            "name": "Azumarill",
            "supertype": "Pokémon",
            "subtypes": [
              "Stage 1"
            ],
            "types": [
              "Water"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/ex7/1.png",
              "large": "https://images.pokemontcg.io/ex7/1_hires.png"
            }
          },
          {
            "id": "gym1-1",
            "name": "Blaine's Moltres",
            "supertype": "Pokémon",
            "subtypes": [
              "Basic"
            ],
            "types": [
              "Fire"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/gym1/1.png",
              "large": "https://images.pokemontcg.io/gym1/1_hires.png"
            }
          },
          {
            "id": "base3-1",
            "name": "Aerodactyl",
            "supertype": "Pokémon",
            "subtypes": [
              "Stage 1"
            ],
            "types": [
              "Fighting"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/base3/1.png",
              "large": "https://images.pokemontcg.io/base3/1_hires.png"
            }
          },
          {
            "id": "sm9-1",
            "name": "Celebi & Venusaur-GX",
            "supertype": "Pokémon",
            "subtypes": [
              "Basic",
              "TAG TEAM",
              "GX"
            ],
            "types": [
              "Grass"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/sm9/1.png",
              "large": "https://images.pokemontcg.io/sm9/1_hires.png"
            }
          },
          {
            "id": "xy2-1",
            "name": "Caterpie",
            "supertype": "Pokémon",
            "subtypes": [
              "Basic"
            ],
            "types": [
              "Grass"
            ],
            "images": {
              "small": "https://images.pokemontcg.io/xy2/1.png",
              "large": "https://images.pokemontcg.io/xy2/1_hires.png"
            }
          }
        ]);
        done();
      }
    })
  });

  it('should test GET types request', (done: DoneFn) => {
    service.getTypes().subscribe({
      next: (response) => {
        expect(response.data).toEqual([
          "Colorless",
          "Darkness",
          "Dragon",
          "Fairy",
          "Fighting",
          "Fire",
          "Grass",
          "Lightning",
          "Metal",
          "Psychic",
          "Water"
        ]);
        done();
      }
    })
  });

  it('should test GET subtypes request', (done: DoneFn) => {
    service.getSubtypes().subscribe({
      next: (response) => {
        expect(response.data).toEqual([
          "ACE SPEC", 
          "Ancient", 
          "BREAK", 
          "Baby", 
          "Basic", 
          "EX", 
          "Eternamax", 
          "Fusion Strike", 
          "Future", 
          "GX", 
          "Goldenrod Game Corner", 
          "Item", 
          "LEGEND", 
          "Level-Up", 
          "MEGA", 
          "Pokémon Tool", 
          "Pokémon Tool F", 
          "Prime", 
          "Prism Star", 
          "Radiant", 
          "Rapid Strike", 
          "Restored", 
          "Rocket's Secret Machine", 
          "SP", 
          "Single Strike", 
          "Special", 
          "Stadium", 
          "Stage 1", 
          "Stage 2", 
          "Star", 
          "Supporter", 
          "TAG TEAM", 
          "Team Plasma", 
          "Technical Machine", 
          "Tera", 
          "Ultra Beast", 
          "V", 
          "V-UNION", 
          "VMAX", 
          "VSTAR", 
          "ex"
        ]);
        done();
      }
    })
  });

  it('should test GET supertypes request', (done: DoneFn) => {
    service.getSupertypes().subscribe({
      next: (response) => {
        expect(response.data).toEqual([
          "Energy",
          "Pokémon",
          "Trainer"
        ]);
        done();
      }
    })
  });

  it('should test GET rarities request', (done: DoneFn) => {
    service.getRarities().subscribe({
      next: (response) => {
        expect(response.data).toEqual([
          "ACE SPEC Rare",
          "Amazing Rare",
          "Classic Collection",
          "Common",
          "Double Rare",
          "Hyper Rare",
          "Illustration Rare",
          "LEGEND",
          "Promo",
          "Radiant Rare",
          "Rare",
          "Rare ACE",
          "Rare BREAK",
          "Rare Holo",
          "Rare Holo EX",
          "Rare Holo GX",
          "Rare Holo LV.X",
          "Rare Holo Star",
          "Rare Holo V",
          "Rare Holo VMAX",
          "Rare Holo VSTAR",
          "Rare Prime",
          "Rare Prism Star",
          "Rare Rainbow",
          "Rare Secret",
          "Rare Shining",
          "Rare Shiny",
          "Rare Shiny GX",
          "Rare Ultra",
          "Shiny Rare",
          "Shiny Ultra Rare",
          "Special Illustration Rare",
          "Trainer Gallery Rare Holo",
          "Ultra Rare",
          "Uncommon"
        ]);
        done();
      }
    })
  });

});
