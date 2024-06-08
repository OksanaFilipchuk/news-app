import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [TruncatePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    NgxPaginationModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    NgxPaginationModule,
    TruncatePipe,
  ],
})
export class ShareModule {}
