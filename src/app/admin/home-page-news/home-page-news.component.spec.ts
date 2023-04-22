import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageNewsComponent } from './home-page-news.component';

describe('HomePageNewsComponent', () => {
  let component: HomePageNewsComponent;
  let fixture: ComponentFixture<HomePageNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
