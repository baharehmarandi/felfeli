import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IShoppingCardDto, IShoppingCardList} from "./shopping-card.interface";
import {IResponseList} from "../shared/model/responseList.interface";
import {environment} from "../../environments/environment";

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
    return this.http.post<IResponseList<IShoppingCardList>>(environment.baseUrl + 'cart', data, {
      headers: {
        Authorization: localStorage.getItem('token')
      },
    });
  }
}
