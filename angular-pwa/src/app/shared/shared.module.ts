import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageComponent } from 'src/app/shared/components/image/image.component';
import { ParagraphComponent } from "./components/paragraph/paragraph.component";
import { ButtonComponent } from './components/button/button.component';
import { SimpleHeadingComponent } from './components/simple-heading/simple-heading.component';
import { ChapterTitleComponent } from './components/chapter-title/chapter-title.component';
import { VideoComponent } from './components/video/video.component';
import { ExpandableContentComponent } from './components/expandable-content/expandable-content.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { LogoHeadingComponent } from './components/logo-heading/logo-heading.component';
import { CounterComponent } from './components/counter/counter.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ShadeKnowledgeComponent } from './components/shade-knowledge/shade-knowledge.component';




@NgModule(
  {
  declarations: [
    ImageComponent,
    ParagraphComponent,
    SimpleHeadingComponent,
    ChapterTitleComponent,
    ButtonComponent,



    VideoComponent,
    ExpandableContentComponent,
    TwitterComponent,
    LogoHeadingComponent,
    CounterComponent,
    QuoteComponent,
    ShadeKnowledgeComponent,
  
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
    TwitterComponent,
    ShadeKnowledgeComponent,
    QuoteComponent
  ]
 
})
export class SharedModule { }
