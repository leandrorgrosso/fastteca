import { Component, OnInit } from '@angular/core';
import {ListOfMoviesService} from '../../../service/Movies/ListOfMovies/list_of_movies.service';
import {ListOfPeopleService} from '../../../service/People/ListOfPeople/list_of_people.service';
import {ListOfTvShowsService} from '../../../service/TvShow/ListOfTvShows/list_of_tvShows.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Attributes
  popularMovies: any[];
  popularPeople: any[];
  popularTvShows: any[];
  page: number = 1;
  url_image: string = 'https://image.tmdb.org/t/p/w500';
  position: string = 'right';

  constructor(private listOfMoviesService: ListOfMoviesService, private listOfPeopleService: ListOfPeopleService,
              private listOfTvPopular: ListOfTvShowsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPopularMovies();
    this.getPopularPeople();
    this.getPopularTv();
  }

  getPopularMovies () {
    this.listOfMoviesService.getMovies('movie/popular', '' + this.page)
      .subscribe((movies: any) => {this.popularMovies = movies.results
        .slice(0 , 8); } );
  }

  getPopularPeople () {
    this.listOfPeopleService.getPopularPeople('person/popular', '' + this.page)
      .subscribe((people: any) => {this.popularPeople = people.results
        .slice(0 , 8); } )
    ;
  }

  getPopularTv () {
    this.listOfTvPopular.getListOfTvShows('tv/popular', '' + this.page)
      .subscribe((tvShows: any) => {this.popularTvShows = tvShows.results
        .slice(0 , 8); } );
  }


}
