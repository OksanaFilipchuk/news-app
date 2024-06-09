import { createReducer, on } from '@ngrx/store';
import {
  initialNewsByDescriptionState,
  initialNewsByTitleState,
} from '../state/news.state';
import {
  LoadNewsByDescriptionSuccess,
  LoadNewsByTitleSuccess,
  ResetNewsState,
} from '../actions/news.actions';

export const newsByTitleReducer = createReducer(
  initialNewsByTitleState,
  on(LoadNewsByTitleSuccess, (state, action) => {
    const prevResults = state.results;
    const newResults = action.results.filter(
      (el) => !prevResults.some((article) => article.id === el.id)
    );
    return {
      ...state,
      next: action.next,
      count: action.count,
      previous: action.previous,
      results: [...prevResults, ...newResults],
    };
  }),

  on(ResetNewsState, (state: any) => {
    return {
      ...state,
      next: null,
      count: null,
      previous: null,
      results: [],
    };
  })
);

export const newsByDescriptionReducer = createReducer(
  initialNewsByDescriptionState,
  on(LoadNewsByDescriptionSuccess, (state, action) => {
    const prevResults = state.results;
    const newResults = action.results.filter(
      (el) => !prevResults.some((article) => article.id === el.id)
    );
    return {
      ...state,
      next: action.next,
      count: action.count,
      previous: action.previous,
      results: [...prevResults, ...newResults],
    };
  }),

  on(ResetNewsState, (state: any) => {
    return {
      ...state,
      next: null,
      count: null,
      previous: null,
      results: [],
    };
  })
);
