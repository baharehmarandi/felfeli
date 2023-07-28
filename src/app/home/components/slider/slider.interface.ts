export interface ISlider {
  status: string,
  message?: string,
  data: {
    id: number,
    title: string,
    link: string,
    image_url: string
  }[]
}
