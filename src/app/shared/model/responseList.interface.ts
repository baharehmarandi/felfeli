export interface IResponseList<T> {
  status?: string,
  message?: string,
  data: {
    list: T[],
    page_number: number,
    total: number
  }
}
