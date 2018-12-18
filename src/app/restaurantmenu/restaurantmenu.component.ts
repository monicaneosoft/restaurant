import { Component, OnInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Location } from '@angular/common';




@Component({
  selector: 'app-restaurantmenu',
  templateUrl: './restaurantmenu.component.html',
  styleUrls: ['./restaurantmenu.component.scss']
})
export class RestaurantmenuComponent implements OnInit {
  menus: Object;
  resturantId: string;
  foodpref: string;
  menutype: string;
  menutypename: string;
  menutypeicon: string;
  background_size: string;
  textList: HTMLImageElement;
  graphicList: HTMLImageElement;
  textBtn: HTMLImageElement;
  graphicBtn: HTMLImageElement;

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit() {    
    this.menutypename = sessionStorage.getItem("menutype_name");
    this.menutypeicon = sessionStorage.getItem("menutype_icon");
    this.background_size = "cover";    
    

    this.route.paramMap.subscribe(params => {
          /*
          console.log(params.get('resturantId'));
          console.log(params.get('foodpref'));
          console.log(params.get('menutype'));
          console.log(params.get('menutypename'));
          this.foodpref = params.get('foodpref');
          this.menutype = params.get('menutype');
          this.resturantId = params.get('resturantId');
          this.menutypename = params.get('menutypename');
          */
        
        });
        

      this.data.getMenus(sessionStorage.getItem("reataurant_id"), sessionStorage.getItem("foodpref") , sessionStorage.getItem("menutype_id")).subscribe(data => {        
        this.menus = data
        console.log(this.menus);
      });
      
      

  }

  public menuItemOnClick(menu){    
    console.log(menu);
    sessionStorage.setItem("menu_object",JSON.stringify(menu));    
    this.router.navigate(['/menudetails']);
  }
  public goBack(){
    this.location.back();
    console.log( 'goBack()...' );
  }
  
  public showTextMenu(isTrue){
    this.textList  = <HTMLImageElement>document.getElementById("text_menu");
    this.graphicList   = <HTMLImageElement>document.getElementById("graphic_menu");
    this.textBtn  = <HTMLImageElement>document.getElementById("textMenu");
    this.graphicBtn   = <HTMLImageElement>document.getElementById("graphicMenu");
      if(isTrue){
        this.textList.hidden = false;
        this.graphicList.hidden = true;
        this.textBtn.classList.add("active");
        this.graphicBtn.classList.remove("active");
      }else{
        this.textList.hidden = true;
        this.graphicList.hidden = false;
        this.graphicBtn.classList.add("active")
        this.textBtn.classList.remove("active");
      }
  }

  /////////////// filtet code ////////////////
  public gotofilterpage() {
    this.router.navigate(['/filtermenu']);
  }

}
