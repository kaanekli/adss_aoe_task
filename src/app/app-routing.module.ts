import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UnitsComponent } from './components/units/units.component';
import { UnitsdetailComponent } from './components/unitsdetail/unitsdetail.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Units',
    component: UnitsComponent
  },
  {
    path: 'Unitsdetail',
    component:  UnitsdetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
