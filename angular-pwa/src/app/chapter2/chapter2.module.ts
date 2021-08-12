import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chapter2RoutingModule } from './chapter2-routing.module';
import { Chapter2Component } from './chapter2.component';
import { HomeModule } from '../home/home.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Chapter2Component
  ],
  imports: [
    CommonModule,
    Chapter2RoutingModule,
    HomeModule,
    SharedModule
  ]
})
export class Chapter2Module { }
