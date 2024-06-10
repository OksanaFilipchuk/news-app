import { NewsResponce } from 'src/app/news/models/news.interface';

export const initialNewsByTitleState: NewsResponce = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

export const initialNewsByDescriptionState: NewsResponce = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};
