import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCardRoutingModule } from './shopping-card-routing.module';
import { ShoppingCardComponent } from './component/shopping-card/shopping-card.component';


@NgModule({
  declarations: [
    ShoppingCardComponent
  ],
  imports: [
    CommonModule,
    ShoppingCardRoutingModule
  ]
})
export class ShoppingCardModule { }
