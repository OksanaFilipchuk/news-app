import { NewsResponce } from 'src/app/news/models/news.interface';
import { initialNewsByTitleState } from './news.state';

export interface AppState {
  newsByTitle: NewsState;
}

export const initialAppState: AppState = {
  newsByTitle: initialNewsByTitleState,
};

export interface NewsState extends NewsResponce {
  error?: string | null;
}
