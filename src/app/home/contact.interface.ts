export interface IContactResponse {
  status: string,
  message?: string,
  data: [
    IContact []
  ]
}

export interface IContact {
  contact: string,
  value: string
}
