import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../../service/Search/search.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IPageChangeEvent} from '@covalent/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: any[];
  movies: any[] = [];
  people: any[] = [];
  tv: any[] = [];
  url_image: string = 'https://image.tmdb.org/t/p/w500';
  position: string = 'right';
  eventLinks: IPageChangeEvent;
  query: string;
  page: number = 1;
  totalPages: number;

  constructor(private searchService: SearchService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.query = this.route.snapshot.paramMap.get('query');
      this.page = +this.route.snapshot.paramMap.get('page');
      this.movies = [];
      this.people = [];
      this.tv = [];
      this.search();
    });
  }

  changeLinks(event: IPageChangeEvent): void {
    this.eventLinks = event;
    this.page = this.eventLinks.page;
    this.router.navigate(['search', this.query, this.page ]);
  }

  search () {
    this.searchService.search('search/multi', this.query, '' + this.page)
      .subscribe((search: any) => {this.results = search.results;
      for (let i = 0; i < search.results.length; i++) {
        if (search.results[i].media_type === 'movie') {
          this.movies.push(search.results[i]);
        }else if (search.results[i].media_type === 'tv') {
          this.tv.push(search.results[i]);
        }else{
          this.people.push(search.results[i]);
        }
      }
      this.totalPages = search.total_pages; } );
  }

}
