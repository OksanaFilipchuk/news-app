import { Component, Input } from '@angular/core';
import { NewsItemData } from '../../models/news.interface';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent {
  @Input() newsItem: NewsItemData;
  @Input() searchQuery: string;
  descriptionLimit = 100;
}
