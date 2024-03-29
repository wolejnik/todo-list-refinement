import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ToDoItem } from '@app/models/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todoItems: ToDoItem[] = [
    {
      id: '1',
      title: 'Task 1',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      status: 'todo',
    },
    {
      id: '2',
      title: 'Task 2',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      status: 'done',
    },
    {
      id: '3',
      title: 'Task 3',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      status: 'todo',
    },
    {
      id: '4',
      title: 'Task 4',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      status: 'todo',
    },
    {
      id: '5',
      title: 'Task 5',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      status: 'todo',
    },
    {
      id: '6',
      title: 'Task 6',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      status: 'inProgress',
    },
    {
      id: '7',
      title: 'Task 7',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      status: 'inProgress',
    },
  ];

  constructor() {}

  public getTodoListItems(): Observable<ToDoItem[]> {
    return of(this.todoItems).pipe(delay(2000));
  }

  public createTask(
    name: string,
    statusTask: string,
    desc?: string
  ): Observable<ToDoItem> {
    return of({
      id: this.getRandomIndex(),
      title: name,
      desc: desc ? desc : '',
      status: statusTask,
    } as ToDoItem);
  }

  public getRandomIndex(): string {
    return Math.round(Math.random() * 100 + 10).toString();
  }
}
