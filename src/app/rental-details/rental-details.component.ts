import { Component, OnInit, Input } from '@angular/core';
import { IRental } from '../model/RentalsModel';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { RentalDataService } from '../Service/rental-service.service';

@Component({
  selector: 'rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css']
})
export class RentalDetailsComponent implements OnInit {

  @Input() rental: IRental
  accommodationID: number

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
    this.router.navigate(['../rentals'])
  }

  bookaccommodation(id: number) {
    this.router.navigate(['../rentals/bookings/' + id])
  }

}
