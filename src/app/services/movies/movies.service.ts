import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movie} from '../../models/movie';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');


  constructor(private httpClient: HttpClient) {
    this.getMovies();
  }

  apiUrl = 'https://apilecoinducinephile.emile404.be/api/movies/';


  // On récupère tous les films de l'api qu'on injecte dans le tableau movies. et à partir de là on va traiter les films.
  getMovies(){
    return this.httpClient.get(this.apiUrl, { 'headers': this.headers });
  }

   getMovie(id){
    return this.httpClient.get(this.apiUrl + id, { 'headers': this.headers });
  }

  getActorsInMovie(movieid){
    return this.httpClient.get(this.apiUrl + movieid + '/actors', { 'headers': this.headers });
  }

  addMovie(movie: Movie){
    return this.httpClient.post(this.apiUrl, movie, { 'headers': this.headers })
  }

  updateMovie(id, movie){
    return this.httpClient.put(this.apiUrl + id, movie, { 'headers': this.headers });
  }

  removeMovie(id) {
    return this.httpClient.delete(this.apiUrl + id, { 'headers': this.headers });
  }

}
