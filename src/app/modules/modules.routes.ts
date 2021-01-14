import { Routes } from '@angular/router';
import { PermissionGuard } from '../auth/guards/permission.guard';
import { Permissions } from '../auth/permissions/permissions.enum';
import { ModulesComponent } from './modules.component';

export const MODULES_ROUTES: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: 'alergias',
        loadChildren: () => import('./allergy/allergy.module')
          .then(m => m.AllergyModule),
      },
      {
        path: 'cirugias',
        loadChildren: () => import('./surgery/surgery.module')
          .then(m => m.SurgeryModule),
      },
      {
        canActivate: [PermissionGuard],
        data: {
          permissions: [Permissions.READ_APPOINTMENT, Permissions.SUPER_USER],
        },
        path: 'citas',
        loadChildren: () =>
          import('./appointment/appointment.module').then(
            (m) => m.AppointmentModule
          ),
      },
      {
        path: 'empleados',
        canActivate: [PermissionGuard],
        data: {
          permissions: [Permissions.READ_EMPLOYEE],
        },
        loadChildren: () => import('./employee/employee.module')
          .then(m => m.EmployeeModule),
      },
      {
        path: 'expedientes-clinicos',
        loadChildren: () => import('./medical-record/medical-record.module')
          .then(m => m.MedicalRecordModule),
      },
      {
        path: 'medicamentos',
        loadChildren: () => import('./medicine/medicine.module')
          .then(m => m.MedicineModule),
      },
      {
        path: 'padecimientos',
        loadChildren: () => import('./disease/disease.module')
          .then(m => m.DiseaseModule),
      },
      {
        path: 'puestos-laborales',
        loadChildren: () => import('./job-title/job-title.module')
          .then(m => m.JobTitleModule),
      },
      {
        path: 'turnos',
        loadChildren: () => import('./turn/turn.module')
          .then(m => m.TurnModule),
      },
      {
        path: 'usuarios',
        canActivate: [PermissionGuard],
        data: {
          permissions: [Permissions.READ_USER, Permissions.SUPER_USER],
        },
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
      {
        canActivate: [PermissionGuard],
        data: {
          permissions: [Permissions.READ_ROLE, Permissions.SUPER_USER],
        },
        path: 'usuarios/roles',
        loadChildren: () =>
          import('./role/role.module').then((m) => m.RoleModule),
      },
      {
        path: 'vacunas',
        loadChildren: () => import('./vaccine/vaccine.module')
          .then(m => m.VaccineModule),
      },
      {
        path: '**',
        loadChildren: () =>
          import('./notfound/notfound.module').then((m) => m.NotFoundModule),
      },
    ],
  },
];
