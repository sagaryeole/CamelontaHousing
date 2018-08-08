import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RentalTypeComponent } from './rental-type/rental-type.component';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { appRouts } from './routes'
import { RentalThumbnailsComponent } from './rental-thumbnails/rental-thumbnails.component';
import { RentalListComponent } from './rental-list/rental-list.component'
import { HttpClientModule } from '@angular/common/http';
import { BookRentalComponent } from './book-rental/book-rental.component';
import { FormsModule } from '@angular/forms'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        RentalTypeComponent,
        RentalDetailsComponent,
        RentalThumbnailsComponent,
        RentalListComponent,
        BookRentalComponent
      ],
      imports: [BrowserModule,
        RouterModule.forRoot(appRouts, null),
        HttpClientModule,
        FormsModule],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'CamelontaHousing'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('CamelontaHousing');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to CamelontaHousing!');
  }));
});
