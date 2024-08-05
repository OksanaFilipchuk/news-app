import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NewsListComponent } from './news/components/news-list/news-list.component';
import { NewsDetailComponent } from './news/components/news-detail/news-detail.component';
import { NewsModule } from './news/news.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { NewsEffects } from './store/effects/news.effects';
import { environment } from 'src/environment/environment';
import { NewsDataResolver } from './news/resolvers/news-data.resolver';
import { NewsService } from './news/services/news.service';

const routesConfig: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsListComponent },
  {
    path: 'news/:id',
    component: NewsDetailComponent,
    resolve: { newsData: NewsDataResolver },
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NewsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([NewsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
