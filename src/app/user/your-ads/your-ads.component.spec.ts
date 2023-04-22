import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAdsComponent } from './your-ads.component';

describe('YourAdsComponent', () => {
  let component: YourAdsComponent;
  let fixture: ComponentFixture<YourAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
