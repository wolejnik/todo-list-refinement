import { Component, EventEmitter, Inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoItem } from 'src/app/models/todo-item.model';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss'],
})
export class TaskDialogComponent {
  public taskForm!: FormGroup;
  public onSubmitReason = new EventEmitter();
  public submitted = false;
  public typesTask = ['todo', 'inProgress', 'done'];

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDoItem,
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      desc: [''],
      status: ['todo', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.taskForm.controls;
  }

  public onSubmit() {
    this.submitted = true;

    if (this.taskForm.invalid) {
      return;
    }
    this.data = this.taskForm.value;
    this.onSubmitReason.emit(this.data);
    this.dialogRef.close();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public changeType(e: any) {
    this.taskForm.controls.status.setValue(e.target.value.substring(3));
  }
}
