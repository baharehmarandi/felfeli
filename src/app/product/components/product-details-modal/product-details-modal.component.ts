import {Component, Input, OnInit} from '@angular/core';
import {IProductCard} from "../../product.interface";
import {QuickViewService} from "../../quick-view.service";
import {BaseUrl} from "../../../shared/base-url";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-product-details-modal',
  templateUrl: './product-details-modal.component.html',
  styleUrls: ['./product-details-modal.component.css']
})
export class ProductDetailsModalComponent implements OnInit{

  modalProduct: IProductCard;

  constructor(private quickViewService: QuickViewService) {
  }

  ngOnInit() {
    this.quickViewService.onQuickViewProductChanged.subscribe((product: IProductCard) => {
      this.modalProduct = product;
    })
  }

  protected readonly BaseUrl = BaseUrl;
  protected readonly environment = environment;
}
