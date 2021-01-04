import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { ListEmployeesComponent } from './list-employees.component';
import { FormatDatePipeModule } from 'src/app/pipes/format-date-pipe.module';
import { SearchSectionModule } from 'src/app/components/shared/search-section/search-section.module';
import { UserStatusPipeModule } from 'src/app/pipes/user-status-pipe.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ListEmployeesComponent],
  exports: [ListEmployeesComponent],
  imports: [
    MatTableModule,
    RestApiModule,
    FormatDatePipeModule,
    SearchSectionModule,
    UserStatusPipeModule,
    CommonModule
  ],
  providers: []
})
export class ListEmployeesModule { }
