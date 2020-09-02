import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MoviesService} from '../services/movies/movies.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() film
  @Input() rate;


  ctrl = new FormControl();
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.ctrl.setValue(this.rate)
  }

  onClick(){
    this.saveRate();
  }

  saveRate(){
    this.film.rate = this.ctrl.value
    return this.moviesService.updateMovie(this.film.movieID, this.film).subscribe();
  }
}
