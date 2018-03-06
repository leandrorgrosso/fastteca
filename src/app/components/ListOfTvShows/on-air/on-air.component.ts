import { Component, OnInit } from '@angular/core';
import {ListOfTvShowsService} from '../../../service/TvShow/ListOfTvShows/list_of_tvShows.service';
import {IPageChangeEvent} from '@covalent/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-on-air',
  templateUrl: './on-air.component.html',
  styleUrls: ['./on-air.component.css']
})
export class OnAirComponent implements OnInit {

  onAir: any[];
  url_image: string= 'https://image.tmdb.org/t/p/w500';
  position: string = 'right';
  eventLinks: IPageChangeEvent;
  page: number = 1;
  totalPages: number;

  constructor (private listOfTvOnAir: ListOfTvShowsService, private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit () {
    this.page = +this.route.snapshot.paramMap.get('page');
    this.getOnAir();
  }

  changeLinks(event: IPageChangeEvent): void {
    this.eventLinks = event;
    this.page = this.eventLinks.page;
    this.router.navigate(['tv_on_air', this.page]);
    this.getOnAir();
  }

  getOnAir () {
    this.listOfTvOnAir.getListOfTvShows('tv/on_the_air', '' + this.page)
      .subscribe((tvShows: any) => {this.onAir = tvShows.results;
                                          this.totalPages = tvShows.total_pages; });
  }
}
