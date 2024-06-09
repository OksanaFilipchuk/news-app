import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NewsService } from 'src/app/news/services/news.service';
import {
  LoadNewsByDescription,
  LoadNewsByDescriptionSuccess,
  LoadNewsByTitle,
  LoadNewsByTitleSuccess,
} from '../actions/news.actions';
import { EMPTY, catchError, map, mergeMap, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { NewsResponce } from 'src/app/news/models/news.interfase';

@Injectable()
export class NewsEffects {
  constructor(private actions: Actions, private newsService: NewsService) {}

  getArticlesByTitleKeyword = createEffect((): any => {
    return this.actions
      .pipe(
        ofType(LoadNewsByTitle),
        mergeMap((actions: { limit: number; searchQuery: string }) =>
          this.newsService.getArticles(
            actions.limit,
            actions.searchQuery,
            'title_contains'
          )
        )
      )
      .pipe(
        map((news: NewsResponce) => LoadNewsByTitleSuccess(news)),
        catchError(() => EMPTY)
      );
  });

  getArticlesByDescriptionKeyword = createEffect((): any => {
    return this.actions
      .pipe(
        ofType(LoadNewsByDescription),
        mergeMap((actions: { limit: number; searchQuery: string }) =>
          this.newsService.getArticles(
            actions.limit,
            actions.searchQuery,
            'summary_contains'
          )
        )
      )
      .pipe(
        map((news: NewsResponce) => LoadNewsByDescriptionSuccess(news)),
        catchError(() => EMPTY)
      );
  });
}
