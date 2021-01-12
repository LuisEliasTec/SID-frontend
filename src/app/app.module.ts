import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsModule } from './auth/permissions-service/permissions.module';
import { LoginGuard } from './auth/guards/login.guard';

const ROUTES: Routes = [
  {
    path: 'sys',
    component: AppComponent,
    children: [
      {
        path: 'modulo',
        loadChildren: () =>
          import('./modules/modules.module').then((m) => m.ModulesModule),
      },
      {
        path: 'login',
        canActivate: [LoginGuard],
        loadChildren: () =>
          import('./auth/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: '**',
        loadChildren: () =>
          import('./modules/notfound/notfound.module').then(
            (m) => m.NotFoundModule
          ),
      },
    ],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/notfound/notfound.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  providers: [LoginGuard],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    PermissionsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
