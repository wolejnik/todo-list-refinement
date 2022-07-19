import { Observable } from 'rxjs';
import { ToDoItem } from '@app/models/todo-item.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAll } from '@app/logic/store/todo.actions';
import * as TodoStoreSelectors from '@app/logic/store/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public data!: Observable<ToDoItem[]>;
  public isLoading!: Observable<boolean>;
  constructor(private store: Store) {
    this.store.dispatch(loadAll());
  }

  ngOnInit() {
    this.data = this.store.select(TodoStoreSelectors.getItems);
    this.isLoading = this.store.select(TodoStoreSelectors.getItemsLoading);

    // this.store.select(TodoStoreSelectors.getItems).subscribe((data) => {
    //   if (data) {
    //     this.data = data;
    //   }
    // });
  }
}
