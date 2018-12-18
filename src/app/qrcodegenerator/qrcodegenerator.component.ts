import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Restaurant } from '../objects/restaurant';
import { environment } from 'src/environments/environment.localhost';


@Component({
  selector: 'app-qrcodegenerator',
  templateUrl: './qrcodegenerator.component.html',
  styleUrls: ['./qrcodegenerator.component.scss']
})
export class QrcodegeneratorComponent implements OnInit {
  restaurants: Restaurant[]; 
  selected_restaurant_id: number;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAllRestaurantDetails().subscribe(result => {
      this.restaurants = <Restaurant[]>result;                 
      console.log(this.restaurants);                
    }
  );

  }

  public generateQRCode(qrcodefor){
    let select2: HTMLSelectElement = <HTMLSelectElement>document.getElementById("qr_code_restaurant");
    let qr_source: HTMLInputElement = <HTMLInputElement>document.getElementById("qr_code_sourcedata");
    this.selected_restaurant_id = +select2.value;
    
    
    let barcode_image: HTMLImageElement  = <HTMLImageElement>document.getElementById("qr_code_image");

    

    let payloadData: any = {"restaurant_id":this.selected_restaurant_id};    
    console.log(JSON.stringify(payloadData));
    var encoded_payload=  encodeURIComponent(JSON.stringify(payloadData));
    let qrcodeUrl: string = this.data.getQrCodeURL(encoded_payload, qrcodefor,qr_source.value); 
    
    console.log(qrcodeUrl);
    barcode_image.src = qrcodeUrl;
  }



  

}
