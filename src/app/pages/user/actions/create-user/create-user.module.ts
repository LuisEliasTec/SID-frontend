import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextstringDatatype } from 'src/app/components/fields/textstring/textstring.datatype';
import { TextstringModule } from 'src/app/components/fields/textstring/textstring.module';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { CreateUserComponent } from './create-user.component';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    TextstringModule,
    FormsModule,
    ReactiveFormsModule,
    RestApiModule,
  ],
  exports: [CreateUserComponent],
})
export class CreateUserModule {}
