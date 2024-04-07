import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    this.initSwiper();
  }

  initSwiper() {
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      navigation: {
        prevEl: '#prev-testimonial',
        nextEl: '#next-testimonial',
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });
  }
}


