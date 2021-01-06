import { Component } from '@angular/core';
import { SessionService } from 'src/app/providers/session/session.service';

@Component({
  selector: 'app-site-navbar',
  templateUrl: './site-navbar.component.html',
  styleUrls: ['./site-navbar.component.scss'],
})
export class SiteNavbarComponent {
  constructor(private sessionService: SessionService) {}

  public logout(): void {
    this.sessionService.logout();
  }
 }
