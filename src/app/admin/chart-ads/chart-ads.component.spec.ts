import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAdsComponent } from './chart-ads.component';

describe('ChartAdsComponent', () => {
  let component: ChartAdsComponent;
  let fixture: ComponentFixture<ChartAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
