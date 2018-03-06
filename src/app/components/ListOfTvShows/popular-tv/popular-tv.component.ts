import { Component, OnInit } from '@angular/core';
import {ListOfTvShowsService} from '../../../service/TvShow/ListOfTvShows/list_of_tvShows.service';
import {IPageChangeEvent} from '@covalent/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-popular-tv',
  templateUrl: './popular-tv.component.html',
  styleUrls: ['./popular-tv.component.css']
})
export class PopularTvComponent implements OnInit {

  popular: any[];
  url_image: string = 'https://image.tmdb.org/t/p/w500';
  position: string = 'right';
  eventLinks: IPageChangeEvent;
  page: number = 1;
  totalPages: number;

  constructor (private listOfTvPopular: ListOfTvShowsService, private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit () {
    this.page = +this.route.snapshot.paramMap.get('page');
    this.getPopularTv();
  }

  changeLinks(event: IPageChangeEvent): void {
    this.eventLinks = event;
    this.page = this.eventLinks.page;
    this.router.navigate(['tv_popular', this.page]);
    this.getPopularTv();
  }

  getPopularTv () {
    this.listOfTvPopular.getListOfTvShows('tv/popular', '' + this.page)
      .subscribe((tvShows: any) => {this.popular = tvShows.results;
                                          this.totalPages = tvShows.total_pages; } );
  }
}
