import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsItemData, NewsResponse } from '../models/news.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  url = 'https://api.spaceflightnewsapi.net/v4';

  constructor(private http: HttpClient) {}

  getArticles(
    limit: number,
    offset: number,
    searchQuery: string,
    parameter: string
  ): Observable<NewsResponse> {
    let params = { [parameter]: searchQuery, offset: offset, limit: limit };
    return this.http.get<NewsResponse>(`${this.url}/articles/?`, {
      params: params,
    });
  }

  getSingleArticle(id: number): Observable<NewsItemData> {
    return this.http.get<NewsItemData>(`${this.url}/articles/${id}`, {});
  }
}
