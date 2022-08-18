import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UnitsComponent } from './components/units/units.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UnitsdetailComponent } from './components/unitsdetail/unitsdetail.component';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { UnitsdataComponent } from './components/unitsdata/unitsdata.component';
import { unitsModule } from './components/units/units.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UnitsComponent,
    UnitsdetailComponent,
    UnitsdataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    StoreModule.forRoot({}),
    CommonModule,
    unitsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


