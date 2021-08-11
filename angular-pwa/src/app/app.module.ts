import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from "./home/home.component";
// import { CardComponent } from './home/card/card.component';
// import { SideMenuComponent } from 'src/app/home/side-menu/side-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MenuBarComponent } from './home/menu-bar/menu-bar.component';
// import { CounterCardComponent } from './home/counter-card/counter-card.component';
// import { AppendixesComponent } from './home/appendixes/appendixes.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    // CardComponent,
    // SideMenuComponent,
    // MenuBarComponent,
    // CounterCardComponent,
    // AppendixesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    SharedModule,
    HomeModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
