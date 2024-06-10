import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { TruncatePipe } from './pipes/truncate.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { HighlightSearchMatchDirective } from './directive/highlight-search-match.directive';

@NgModule({
  declarations: [TruncatePipe, HighlightSearchMatchDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    NgxPaginationModule,
    MatDividerModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    NgxPaginationModule,
    TruncatePipe,
    MatDividerModule,
    HighlightSearchMatchDirective,
  ],
})
export class ShareModule {}
