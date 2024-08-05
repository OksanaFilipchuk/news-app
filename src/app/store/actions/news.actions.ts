import { createAction, props } from '@ngrx/store';
import { NewsResponse } from 'src/app/news/models/news.interface';

export const LoadNewsByTitle = createAction(
  '[News] Load News By Title',
  props<{ limit: number; offset: number; searchQuery: string }>()
);

export const LoadNewsByTitleSuccess = createAction(
  '[News] Load News By Title Success',
  props<NewsResponse>()
);

export const ReceivedFailure = createAction(
  '[News] ReceivedFailure',
  props<{ error: string | null }>()
);

export const ResetNewsState = createAction('[News] Reset News State');
