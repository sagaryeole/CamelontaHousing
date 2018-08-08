export interface IRental {
    id: number
    rentalType: string
    rentalTypeId : number
    name: string
    price: number
    imageurl: string
    active : boolean
    multiplyFactor : number
    location?: {
        address: string
        city: string
        country: string
    }
}