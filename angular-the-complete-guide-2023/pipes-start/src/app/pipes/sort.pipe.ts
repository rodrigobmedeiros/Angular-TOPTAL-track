import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[]): any[] {
    return value.sort((a, b) => {
      return  a.name.toLowerCase() > b.name.toLowerCase() ? 1 : a.name.toLowerCase() === b.name.toLowerCase() ? 0 : -1
    })
  }

}
