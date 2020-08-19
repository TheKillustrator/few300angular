import { createReducer, Action, on } from '@ngrx/store';

export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  token?: string;
}

const initialState: AuthState = { isLoggedIn: false };

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: AuthState, action: Action): AuthState {
  return reducerFunction(state, action);
}
