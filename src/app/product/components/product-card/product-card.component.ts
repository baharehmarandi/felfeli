import {Component, Input} from '@angular/core';
import {IProductCard} from "../../product.interface";
import {environment} from "../../../../environments/environment";
import {QuickViewService} from "../../quick-view.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() sliderProductDetails: IProductCard;

  showCountBtn: boolean = false;
  showAddToCard: boolean = false;
  showEye: boolean = false;

  constructor(private quickViewService: QuickViewService) {
  }

  onShowEye() {
    this.showEye = true;

  }

  onHideEye(){
    this.showEye = false;
  }

  showQuickView(){
    this.quickViewService.changeQuickViewProduct(this.sliderProductDetails)
  }

  protected readonly environment = environment;
}
