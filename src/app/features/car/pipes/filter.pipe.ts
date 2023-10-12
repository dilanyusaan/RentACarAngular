import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../../../shared/models/car';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Car[], text:string): Car[] {

    text = text? text.toLocaleLowerCase():"";
    const filter = text? value.filter((car:Car)=>car.model.name.toLocaleLowerCase().indexOf(text) !== -1):value;
    
    return filter;
  }

}
