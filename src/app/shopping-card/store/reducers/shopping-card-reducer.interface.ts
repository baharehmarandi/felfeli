import {IShoppingCardListDataList} from "../../component/shopping-cart-list/model/shopping-cart-list.interface";
import {HttpErrorResponse} from "@angular/common/http";

export interface IShoppingCardReducer {
  loading?: boolean,
  success?: boolean,
  failure?: HttpErrorResponse,
  shoppingCard?: IShoppingCardListDataList[]
}
