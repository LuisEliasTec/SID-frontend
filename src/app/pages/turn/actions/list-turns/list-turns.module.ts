import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { ListTurnsComponent } from './list-turns.component';
import { FormatDatePipeModule } from 'src/app/pipes/format-date-pipe.module';
import { SearchSectionModule } from 'src/app/components/shared/search-section/search-section.module';
import { TranslationUserStatusPipeModule } from 'src/app/pipes/translation-user-status-pipe.module';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormatTimePipeModule } from 'src/app/pipes/format-time-pipe.module';

@NgModule({
  declarations: [ListTurnsComponent],
  exports: [ListTurnsComponent],
  imports: [
    MatTableModule,
    RestApiModule,
    FormatDatePipeModule,
    SearchSectionModule,
    TranslationUserStatusPipeModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FormatTimePipeModule
  ],
  providers: []
})
export class ListTurnsModule { }
