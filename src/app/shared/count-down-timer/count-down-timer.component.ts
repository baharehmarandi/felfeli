import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../pages/sign-in/auth.service";
import {ISendSms} from "../../pages/sign-in/models/sendSms.interface";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {ToastServiceService} from "../toast-service.service";
import {IResponse} from "../model/response.interface";

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit{
  @Output() onSendCodeAgainLink = new EventEmitter<boolean>();
  @Input() phoneNumber : string = '';
  @Output() token = new EventEmitter<string>();
  timerValue: number = 120;
  sendCodeLink: boolean = false;
  config = new MatSnackBarConfig();

  constructor(private authService: AuthService,
              private toastService: ToastServiceService) {
  }

  countDownTimer ()  {
    this.timerValue = 120;
    const interval = setInterval(() => {
      if (this.timerValue > 0) {
        this.timerValue -= 1;
      } else {
        this.sendCodeLink = true;
        clearInterval(interval);
      }
    }, 1000);

  }

  secondsToDateTime(seconds: number){
    return new Date(1970, 0, 1).setSeconds(seconds);
  }

  onSendCodeAgainBtn(){
    this.countDownTimer();
    const data = {
      mobile_phone: this.phoneNumber
    }
     this.authService.sendSms(data).subscribe((res: IResponse<ISendSms>) =>{
       this.token.emit(res.data.token);
     })
    this.toastService.showSuccess("کد برای شما ارسال شد")
  }

  ngOnInit() {
    this.countDownTimer();
  }
}
