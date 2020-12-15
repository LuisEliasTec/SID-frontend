import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LOGIN_ROUTES } from './login.routes';

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forChild(LOGIN_ROUTES)],
  exports: [RouterModule],
})
export class LoginModule {}
