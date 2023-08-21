import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {ISendSms} from "./models/sendSms.interface";
import {ISignIn} from "./enter-code/models/sign-in.interface";
import {IResponse} from "../../shared/model/response.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isAuthenticated = new BehaviorSubject<boolean>(!!localStorage.getItem("userData"));

  isUserLogin: boolean = false;
  constructor(private Http: HttpClient) { }

  sendSms(data: {mobile_phone: string}): Observable<IResponse<ISendSms>>{
    return this.Http.post<IResponse<ISendSms>>(environment.baseUrl + 'auth/sendSms', data)
  }

  signIn(data: {mobile_phone: string, token: string, code: number}): Observable<IResponse<ISignIn>>{
    return this.Http.post<IResponse<ISignIn>>(environment.baseUrl + 'auth/signIn',data)
  }

}
