import { NgModule } from '@angular/core';
import { SiteNavbarComponent } from './site-navbar.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SiteNavbarComponent],
  imports: [
    MatBadgeModule,
    MatIconModule,
  ],
  exports: [SiteNavbarComponent],
})
export class SiteNavbarModule { }
