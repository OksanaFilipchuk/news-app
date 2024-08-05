import { NewsService } from '../services/news.service';
import { NewsItemData } from '../models/news.interface';
import { Observable, filter, take } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

import { inject } from '@angular/core';

export const NewsDataResolver: ResolveFn<NewsItemData> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  newsService: NewsService = inject(NewsService)
): Observable<NewsItemData> => {
  return newsService.getSingleArticle(route.paramMap.get('id')!).pipe(take(1));
};
