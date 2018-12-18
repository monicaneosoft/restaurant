import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ZXingScannerModule } from '@zxing/ngx-scanner';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { MenutypesComponent } from './menutypes/menutypes.component';
import { RestaurantmenuComponent } from './restaurantmenu/restaurantmenu.component';
import { QrscannerComponent } from './qrscanner/qrscanner.component';
import { MenudetailsComponent } from './menudetails/menudetails.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './categories/categories.component';
import { QrcodegeneratorComponent } from './qrcodegenerator/qrcodegenerator.component';
import { FiltermenuComponent } from './filtermenu/filtermenu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenutypesComponent,
    RestaurantmenuComponent,
    QrscannerComponent,
    MenudetailsComponent,
    CategoriesComponent,
    QrcodegeneratorComponent,
    FiltermenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    ZXingScannerModule,
    BrowserAnimationsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
