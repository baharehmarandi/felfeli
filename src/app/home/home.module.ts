import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {SliderComponent} from "./components/slider/slider.component";
import { register } from 'swiper/element/bundle';
import { SpecialOfferComponent } from './components/special-offer/special-offer.component';
import { CategoryComponent } from './components/category/category.component';
import {ProductModule} from "../product/product.module";
import { BannerComponent } from './components/banner/banner.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { InfoBoxComponent } from './components/download-app/components/info-box/info-box.component';

register();

@NgModule({
  declarations: [
    SliderComponent,
    SpecialOfferComponent,
    CategoryComponent,
    BannerComponent,
    DownloadAppComponent,
    InfoBoxComponent
  ],
  exports: [
    SliderComponent,
    SpecialOfferComponent,
    CategoryComponent,
    BannerComponent,
    DownloadAppComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
