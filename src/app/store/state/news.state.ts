import { NewsResponse } from 'src/app/news/models/news.interface';

export const initialNewsByTitleState: NewsResponse = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};
