import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsItemsResponce } from '../models/news.interfase';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  url = 'https://api.spaceflightnewsapi.net/v4';

  constructor(private http: HttpClient) {}

  getArticlesByKeyWord(
    limit: number,
    param: string,
    searchQuery?: string
  ): Observable<NewsItemsResponce> {
    return this.http.get<NewsItemsResponce>(
      `${this.url}/articles/?limit=${limit}&${param}=${searchQuery}`
    );
  }
}
