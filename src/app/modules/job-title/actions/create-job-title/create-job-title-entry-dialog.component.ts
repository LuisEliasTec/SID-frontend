import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateJobTitleComponent } from './create-job-title.component';

@Component({
  template: '',
})
export class CreateJobTitleEntryDialogComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateJobTitleComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
