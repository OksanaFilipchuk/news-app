import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { ShareModule } from '../share/share.module';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

@NgModule({
  declarations: [NewsListComponent, NewsItemComponent, NewsDetailComponent],
  imports: [CommonModule, ShareModule],
  providers: [DatePipe],
})
export class NewsModule {}
