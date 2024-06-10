import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListComponent } from './news-list.component';
import { Store } from '@ngrx/store';
import { NewsService } from '../../services/news.service';
import { MatDivider } from '@angular/material/divider';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;

  const storeMock = jasmine.createSpyObj('store', ['select', 'dispatch']);
  storeMock.dispatch = () => of();
  storeMock.select = () => of();
  const newsServiceMock = jasmine.createSpyObj('NewsService', [
    'getSingleArticle',
    'getArticles',
  ]);
  newsServiceMock.getSingleArticle = () => of();
  newsServiceMock.getArticles = () => of();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsListComponent, MatDivider],
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: NewsService, useValue: newsServiceMock },
      ],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
