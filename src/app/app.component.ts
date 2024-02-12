import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import  * as Aos from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  windowScrolled: boolean=false;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener("window:scroll", [])

  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
        this.windowScrolled = true;
    }
   else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
    }
}

  scrollToTop(): void {


    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    Aos.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      duration: 400, // values from 0 to 3000, with step 50ms
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      animatedClassName: 'aos-animate', // class applied on animation
      initClassName: 'aos-init', // class applied after initialization
      useClassNames: false // if true, will add content of `data-aos` as classes on scroll
    });
  }
}
