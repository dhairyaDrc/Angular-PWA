import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReportRoutingModule } from './report-routing.module';
import { SharedModule } from '../shared/shared.module';
// import { SharedModule } from '../shared/shared.module';
// import { ReportComponent } from './report.component';


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
