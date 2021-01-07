import { NgModule } from '@angular/core';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { PermissionService } from './permission.service';

@NgModule({
  imports: [RestApiModule],
  providers: [PermissionService],
})
export class PermissionsModule {}
