import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../product.service";
import {ProductInterface} from "../../product.interface";

@Component({
  selector: 'app-header-product-dropdown',
  templateUrl: './header-product-dropdown.component.html',
  styleUrls: ['./header-product-dropdown.component.css']
})
export class HeaderProductDropdownComponent implements OnInit{

  products:ProductInterface[] = [];
  productsImages:string[]= [
    "assets/images/farangijat.svg",
    "assets/images/sabzijat.svg",
    "assets/images/araghijat.svg",
    "assets/images/adviehjat.svg",
    "assets/images/torshijat.svg",
    "assets/images/food.svg",
    "assets/images/honey.svg",
    "assets/images/damnush.svg",
  ];
constructor(private productService: ProductService) {
}

  ngOnInit() {
  this.productService.getProduct().subscribe((res: any) =>{
    this.products = res.data;
  })
  }
}
