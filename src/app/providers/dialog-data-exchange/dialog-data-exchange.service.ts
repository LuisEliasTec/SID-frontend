import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DialogDataExchange {
  private observer: Subject<any> = new Subject<any>();

  sendValue(data: any): void {
    this.observer.next(data);
  }

  getMessage(): Observable<any> {
    return this.observer.asObservable();
  }
}
