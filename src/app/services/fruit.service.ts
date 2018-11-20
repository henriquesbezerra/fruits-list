import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Fruit } from '../fruit/Fruit.class';
import { FRUITS } from '../mock-fruits';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor() { }

  getFruits(): Observable<Fruit[]>{
    return of(FRUITS);
  }
  
  getFruitByName(name: string): Observable<Fruit>{
    return of(FRUITS.find(fruta => fruta.name === name));
  }
}
