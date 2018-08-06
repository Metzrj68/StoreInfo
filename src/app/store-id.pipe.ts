import {Pipe, PipeTransform} from '@angular/core';
import {StoreAttribute} from "../models/store.model";

@Pipe({
  name: 'storeId',
})
export class StoreIdPipe implements PipeTransform {

  transform(values: StoreAttribute[], group: string): StoreAttribute[] {
    if (!values || !group) {
      return values;
    }
    return values.filter((item: StoreAttribute) => {
      if (item.groupName.toLowerCase()  == group.toLowerCase()) {
        return values;
      }
      return item.groupName.toLowerCase() == group.toLowerCase()
    })
  }
}

