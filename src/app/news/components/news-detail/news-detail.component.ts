import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { NewsItemData } from '../../models/news.interface';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {
  newsId: number;
  article: NewsItemData;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.newsId = this.route.snapshot.params['id'];
    this.newsService.getSingleArticle(this.newsId).subscribe((data) => {
      this.article = data;
    });
  }
}
