import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface'
import {ContentListComponent} from '../content-list/content-list.component'

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})

export class ContentCardComponent implements OnInit{

  @Input() contentItem: Content | undefined;
  @Input() isFirst: boolean | undefined;
  @Input() even: boolean | undefined;
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
