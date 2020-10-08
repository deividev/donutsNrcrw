import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment'

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  video
  constructor(public router: HttpClient) { }º

  ngOnInit(): void {
    this.video = document.getElementById('video');
    this.video.play();

    // this.router.get(`${environment.apiUrl}videos`).subscribe((item: any) => {
    //   this.video = `http://localhost:1337${item[0].file.url}`;
    //   debugger
    //   console.log(this.video);
    // })
  }

}
