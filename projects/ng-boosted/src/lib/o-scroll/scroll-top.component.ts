/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - scroll-top.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'lib-scroll-top',
  templateUrl: './scroll-top.component.html',
  styles: ['a { display: inline;}']
})
export class ScrollTopComponent {

  public showMe = false;
  @Input() public label: string;

  public ScrollToTop() {
    window.scrollTo(0, 0);
  }

  @HostListener('window:scroll', [])
  public onWindowScroll() {
    if (document.documentElement.scrollTop > window.innerHeight) {
      this.showMe = true;
    } else {
      this.showMe = false;
    }
  }
}