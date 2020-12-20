import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainRoutesModule } from './routes/main-routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteNavbarModule } from './components/layout/site-navbar/site-navbar.module';
import { SiteFooterModule } from './components/layout/site-footer/site-footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MainRoutesModule,
    BrowserAnimationsModule,
    SiteNavbarModule,
    SiteFooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
