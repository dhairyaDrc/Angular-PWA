import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { TextComponent } from './text/text.component';
import { VideosComponent } from './videos/videos.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    ImagesComponent,
    TextComponent,
    VideosComponent,
    TitleComponent,
  
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
