import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {MovieDetailComponent} from './movies/movie-detail/movie-detail.component';
import {MoviesToSeeComponent} from './movies/movies-to-see/movies-to-see.component';
import {MoviesAllComponent} from './movies/movies-all/movies-all.component';
import {MoviesRankingComponent} from './movies/movies-ranking/movies-ranking.component';


const routes: Routes = [

  {path: 'movies_all', component: MoviesAllComponent},
  {path: 'movies_ranking', component: MoviesRankingComponent},
  {path: 'movies_to_see', component: MoviesToSeeComponent},
  {path: 'movie_detail/:id', component: MovieDetailComponent},
  {path: 'not_found', component: NotFoundComponent},
  {path: '', redirectTo: 'movies_all', pathMatch: 'full'},
  {path: '**', redirectTo: 'not_found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
