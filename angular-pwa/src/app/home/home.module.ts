import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CardComponent } from './card/card.component';
// import { SideMenuComponent } from './side-menu/side-menu.component';
import { CounterCardComponent } from './counter-card/counter-card.component';



@NgModule({
  declarations: [
    // CardComponent,
    // SideMenuComponent,
    CounterCardComponent,
  ],
  imports: [
    CommonModule,
    
  ]
})
export class HomeModule { }
