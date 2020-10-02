import { Component, OnInit } from '@angular/core';
import {  faInstagram, faInstagramSquare, faBehanceSquare,} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEnvelope,} from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt as faPhoneAlt,} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faMobile = faPhoneAlt;
  faEmail = faEnvelope;
  faInstagram = faInstagramSquare;
  faBehance = faBehanceSquare

  constructor() { }

  ngOnInit(): void {
  }

}
