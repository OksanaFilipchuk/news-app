import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemComponent } from './news-item.component';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { NewsService } from '../../services/news.service';

@Pipe({ name: 'truncate' })
class TruncatePipeMock implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}

describe('NewsItemComponent', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<NewsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewsItemComponent,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        TruncatePipeMock,
      ],
    });
    fixture = TestBed.createComponent(NewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
