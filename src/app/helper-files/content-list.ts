import { Content } from '../helper-files/content-interface';


export class ContentList {
    private cArray!: Content[];

    // constructor(cArray: Content[]){

    //     this.cArray = cArray;
    // }
constructor(){
this.cArray = [];
}
        get cgArray():Content[]{
            return this.cArray;
        }

        addContent(element: Content){
            this.cArray.push(element); //this. refers the instance of class
        }

    arrayLength():number { // we did not take parameter in class method
        return this.cArray.length;
    }

    HTMLoutput(index: number): string {
        const content = this.cArray[index];
        const { title, description, creator, imgURL, type } = content;

        const imageTag = `<img src="${imgURL}" alt="${title}">`;
        const html = `<div>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
          <p>Creator: ${content.creator}</p>
          <p>Type: ${content.type}</p>
          ${imageTag}
</div>
        `;

        return html;
      }
}

