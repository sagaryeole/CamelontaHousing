import { Component, OnInit } from '@angular/core';
import { RentalTypeComponent } from '../rental-type/rental-type.component';
import { RentalDataService } from '../Service/rental-service.service';
import { IRentalType } from '../model/RentalTypemodel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  RentalTypes: IRentalType[]
  constructor(private rentaldataService: RentalDataService) { }
  
  ngOnInit() {

    this.RentalTypes = this.rentaldataService.getAllRentalType()
    
    
  }

}
