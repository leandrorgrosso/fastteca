import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PersonDetailsService} from '../../../service/People/SinglePerson/person_detail.service';
import {OverviewComponent} from '../../Dialogs/overview/overview.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-general-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class GeneralPersonDetailsComponent implements OnInit {

  person: JSON;
  url_image_poster: string = 'https://image.tmdb.org/t/p/w500';
  url_image_profile: string = 'https://image.tmdb.org/t/p/w500';
  url_images: string = 'https://image.tmdb.org/t/p/original';
  position: string = 'right';

  constructor(private personDetailsService: PersonDetailsService, private route: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getPersonDetail();
  }

  getPersonDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personDetailsService.getPersonDetails('person/' + id)
      .subscribe((person: any) => this.person = person);
  }

  gender(gender: number): string {
    if(gender === 1) {
      return 'Female';
    }else {
      return 'Male';
    }
  }

  age(difference: string): number {
    return (Math.floor(parseInt(difference, 10) / 365));
  }

  biographylength(biography: string): boolean {
    if (parseInt(biography,10) > 250) {
      return true;
    }else{
      return false;
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open( OverviewComponent, {
      width: '500px',
      data: { title: 'Biography',
        overview: this.person['biography'] }
    });
  }
}
