import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit(): void {
  }

  goTo(path: any) {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        // const elementList = document.querySelectorAll('#' + path);
        // const element = elementList[0] as HTMLElement;
        // element.scrollIntoView({ behavior: 'smooth', block: 'center'});
        let element = document.querySelector('#' + path) as HTMLElement
        let topOfElement = element.offsetTop - 60
        window.scroll({top: topOfElement, behavior: 'smooth'})
      }, 200);
    }
  }

}
