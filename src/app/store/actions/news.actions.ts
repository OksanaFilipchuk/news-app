import { createAction, props } from '@ngrx/store';
import { NewsResponce } from 'src/app/news/models/news.interfase';

export const LoadNewsByTitle = createAction(
  '[News] Load News By Title',
  props<{ limit: number; searchQuery: string }>()
);
export const LoadNewsByDescription = createAction(
  '[News] Load News By Description',
  props<{ limit: number; searchQuery: string }>()
);

export const LoadNewsByTitleSuccess = createAction(
  '[News] Load News By Title Success',
  props<NewsResponce>()
);

export const LoadNewsByDescriptionSuccess = createAction(
  '[News] Load News By Description Success',
  props<NewsResponce>()
);

export const ReceivedFailure = createAction(
  '[News] ReceivedFailure',
  props<{ error: string | null }>()
);

export const ResetNewsState = createAction('[News] Reset News State');