import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppendixesComponent } from './appendixes/appendixes.component';
import { CardComponent } from './card/card.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CounterCardComponent } from './counter-card/counter-card.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AppendixesContentComponent } from './appendixes-content/appendixes-content.component';
import { HomeRoutingModule } from './home-routing.module';
import { FinancialHighlightsComponent } from './financial-highlights/financial-highlights.component';
import { SharedModule } from '../shared/shared.module';
// import { AppendixesContentComponent } from './appendixes-content/appendixes-content.component';



@NgModule({
  declarations: [
    CardComponent,
    SideMenuComponent,
    CounterCardComponent,
    MenuBarComponent,
    AppendixesComponent,
    AppendixesContentComponent,
    FinancialHighlightsComponent,
    
    
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    
    SharedModule
    
  ],

  exports: [
    CardComponent,
    SideMenuComponent,
    CounterCardComponent,
    MenuBarComponent,
    AppendixesComponent,
    AppendixesContentComponent,
    FinancialHighlightsComponent
  ]
})
export class HomeModule { }
