export interface IShoppingCardList {
  id: number,
  count: number,
  created_at: string,
  product: IShoppingCardListProduct
}

export interface IShoppingCardListProduct {
  id: number,
  image: string,
  background_color: string,
  review: string,
  status: boolean,
  sell_number: number,
  count: number,
  discount_value?: number,
  discount_type?: string,
  current_price: number,
  price: number,
  description: string,
  title: string,
  category_id: number,
  enable: boolean,
  category: IShoppingCardListProductCategory
}

export interface IShoppingCardListProductCategory {
  id: number,
  parent_id: number,
  name: string
}

export interface IShoppingCardDto {
  product_id: number,
  count: number
}
