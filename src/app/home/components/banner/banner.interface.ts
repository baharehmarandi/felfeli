export interface IBannerResponse {
  status: string,
  message?: string,
  data: IBanner[]
}

export interface IBanner {
  id: number,
  title: string,
  link: string,
  image_url: string
}
