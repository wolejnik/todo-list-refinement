import { addItem } from '@app/logic/store/todo.actions';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  public value: string = '';
  constructor(public dialog: MatDialog, private store: Store) {}

  ngOnInit() {}

  public addNewTaskDialog() {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: { value: '' },
      disableClose: true,
    });

    dialogRef.componentInstance.onSubmitReason.subscribe((data) => {
      if (data) {
        this.store.dispatch(
          addItem({
            name: data?.title,
            statusTask: data?.status,
            desc: data?.desc ? data?.desc : '',
          })
        );
      }
    });
  }
}
