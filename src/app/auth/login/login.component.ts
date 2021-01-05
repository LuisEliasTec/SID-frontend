import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ILoginResponse } from 'src/app/ models/login-response.interface';
import { LocalStorageService } from 'src/app/providers/local-storage/local-storage.service';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { ToastService } from 'src/app/providers/toast-service/toast.service';
import { ValidationTriggerService } from 'src/app/providers/validation-trigger.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public tValidation: ValidationTriggerService,
    private restApiService: RestApiService,
    private localStorageService: LocalStorageService,
    private toastService: ToastService,
  ) {
    this.loginForm = fb.group({
      email: fb.control('', [Validators.required]),
      password: fb.control('', Validators.required),
    });
  }

  public onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.restApiService
      .login('auth/login', this.loginForm.value)
      .subscribe((res: ILoginResponse & HttpErrorResponse) => {
      if (res.accessToken) {
        this.localStorageService.saveJwtToken(res.accessToken);
      } else {
        this.toastService.showSuccess('Error', 'Datos incorrectos');
      }
    });
  }
}
