import { Component, Input, OnInit } from '@angular/core';
import { ContentCardComponent } from '../content-card/content-card.component';
import { Content } from '../helper-files/content-interface'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {FilterTypePipe} from '../filter-type.pipe';
import { CreateContentComponent } from '../create-content/create-content.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentCardComponent, CommonModule, FormsModule, FilterTypePipe, CreateContentComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit{

  ContentItems: Content[] = [      
    {
      id: 1,
      title: 'Javascript',
      description: 'Javascript is the most popular programming language in the world. It can be used on both the frontend and the backend programming. ',
      creator: 'Brendan Eich',
      imgURL:   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png',
      tags: ["tag1", "tag2", "tag3"],
      type: 'Dynamic'
    },
  {
    id: 2,
    title: 'Python',
    description: 'Python is a high-level, general-purpose programming language known for its readability and simplicity. It is widely used in various domains, including web development, data science, artificial intelligence, and more.',
    creator: 'Guido van Rossum',
    imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    tags: ["tag1", "tag2", "tag3"],
    type: 'Dynamic'
  },
  {
    id: 3,
  title: 'Java',
  description: 'Java is a versatile, object-oriented programming language that is designed to be platform-independent. It is widely used for building enterprise-level applications, mobile applications (Android), and large-scale systems.',
  creator: 'James Gosling',
  // imgURL: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png',
  tags: ["tag1", "tag2", "tag3"],
  type: 'Static'
  },
  {
    id: 4,
    title: 'C++',
    description: 'C++ is a powerful, general-purpose programming language known for its high performance and efficiency. It supports both procedural and object-oriented programming and is widely used in system development, game development, and resource-constrained environments.',
    creator: 'Bjarne Stroustrup'   ,
    imgURL: 'https://assets-global.website-files.com/6047a9e35e5dc54ac86ddd90/63065002ce321b529d375e07_2e261bcd.png', 
    tags: ["tag1", "tag2", "tag3"],
    type: 'Static'
  },
  {
    id: 5,
  title: 'C#',
  description: 'C# (pronounced C sharp) is a modern, object-oriented programming language developed by Microsoft. It is widely used for building Windows applications, web applications (ASP.NET), and games using platforms like Unity. C# offers strong typing and automatic memory management.',
  creator: 'Microsoft Corporation',
  imgURL: 'https://cdn.worldvectorlogo.com/logos/c--4.svg',
  tags: ["tag1", "tag2", "tag3"],
  type: 'Static'
  },
  {
    id: 6,
  title: 'Kotlin',
  description: 'Kotlin is a statically-typed programming language developed by JetBrains. It is designed to be fully interoperable with Java and is known for its concise syntax, null safety, and support for both object-oriented and functional programming. Kotlin is the official language for Android app development.',
  creator: 'JetBrains',
  imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png ',
  tags: ["tag1", "tag2", "tag3"],
  // type: 'Static'
  },
  {
    id: 7,
    title: "Swift",
    description: "Swift is a modern, open-source programming language developed by Apple. It is designed for iOS, macOS, watchOS, and tvOS development. Swift offers a clean syntax, type safety, and powerful features such as optionals, generics, and closures.",
    creator: "Apple",
    imgURL: "https://developer.apple.com/swift/images/swift-og.png",
    tags: ["tag1", "tag2", "tag3"],
    type: 'Static'
  }
];

typeExist: boolean = false;
filteredArray: Content[] = [];
searchHeading: string = ' ';
searchMessage: string = '';

checkingTitle(){
//selection                  =  (is equal to)    this
  this.filteredArray = this.ContentItems.filter(item => item.title.toLowerCase() === this.searchHeading.toLowerCase());
  this.typeExist = this.filteredArray.length > 0;
  this.searchMessage = this.typeExist ?  ` '${this.searchHeading}' title exist in our database and it has been highlighted in the below list.` : `'${this.searchHeading}' title  does not exist in our database.` ;
}

submissionOperation(newContent: Content) {
  newContent.id = Number(newContent.id);
  //Not working - this.contentArray.push(newContent);
  
  //Creates a new array by taking the existing contentArray into a new one
  //Then it appends the newContent object to the new array
  this.ContentItems = [...this.ContentItems, newContent];

  //Debug
  console.log(this.ContentItems)

  console.log("Operation to add new content is successfully done: ", newContent.title)
}

 constructor() {
  
}
ngOnInit(){

};

}
