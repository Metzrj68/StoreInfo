import {Pipe, PipeTransform} from '@angular/core';
import {StoreAttribute} from "../models/store.model";

@Pipe({
  name: 'attribFilter'
})
export class AttribFilterPipe implements PipeTransform {

  transform(values: StoreAttribute[], search: string): any {
    if (!values || !search) {
      return values
    }

    return values.filter((item: StoreAttribute) => {
        if (item.Attribute.toLowerCase().includes(search.toLowerCase()) || item.Value.toLowerCase().includes((search.toLowerCase()))) {
          return item
        }
      }
    )
  }
}
