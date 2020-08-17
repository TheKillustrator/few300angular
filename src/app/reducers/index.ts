import { ActionReducerMap, createSelector } from '@ngrx/store/';
import * as fromProjects from './projects.reducer';
import * as fromTodos from './todos.reducer';
import * as fromModels from '../models';

export interface AppState {
  projects: fromProjects.ProjectState;
  todos: fromTodos.TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  projects: fromProjects.reducer,
  todos: fromTodos.reducer
};

// Selectors
// One per "branch" of the state.
const selectProjectBranch = (state: AppState) => state.projects;
const selectTodosBranch = (state: AppState) => state.todos;

// Helpers
const { selectAll: selectAllTodos } = fromTodos.adapter.getSelectors(selectTodosBranch);

// Selectors for Components
export const selectAllTodoList = createSelector(
  selectAllTodos,
  (todos) => todos as fromModels.TodoItem[]
);
