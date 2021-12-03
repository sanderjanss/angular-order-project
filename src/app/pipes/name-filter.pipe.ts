import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../model/item";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: Item[], searchText: string): Item[] {
    searchText = searchText.toLocaleLowerCase();
    return items.filter(item => item.name.toLocaleLowerCase().startsWith(searchText));
  }
}
