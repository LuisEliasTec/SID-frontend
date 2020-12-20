import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DialogDataExchangeModule } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.module';
import { DialogDataExchange } from 'src/app/providers/dialog-data-exchange/dialog-data-exchange.service';
import { ListUsersModule } from './actions/list-users/list-users.module';
import { UserComponent } from './user.component';
import { USER_COMPONENT_ROUTES } from './user.routes';

@NgModule({
  declarations: [UserComponent],
  imports: [
    RouterModule.forChild(USER_COMPONENT_ROUTES),
    ListUsersModule,
    DialogDataExchangeModule.forRoot(new DialogDataExchange()),
    MatIconModule,
  ],
  providers: [],
  exports: [RouterModule],
})
export class UserModule {}
