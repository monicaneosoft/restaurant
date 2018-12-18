import { RestaurantLocation } from "./restaurantlocation";

export class Restaurant {
    constructor(
        public id: number,
        public restaurantName: string,
        public restaurantLocation: RestaurantLocation
    ) { }   
}