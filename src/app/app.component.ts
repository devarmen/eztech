import { ViewportScroller } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eztech';
  faBars = faBars;
  isExpanded = false;
  partnerLogos = [];
  navigationLinks = [];
  mailSubject = encodeURIComponent('From EZTech Website Contact Page');
  contactFormBody = '';

  public get mailBody() {
    return encodeURIComponent(this.contactFormBody);

  }

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;

  constructor() {

  }

  ngOnInit(): void {
    this.navigationLinks = [
      { displayText: 'HOME', id: 'hero' },
      { displayText: 'ABOUT', id: 'about' },
      { displayText: 'OUR SERVICES', id: 'services' },
      { displayText: 'OUR PARTNERS', id: 'partners' },
      { displayText: 'CONTACT US', id: 'contact' },
    ];
    this.partnerLogos = [
      { source: '../assets/partners-logos/logos1.png', alt: 'Partner logos' },
      { source: '../assets/partners-logos/logos2.png', alt: 'Partner logos' },
      { source: '../assets/partners-logos/logos3.png', alt: 'Partner logos' },
      // { source: '../assets/partners-logos/logos2.png', alt: 'HP' },
      // { source: '../assets/partners-logos/logos3.png', alt: 'HP' },
    ];
  }

  goTo(id: string): void {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });

    this.isExpanded = false;

  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
