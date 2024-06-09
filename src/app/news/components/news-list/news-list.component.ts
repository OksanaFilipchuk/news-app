import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, debounceTime, switchMap, take, takeUntil } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { NewsItemData, NewsResponce } from '../../models/news.interfase';
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
  newsByTitle: NewsState;
  newsByDescription: NewsState;
  newsList: NewsItemData[] = [];
  initialValue = 'Ukraine';
  currentPage: number;
  itemsPerPage: 10;

  newsByTitleStore$ = this.store.select(
    (state: any): NewsState => state.newsByTitle
  );
  newsByDescriptionStore$ = this.store.select(
    (state: any): NewsState => state.newsByDescription
  );

  constructor(private store: Store) {}

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

    this.onSearchChange(this.initialValue);

    this.newsByTitleStore$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((news: NewsState) => {
        this.newsByTitle = news;
        this.newsList = news.results;
      });

    this.newsByDescriptionStore$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((news) => {
        this.newsByDescription = news;
      });
  }

  onSearchChange(value: string) {
    this.store.dispatch(LoadNewsByTitle({ limit: 10, searchQuery: value }));
    this.store.dispatch(
      LoadNewsByDescription({ limit: 10, searchQuery: value })
    );
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
