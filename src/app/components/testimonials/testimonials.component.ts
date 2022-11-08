import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface Testimonials {
  name: string,
  testimonial: string
  image: string
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  public prevButton: string = 'assets/svg/navigate_before_white.svg';
  public nextButton: string = 'assets/svg/navigate_next_white.svg';

  public testimonials: Testimonials[] = [
    {
      name: 'Antonio',
      testimonial: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure',
      image: 'assets/images/testimonials/placeholder.png'
    },
    {
      name: 'Veronica',
      testimonial: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure',
      image: 'assets/images/testimonials/placeholder.png'
    },
    {
      name: 'Matias',
      testimonial: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure',
      image: 'assets/images/testimonials/placeholder.png'
    },
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: [`<img src="${this.prevButton}">`, `<img src="${this.nextButton}">`],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
