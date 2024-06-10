import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailComponent } from './news-detail.component';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { of } from 'rxjs';
describe('NewsDetailComponent', () => {
  let component: NewsDetailComponent;
  let fixture: ComponentFixture<NewsDetailComponent>;
  const activatedRouteMock = {
    snapshot: {
      params: {
        id: 2,
      },
    },
  };
  const newsServiceMock = jasmine.createSpyObj('NewsService', [
    'getSingleArticle',
    'getArticles',
  ]);
  newsServiceMock.getSingleArticle = () => of();
  newsServiceMock.getArticles = () => of();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: NewsService, useValue: newsServiceMock },
      ],
    });
    fixture = TestBed.createComponent(NewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
