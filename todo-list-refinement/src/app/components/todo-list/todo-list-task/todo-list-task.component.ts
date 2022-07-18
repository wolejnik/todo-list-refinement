import { updateItem } from '@app/logic/store/todo.actions';
import { ToDoItem } from '@app/models/todo-item.model';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { removeItem } from 'src/app/logic/store/todo.actions';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../new-task/task-dialog/task-dialog.component';

@Component({
  selector: 'app-todo-list-task',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-list-task.component.html',
  styleUrls: ['./todo-list-task.component.scss'],
})
export class TodoListTaskComponent implements OnInit {
  @Input() task!: ToDoItem;

  constructor(public dialog: MatDialog, private store: Store) {}

  ngOnInit() {}

  public actionUpdate(task: ToDoItem) {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: { isEdit: true, task: task },
      disableClose: true,
    });

    dialogRef.componentInstance.onSubmitReason.subscribe((data) => {
      if (data) {
        this.store.dispatch(
          updateItem({
            newItem: {
              id: task?.id,
              title: data?.title,
              desc: data?.desc,
              status: data.status,
            },
          })
        );
      }
    });
  }

  public actionRemove(taskId?: string) {
    this.store.dispatch(
      removeItem({
        id: taskId,
      })
    );
  }
  
  public changeStatus(
    task: ToDoItem,
    newStatusTask: 'todo' | 'inProgress' | 'done'
  ) {
    this.store.dispatch(
      updateItem({
        newItem: {
          id: task?.id,
          title: task?.title,
          desc: task?.desc,
          status: newStatusTask,
        },
      })
    );
  }
}
