import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageComponent } from 'src/app/shared/components/image/image.component';
import { ParagraphComponent } from "./components/paragraph/paragraph.component";
import { ButtonComponent } from './components/button/button.component';
import { SimpleHeadingComponent } from './components/simple-heading/simple-heading.component';
import { ChapterTitleComponent } from './components/chapter-title/chapter-title.component';




@NgModule({
  declarations: [
    ImageComponent,
    ParagraphComponent,
    SimpleHeadingComponent,
    ChapterTitleComponent,
    ButtonComponent,



  
  ],
  imports: [
    CommonModule
  ],

  exports: [
    ImageComponent,
    ParagraphComponent,
    SimpleHeadingComponent,
    ChapterTitleComponent,
    ButtonComponent,
  ]
 
})
export class SharedModule { }
