import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface TodoEntity {
  id: string;
  name: string;
  project?: string;
  dueDate?: string;
  completed: boolean;
}

export interface TodoState extends EntityState<TodoEntity> {

}

export const adapter = createEntityAdapter<TodoEntity>();

// const initialState = adapter.getInitialState();
const initialState: TodoState = {
  ids: ['1', '2', '3'],
  entities: {
    1: { id: '1', name: 'Change light bulbs', project: 'Home', completed: false },
    2: { id: '2', name: 'Clean garage', completed: true },
    3: { id: '3', name: 'Take car to shop', completed: false }
  }
};

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: TodoState = initialState, action: Action): TodoState {
  return reducerFunction(state, action);
}
