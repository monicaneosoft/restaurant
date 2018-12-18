import { MenuTypes } from "./menutypes";

export class ReataurantMenuType {
    constructor(
        public resturantName: string,
        public menuTypes: MenuTypes[]        
    ) { }   
}