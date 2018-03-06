import { Component, OnInit } from '@angular/core';
import {ListOfTvShowsService} from '../../../service/TvShow/ListOfTvShows/list_of_tvShows.service';
import {IPageChangeEvent} from '@covalent/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-top-rated-tv',
  templateUrl: './top-rated-tv.component.html',
  styleUrls: ['./top-rated-tv.component.css']
})
export class TopRatedTvComponent implements OnInit {

  topRated: any[];
  url_image: string = 'https://image.tmdb.org/t/p/w500';
  position: string = 'right';
  eventLinks: IPageChangeEvent;
  page: number = 1;
  totalPages: number;

  constructor (private listOfTvTopRated: ListOfTvShowsService, private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit () {
    this.page = +this.route.snapshot.paramMap.get('page');
    this.getTopRatedTv();
  }

  changeLinks(event: IPageChangeEvent): void {
    this.eventLinks = event;
    this.page = this.eventLinks.page;
    this.router.navigate(['tv_top_rated', this.page]);
    this.getTopRatedTv();
  }

  getTopRatedTv () {
    this.listOfTvTopRated.getListOfTvShows('tv/top_rated', '' + this.page)
      .subscribe((tvShows: any) => {this.topRated = tvShows.results;
                                          this.totalPages = tvShows.total_pages; });
  }
}
