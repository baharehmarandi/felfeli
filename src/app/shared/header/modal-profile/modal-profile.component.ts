import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {LocalStorageService} from "../../local-storage.service";
import {ModalProfileService} from "../../../modal-profile.service";

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent {

  showModal = false;
  constructor(private localStorage: LocalStorageService,
              private modalProfileService: ModalProfileService) {
    this.modalProfileService.openModalEvent.subscribe(() => {
      this.showModal = true;
    })
  }

  userData = this.localStorage.getData("userData").user;


  @HostListener('document:click', ['$event'])

  onClickOutside(event: MouseEvent) {
    const modalElement = document.querySelector('.modal-profile-box');

    if (modalElement && !modalElement.contains(event.target as Node)) {
      this.showModal = false;
    }
  }
}
