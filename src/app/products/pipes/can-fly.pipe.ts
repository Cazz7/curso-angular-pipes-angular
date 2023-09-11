import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(canFly: boolean): 'Puede Volar' | 'No puede volar' {
    return (canFly)
      ? 'Puede Volar'
      : 'No puede volar';
  }

}
