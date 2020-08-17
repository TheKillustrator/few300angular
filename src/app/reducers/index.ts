import { ActionReducerMap } from '@ngrx/store/';
import * as fromProjects from './projects.reducer';

export interface AppState {
  projects: fromProjects.ProjectState;
}

export const reducers: ActionReducerMap<AppState> = {
  projects: fromProjects.reducer
};
