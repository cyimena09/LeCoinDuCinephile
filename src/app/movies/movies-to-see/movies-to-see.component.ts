import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies/movies.service';
import {Movie} from '../../models/movie';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-movies-to-see',
  templateUrl: './movies-to-see.component.html',
  styleUrls: ['./movies-to-see.component.scss']
})
export class MoviesToSeeComponent implements OnInit {
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

  onRemoveMovie(id){
    this.moviesService.removeMovie(id)
  }

}
