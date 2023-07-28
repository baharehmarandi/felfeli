import {Component, EventEmitter, Input, Output, QueryList, ViewChildren} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";
import {ISignIn} from "./models/sign-in.interface";
import {LocalStorageService} from "../../../shared/local-storage.service";
import {Router} from "@angular/router";
import {IResponse} from "../../../shared/model/response.interface";

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.css']
})
export class EnterCodeComponent {
  @Input() token: string = '';
  @Input() phone: string = '';
  @Output() onClearToken = new EventEmitter<string>()
  @ViewChildren("inputNumbers") inputElements: QueryList<any>;

  enterCode = new FormGroup({
   inputs: new FormArray([
     new FormControl<string>(""),
     new FormControl<string>(""),
     new FormControl<string>(""),
     new FormControl<string>(""),
     new FormControl<string>(""),
   ])
  })

constructor(private authService: AuthService,
            private LocalStorageService: LocalStorageService,
            private router: Router) {
}

  onKeyUpPress(i: number){
    this.inputElements.map((item, index) => {
      if(index===i){
        item.nativeElement.focus();
      }
    })
  }

  onSubmitCode(){
    const form: any = this.enterCode.getRawValue();
    const code = form.inputs.reverse().join('');
    const data = {
      mobile_phone : this.phone,
      token : this.token,
      code : code
    }

    this.authService.signIn(data).subscribe((res:IResponse<ISignIn>) => {
      this.LocalStorageService.saveData('userData', res.data);
      console.log(res.data.api_token)
      // this.LocalStorageService.saveData('token', res.data.api_token);
      this.router.navigate([""])
    })
  }

   onClearPhoneInput(){
     this.onClearToken.emit("");
   }

}
