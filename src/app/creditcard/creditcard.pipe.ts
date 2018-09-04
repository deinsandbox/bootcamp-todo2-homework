import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard',
})
export class CreditcardPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    return 'XXXX-XXXX-XXXX-' + value.substr(12, value.length - 4);
  }
}
