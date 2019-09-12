import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {
  transform(value: string, limit: number): any {
    console.log(value);
    if (value.length - 3 > limit) {
      return value.substring(0, limit) + '...';
    }
    return value;
  }
}
