import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, mergeMap } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';
import * as fromActions from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadTodoList = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadAll),
      switchMap(() => {
        return this.todoService.getTodoListItems().pipe(
          mergeMap((items) => [fromActions.loadAllSuccess({ items })]),
          catchError((error) => of(fromActions.loadAllFailure({ error })))
        );
      })
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addItem),
      switchMap((action) => {
        return this.todoService
          .createTask(action.name, action.statusTask, action.desc)
          .pipe(
            mergeMap((newTask) => [
              fromActions.addItemSuccess({ item: newTask }),
            ]),
            catchError((error) => of(fromActions.addItemFailure({ error })))
          );
      })
    )
  );

  updateeTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.updateItem),
      mergeMap(() => [fromActions.updateItemSuccess()]),
      catchError((error) => of(fromActions.updateItemFailure({ error })))
    )
  );

  removeTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.removeItem),
      mergeMap(() => [fromActions.removeItemSuccess()]),
      catchError((error) => of(fromActions.removeItemFailure({ error })))
    )
  );
}
