import { Routes } from '@angular/router'
import { RentalTypeComponent } from './rental-type/rental-type.component';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { RentalThumbnailsComponent } from './rental-thumbnails/rental-thumbnails.component';
import { RentalListComponent } from './rental-list/rental-list.component';

import { BookRentalComponent } from './book-rental/book-rental.component';



export const appRouts: Routes = [

    { path: 'rentals', component: RentalListComponent},
    { path: 'rentals/:type', component: RentalListComponent },
    { path: 'rentals/details/:id', component: RentalDetailsComponent },
    { path: 'rentals/bookings/:id', component: BookRentalComponent},   
    { path: '', redirectTo: '/rentals', pathMatch: 'full' },

]