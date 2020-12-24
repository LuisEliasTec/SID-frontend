import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-header',
  templateUrl: './dialog-header.component.html',
  styleUrls: ['./dialog-header.component.scss'],
})
export class DialogHeaderComponent {
  @Input() title = 'Title not set';
  @Input() subtitle = 'Subtitle not set';
  @Output() closeDialogEvent = new EventEmitter();

  public closeDialog(event: any): void {
    this.closeDialogEvent.emit('CLOSED');
  }
}
