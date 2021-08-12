import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralWestAsiaComponent } from './central-west-asia/central-west-asia.component';
import { EastAsiaComponent } from './east-asia/east-asia.component';
import { PacificComponent } from './pacific/pacific.component';
import { SouthAsiaComponent } from './south-asia/south-asia.component';
import { SouthEastAsiaComponent } from './south-east-asia/south-east-asia.component';

const routes: Routes = [
  { path: 'central-west-asia', component: CentralWestAsiaComponent },
  { path: 'east-asia', component: EastAsiaComponent },
  { path: 'pacific', component: PacificComponent },
  { path: 'south-asia', component: SouthAsiaComponent },
  { path: 'south-east-asia', component: SouthEastAsiaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Chapter2RoutingModule { }
