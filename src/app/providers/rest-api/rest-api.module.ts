import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SessionService } from '../session/session.service';
import { RestApiService } from './rest-api.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [RestApiService, SessionService],
  exports: [HttpClientModule],
})
export class RestApiModule {}
