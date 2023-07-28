import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { UnavailableComponent } from './components/unavailable/unavailable.component';
import { CountComponent } from './components/count/count.component';
import { register } from 'swiper/element/bundle';
import {SwiperDirective} from "../shared/swiper/swiper.directive";
import { ProductDetailsModalComponent } from './components/product-details-modal/product-details-modal.component';

register();


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductSliderComponent,
    AddToCartComponent,
    UnavailableComponent,
    CountComponent,
    ProductDetailsModalComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatButtonModule,
    SwiperDirective,
    NgOptimizedImage
  ],
  exports: [
    ProductCardComponent,
    ProductSliderComponent,
    ProductDetailsModalComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProductModule { }
