import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LOGIN_ROUTES } from './login.routes';

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forChild(LOGIN_ROUTES), MatTabsModule],
  exports: [RouterModule],
})
export class LoginModule {}
