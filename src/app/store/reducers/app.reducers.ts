import { ActionReducerMap } from '@ngrx/store';
import { newsByTitleReducer } from './news.redusers';
import { AppState } from '../state/app.state';

export const appReducers: ActionReducerMap<AppState> = {
  newsByTitle: newsByTitleReducer,
};
