import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NotFoundComponent} from './not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MovieDetailComponent} from './movies/movie-detail/movie-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MoviesToSeeComponent} from './movies/movies-to-see/movies-to-see.component';
import {RatingComponent} from './rating/rating.component';
import { MovieStatusComponent } from './movies/movie-status/movie-status.component';
import { MoviesAllComponent } from './movies/movies-all/movies-all.component';
import { MoviesRankingComponent } from './movies/movies-ranking/movies-ranking.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesToSeeComponent,
    NotFoundComponent,
    MovieDetailComponent,
    RatingComponent,
    MovieStatusComponent,
    MoviesAllComponent,
    MoviesRankingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
