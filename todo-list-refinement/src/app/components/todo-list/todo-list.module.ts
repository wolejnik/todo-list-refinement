import { TaskDialogComponent } from './new-task/task-dialog/task-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoListRoutingModule } from './todo-routing.module';
import { FilterListPipe } from 'src/app/logic/pipes/filters-list.pipe';
import { TodoListColumnComponent } from './todo-list-column/todo-list-column.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ToDoStoreModule } from 'src/app/logic/store/todo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { TodoListTaskComponent } from './todo-list-task/todo-list-task.component';
@NgModule({
  imports: [
    CommonModule,
    TodoListRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    TranslateModule,
    ToDoStoreModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatMenuModule,
  ],
  declarations: [
    TodoListComponent,
    TodoListColumnComponent,
    TodoListTaskComponent,
    NewTaskComponent,
    TaskDialogComponent,
    FilterListPipe,
  ],
})
export class TodoListModule {}
