import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, debounceTime, switchMap, take, takeUntil } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { NewsItemData } from '../../models/news.interfase';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject();
  searchControl = new FormControl('');
  news: NewsItemData[] = [];
  initialValue = 'last news';
  page: number;
  itemsPerPage: 6;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(500), takeUntil(this.onDestroy$))
      .subscribe((value) => {
        if (value) {
          this.onSearchChange(value);
        }
      });

    this.onSearchChange(this.initialValue);
  }

  onSearchChange(value: string) {
    this.newsService
      .getArticlesByKeyWord(10, 'title_contains', value)
      .subscribe((data) => {
        this.news = data.results;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
