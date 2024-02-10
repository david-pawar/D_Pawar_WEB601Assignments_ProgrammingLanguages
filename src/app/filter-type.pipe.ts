import { Pipe, PipeTransform, Input } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'filterType',
  standalone: true
})
export class FilterTypePipe implements PipeTransform {

  // @Input() ContentItem: Content | undefined;
  transform(value: Content[], type?: string): Content[] {  
    // case: 1 
    if(!value){
      return[]
    }

    if(!type){
      return value.filter(anItem => !anItem.type);
    } 
      return value.filter(anItem => anItem.type === type);
    

    
   
  }
}