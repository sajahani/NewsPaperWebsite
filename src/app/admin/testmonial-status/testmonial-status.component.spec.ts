import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmonialStatusComponent } from './testmonial-status.component';

describe('TestmonialStatusComponent', () => {
  let component: TestmonialStatusComponent;
  let fixture: ComponentFixture<TestmonialStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestmonialStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestmonialStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
