import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from './todo.reducer';

export const selectTodoState = createFeatureSelector<fromApp.TodoListStore>(
  fromApp.coreStoreFeatureKey
);
export const getItems = createSelector(selectTodoState, (state) => state.items);
export const getItemsLoading = createSelector(
  selectTodoState,
  (state) => state.loading
);
export const getItemsError = createSelector(
  selectTodoState,
  (state) => state.error
);
