import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { AppToastModule } from 'src/app/components/shared/app-toast/app-toast.module';
import { LocalStorageModule } from 'src/app/providers/local-storage/local-storage.module';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { LoginComponent } from './login.component';
import { LOGIN_ROUTES } from './login.routes';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(LOGIN_ROUTES),
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RestApiModule,
    LocalStorageModule,
    AppToastModule,
  ],
  exports: [RouterModule],
})
export class LoginModule {}
