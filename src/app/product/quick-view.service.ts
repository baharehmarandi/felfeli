import {EventEmitter, Injectable} from '@angular/core';
import {IProductCard} from "./product.interface";

@Injectable({
  providedIn: 'root'
})
export class QuickViewService {

  currentProduct: IProductCard

  onQuickViewProductChanged = new EventEmitter<IProductCard>();

  changeQuickViewProduct(product: IProductCard){
    this.currentProduct = product
    this.onQuickViewProductChanged.emit(this.currentProduct)
  }

}
