import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IShoppingCardDto, IShoppingCardList} from "./shopping-card.interface";
import {BaseUrl} from "../shared/base-url";
import {IResponseList} from "../shared/model/responseList.interface";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {
  headers: any;

  constructor(private http: HttpClient) {
    this.headers = new Headers();
    this.headers.append("Authorization", localStorage.getItem('token'));
  }

  postShoppingCard(data: IShoppingCardDto): Observable<IResponseList<IShoppingCardList>> {
    return this.http.post<IResponseList<IShoppingCardList>>(BaseUrl.apiBaseUrl + 'cart', data, {
      headers: {
        Authorization: localStorage.getItem('token')
      },
    });
  }
}
