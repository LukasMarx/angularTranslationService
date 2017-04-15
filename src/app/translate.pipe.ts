import { TranslationService } from './translation.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

    constructor(private translationService: TranslationService) {}

  transform(value: any, args?: any): any {
     return this.translationService.translate(value);
  }

}
