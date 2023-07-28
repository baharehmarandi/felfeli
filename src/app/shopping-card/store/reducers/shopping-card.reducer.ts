import {IShoppingCardReducer} from "./shopping-card-reducer.interface";
import {createReducer, on} from "@ngrx/store";
import {shoppingCardAction} from "../actions/shopping-card.action";

export const initialState: IShoppingCardReducer = {
  loading: undefined,
  success: undefined,
  failure: undefined,
  shoppingCard: undefined
}

export const shoppingCardReducer = createReducer(
  initialState,
  on(shoppingCardAction.addProduct,
    (state,_): IShoppingCardReducer => {
      return {
        ...state,
        loading: true,
        success: undefined
      }
    }),
  on(shoppingCardAction.addProductSuccess,
    (state, action): IShoppingCardReducer => {
      return {
        ...state,
        loading: false,
        success: true,
        shoppingCard: action.product
      }
    }),
  on(shoppingCardAction.addProductFailure,
    (state, action): IShoppingCardReducer => {
      return {
        ...state,
        failure: action.error
      }
    })
)
