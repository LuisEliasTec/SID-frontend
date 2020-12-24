import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-search-section',
    templateUrl: './search-section.component.html',
    styleUrls: ['./search-section.component.scss'],
})
export class SearchSectionComponent {
    // Search and filter section
    searchFormControl = new FormControl('');
    filterOptions = new FormControl();
    filterOptionsList: string[] = ['Nombre', 'Fecha de nacimiento', 'Teléfono', 'Teléfono opcional', 'Correo electrónico', 'Estatus'];

    constructor() {}
}
