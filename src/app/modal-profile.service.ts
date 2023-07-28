import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalProfileService {

  openModalEvent: EventEmitter<any> = new EventEmitter<any>();

  openModal() {
    this.openModalEvent.emit();
  }
}
