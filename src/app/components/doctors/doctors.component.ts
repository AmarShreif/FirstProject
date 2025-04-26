import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {  SwiperOptions } from 'swiper/types';


@Component({
  selector: 'app-doctors',
  imports: [],

  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  
})
export class DoctorsComponent {

  breakpointsConfig: SwiperOptions['breakpoints'] = {
  
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };
}



