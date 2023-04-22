import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsTypeComponent } from './ads-type.component';

describe('AdsTypeComponent', () => {
  let component: AdsTypeComponent;
  let fixture: ComponentFixture<AdsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
