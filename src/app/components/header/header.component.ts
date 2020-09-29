import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toProjects() {
    document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  toAbout() {
    document.getElementById('about').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  toContact() {
    document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
