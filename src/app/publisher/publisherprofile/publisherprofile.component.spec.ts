import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherprofileComponent } from './publisherprofile.component';

describe('PublisherprofileComponent', () => {
  let component: PublisherprofileComponent;
  let fixture: ComponentFixture<PublisherprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
