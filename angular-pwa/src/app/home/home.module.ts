import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppendixesComponent } from './appendixes/appendixes.component';
import { CardComponent } from './card/card.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CounterCardComponent } from './counter-card/counter-card.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';



@NgModule({
  declarations: [
    CardComponent,
    SideMenuComponent,
    CounterCardComponent,
    MenuBarComponent,
  
    AppendixesComponent
  ],
  imports: [
    CommonModule,
    
  ],

  exports: [
    CardComponent,
    SideMenuComponent,
    CounterCardComponent,
    MenuBarComponent,
  
    AppendixesComponent
  ]
})
export class HomeModule { }
