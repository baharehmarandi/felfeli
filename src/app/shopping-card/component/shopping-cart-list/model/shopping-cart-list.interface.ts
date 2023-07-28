export interface IShoppingCardList {
  status: string,
  message?: string,
  data: IShoppingCardListData
}

export interface IShoppingCardListData {
  list: IShoppingCardListDataList[],
  page_number: number,
  total: number
}

export interface IShoppingCardListDataList {
  id: number,
  count: number,
  created_at: string,
  product: IShoppingCardListDataListProduct
}

export interface IShoppingCardListDataListProduct {
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
  category: IShoppingCardListDataListProductCategory
}

export interface IShoppingCardListDataListProductCategory {
  id: number,
  parent_id: number,
  name: string
}

export interface IShoppingCardAddProduct {
  product_id: number,
  count: number
}
