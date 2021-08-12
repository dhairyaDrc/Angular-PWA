import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { SimpleHeadingComponent } from './components/simple-heading/simple-heading.component';
import { ChapterTitleComponent } from './components/chapter-title/chapter-title.component';
import { VideoComponent } from './components/video/video.component';
import { ExpandableContentComponent } from './components/expandable-content/expandable-content.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { LogoHeadingComponent } from './components/logo-heading/logo-heading.component';
import { CounterComponent } from './components/counter/counter.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ShadeKnowledgeComponent } from './components/shade-knowledge/shade-knowledge.component';
import { HomeModule } from '../home/home.module';
import { CaptionComponent } from './components/caption/caption.component';
import { ButtonComponent } from './components/button/button.component';
import { ExpandableContentTwoComponent } from './expandable-content-two/expandable-content-two.component';
import { ShadeKnowledgeTwoComponent } from './shade-knowledge-two/shade-knowledge-two.component';



@NgModule({
  declarations: [
    
    ImageComponent,
    ParagraphComponent,
    SimpleHeadingComponent,
    ChapterTitleComponent,
    VideoComponent,
    ExpandableContentComponent,
    TwitterComponent,
    LogoHeadingComponent,
    CounterComponent,
    QuoteComponent,
    ShadeKnowledgeComponent,
    CaptionComponent,
    ButtonComponent,
    ExpandableContentTwoComponent,
    ShadeKnowledgeTwoComponent
  
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports:[
    
    ImageComponent,
    ParagraphComponent,
    SimpleHeadingComponent,
    ChapterTitleComponent,
    VideoComponent,
    ExpandableContentComponent,
    TwitterComponent,
    LogoHeadingComponent,
    CounterComponent,
    QuoteComponent,
    ShadeKnowledgeComponent,
    CaptionComponent,
    ButtonComponent,
    ExpandableContentTwoComponent,
    ShadeKnowledgeTwoComponent
  ]
})
export class SharedModule { }
