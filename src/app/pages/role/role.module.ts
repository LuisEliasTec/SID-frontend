import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PermissionListModule } from './actions/permission-list/permission-list.module';
import { RoleListModule } from './actions/role-list/role-list.module';
import { RoleComponent } from './role.component';
import { ROLE_ROUTES } from './role.routes';

@NgModule({
  declarations: [RoleComponent],
  imports: [
    RouterModule.forChild(ROLE_ROUTES),
    MatIconModule,
    RoleListModule,
    PermissionListModule,
  ],
  exports: [RouterModule],
})
export class RoleModule {}
