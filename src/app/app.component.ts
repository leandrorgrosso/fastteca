import {Component, OnInit} from '@angular/core';

import { ListOfMoviesService } from './service/Movies/ListOfMovies/list_of_movies.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit {
  movies: any[];
  show: boolean = false;
  url_image: string = 'https://image.tmdb.org/t/p/w1920';
  query: string;
  searchInputTerm: string;

  constructor (private listOfMoviesService: ListOfMoviesService, private route: ActivatedRoute,
               private router: Router, private location: Location) { }

  ngOnInit() {
  }

  lastVisit () {
    this.location.back();
  }

  handleSearch (event) {
    this.query = event;
    this.router.navigate(['search', this.query, 1]);
  }
}
