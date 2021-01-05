import { NgModule } from '@angular/core';
import { ListUsersComponent } from './list-users.component';
import { MatTableModule } from '@angular/material/table';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { UserStatusPipeModule } from 'src/app/pipes/user-status-pipe.module';
import { SweetAlertModule } from 'src/app/providers/sweet-alert/sweet-alert.module';

@NgModule({
  declarations: [ListUsersComponent],
  exports: [ListUsersComponent],
  imports: [
    MatTableModule,
    RestApiModule,
    MatPaginatorModule,
    CommonModule,
    UserStatusPipeModule,
    SweetAlertModule,
  ],
  providers: []
})
export class ListUsersModule {}
