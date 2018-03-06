import { Component, OnInit } from '@angular/core';
import {ListOfPeopleService} from '../../../service/People/ListOfPeople/list_of_people.service';
import {IPageChangeEvent} from '@covalent/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.css']
})
export class PopularPeopleComponent implements OnInit {

  popular: any[];
  url_image: string = 'https://image.tmdb.org/t/p/w500';
  eventLinks: IPageChangeEvent;
  page: number = 1;
  totalPages: number;

  constructor (private listOfPeopleService: ListOfPeopleService, private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.page = +this.route.snapshot.paramMap.get('page');
    this.getPopularPeople();
  }

  changeLinks(event: IPageChangeEvent): void {
    this.eventLinks = event;
    this.page = this.eventLinks.page;
    this.router.navigate(['people', this.page]);
    this.getPopularPeople();
  }

  getPopularPeople () {
    this.listOfPeopleService.getPopularPeople('person/popular', '' + this.page)
      .subscribe((people: any) => {this.popular = people.results;
                                        this.totalPages = people.total_pages; } );
  }
}
