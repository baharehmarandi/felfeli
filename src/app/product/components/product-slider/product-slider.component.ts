import { Component, Input } from '@angular/core';
import {IMainPage} from "../../product.interface";
import { SwiperOptions} from "swiper";

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent {

  @Input() product: IMainPage;

  image= [
    {id: 1, imageUrl: "assets/images/food-and-restaurant (1).png"},
    {id: 2, imageUrl: "assets/images/food-and-restaurant.png"},
    {id: 3, imageUrl: "assets/images/sabzijat.png"},
    {id: 4, imageUrl: "assets/images/water.png"},
    {id: 5, imageUrl: "assets/images/adviye.png"},
    {id: 6, imageUrl: "assets/images/food-and-restaurant (3).png"},
    {id: 7, imageUrl: "assets/images/dinner.png"},
    {id: 8, imageUrl: "assets/images/food-and-restaurant (2).png"}
  ]

  public config: SwiperOptions = {
    autoHeight: true,
    spaceBetween: 20,
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      1229: {
        slidesPerView: 3.25,

      },
      769: {
        slidesPerView: 2.25,
      },
      467: {
        slidesPerView: 1.25,
      },
      375: {
        slidesPerView: 1.15,
      }
    }
  }


  getImage(index:number):string{
    return this.image.find((item) => item.id === index).imageUrl
  }
}
