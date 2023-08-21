export interface ISlider {
  status: string,
  message?: string,
  data: ISliderData[]
}

export interface ISliderData {
  id: number,
  title: string,
  link: string,
  image_url: string
}
