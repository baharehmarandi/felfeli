import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{
  constructor(private Http: HttpClient) {
  }

  ngOnInit() {

  }

  getProduct() {
    return this.Http.get(environment.baseUrl + 'category?withChild=1')
  }
}
