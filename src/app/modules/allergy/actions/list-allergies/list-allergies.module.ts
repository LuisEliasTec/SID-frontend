import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { FormatDatePipeModule } from 'src/app/pipes/format-date-pipe.module';
import { SearchSectionModule } from 'src/app/components/shared/search-section/search-section.module';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormatTimePipeModule } from 'src/app/pipes/format-time-pipe.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListAllergiesComponent } from './list-allergies.component';

@NgModule({
  declarations: [ListAllergiesComponent],
  exports: [ListAllergiesComponent],
  imports: [
    MatTableModule,
    RestApiModule,
    FormatDatePipeModule,
    SearchSectionModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FormatTimePipeModule,
    MatPaginatorModule
  ],
  providers: []
})
export class ListAllergiesModule { }
