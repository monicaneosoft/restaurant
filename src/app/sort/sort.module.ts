import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltermenuComponent } from './filtermenu/filtermenu.component';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  { path: 'filtermenu', component: FirstComponent },
];

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SortModule { }
