import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayingComponent } from './now-playing.component';
import {MatCardModule, MatGridListModule, MatTabsModule, MatToolbarModule, MatTooltipModule} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {CovalentLayoutModule} from "@covalent/core";
import {APP_BASE_HREF} from '@angular/common';
import {ListOfMoviesService} from "../../../service/Movies/ListOfMovies/list_of_movies.service";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: NowPlayingComponent}
];

describe('NowPlayingComponent', () => {
  let component: NowPlayingComponent;
  let fixture: ComponentFixture<NowPlayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowPlayingComponent ],
      imports: [
        BrowserModule,
        NoopAnimationsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        MatGridListModule,
        MatCardModule,
        MatTooltipModule,
        MatTabsModule,
        MatToolbarModule,
        CovalentLayoutModule
      ],
      providers: [
        {provide: ListOfMoviesService, useValue : {}},
        {provide: APP_BASE_HREF, useValue: '/home'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
