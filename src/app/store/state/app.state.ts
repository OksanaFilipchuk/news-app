import { NewsItemData, NewsResponce } from 'src/app/news/models/news.interfase';
import {
  initialNewsByDescriptionState,
  initialNewsByTitleState,
} from './news.state';

export interface AppState {
  newsByTitle: NewsState;
  newsByDescription: NewsState;
}

export const initialAppState: AppState = {
  newsByTitle: initialNewsByTitleState,
  newsByDescription: initialNewsByDescriptionState,
};

export interface NewsState extends NewsResponce {
  error?: string | null;
}
