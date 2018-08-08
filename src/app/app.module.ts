import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RentalTypeComponent } from './rental-type/rental-type.component';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { appRouts } from './routes'
import { RentalThumbnailsComponent } from './rental-thumbnails/rental-thumbnails.component';
import { RentalListComponent } from './rental-list/rental-list.component'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BookRentalComponent } from './book-rental/book-rental.component';
import { FormsModule } from '@angular/forms'
import { RentalDataService } from './Service/rental-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RentalTypeComponent,
    RentalDetailsComponent,
    RentalThumbnailsComponent,
    RentalListComponent,
    BookRentalComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts, null),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RentalDataService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  bootstrap: [AppComponent]
})
export class AppModule { }
