import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path: '',
    loadChildren: () => import('./report/report.module').then(m => m.ReportModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () => import('./chapter2/chapter2.module').then(m => m.Chapter2Module),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
