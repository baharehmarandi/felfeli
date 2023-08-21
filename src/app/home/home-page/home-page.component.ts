import {Component, OnInit} from '@angular/core';
import {IMainPage, IProductCard} from "../../product/product.interface";
import {HomeService} from "../home.service";
import {environment} from "../../../environments/environment";
import {IResponse} from "../../shared/model/response.interface";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{



  mainPageProductLists: IMainPage[] = [];
  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    this.homeService.getMainPage().subscribe((res: IResponse<IMainPage[]>) => {
      this.mainPageProductLists = res.data
      this.mainPageProductLists.map((productList: IMainPage) => {
        productList.product_from_category.map((productCategory: IProductCard) => {
          productCategory.image = environment.imageBaseUrl + productCategory.image
        })
      })
    })
  }
}
