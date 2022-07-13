import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToDoItem } from 'src/app/models/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todoItems: ToDoItem[] = [
    {
      id: '1',
      title: 'Task 1',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      isToDo: true,
      isProgress: false,
      isDone: false,
    },
    {
      id: '2',
      title: 'Task 2',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      isToDo: true,
      isProgress: false,
      isDone: false,
    },
    {
      id: '3',
      title: 'Task 3',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      isToDo: true,
      isProgress: false,
      isDone: false,
    },
    {
      id: '4',
      title: 'Task 4',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      isToDo: true,
      isProgress: false,
      isDone: false,
    },
    {
      id: '5',
      title: 'Task 5',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      isToDo: true,
      isProgress: false,
      isDone: false,
    },
    {
      id: '6',
      title: 'Task 6',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      isToDo: true,
      isProgress: false,
      isDone: false,
    },
    {
      id: '7',
      title: 'Task 7',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      isToDo: true,
      isProgress: false,
      isDone: false,
    },
  ];

  constructor() {}

  public getTodoListItems(): Observable<ToDoItem[]> {
    return of(this.todoItems);
  }
}
