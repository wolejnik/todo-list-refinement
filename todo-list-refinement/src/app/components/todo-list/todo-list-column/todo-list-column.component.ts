import { ToDoItem } from '@app/models/todo-item.model';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-column',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-list-column.component.html',
  styleUrls: ['./todo-list-column.component.scss']
})
export class TodoListColumnComponent implements OnInit {

  @Input() dataColumn!: ToDoItem[];

  constructor() { }

  ngOnInit() {
  }

}
