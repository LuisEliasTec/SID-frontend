import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MAIN_ROUTES } from './main.routes';

@NgModule({
  imports: [RouterModule.forRoot(MAIN_ROUTES)],
  exports: [RouterModule]
})
export class MainRoutesModule {}
