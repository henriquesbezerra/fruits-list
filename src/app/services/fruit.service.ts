import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Fruit } from '../fruit/Fruit.class';
import { FRUITS } from '../mock-fruits';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private fruitUrl = 'https://henrisilva.com.br/fruits-list/';
 
  constructor(private http: HttpClient) { }

  getFruits(): Observable<Fruit[]>{    
    return this.http.get<Fruit[]>(this.fruitUrl).pipe(
      catchError(this.handleError('getFruits',[]))
    );
  }
 
  getFruitByName(name: string): Observable<Fruit>{        
    return of(FRUITS.find(fruta => fruta.name === name));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - nome da operação que falhou
   * @param result - valor opcional retornado como um observable
   */
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {

      //TODO: send the errro to remote loggin infrasctructure
      console.log(error);

      //TODO: better job of transforming error for user consumption
      console.log(operation , " failed: ", error.message);

      //Let the app keep running by returning an empty result.
      return of(result as T);
    }
  } 
}
