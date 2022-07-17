import { createAction, props } from '@ngrx/store';
import { ToDoItem } from 'src/app/models/todo-item.model';

export const loadAll = createAction('[Todo List] Load All');

export const loadAllSuccess = createAction(
  '[Todo List] Load All Success',
  props<{ items: ToDoItem[] }>()
);

export const loadAllFailure = createAction(
  '[Todo List] Load All Failure',
  props<{ error: string }>()
);

export const addItem = createAction(
  '[Todo List] Add item',
  props<{ name: string, statusTask: string, desc?: string,  }>()
);

export const addItemSuccess = createAction(
  '[Todo List] Add item Success',
  props<{ item: ToDoItem }>()
);

export const addItemFailure = createAction(
  '[Todo List] Add item Failure',
  props<{ error: string }>()
);

export const updateItem = createAction(
  '[Todo List] Update',
  props<{ item: ToDoItem }>()
);

export const updateItemSuccess = createAction('[Todo List] Update Success');

export const updateItemFailure = createAction(
  '[Todo List] Update Failure',
  props<{ error: string }>()
);

export const removeItem = createAction(
  '[Todo List] Remove',
  props<{ id: string }>()
);

export const removeItemSuccess = createAction('[Todo List] Remove Success');

export const removeItemFailure = createAction(
  '[Todo List] Remove Failure',
  props<{ error: string }>()
);
