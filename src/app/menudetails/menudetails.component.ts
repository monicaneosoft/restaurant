import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menudetails',
  templateUrl: './menudetails.component.html',
  styleUrls: ['./menudetails.component.scss']
})
export class MenudetailsComponent implements OnInit {
  menu_object: Object;
  contentBlockIsHidden: boolean;
  learnMoreIsHidden: boolean;
  menutypeicon: string;

  recipeName: string;
  description: string;
  price: string;
  videourl: string;
  imageurl: string;
  
  constructor(private location: Location) { }

  ngOnInit() {
    this.contentBlockIsHidden = true;
    this.learnMoreIsHidden = false;
    this.menutypeicon = sessionStorage.getItem("menutype_icon");
    
    //console.log(sessionStorage.getItem("menu_object"));
    //console.log(sessionStorage.getItem("menu_object")["id"]);
    this.menu_object = JSON.parse(sessionStorage.getItem("menu_object"));
    
    this.recipeName = this.menu_object["recipeName"];
    this.description = this.menu_object["description"];
    this.price = this.menu_object["price"];

    this.videourl = this.menu_object["videoURL"];
    this.imageurl = this.menu_object["thumbName"];

    //this.menu_object = JSON.stringify(sessionStorage.getItem("menu_object"));
    //console.log(this.menu_object);
      
  }


  public closeDescription(){
    this.contentBlockIsHidden = true;
    this.learnMoreIsHidden = false;
  }

  public showDescription(){
    this.contentBlockIsHidden = false;
    this.learnMoreIsHidden = true;
  }

  public goBack(){
    this.location.back();
    console.log( 'goBack()...' );
  }

}
