import { Component, Input, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
// import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})

export class ContentCardComponent implements OnInit{

firstInstance: ContentList;

constructor(){
this.firstInstance = new ContentList;

this.firstInstance.addContent({
  id: 1,
  title: 'Javascript',
  description: 'Javascript is the most popular programming language in the world. It can be used on both the frontend and the backend programming. ',
  creator: 'Brendan Eich'
});

this.firstInstance.addContent({
  id: 2,
  title: 'Python',
  description: 'Python is a high-level, general-purpose programming language known for its readability and simplicity. It is widely used in various domains, including web development, data science, artificial intelligence, and more.',
  creator: 'Guido van Rossum'
});

this.firstInstance.addContent({
  id: 3,
  title: 'Java',
  description: 'Java is a versatile, object-oriented programming language that is designed to be platform-independent. It is widely used for building enterprise-level applications, mobile applications (Android), and large-scale systems.',
  creator: 'James Gosling'
});
    }
ngOnInit() {

}
  }
