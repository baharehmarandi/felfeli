import {Component, OnInit} from '@angular/core';
import {HomeService} from "./home/home.service";
import {Store} from "@ngrx/store";
import {shoppingCardAction} from "./shopping-card/store/actions/shopping-card.action";
import {shoppingCardSelector} from "./shopping-card/store/selectors/shopping-card.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'felfeli';

  constructor(private homeService: HomeService,
              private store: Store) {
  }

  ngOnInit() {
    this.homeService.getContact()
    this.store.dispatch(shoppingCardAction.addProduct({
      product: {product_id: 100, count: 2}
    }));
    this.store.select(shoppingCardSelector).subscribe(response => {
      console.log(response)
    })
  }
}
