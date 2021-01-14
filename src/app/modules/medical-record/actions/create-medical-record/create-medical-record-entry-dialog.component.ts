import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateMedicalRecordComponent } from './create-medical-record.component';

@Component({
  template: '',
})
export class CreateMedicalRecordEntryDialogComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateMedicalRecordComponent, {
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
