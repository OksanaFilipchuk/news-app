import { ActionReducerMap } from '@ngrx/store';
import { newsByDescriptionReducer, newsByTitleReducer } from './news.redusers';
import { AppState } from '../state/app.state';

export const appReducers: ActionReducerMap<AppState> = {
  newsByTitle: newsByTitleReducer,
  newsByDescription: newsByDescriptionReducer,
};
