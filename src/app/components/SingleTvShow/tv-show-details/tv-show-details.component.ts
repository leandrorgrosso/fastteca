import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TvShowDetailsService} from '../../../service/TvShow/SingleShow/show_details.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {MatDialog} from '@angular/material';
import {OverviewComponent} from '../../Dialogs/overview/overview.component';
import {TrailerComponent} from '../../Dialogs/trailer/trailer.component';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit {

  // Attributes
  tvShow: JSON;
  id: number;
  trustedDashboardUrl: SafeUrl;
  videoURL: string;
  tabIndex: number = 0;
  position: string = 'right';
  url_image_poster: string = 'https://image.tmdb.org/t/p/w500';
  url_images: string = 'https://image.tmdb.org/t/p/original';
  url_image_profile: string = 'https://image.tmdb.org/t/p/w500';

  // Class constructor
  constructor(private tvShowDetails: TvShowDetailsService, private route: ActivatedRoute,
              private sanitizer: DomSanitizer, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.getTvShowDetail();
    });
  }

  // Store the data from the service about the movie and capture the trailer url
  getTvShowDetail() {
    this.tvShowDetails.getTvShowDetails('tv/' + this.id)
      .subscribe((tvShow: any) => {

        this.tvShow = tvShow;

        if (tvShow.videos) {
          for (let i = 0; i < tvShow.videos.results.length; i++) {
            if (tvShow.videos.results[i].type === 'Trailer') {
              this.videoURL = 'https://www.youtube.com/embed/' + tvShow.videos.results[i].key + '?autoplay=1';
              this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
              break;
            }
          }
        }
      });
  }

  // Function to change the tab
  changeTab() {
    this.tabIndex = 0;
  }

  // Function used to see if the overview's size is more than 250
  // to truncate it.
  overviewlength(overview: string): boolean {
    if (parseInt(overview, 10) > 250) {
      return true;
    } else {
      return false;
    }
  }

  // Function to open the dialog with the complete overview
  openOverview(): void {
    let dialogRef = this.dialog.open(OverviewComponent, {
      width: '500px',
      data: {
        title: 'Overview',
        overview: this.tvShow['overview']
      }
    });
  }

  // Function to open and play the trailer
  openTrailer(): void {
    let dialogRef = this.dialog.open(TrailerComponent, {
      width: '760px',
      height: '560px',
      data: {
        url: this.trustedDashboardUrl
      }
    });
  }
}
