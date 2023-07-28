export interface ISpecialOffer {
  status: string,
  message?: string ,
  data: {
    list: [],
    page_number: number,
    total: number
  }
}
