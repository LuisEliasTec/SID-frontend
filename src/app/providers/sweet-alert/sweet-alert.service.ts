import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable()
export class SweetAlertService {
  showAlert(): Promise<SweetAlertResult> {
    return Swal.fire({
      title: '¿Estás seguro?',
      text: 'El registro será eliminado',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    });
  }
}
