import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { SharedModule } from '../shared/shared.module';
// import { ReportComponent } from './report.component';
import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    // ReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule
  ]
})
export class ReportModule { }
