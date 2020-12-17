import { NgModule } from '@angular/core';
import { ListUsersComponent } from './list-users.component';
import { MatTableModule } from '@angular/material/table';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';

@NgModule({
  declarations: [ListUsersComponent],
  exports: [ListUsersComponent],
  imports: [MatTableModule, RestApiModule],
  providers: []
})
export class ListUsersModule {}
