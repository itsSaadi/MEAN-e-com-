import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data',
  standalone: true
})
export class DataPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {

    if (value === null || !value || value == undefined) {
      return 'this is from pipe'
    }
    return value;
  }

}
