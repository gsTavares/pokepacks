import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { PokemontcgResponse } from '../models/pokemontcg.models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemontcgService {

  private readonly _fields = 'id,name,supertype,types,subtypes,images';

  constructor(private http: HttpClient) { }

  getCards(q: string, page = 1, pageSize = 20) {

    const reqParams = new HttpParams({
      fromObject: {
        q: q,
        page: page,
        pageSize: pageSize,
        select: this._fields
      }
    })

    return this.http.get<PokemontcgResponse>(`${environment.target}/cards`, { params: reqParams })
      .pipe(map((response) => {
        response.data.forEach(card => {
          if(!card.types) {
            card.types = ['N/A'];
          }
        });
        return response;
      }));
  }

  getTypes() {
    return this.http.get<{data: string[]}>(`${environment.target}/types`);
  }

  getSubtypes() {
    return this.http.get<{data: string[]}>(`${environment.target}/subtypes`);
  }

  getSupertypes() {
    return this.http.get<{data: string[]}>(`${environment.target}/supertypes`);
  }

  getRarities() {
    return this.http.get<{data: string[]}>(`${environment.target}/rarities`);
  }

}
