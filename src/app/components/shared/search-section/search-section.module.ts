import { NgModule } from '@angular/core';
import { RestApiModule } from 'src/app/providers/rest-api/rest-api.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { SearchSectionComponent } from './search-section.component';

@NgModule({
    declarations: [SearchSectionComponent],
    exports: [SearchSectionComponent],
    imports: [
      RestApiModule,
      MatInputModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatIconModule,
      MatSelectModule,
      CommonModule,    ],
    providers: []
  })
  export class SearchSectionModule { }
  