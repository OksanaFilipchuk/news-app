import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsItemData, NewsResponce } from '../models/news.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  url = 'https://api.spaceflightnewsapi.net/v4';

  constructor(private http: HttpClient) {}

  getArticles(
    limit: number,
    searchQuery: string,
    parameter: string
  ): Observable<NewsResponce> {
    let params = new HttpParams().set(parameter, searchQuery);
    return this.http.get<NewsResponce>(`${this.url}/articles/?limit=${limit}`, {
      params: params,
    });
  }

  getSingleArticle(id: number): Observable<NewsItemData> {
    return this.http.get<NewsItemData>(`${this.url}/articles/${id}`, {});
  }
}
