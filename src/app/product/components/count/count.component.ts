import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {

  @Output() addToCardBtn = new EventEmitter<boolean>();
  productCount: number = 1;

  onAdd(){
    this.productCount = this.productCount + 1;
  }

  onMinus(){
    this.productCount = this.productCount - 1;
  }

  onDelete(){
    this.addToCardBtn.emit(false);
  }
}
