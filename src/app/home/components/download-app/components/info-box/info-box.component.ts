import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../../../home.service";
import {IContact} from "../../../../contact.interface";

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit{

  userCount: string = "";
  productCount: string = "";
  organic: string = "";
  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homeService.contact$.subscribe((contact:IContact[]) => {
      this.userCount = contact.find(item => item.contact === "user_count").value
      this.productCount = contact.find(item => item.contact === "product_count").value
      this.organic = contact.find(item => item.contact === "organic").value
    })

  }


}
