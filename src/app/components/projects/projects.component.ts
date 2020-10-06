import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { CardProjectComponent } from '../card-project/card-project.component'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  cardProject: CardProjectComponent
  ngOnInit(): void {
  }
  openDialog($event) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data  =  {
      id : $event.title ,
      title : 'Angular para principiantes'
  } ;

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(CardProjectComponent, dialogConfig);
  }
}
