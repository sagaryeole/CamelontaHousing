import { Injectable } from '@angular/core'
import { IRental } from '../model/RentalsModel'
import { IRentalType } from '../model/RentalTypemodel';

@Injectable()
export class RentalDataService {


    constructor() {

    }

    getAllAccomodations(): IRental[] {
        return RENTALS
    }

    getAccomodationsDetails(id: number): IRental {
        return RENTALS.find(data => data.id == id)
    }

    getAccomodationsByType(type: string): IRental[] {
        return RENTALS.filter(data => data.rentalType == type)
    }

    getAllRentalType(): IRentalType[] {
        return RENTALTYPE
    }
}


const RENTALTYPE: IRentalType[] =
    [
        {
            id: 1,
            name: "Apartment",
            active: true,
            multiplyFactor: 1.00
        },
        {
            id: 1,
            name: "Bungalow",
            active: true,
            multiplyFactor: 1.50
        },
        {
            id: 1,
            name: "Villa",
            active: true,
            multiplyFactor: 2.50
        },
    ]

const RENTALS: IRental[] =
    [
        {
            id: 1,
            rentalType: "apartment",
            name: "A1 apartments",
            imageurl: "https://cdngeneral.rentcafe.com/dmslivecafe/3/530130/530130-1-1.jpg",
            active: true,
            price: 1000,
            multiplyFactor: 1,
            location: {
                address: "test address",
                city: "Stockholm",
                country: "Sweden"
            }
        },
        {
            id: 2,
            rentalType: "apartment",
            name: "Perfect Apartments",
            imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT433bv3cuuS6gR-gCQh6QsMJPvoh-fhXPuzuxsg5iCDxigUPwp",
            active: false,
            price: 500,
            multiplyFactor: 1,
            location: {
                address: "test address",
                city: "Stockholm",
                country: "Sweden"
            }
        },
        {
            id: 3,
            rentalType: "villa",
            name: "Kingfisher Villa",
            imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJC7Qn3YsLQoXqoDiok1wo1THa7zoPDadyThTxkRmQ2QZtULTnQ",
            active: true,
            price: 3000,
            multiplyFactor: 2.5,
            location: {
                address: "test address",
                city: "Stockholm",
                country: "Sweden"
            }
        },
        {
            id: 4,
            rentalType: "bungalow",
            name: "Supreme bungalow ",
            imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEytvVOJCl2oNPLcLGwHzuTM6mDuVdeGZN9pkSHKzyzJY_ZsSgQ",
            active: true,
            price: 2000,
            multiplyFactor: 1.5,
            location: {
                address: "test address",
                city: "Stockholm",
                country: "Sweden"
            }
        }
    ]
