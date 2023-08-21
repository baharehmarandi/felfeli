import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ModalProfileService} from "../../modal-profile.service";
import {AuthService} from "../../pages/sign-in/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showProfileModal = false;
  showProductDropdown = false;
  dropdownRotate = false;
  showProfileDropdown = false;

  isAuthenticated = false;

  constructor(private router: Router,
              private modalProfileService: ModalProfileService,
              private authService: AuthService) {
  }

  ngOnInit() {
  this.authService.isAuthenticated.subscribe(value => {
    this.isAuthenticated = value;
  })
  }

  onShowProductDropdown() {
    this.showProductDropdown = !this.showProductDropdown;
    this.dropdownRotate = !this.dropdownRotate;
  }

  onMouseEnter(){
    this.showProfileModal = true;
    this.modalProfileService.openModal();
  }

  onClickProfile(){
    if(localStorage.getItem("userData")){
      this.router.navigate(["/","dashboard", "profile"])
    } else{
      this.router.navigate(["/","sign-in"])
    }
  }

}
