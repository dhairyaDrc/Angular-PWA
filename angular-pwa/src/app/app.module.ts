import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from "./home/home.component";
import { CardComponent } from './home/card/card.component';
import { SideMenuComponent } from 'src/app/home/side-menu/side-menu.component';
import { Chapter1Component } from './chapter1/chapter1.component';
import { ReportComponent } from './report/report.component';
import { ParagraphComponent } from './shared/components/paragraph/paragraph.component';
import { ImageComponent } from './shared/components/image/image.component';
import { SimpleHeadingComponent } from 'src/app/shared/components/simple-heading/simple-heading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    CardComponent,
    SideMenuComponent,
    Chapter1Component,
    ReportComponent,
    ParagraphComponent,
    ImageComponent,
    SimpleHeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
