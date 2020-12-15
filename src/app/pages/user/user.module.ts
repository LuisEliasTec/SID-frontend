import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateUserModule } from './actions/create-user/create-user.module';
import { UserComponent } from './user.component';
import { USER_COMPONENT_ROUTES } from './user.routes';

@NgModule({
  declarations: [UserComponent],
  imports: [
    RouterModule.forChild(USER_COMPONENT_ROUTES),
    CreateUserModule,
  ],
  exports: [RouterModule],
})
export class UserModule {}
