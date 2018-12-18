import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filtermenu',
  templateUrl: './filtermenu.component.html',
  styleUrls: ['./filtermenu.component.scss']
})
export class FiltermenuComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  public goBack(){
    this.location.back();
    console.log( 'goBack()...' );
  }

}
