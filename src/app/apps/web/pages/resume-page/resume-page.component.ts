import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../../../shared/components/popup/popup.component';
import { GlobalService } from '../../../../services/global/global.service';


@Component({
  selector: 'beat-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.css'
})
export class ResumePageComponent {

  public emailLink: string = "mailto:uri.rm.45@gmail.com?Subject=Deseo contactarte.";
  public mapsLink: string = "https://www.google.com/maps/@18.7049109,-97.7715965,15.75z?entry=ttu";
  public callLink: string = "tel:+522491302526";
  public repositoryLink: string = "https://github.com/Jose-beat";



  constructor(public dialog: MatDialog, private globalService : GlobalService){}

  downloadResume() :void {
    this.globalService.methodNotImplemented();
  }
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
