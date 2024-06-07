import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from '../../../../shared/services/global/global.service';



@Component({
  selector: 'beat-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.css'
})
export class ResumePageComponent {


  constructor(public dialog: MatDialog, private globalService : GlobalService){}


}
