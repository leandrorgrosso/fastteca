import {Component, OnInit} from '@angular/core';
import {ListOfMoviesService} from '../../../service/Movies/ListOfMovies/list_of_movies.service';
import {IPageChangeEvent} from '@covalent/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  // Attributes
  nowPlaying: any[];
  url_image: string = 'https://image.tmdb.org/t/p/w500';
  position: string = 'right';
  eventLinks: IPageChangeEvent;
  page: number = 1;
  totalPages: number;

  // Class constructor
  constructor(private listOfMoviesService: ListOfMoviesService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.page = +this.route.snapshot.paramMap.get('page');
    this.getMoviesNowPlaying();
  }

  // Function to change the page
  changeLinks(event: IPageChangeEvent): void {
    this.eventLinks = event;
    this.page = this.eventLinks.page;
    this.router.navigate(['home', this.page]);
    this.getMoviesNowPlaying();
  }

  // Store the data of the service
  getMoviesNowPlaying() {
    this.listOfMoviesService.getMovies('movie/now_playing', '' + this.page)
      .subscribe((movies: any) => {
        this.nowPlaying = movies.results;
        this.totalPages = movies.total_pages;
      });
  }
}
