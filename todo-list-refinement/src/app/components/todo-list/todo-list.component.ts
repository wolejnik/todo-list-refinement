import { ToDoItem } from 'src/app/models/todo-item.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAll } from 'src/app/logic/store/todo.actions';
import * as TodoStoreSelectors from '../../logic/store/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public data!: ToDoItem[];
  constructor(private store: Store) {
    this.store.dispatch(loadAll());

    this.store.select(TodoStoreSelectors.getItems).subscribe((data) => {
      if (data) {
        this.data = data;
      }
    });
  }

  ngOnInit() {}
}
