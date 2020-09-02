import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies/movies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id'];
  movie: any = [];
  actors;
  update = false;

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovie(this.id).subscribe(
      (data: {}) => {this.movie = data;}
    );

    this.moviesService.getActorsInMovie(this.id).subscribe(
      (data) => {this.actors = data;}
    )
  }

  onActiveForm() {
    if (!this.update){
      return this.update = true;
    }
    else if (this.update){
      this.moviesService.updateMovie(this.id, this.movie).subscribe();
      return this.update = false;
    }
  }

}
