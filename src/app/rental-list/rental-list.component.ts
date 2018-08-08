import { Component, OnInit } from '@angular/core';
import { RentalDataService } from '../Service/rental-service.service';
import { IRental } from '../model/RentalsModel';
import { ActivatedRoute } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  Rentals: IRental[]

  rentalType: string
  data: IRental[]

  constructor(private route: ActivatedRoute,
    private rentalDataService: RentalDataService) {

  }

  ngOnInit() {


    // console.log(this.rentalDataService.getAllRentalType())
    // console.log(this.rentalDataService.getAllAccomodations())
    // console.log(this.rentalDataService.getAccomodationsDetails(2))
    // console.log(this.rentalDataService.getAccomodationsByType('villa'))

    this.route.params.subscribe(params => {
      this.rentalType = params['type'];
      if (this.rentalType != undefined) {
        this.Rentals = this.rentalDataService.getAccomodationsByType(this.rentalType)
      }
    })

    if (this.rentalType === undefined) {
      if (this.Rentals == undefined) {
        this.Rentals = this.rentalDataService.getAllAccomodations()
      }
    }


    // this.route.params.subscribe(params => {
    //   this.rentalType = params['type'];

    //   if (this.rentalType != undefined) {
    //     this.data = this.route.snapshot.data['Rentals'].rentals

    //     this.Rentals = this.data.filter(
    //       resp => resp.rentalType === this.rentalType
    //     )}
    // })

    // if (this.route.snapshot.data['Rentals'] !== undefined && this.rentalType === undefined) {
    //   if (this.route.snapshot.data['Rentals'].rentals.length > 0) {
    //     this.Rentals = this.route.snapshot.data['Rentals'].rentals
    //   }
    // }
  }

}

