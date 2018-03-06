import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PersonDetailsService {
  private theMovieDbUrl: string = 'https://api.themoviedb.org/3/';
  private apiKey: string = '9dd88c69710c0d49f1f022ed07eaa2a7';

  constructor (private http: Http) {  }

  getPersonDetails (discover: string): Observable<any> {
    let params = new URLSearchParams();

    params.set('api_key', this.apiKey);
    params.set('r', 'json');
    params.set('append_to_response', 'movie_credits,tv_credits,images');

    let url =  this.theMovieDbUrl + discover + "?language=pt-BR";
    return this.http.get(url, {search: params})
      .map(personDetail => personDetail.json())
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
