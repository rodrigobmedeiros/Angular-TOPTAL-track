import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs-compat/operator/filter';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], valueToFilter: string, attributeToFilter: string): any[] {
    if (value.length === 0 || valueToFilter === '') {
      return value;
    }
    const filteredArray = [];
    for (let item of value) {
      if (item[attributeToFilter] === valueToFilter){
        filteredArray.push(item);
      }
    }
    return filteredArray
  }

}
