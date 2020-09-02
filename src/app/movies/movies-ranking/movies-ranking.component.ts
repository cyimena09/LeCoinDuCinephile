import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies/movies.service';
import {NgForm} from '@angular/forms';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-movies-ranking',
  templateUrl: './movies-ranking.component.html',
  styleUrls: ['./movies-ranking.component.scss']
})
export class MoviesRankingComponent implements OnInit {
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
    newMovie.watched = 1;

    this.moviesService.addMovie(newMovie).subscribe(
      () => {this.movies.push(newMovie)}
    );
  }

  onRemoveMovie(id) {
    return this.moviesService.removeMovie(id).subscribe();
  }

}
