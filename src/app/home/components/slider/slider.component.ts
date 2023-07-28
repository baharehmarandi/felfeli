import {Component, OnInit} from '@angular/core';
import {ISlider} from "./slider.interface";
import {HomeService} from "../../home.service";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit{
  sliderList : any
  constructor(private homeService: HomeService) {}

   getSlider() : void {this.homeService.slider().subscribe((res: ISlider)=>{
    this.sliderList = res.data.map((slider: {
         id: number,
         title: string,
         link: string,
         image_url: string
     }) => {
      return {
        id: slider.id,
        title: slider.title,
        link: slider.link,
        image_url: environment.baseUrl + slider.image_url
      }
    })

   })}

  ngOnInit(): void {this.getSlider()}

}
