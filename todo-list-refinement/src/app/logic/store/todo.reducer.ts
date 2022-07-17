import { ToDoItem } from 'src/app/models/todo-item.model';
import { createReducer, on } from '@ngrx/store';
import * as fromActions from './todo.actions';

export interface TodoListStore {
  items: ToDoItem[];
  loading: boolean;
  error: string;
}

export const initialTodoListStore: TodoListStore = {
  items: [],
  loading: false,
  error: '',
};

export const coreStoreFeatureKey = 'todoListStore';

export const reducer = createReducer(
  initialTodoListStore,
  on(fromActions.loadAll, (state) => ({
    ...state,
    loading: true,
    error: '',
  })),

  on(fromActions.loadAllSuccess, (state, { items }) => ({
    ...state,
    items: items,
    loading: false,
    error: '',
  })),

  on(fromActions.loadAllFailure, (state, { error }) => ({
    ...state,
    items: [],
    loading: false,
    error: error,
  })),

  on(fromActions.addItem, (state) => ({
    ...state,
    loading: false,
    error: '',
  })),

  on(fromActions.addItemSuccess, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
    loading: false,
    error: '',
  })),

  on(fromActions.addItemFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),

  on(fromActions.updateItem, (state) => ({
    ...state,
    loading: true,
    error: '',
  })),

  on(fromActions.updateItemSuccess, (state) => ({
    ...state,
    loading: false,
    error: '',
  })),

  on(fromActions.updateItemFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(fromActions.removeItem, (state) => ({
    ...state,
    loading: true,
    error: '',
  })),

  on(fromActions.removeItemSuccess, (state) => ({
    ...state,
    loading: false,
    error: '',
  })),

  on(fromActions.removeItemFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);
