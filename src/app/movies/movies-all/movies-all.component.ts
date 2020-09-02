import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies/movies.service';
import {NgForm} from '@angular/forms';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-movies-all',
  templateUrl: './movies-all.component.html',
  styleUrls: ['./movies-all.component.scss']
})
export class MoviesAllComponent implements OnInit {
  movies;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(
      (data) => {this.movies = data;}
    );
  }

  onAddMovie(formulaire: NgForm){
    const newMovie = new Movie();
    const title = formulaire.value['title'];
    const category = formulaire.value['category'];
    const addDate = new Date();

    newMovie.title = title;
    newMovie.category = category;
    newMovie.releaseDate = new Date();
    newMovie.addDate = addDate
    newMovie.watched = 0;

    this.moviesService.addMovie(newMovie).subscribe(
      () => {this.movies.push(newMovie)}
    );
  }

  onRemoveMovie(id) {
    return this.moviesService.removeMovie(id).subscribe();
  }

}
