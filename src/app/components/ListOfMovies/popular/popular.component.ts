import { Component, OnInit } from '@angular/core';
import {ListOfMoviesService} from '../../../service/Movies/ListOfMovies/list_of_movies.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IPageChangeEvent} from '@covalent/core';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  popular: any[];
  url_image: string = 'https://image.tmdb.org/t/p/w500';
  position: string = 'right';
  eventLinks: IPageChangeEvent;
  page: number = 1;
  totalPages: number;

  constructor (private listOfMoviesService: ListOfMoviesService, private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.page = +this.route.snapshot.paramMap.get('page');
    this.getPopular();
  }

  changeLinks(event: IPageChangeEvent): void {
    this.eventLinks = event;
    this.page = this.eventLinks.page;
    this.router.navigate(['popular', this.page]);
    this.getPopular();
  }

  getPopular () {
    this.listOfMoviesService.getMovies('movie/popular', '' + this.page)
      .subscribe((movies: any) => {this.popular = movies.results;
                                        this.totalPages = movies.total_pages; } );
  }
}
