import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {MatGridListModule, MatCardModule, MatTooltipModule, MatTabsModule,
  MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatDialogModule,
  MatChipsModule, MatMenuModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { CovalentCommonModule, CovalentLayoutModule, CovalentPagingModule, CovalentSearchModule } from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import 'hammerjs';
// ---------------------------------------------------------------------------------------
// Components
// Principal
import {AppComponent} from './app.component';

// Filmes
import {NowPlayingComponent} from './components/ListOfMovies/now-playing/now-playing.component';
import {PopularComponent} from './components/ListOfMovies/popular/popular.component';
import {TopRatedComponent} from './components/ListOfMovies/top-rated/top-rated.component';
import {UpcomingComponent} from './components/ListOfMovies/upcoming/upcoming.component';
import {GeneralMovieDetailsComponent} from './components/SingleMovie/movie-details/movie-details.component';

// Pessoas
import {PopularPeopleComponent} from './components/ListOfPeople/popular-people/popular-people.component';
import {GeneralPersonDetailsComponent} from './components/SinglePerson/person-details/person-details.component';

// Show TV
import { OnAirComponent } from './components/ListOfTvShows/on-air/on-air.component';
import { PopularTvComponent } from './components/ListOfTvShows/popular-tv/popular-tv.component';
import { TopRatedTvComponent } from './components/ListOfTvShows/top-rated-tv/top-rated-tv.component';
import {TvShowDetailsComponent} from './components/SingleTvShow/tv-show-details/tv-show-details.component';

// Busca
import { SearchComponent } from './components/Search/search/search.component';

// Dialogo
import { OverviewComponent } from './components/Dialogs/overview/overview.component';
import { TrailerComponent } from './components/Dialogs/trailer/trailer.component';

// Dashboard
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
// ---------------------------------------------------------------------------------------------------------------
// Servicos
// Filmes
import {ListOfMoviesService} from './service/Movies/ListOfMovies/list_of_movies.service';
import {MovieDetailsService} from './service/Movies/SingleMovie/movie_details.service';

// Pessoas
import {ListOfPeopleService} from './service/People/ListOfPeople/list_of_people.service';
import {PersonDetailsService} from './service/People/SinglePerson/person_detail.service';

// Show TV
import {ListOfTvShowsService} from './service/TvShow/ListOfTvShows/list_of_tvShows.service';
import {TvShowDetailsService} from './service/TvShow/SingleShow/show_details.service';

// Busca
import {SearchService} from './service/Search/search.service';

// Rodape
import { FooterComponent } from './components/footer/footer.component';
import { PosterComponent } from './components/poster/poster.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { GenreComponent } from './components/genre/genre.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {path: 'now_playing/:page', component: NowPlayingComponent},
  {path: 'popular/:page', component: PopularComponent},
  {path: 'top_rated/:page', component: TopRatedComponent},
  {path: 'upcoming/:page', component: UpcomingComponent},
  {path: 'movie/:id', component: GeneralMovieDetailsComponent},
  {path: 'people/:page', component: PopularPeopleComponent},
  {path: 'person/:id', component: GeneralPersonDetailsComponent},
  {path: 'tv_on_air/:page', component: OnAirComponent},
  {path: 'tv_popular/:page', component: PopularTvComponent},
  {path: 'tv_top_rated/:page', component: TopRatedTvComponent},
  {path: 'tv_show/:id', component: TvShowDetailsComponent},
  {path: 'search/:query/:page', component: SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NowPlayingComponent,
    PopularComponent,
    TopRatedComponent,
    UpcomingComponent,
    GeneralMovieDetailsComponent,
    PopularPeopleComponent,
    GeneralPersonDetailsComponent,
    OnAirComponent,
    PopularTvComponent,
    TopRatedTvComponent,
    TvShowDetailsComponent,
    SearchComponent,
    OverviewComponent,
    TrailerComponent,
    DashboardComponent,
    FooterComponent,
    PosterComponent,
    RatingsComponent,
    GenreComponent
  ],
  entryComponents: [
    OverviewComponent,
    TrailerComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    MatCardModule,
    MatTooltipModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatChipsModule,
    MatMenuModule,
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentPagingModule,
    CovalentSearchModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule
  ],
  providers: [ListOfMoviesService, MovieDetailsService, ListOfPeopleService, PersonDetailsService,
  ListOfTvShowsService, TvShowDetailsService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
