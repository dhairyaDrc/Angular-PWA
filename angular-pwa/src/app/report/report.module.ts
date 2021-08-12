import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../home/home.module';
import { CentralWestAsiaComponent } from './central-west-asia/central-west-asia.component';
import { EastAsiaComponent } from './east-asia/east-asia.component';
import { PacificComponent } from './pacific/pacific.component';
import { SouthAsiaComponent } from './south-asia/south-asia.component';
import { SouthEastAsiaComponent } from './south-east-asia/south-east-asia.component';



@NgModule({
  declarations: [
    ReportComponent,
    CentralWestAsiaComponent,
    EastAsiaComponent,
    PacificComponent,
    SouthAsiaComponent,
    SouthEastAsiaComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule,
    HomeModule
  ]
})
export class ReportModule { }
