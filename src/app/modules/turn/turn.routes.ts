import { Routes } from '@angular/router';
import { TurnComponent } from './turn.component';

export const TURN_COMPONENT_ROUTES: Routes = [
  {
    path: '',
    component: TurnComponent,
    children: [
      {
        path: 'nuevo-turno',
        loadChildren: () => import('./actions/create-turn/create-turn-entry-dialog.module').then(m => m.CreateTurnEntryDialogModule),
      },
      {
        path: 'actualizar',
        loadChildren: () => import('./actions/update-turn/update-turn.module').then(m => m.UpdateTurnModule),
      }
    ]
  }
];
