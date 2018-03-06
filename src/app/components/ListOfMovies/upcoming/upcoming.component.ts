import { Component, OnInit } from '@angular/core';
import {ListOfMoviesService} from '../../../service/Movies/ListOfMovies/list_of_movies.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IPageChangeEvent} from "@covalent/core";

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  upcoming: any[];
  url_image: string = 'https://image.tmdb.org/t/p/w500';
  position: string = 'right';
  eventLinks: IPageChangeEvent;
  page: number = 1;
  totalPages: number;

  constructor (private listOfMoviesService: ListOfMoviesService, private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.page = +this.route.snapshot.paramMap.get('page');
    this.getUpcoming();
  }

  changeLinks(event: IPageChangeEvent): void {
    this.eventLinks = event;
    this.page = this.eventLinks.page;
    this.router.navigate(['upcoming', this.page]);
    this.getUpcoming();
  }

  getUpcoming () {
    this.listOfMoviesService.getMovies('movie/upcoming', '' + this.page)
      .subscribe((movies: any) => {this.upcoming = movies.results;
                                        this.totalPages = movies.total_pages; } );
  }

}