import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter2Component } from '../chapter2/chapter2.component';

import { ReportComponent } from './report.component';


const routes: Routes = [
    {
        path: 'chapter-2',
        component: Chapter2Component
    },
    {
        path: 'report',
        component: ReportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportRoutingModule { }