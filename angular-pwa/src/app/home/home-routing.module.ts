import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppendixesContentComponent } from './appendixes-content/appendixes-content.component';
import { FinancialHighlightsComponent } from './financial-highlights/financial-highlights.component';


const routes: Routes = [
  {
    path: 'appendixes-content',
    component: AppendixesContentComponent
  },
  {
    path: 'financial-highlights',
    component: FinancialHighlightsComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }