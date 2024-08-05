import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { NewsDataResolver } from './news-data.resolver';
import { NewsItemData } from '../models/news.interface';

describe('newsDataResolver', () => {
  const executeResolver: ResolveFn<NewsItemData> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      NewsDataResolver(...resolverParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
