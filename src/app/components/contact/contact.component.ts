import { Component, OnInit } from '@angular/core';
import { faInstagram, faBehanceSquare,} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEnvelope,} from '@fortawesome/free-regular-svg-icons';
import { faPhone as faPhone,} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faMobile = faPhone;
  faEmail = faEnvelope;
  faInstagram = faInstagram;
  faBehance = faBehanceSquare

  constructor() { }

  ngOnInit(): void {
  }

}
