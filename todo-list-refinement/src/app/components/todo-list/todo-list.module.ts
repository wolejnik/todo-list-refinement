import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { FilterListPipe } from 'src/app/logic/pipes/filters-list.pipe';
import { ToDoStoreModule } from 'src/app/logic/store/todo.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskDialogComponent } from './new-task/task-dialog/task-dialog.component';
import { TodoListColumnComponent } from './todo-list-column/todo-list-column.component';
import { TodoListTaskComponent } from './todo-list-task/todo-list-task.component';
import { TodoListComponent } from './todo-list.component';
import { TodoListRoutingModule } from './todo-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
    MatProgressSpinnerModule,
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
