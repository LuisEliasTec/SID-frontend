import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DialogDataExchangeModule } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.module';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
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
    CommonModule,
    RestApiModule,
    DialogDataExchangeModule.forRoot(new DialogDataExchange()),
  ],
  exports: [RouterModule],
})
export class RoleModule {}
