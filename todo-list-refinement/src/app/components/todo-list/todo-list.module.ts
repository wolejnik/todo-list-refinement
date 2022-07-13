import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoListRoutingModule } from './todo-routing.module';
import { FilterlistPipe } from 'src/app/logic/pipes/filters-list.pipe';
import { TodoListColumnComponent } from './todo-list-column/todo-list-column.component';

@NgModule({
  imports: [CommonModule, TodoListRoutingModule],
  declarations: [TodoListComponent, TodoListColumnComponent, FilterlistPipe],
})
export class TodoListModule {}
