import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { RolesSelectComponent } from './roles-select.component';

@NgModule({
  declarations: [RolesSelectComponent],
  imports: [NgSelectModule, CommonModule, RestApiModule, FormsModule],
  exports: [RolesSelectComponent],
})
export class RolesSelectModule {}
