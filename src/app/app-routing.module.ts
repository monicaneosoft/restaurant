import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MenutypesComponent } from './menutypes/menutypes.component';
import { RestaurantmenuComponent } from './restaurantmenu/restaurantmenu.component';
import { QrscannerComponent } from './qrscanner/qrscanner.component';
import { MenudetailsComponent } from './menudetails/menudetails.component';
import { FiltermenuComponent } from './filtermenu/filtermenu.component';
import {QrcodegeneratorComponent} from './qrcodegenerator/qrcodegenerator.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: '', component: QrscannerComponent },
  { path: 'menutypes', component: MenutypesComponent },
  //{ path: 'menus/:resturantId/:foodpref/:menutype/:menutypename', component: RestaurantmenuComponent },
  { path: 'menus', component: RestaurantmenuComponent },
  { path: 'sort', loadChildren: './sort/sort.module#SortModule' },
  { path: 'menudetails', component: MenudetailsComponent },
  { path: 'qrcodescanner', component: QrscannerComponent },
  { path: 'qrcodegenerator', component: QrcodegeneratorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
