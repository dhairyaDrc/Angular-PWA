import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from "./home/home.component";
import { CardComponent } from './home/card/card.component';
import { SideMenuComponent } from 'src/app/home/side-menu/side-menu.component';
<<<<<<< HEAD
import { Chapter1Component } from './chapter1/chapter1.component';
import { ReportComponent } from './report/report.component';
import { ParagraphComponent } from './shared/components/paragraph/paragraph.component';
import { ImageComponent } from './shared/components/image/image.component';
import { SimpleHeadingComponent } from 'src/app/shared/components/simple-heading/simple-heading.component';
=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuBarComponent } from './home/menu-bar/menu-bar.component';
import { CounterCardComponent } from './home/counter-card/counter-card.component';
import { AppendixesComponent } from './home/appendixes/appendixes.component';
>>>>>>> 1e34345e505b961dc6bd3ec08ff81d0846c7f96c


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    CardComponent,
    SideMenuComponent,
<<<<<<< HEAD
    Chapter1Component,
    ReportComponent,
    ParagraphComponent,
    ImageComponent,
    SimpleHeadingComponent
=======
    MenuBarComponent,
    CounterCardComponent,
    AppendixesComponent
>>>>>>> 1e34345e505b961dc6bd3ec08ff81d0846c7f96c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
