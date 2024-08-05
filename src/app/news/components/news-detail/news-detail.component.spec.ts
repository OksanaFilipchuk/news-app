import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailComponent } from './news-detail.component';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { of } from 'rxjs';
describe('NewsDetailComponent', () => {
  let component: NewsDetailComponent;
  let fixture: ComponentFixture<NewsDetailComponent>;
  const activatedRouteMock = {
    data: of(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsDetailComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    });
    fixture = TestBed.createComponent(NewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
