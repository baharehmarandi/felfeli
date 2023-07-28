import {Component, Renderer2} from '@angular/core';
import {MobileHeaderDrawerItemsInterface} from "./mobileHeaderDrawerItems.interface";

@Component({
  selector: 'app-mobile-header-drawer',
  templateUrl: './mobile-header-drawer.component.html',
  styleUrls: ['./mobile-header-drawer.component.css']
})
export class MobileHeaderDrawerComponent {

  drawerItems: MobileHeaderDrawerItemsInterface []= [
    {itemName: "پروفایل", imageSrc: "assets/images/ic_person_24px.png", imageAlt: "profile"},
    {itemName: "خانه", imageSrc: "assets/images/ic_home_24px.png", imageAlt: "home"},
    {itemName: "دسته بندی محصولات", imageSrc: "assets/images/ic_dashboard_24px.png", imageAlt: "category"},
    {itemName: "لیست سفارشات", imageSrc: "assets/images/ic_line_weight_24px.png", imageAlt: "order list"},
    {itemName: "پیشنهادات ویژه", imageSrc: "assets/images/ic_attach_money_24px.png", imageAlt: "best order"},
    {itemName: "تماس با ما", imageSrc: "assets/images/ic_call_24px.png", imageAlt: "contact us"},
    {itemName: "درباره ما", imageSrc: "assets/images/ic_group_24px.png", imageAlt: "about us"},
    {itemName: "قوانین", imageSrc: "assets/images/ic_gavel_24px.png", imageAlt: "rules"},
    {itemName: "سوالات متداول", imageSrc: "assets/images/ic_chrome_reader_mode_24px.png", imageAlt: "faq"},
  ]
  constructor(private renderer: Renderer2) {
  }

  onHideDrawer(){
    const removeDrawerBackground = document.getElementById('show-mobile-header-drawer-background')
    this.renderer.removeClass(removeDrawerBackground, 'mobile-header-drawer-background')

    const removeDrawer = document.getElementById('drawer')
    this.renderer.removeClass(removeDrawer, 'show-drawer')
  }
}
