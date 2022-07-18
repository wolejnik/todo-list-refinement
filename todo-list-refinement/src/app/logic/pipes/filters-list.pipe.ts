import { Pipe, PipeTransform } from '@angular/core';
import { ToDoItem } from '@app/models/todo-item.model';

@Pipe({
  name: 'filterList',
})
export class FilterListPipe implements PipeTransform {
  transform(items: ToDoItem[] | null, args?: string): any {
    if (!items || !args) {
      return items;
    }
    return items.filter((item: ToDoItem) => item.status === args);
  }
}
