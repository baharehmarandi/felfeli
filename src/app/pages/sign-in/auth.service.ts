import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseUrl} from "../../shared/base-url";
import {Observable} from "rxjs";
import {ISendSms} from "./models/sendSms.interface";
import {ISignIn} from "./enter-code/models/sign-in.interface";
import {IResponse} from "../../shared/model/response.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Http: HttpClient) { }

  sendSms(data: {mobile_phone: string}): Observable<IResponse<ISendSms>>{
    return this.Http.post<IResponse<ISendSms>>(BaseUrl.apiBaseUrl + 'auth/sendSms', data)
  }

  signIn(data: {mobile_phone: string, token: string, code: number}): Observable<IResponse<ISignIn>>{
    return this.Http.post<IResponse<ISignIn>>(BaseUrl.apiBaseUrl + 'auth/signIn',data)
  }

}
