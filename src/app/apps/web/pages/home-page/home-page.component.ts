import { Component } from '@angular/core';

import { PopupComponent } from '../../components/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {

  public emailLink: string = "mailto:uri.rm.45@gmail.com?Subject=Deseo contactarte.";
  public mapsLink: string = "https://www.google.com/maps/@18.7049109,-97.7715965,15.75z?entry=ttu";
  public callLink: string = "tel:+522491302526";
  public repositoryLink: string = "https://github.com/Jose-beat";



  constructor(public dialog: MatDialog){}

  redirectTo(link: string): void {
    window.open(link,'_blank');

  }

  getPDF(link: string): void{
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {"link" :`${link}` }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Result ${result}`);
    });
  }

}
