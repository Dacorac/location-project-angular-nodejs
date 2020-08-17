import { Pipe, PipeTransform } from '@angular/core';
import { Location } from 'src/app/shared/models/location.model';

@Pipe({
  name: 'locationName'
})
export class LocationNamePipe implements PipeTransform {

  transform(items: Location[], args: any) {
    if (args.hasOwnProperty('parentId') && typeof items !== 'undefined') {

      let filteredItems = items.filter(item => item.id == args.parentId);

      if (filteredItems.length > 0) {
        return filteredItems[0].name;

      } else {
        return "N/A";
      }
    }
    return "N/A";
  }

}
