import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {
  IShoppingCardAddProduct,
  IShoppingCardListDataList
} from "../../component/shopping-cart-list/model/shopping-cart-list.interface";
import {HttpErrorResponse} from "@angular/common/http";

export const shoppingCardAction = createActionGroup({
  source: 'shopping card',
  events: {
    'Add Product': props<{product: IShoppingCardAddProduct}>(),
    'Add Product Success': props<{product: IShoppingCardListDataList[]}>(),
    'Add Product Failure': props<{error: HttpErrorResponse}>(),
    'Get ShoppingCard': emptyProps(),
    'Get ShoppingCard Success': props<{product: IShoppingCardListDataList[]}>(),
    'Get ShoppingCard Failure': props<{error: HttpErrorResponse}>()
  }
})

