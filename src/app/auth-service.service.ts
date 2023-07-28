import {Injectable, OnInit} from '@angular/core';
import {LocalStorageService} from "./shared/local-storage.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService{

  // isAuth: boolean;
  // signInUser = true
  constructor(private localStorageData: LocalStorageService,
              private authService: AuthServiceService,
              private router: Router) { }

  getData(): any {
    return this.localStorageData.getData('userData')
  }

  // checkAuth(): any {
  //   if(this.authService.getData()!==""){
  //     this.router.navigate(["/","dashboard", "profile"]);
  //     this.signInUser = true;
  //   } else {
  //     this.router.navigate(["/","sign-in"]);
  //     this.signInUser = false;
  //   }
  // }
}
