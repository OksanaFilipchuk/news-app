import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NewsListComponent } from './news/components/news-list/news-list.component';
import { NewsDetailComponent } from './news/components/news-detail/news-detail.component';
import { NewsModule } from './news/news.module';

const routesConfig: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsListComponent },
  { path: 'news/:id', component: NewsDetailComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NewsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
