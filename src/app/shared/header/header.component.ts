import {Component} from '@angular/core';
import {LocalStorageService} from "../local-storage.service";
import {Router} from "@angular/router";
import {ModalProfileService} from "../../modal-profile.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showProfileModal = false;
  showProductDropdown = false;
  dropdownRotate = false;

  constructor(private localStorage: LocalStorageService,
              private router: Router,
              private modalProfileService: ModalProfileService) {
  }

  onShowProductDropdown() {
    this.showProductDropdown = !this.showProductDropdown;
    this.dropdownRotate = !this.dropdownRotate;
  }

  onMouseEnter(){
    this.showProfileModal = true;
    this.modalProfileService.openModal();
  }

  // openModal() {
  //   this.modalProfileService.openModal();
  // }
  // onMouseLeave(){
  //   this.showProfileModal = false;
  // }

  onClickProfile(){
    if(localStorage.getItem("userData")){
      this.router.navigate(["/","dashboard", "profile"])
    } else{
      this.router.navigate(["/","sign-in"])
    }
  }

}
