import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private REST_API_SERVER = 'https://api.themoviedb.org/3';
  private API_KEY = '0e6c7e085d4001cc7b14093ec37aca85';
  constructor(private http: HttpClient) {}

  getTopRatedMovies() {
    return this.http
      .get(
        this.REST_API_SERVER +
          '/movie/top_rated?api_key=' +
          this.API_KEY
      )
      .pipe(catchError(this.handleError));
  }

  searchMovies(keyword: string) {
    return this.http
      .get(
        this.REST_API_SERVER +
          '/search/movie?api_key=' +
          this.API_KEY+'&query='+keyword
      )
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
