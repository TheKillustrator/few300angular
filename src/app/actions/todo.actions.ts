import { createAction, props } from '@ngrx/store';
import { TodoEntryComponent } from '../components/todo-entry/todo-entry.component';
import { TodoEntity } from '../reducers/todos.reducer';

export const todoItemSorted = createAction(
  '[todo] todo item sorted',
  props<{ id: string, previousIndex: number, currentIndex: number }>()
);

let tempId = 0;
export const todoAdded = createAction(
  '[todo] todo item added',
  ({ name, project, dueDate }: { name: string, project: string, dueDate: string }) => ({
    payload: {
      id: 'TEMP' + tempId++,
      name,
      project,
      dueDate
    } as TodoEntity
  })
);

export const loadTodos = createAction(
  '[todos] load todos'
);

export const loadTodoSucceeded = createAction(
  '[todos] load todos succeeded',
  props<{ todos: TodoEntity[] }>()
);

export const loadTodosFailed = createAction(
  '[todos] load todos failed',
  props<{ error: string }>()
);
