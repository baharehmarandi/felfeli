import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {

  @Output() showCountBtn = new EventEmitter<boolean>();

  onShowCountBtn() {
    this.showCountBtn.emit(true)
  }
}
