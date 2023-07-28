import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../home.service";
import {IBanner, IBannerResponse} from "./banner.interface";
import {BaseUrl} from "../../../shared/base-url";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{

  bannerLists: IBanner[] = [];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.getBanner();
  }

  getBanner(): void {
    this.homeService.getBanner().subscribe((res: IBannerResponse) => {
      this.bannerLists = res.data
    })
  }

  protected readonly BaseUrl = BaseUrl;
  protected readonly environment = environment;
}
