import { Component, OnInit, Input } from '@angular/core';
import { IRental } from '../model/RentalsModel';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { FormGroup } from '../../../node_modules/@angular/forms';
import { RentalDataService } from '../Service/rental-service.service';

@Component({
  selector: 'app-book-rental',
  templateUrl: './book-rental.component.html',
  styleUrls: ['./book-rental.component.css']
})
export class BookRentalComponent implements OnInit {

  @Input() rental: IRental

  accommodationID: number
  bookingPrice: number
  accommodationForm: FormGroup
  confirm: boolean = false
  bookingDays: number = 0
  fromdate: Date
  todate: Date
  personNumber: string = ""
  reservationNumber: string
  invalidaDates: boolean = false

  constructor(private route: ActivatedRoute, private router: Router,
    private rentalDataService: RentalDataService) {

  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.accommodationID = params['id']
      this.rental = this.rentalDataService.getAccomodationsDetails(this.accommodationID)
    })
  }

  cancel() {
    //this.router.navigate(['../rentals'])
    this.router.navigate(['../rentals/' + this.rental.rentalType.toLocaleLowerCase()])
  }

  bookaccommodation(formValues) {
    if (this.calculateBookingPrice(formValues)) {
      this.generateReferenceNumber()
      this.confirm = true
    }
  }

  calculateBookingPrice(formValues): boolean {
    if (formValues.fromDate != undefined && formValues.toDate != undefined && formValues.personNumber != undefined) {

      this.fromdate = new Date(formValues.fromDate)
      this.todate = new Date(formValues.toDate)
      this.personNumber = formValues.personNumber
      let timeDiff = this.todate.valueOf() - this.fromdate.valueOf()

      if (timeDiff < 0) {
        this.invalidaDates = true
        return false
      }
      else {
        this.invalidaDates = false
        this.bookingDays = Math.round(Math.abs(timeDiff / (1000 * 60 * 60 * 24)));
        //this.bookingPrice = (this.rental.price * this.bookingDays * this.rental.multiplyFactor)
        this.bookingPrice = this.rentalDataService.calculatePrice(this.bookingDays, this.rental.rentalTypeId)
        return true
      }
    }
    else {
      return false
    }

  }

  generateReferenceNumber() {
    this.reservationNumber = this.rental.rentalType.substring(0, 3) + '_' + this.personNumber + '_' + this.rental.id
  }

}
