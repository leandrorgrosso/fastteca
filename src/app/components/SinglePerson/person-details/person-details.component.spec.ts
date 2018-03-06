import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPersonDetailsComponent } from './person-details.component';

describe('GeneralDetailsComponent', () => {
  let component: GeneralPersonDetailsComponent;
  let fixture: ComponentFixture<GeneralPersonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralPersonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
