export interface ISignIn {
  user: ISignInUser
  api_token: string,
  expires_at: string
}

export interface ISignInUser {
  id: number,
  email?: string,
  invite_code: string,
  birthday?: string,
  mobile_phone: string,
  fullname?: string,
  code_melli?: number,
  credit: number,
  unread_message_count: number,
  first_buy_credit: number,
  fast_send: number,
  shop_start_time: string,
  shop_end_time: string
}
