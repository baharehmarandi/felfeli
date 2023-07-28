export interface IMainPage {
  id: number,
  name: string,
  parent_id: number,
  product_from_category: IProductCard[]
}

// export interface IProductList {
//
//   id: number,
//   name: string,
//   parent_id: number,
//   product_from_category: IProductCard[]
// }

export interface IProductCard {
  id: number,
  category_id: number,
  title: string,
  description: string,
  price: number,
  current_price: number,
  discount_type?: string,
  discount_value: number,
  count: number,
  sell_number: number,
  status: string,
  review: string,
  background_color: string,
  image: string,
  categoryName: string
}
