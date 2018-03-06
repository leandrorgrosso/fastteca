import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {
  private theMovieDbUrl: string = 'https://api.themoviedb.org/3/';
  private apiKey: string = '9dd88c69710c0d49f1f022ed07eaa2a7';

  constructor (private http: Http) {  }

  search (discover: string, query: string, page: string): Observable<any> {
    let params = new URLSearchParams();

    params.set('api_key', this.apiKey);
    params.set('query', query);
    params.set('page', page);
    params.set('r', 'json');

    let url =  this.theMovieDbUrl + discover + "?language=pt-BR";
    return this.http.get(url, {search: params})
      .map(search => search.json())
      .catch(this.handleError());
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
