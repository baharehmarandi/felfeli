import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {ShoppingCardService} from "../../shopping-card.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {shoppingCardAction} from "../actions/shopping-card.action";
import {catchError, concatMap, map, of} from "rxjs";

@Injectable()
export class ShoppingCardEffects {
  constructor(private actions$: Actions,
              private store: Store,
              private shoppingCardService: ShoppingCardService) {}

  addShoppingCard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingCardAction.addProduct),
      concatMap((action) =>
        this.shoppingCardService.postShoppingCard(action.product).pipe(
          map((response) =>
          shoppingCardAction.addProductSuccess({
            product: response.data.list
          })
        ))
      ),
      catchError(error => of(shoppingCardAction.addProductFailure({error: error})))
    )
  });
}
