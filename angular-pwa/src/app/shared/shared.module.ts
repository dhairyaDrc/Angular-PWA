import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { TextComponent } from './text/text.component';
import { VideosComponent } from './videos/videos.component';
import { TitleComponent } from './title/title.component';
import { ImageComponent } from './components/image/image.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { SimpleHeadingComponent } from './components/simple-heading/simple-heading.component';



@NgModule({
  declarations: [
    ImagesComponent,
    TextComponent,
    VideosComponent,
    TitleComponent,
    ImageComponent,
    ParagraphComponent,
    SimpleHeadingComponent,
  
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImagesComponent,
    TextComponent,
    VideosComponent,
    TitleComponent,
    ImageComponent,
    ParagraphComponent,
    SimpleHeadingComponent,

  ]
})
export class SharedModule { }
