import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../home.service";
import {ISpecialOffer} from "./special-offer.interface";

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.css']
})
export class SpecialOfferComponent implements OnInit{

  specialOffers: any;
  showSpecialOffer = true;
  specialOfferList: [];
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getSpecialOffer()
     if (this.specialOfferList?.length === undefined || 0){
       this.showSpecialOffer = false;
     } else {
       this.showSpecialOffer = true;
     }
  }

  getSpecialOffer(): void {
    this.homeService.specialOffer().subscribe((res: ISpecialOffer) => {
      this.specialOfferList = res.data.list;
      this.specialOffers = res.data.list.map((specialOffer:{
        list: [],
        page_number: number,
        total: number
      }) => {
        return {
          list: specialOffer.list,
          page_number: specialOffer.page_number,
          total: specialOffer.total
        }
      })
    })

  }

  onSpecialOfferSeeMore(){
    //navigate
  }
}
