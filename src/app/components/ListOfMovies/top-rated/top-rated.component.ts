import { Component, OnInit } from '@angular/core';
import { ListOfMoviesService } from '../../../service/Movies/ListOfMovies/list_of_movies.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IPageChangeEvent} from '@covalent/core';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  topRated: any[];
  url_image: string = 'https://image.tmdb.org/t/p/w500';
  position: string = 'right';
  eventLinks: IPageChangeEvent;
  page: number = 1;
  totalPages: number;

  constructor (private listOfMoviesService: ListOfMoviesService, private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.page = +this.route.snapshot.paramMap.get('page');
    this.getTopRated();
  }

  changeLinks(event: IPageChangeEvent): void {
    this.eventLinks = event;
    this.page = this.eventLinks.page;
    this.router.navigate(['top_rated', this.page]);
    this.getTopRated();
  }

  getTopRated () {
    this.listOfMoviesService.getMovies('movie/top_rated', '' + this.page)
      .subscribe((movies: any) => {this.topRated = movies.results;
                                        this.totalPages = movies.total_pages; } );
  }

  private  handleError(error: any): Promise<any> {
    console.error('An error ocurred', error); // For demo purposes only
    return Promise.reject(error.message || error);
  }

}
