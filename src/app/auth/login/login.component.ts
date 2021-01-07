import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginResponse } from 'src/app/ models/login-response.interface';
import { RestApiService } from 'src/app/providers/rest-api/rest-api.service';
import { SessionService } from 'src/app/providers/session/session.service';
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
    private sessionService: SessionService,
    private toastService: ToastService,
    private router: Router,
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
        this.sessionService.saveToken(res.accessToken);
        this.router.navigate(['sys', 'modulo', 'citas']);
      } else {
        this.toastService.showSuccess('Error', 'Datos incorrectos');
      }
    });
  }
}
