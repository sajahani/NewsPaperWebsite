import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherViewComponent } from './publisher-view.component';

describe('PublisherViewComponent', () => {
  let component: PublisherViewComponent;
  let fixture: ComponentFixture<PublisherViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
