import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  
  transform(item:any[], term:string): any {



    if(term == undefined){
      return item;
    }
    return item.filter(function(item){

      return item.title.toLowerCase().includes(term.toLowerCase());

    });
  }

}
