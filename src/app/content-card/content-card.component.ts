import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface'
import {ContentListComponent} from '../content-list/content-list.component'
import {HoverAffectDirective} from '../hover-affect.directive';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, HoverAffectDirective ],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})

export class ContentCardComponent implements OnInit{

  @Input() contentItem: Content | undefined;
  @Input() isFirst: boolean | undefined;
  @Input() even: boolean | undefined;

  errorImg() {
    console.log('Image clicked!');
    console.log(`Image ID: ${this.contentItem?.id}, Image Title: ${this.contentItem?.title}`);
  }
constructor(){

}
ngOnInit() {

}
logContentItem(contentItem: Content | undefined){
if(contentItem) {
  console.log(`Id: ${contentItem.id} and Title: ${contentItem.title}`)
}
}
  }
