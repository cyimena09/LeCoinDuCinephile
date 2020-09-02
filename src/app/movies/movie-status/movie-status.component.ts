import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MoviesService} from '../../services/movies/movies.service';

@Component({
  selector: 'app-movie-status',
  templateUrl: './movie-status.component.html',
  styleUrls: ['./movie-status.component.scss']
})
export class MovieStatusComponent implements OnInit {

  @Input() status // le statut est utilisé dans le html
  @Input() film

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

   onChangeStatus(){
    if (this.film.watched == 0){
      this.film.watched = 1;
      this.film.rate = 0
    }
    else if (this.film.watched == 1){
      this.film.watched = 0
    }
    return this.moviesService.updateMovie(this.film.movieID, this.film).subscribe();
  }

}
