import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BaseUrl} from "./base-url";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{
  constructor(private Http: HttpClient) {
  }

  ngOnInit() {

  }

  getProduct() {
    return this.Http.get(BaseUrl.apiBaseUrl + 'category?withChild=1')
  }
}
