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

  ngOnInit() {
    this.navigationLinks = [
      { displayText: 'HOME', id: 'home' },
      { displayText: 'ABOUT', id: 'home' },
      { displayText: 'HOME', id: 'home' },
      { displayText: 'HOME', id: 'home' },
      { displayText: 'HOME', id: 'home' },
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
}
