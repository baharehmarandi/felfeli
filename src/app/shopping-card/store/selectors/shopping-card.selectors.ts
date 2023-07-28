import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IShoppingCardReducer} from "../reducers/shopping-card-reducer.interface";

export const selectShoppingCard = createFeatureSelector<IShoppingCardReducer>('shoppingCard');

export const shoppingCardSelector = createSelector(
  selectShoppingCard,
  (shoppingCard) => {
    return shoppingCard.shoppingCard
  }
)

export const loadingSelector = createSelector(
  selectShoppingCard,
  (shoppingCard) => {
    return shoppingCard.loading
  }
)

export const successSelector = createSelector(
  selectShoppingCard,
  (shoppingCard) => {
    return shoppingCard.success
  }
)

export const failureSelector = createSelector(
  selectShoppingCard,
  (shoppingCard) => {
    return shoppingCard.failure
  }
)
