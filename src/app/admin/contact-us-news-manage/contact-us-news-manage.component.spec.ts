import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsNewsManageComponent } from './contact-us-news-manage.component';

describe('ContactUsNewsManageComponent', () => {
  let component: ContactUsNewsManageComponent;
  let fixture: ComponentFixture<ContactUsNewsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsNewsManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsNewsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
