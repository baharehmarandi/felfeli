import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent {

  constructor(private renderer: Renderer2) {
  }

  onShowMobileHeaderDrawer(){
    const element = document.getElementById('drawer')
    this.renderer.addClass(element, 'show-drawer')

    const showBackground = document.getElementById('show-mobile-header-drawer-background')
    this.renderer.addClass(showBackground,'mobile-header-drawer-background')
  }

}
