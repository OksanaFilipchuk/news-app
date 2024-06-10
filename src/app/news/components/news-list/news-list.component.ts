import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { NewsItemData } from '../../models/news.interface';
import { Store } from '@ngrx/store';
import {
  LoadNewsByDescription,
  LoadNewsByTitle,
  ResetNewsState,
} from 'src/app/store/actions/news.actions';
import { NewsState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject();
  searchControl = new FormControl('');
  searchQuery = '';
  resultsAmount: number;
  newsByTitle: NewsState;
  newsByDescription: NewsState;
  newsList: NewsItemData[] = [];
  currentPage: number;
  itemsPerPage = 10;
  offset = 0;

  newsByTitleStore$ = this.store.select(
    (state: any): NewsState => state.newsByTitle
  );
  newsByDescriptionStore$ = this.store.select(
    (state: any): NewsState => state.newsByDescription
  );

  constructor(private store: Store, private newsService: NewsService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(500), takeUntil(this.onDestroy$))
      .subscribe((value) => {
        if (value) {
          this.searchQuery = value;
          this.store.dispatch(ResetNewsState());
          this.onSearchChange(value);
        }
      });

    this.onSearchChange(this.searchQuery);

    this.newsByTitleStore$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((news: NewsState) => {
        this.newsByTitle = news;
        this.newsList = news.results;
        if (this.newsList.length < this.itemsPerPage) {
          this.store.dispatch(
            LoadNewsByDescription({
              limit: this.itemsPerPage,
              offset: this.offset,
              searchQuery: this.searchQuery,
            })
          );
        }
      });

    this.newsByDescriptionStore$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((news) => {
        this.newsByDescription = news;
        if (!this.newsByTitle.next) {
          const filteredArticles = this.newsByDescription.results.filter(
            (el) =>
              !this.newsByTitle.results.some((article) => article.id === el.id)
          );
          this.newsList = [...this.newsByTitle.results, ...filteredArticles];
        }
      });
  }

  onSearchChange(value: string) {
    this.store.dispatch(
      LoadNewsByTitle({
        limit: this.itemsPerPage,
        offset: this.offset,
        searchQuery: value,
      })
    );
    this.newsService
      .getArticles(this.itemsPerPage, 0, value, 'search')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data) => (this.resultsAmount = data.count));
  }

  loadMore() {
    if (this.newsByTitle.next) {
      const urlObj = new URL(this.newsByTitle.next);
      const offset = urlObj.searchParams.get('offset');
      this.store.dispatch(
        LoadNewsByTitle({
          limit: this.itemsPerPage,
          offset: offset ? +offset : 10,
          searchQuery: this.searchQuery,
        })
      );
      return;
    }
    if (this.newsByDescription.results) {
    }
    if (this.newsByDescription.next) {
      const urlObj = new URL(this.newsByDescription.next);
      const offset = urlObj.searchParams.get('offset');
      this.store.dispatch(
        LoadNewsByDescription({
          limit: this.itemsPerPage,
          offset: offset ? +offset : 10,
          searchQuery: this.searchQuery,
        })
      );
      return;
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
