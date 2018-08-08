import { Component, OnInit, Input } from '@angular/core';
import { IRental } from '../model/RentalsModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'rental-thumbnails',
  templateUrl: './rental-thumbnails.component.html',
  styleUrls: ['./rental-thumbnails.component.css']
})
export class RentalThumbnailsComponent implements OnInit {

 
  @Input() rental : IRental

  constructor(private routes:Router ){

  }

  ngOnInit() {
   
  }

  showDetails(rental:IRental){    
    this.routes.navigate(['../rentals/details/' + rental.id  ]);
  }

}
