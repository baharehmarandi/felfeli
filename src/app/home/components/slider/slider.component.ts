import {Component, OnInit} from '@angular/core';
import {ISlider, ISliderData} from "./slider.interface";
import {HomeService} from "../../home.service";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit{
  sliderList : ISliderData[];
  constructor(private homeService: HomeService) {}

   getSlider() : void {
    this.homeService.slider().subscribe((res: ISlider)=>{

      this.sliderList = res.data.map((slider: ISliderData) => {
        return {
          id: slider.id,
          title: slider.title,
          link: slider.link,
          image_url: environment.imageBaseUrl + slider.image_url,
        }
      })
   })}

  ngOnInit(): void {
    this.getSlider()
  }

}
