import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from "./home/home.component";
import { CardComponent } from './home/card/card.component';
import { SideMenuComponent } from 'src/app/home/side-menu/side-menu.component';
import { MenuBarComponent } from './home/menu-bar/menu-bar.component';
import { CounterCardComponent } from './home/counter-card/counter-card.component';
import { AppendixesComponent } from './home/appendixes/appendixes.component';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    CardComponent,
    SideMenuComponent,
    MenuBarComponent,
    CounterCardComponent,
    AppendixesComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
