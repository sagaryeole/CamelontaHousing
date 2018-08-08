import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRentalComponent } from './book-rental.component';

describe('BookRentalComponent', () => {
  let component: BookRentalComponent;
  let fixture: ComponentFixture<BookRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
