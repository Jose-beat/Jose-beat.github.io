import { Component } from '@angular/core';

import { PopupComponent } from '../../components/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(public dialog: MatDialog){}

  getPDF(link: string): void{
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {"link" :`${link}` }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Result ${result}`);
    });
  }

}
