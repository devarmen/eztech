import { ViewportScroller } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private scroller: ViewportScroller) {

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
      { source: '../assets/partners-logos/hp.png', alt: 'HP' },
      { source: '../assets/partners-logos/apc.png', alt: 'APC' },
      { source: '../assets/partners-logos/asus.png', alt: 'Asus' },
      { source: '../assets/partners-logos/acer.png', alt: 'Acer' },
      { source: '../assets/partners-logos/lenovo.png', alt: 'Lenovo' },
      { source: '../assets/partners-logos/microsoft.png', alt: 'Microsoft' },
      { source: '../assets/partners-logos/hewlett-packard.png', alt: 'Hewlett Packard' },
      { source: '../assets/partners-logos/emerson.png', alt: 'Emerson' },
      { source: '../assets/partners-logos/veeam.png', alt: 'Veeam' },
      { source: '../assets/partners-logos/ibm.png', alt: 'IBM' },
      { source: '../assets/partners-logos/dell.png', alt: 'Dell' },
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
}
