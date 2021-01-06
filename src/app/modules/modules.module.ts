import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteFooterModule } from '../components/layout/site-footer/site-footer.module';
import { SiteNavbarModule } from '../components/layout/site-navbar/site-navbar.module';
import { ToastService } from '../providers/toast-service/toast.service';
import { MODULES_ROUTES } from './modules.routes';
import { ModulesComponent } from './modules.component';
import { PermissionGuard } from '../auth/guards/permission.guard';
import { SessionModule } from '../providers/session/session.module';
import { PermissionsModule } from '../auth/permissions-service/permissions.module';

@NgModule({
  declarations: [ModulesComponent],
  imports: [
    RouterModule.forChild(MODULES_ROUTES),
    SiteNavbarModule,
    SiteFooterModule,
    PermissionsModule,
  ],
  exports: [],
  providers: [ToastService, PermissionGuard],
})
export class ModulesModule {}
