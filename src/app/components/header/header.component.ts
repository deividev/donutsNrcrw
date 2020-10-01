import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menuItem'

//Icons FontAwesome
import {  faInstagram, faInstagramSquare, faBehance} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems;


  checked = true;

  constructor() {}

  faInstagram = faInstagram;
  faBehance = faBehance
  ngOnInit(): void {
    this.menuItems = [
      {
        id: "65151",
        label: 'Projects',
        route: 'projects'
      },
      {
        id: "654564151",
        label: 'About',
        route: 'about'
      },
      {
        id: "65546151",
        label: 'Contact',
        route: 'contact'
      },
    ]
  }

  goTo(route) {
    document.getElementById(route).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
