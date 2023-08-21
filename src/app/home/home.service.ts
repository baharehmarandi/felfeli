import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, ReplaySubject} from "rxjs";
import {ISlider} from "./components/slider/slider.interface";
// import {BaseUrl} from "../shared/base-url";
import {ISpecialOffer} from "./components/special-offer/special-offer.interface";
import {IMainPage} from "../product/product.interface";
import {IBannerResponse} from "./components/banner/banner.interface";
import {IContact, IContactResponse} from "./contact.interface";
import {IResponse} from "../shared/model/response.interface";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  contact$ = new ReplaySubject<IContact[]>();
  constructor(private Http: HttpClient) { }


  slider(): Observable<ISlider>{
    return this.Http.get<ISlider>(environment.baseUrl + 'slider')
  }

   specialOffer(): Observable<ISpecialOffer>{
    return this.Http.get<ISpecialOffer>(environment.baseUrl + 'product/specialOffer')
   }

  getMainPage(): Observable<IResponse<IMainPage[]>>{
    return this.Http.get<IResponse<IMainPage[]>>(environment.baseUrl + 'category/mainPage')
  }

  getBanner(): Observable<IBannerResponse>{
    return this.Http.get<IBannerResponse>(environment.baseUrl + 'banner')
  }

  getContact(): void{
    this.Http.get<IContactResponse>(environment.baseUrl + 'contact').subscribe((res: IContactResponse) => {
      this.contact$.next(res.data[0])
    })
  }
}
