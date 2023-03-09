import { Injectable } from '@angular/core';
import {Movie} from "../model/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies:Array<Movie>=[];

  constructor() {
    this.movies.push(new Movie("Titanic",2004,"Jame Cameron"));
    this.movies.push(new Movie("Titanic1",2004,"Jame Cameron"));
  }

  addMovie(movie:Movie){
    this.movies.push(movie);
  }

  getAllMovies(){
    return this.movies;
  }
}
