import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path:"report",
    component:ReportComponent
  },
  {
    path:"",
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
