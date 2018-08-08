import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalThumbnailsComponent } from './rental-thumbnails.component';

describe('RentalThumbnailsComponent', () => {
  let component: RentalThumbnailsComponent;
  let fixture: ComponentFixture<RentalThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalThumbnailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
