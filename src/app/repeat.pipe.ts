import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat'
})
export class RepeatPipe implements PipeTransform {

  transform(value: string, num:number): string {
    const str = value.repeat(num);
    return str;
  }

}
