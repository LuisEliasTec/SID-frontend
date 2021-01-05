import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './notfound.component';
import { NOTFOUND_COMPONENT_ROUTES } from './notfound.routes';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [RouterModule.forChild(NOTFOUND_COMPONENT_ROUTES)],
  exports: [RouterModule],
})
export class NotFoundModule {}
