import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { environment } from '../environments/environment';

import * as glob from "./global";
@Injectable({
  providedIn: 'root'
})
export class DataService {


  
  

  constructor(private http: HttpClient) { }

  getMenuTypes(restaurantd) {    
    return this.http.get(environment.api_server_endpoint+'/resturant/'+restaurantd+'/menu_types', {responseType: "json"})      
  }

  getMenus(restaurantd, foodpref, menutype) {
    return this.http.get(environment.api_server_endpoint+'/resturant/'+restaurantd+'/menu/?foodpref='+foodpref+'&menutype='+menutype)
  }

  getMenuDetails(restaurantd, menuid) {
    return this.http.get(environment.api_server_endpoint+'/resturant/'+restaurantd+'/menu/'+menuid)
  }

  getAllRestaurantDetails() {
    return this.http.get(environment.api_server_endpoint+'/resturant/')
  }

  getQrCodeURL(encoded_payload, qrcodefor, qr_source ){
    let qrcodeUrl: string =  environment.api_server_endpoint+"/qrcode/generate_qrcode?qrdetails="
        +environment.api_server_endpoint + "/qrcode/action?type="+qrcodefor
        +encodeURIComponent("&payload=")
        +encoded_payload
        +encodeURIComponent("&source="+qr_source)
        +"&width=300&height=300";
        return qrcodeUrl;
  }


}