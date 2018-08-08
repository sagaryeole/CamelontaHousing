import { Component, OnInit } from '@angular/core';
import { IRentalType } from '../model/RentalTypemodel';
import { RentalDataService } from '../Service/rental-service.service';

@Component({
  selector: 'rental-type',
  templateUrl: './rental-type.component.html',
  styleUrls: ['./rental-type.component.css']
})
export class RentalTypeComponent implements OnInit {

  constructor(private rentalDataService : RentalDataService) { }

  rentalType: IRentalType[]

  ngOnInit() {

      this.rentalType = this.rentalDataService.getAllRentalType()
   
  }

}
