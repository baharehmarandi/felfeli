import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {ISendSms} from "../models/sendSms.interface";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {ToastServiceService} from "../../../shared/toast-service.service";
import {IResponse} from "../../../shared/model/response.interface";

@Component({
  selector: 'app-enter-phone',
  templateUrl: './enter-phone.component.html',
  styleUrls: ['./enter-phone.component.css']
})
export class EnterPhoneComponent {
  @Output() onTokenSet = new EventEmitter<string>();
  @Output() onPhoneSet = new EventEmitter<string>();

  addPhoneForm = new FormGroup({
    mobile_phone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^\d{11}$/)]
    })
  })

  constructor(private getToken: AuthService) {}


  onSubmitPhoneNumber(){
    if (this.addPhoneForm.controls.mobile_phone.valid){
      const data = this.addPhoneForm.getRawValue();
      this.getToken.sendSms(data).subscribe((res: IResponse<ISendSms>) =>{
        this.onTokenSet.emit(res.data.token);
        this.onPhoneSet.emit(this.addPhoneForm.controls.mobile_phone.value)
      })
      // this.onTokenSet.emit('1111');
      // this.onPhoneSet.emit(this.addPhoneForm.controls.mobile_phone.value)
    }
  }
}
