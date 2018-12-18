import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {MenuTypes} from '../objects/menutypes';
import {ReataurantMenuType} from '../objects/restrauntmenutype';
import { AppComponent } from '../app.component';
//import { Globals } from '../global';

@Component({
  selector: 'app-menutypes',
  templateUrl: './menutypes.component.html',
  styleUrls: ['./menutypes.component.scss']
})


export class MenutypesComponent implements OnInit {
  leElement: HTMLElement;
  menutypes: MenuTypes[];
  restaurantMenuType: ReataurantMenuType;
  
  //constructor(private data: DataService, private route: ActivatedRoute, private router: Router, private globals: Globals) { }
  constructor(private data: DataService, private route: ActivatedRoute, private router: Router,private appcomp: AppComponent) { }
    ngOnInit() {
      var restaurant_id = this.route.snapshot.queryParams["rid"];
      this.data.getMenuTypes(restaurant_id).subscribe(data => {
        this.restaurantMenuType = <ReataurantMenuType>data;        
        this.menutypes = <MenuTypes[]>data["menutypes"];        
        console.log(this.restaurantMenuType);                
      }
    );
  }

  public menuTypeItemOnClick(event, reataurant_id, reataurant_name, menutype_id, menutype_name, menutype_icon){
    sessionStorage.setItem("reataurant_id",reataurant_id);
    sessionStorage.setItem("reataurant_name",reataurant_name);
    sessionStorage.setItem("menutype_id",menutype_id);
    sessionStorage.setItem("menutype_name",menutype_name);
    sessionStorage.setItem("foodpref","all");
    sessionStorage.setItem("menutype_icon",menutype_icon);

    sessionStorage.setItem("menu_id","");
    sessionStorage.setItem("menu_name","");

    //window.location.href = '/menus';
    this.router.navigate(['/menus']);
    //this.appcomp.openFullscreen();

  }


}
