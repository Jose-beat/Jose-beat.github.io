import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from '../../../../shared/services/global/global.service';
import { PopupComponent } from '../../../../shared/components/popup/popup.component';

interface ViewerItem {
  Title: string;
  Description: string;
  Link: string;
}


@Component({
  selector: 'beat-viewer-item',
  templateUrl: './viewer-item.component.html',
})
export class ViewerItemComponent {

  public viewerItems : ViewerItem[] = [
    {Title: 'CCNA R&S', Description: 'Routing and Switching Essentials', Link: 'https://drive.google.com/file/d/1gqgdvpH52pQ3vfOxu0GPDgNBYNzefRxd/preview'},
    {Title: 'IT ESSENTIALS PC', Description: 'Hardware and Software', Link: 'https://drive.google.com/file/d/1zF-61TAQA9J7TaV6PyClau216kBZlxu8/preview'},
    {Title: 'MICROSOFT AZ-900 CERTIFIED', Description: 'Azure Fundamentals', Link: 'https://drive.google.com/file/d/1NaaXqofIILrok9WPUEYZ-Z-jmf4wPNjr/preview'},
    {Title: 'FOUNDATIONAL C# WITH MICROSOFT', Description: 'C# Fundamentals', Link: 'https://drive.google.com/file/d/1iN1WXyoXLqyOWwLGbqZdGKlgzaKYUOkE/preview'},
    {Title: 'MICROSOFT AI-900 CERTIFIED', Description: 'AI and Machine Learning Fundamentals', Link: 'https://drive.google.com/file/d/1KaLQLP83BtOWZXE5_-TeKeekfZ-DP_wf/preview'}
  ];
  constructor(public dialog: MatDialog, private globalService : GlobalService){}


  getPDF(link: string): void{
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {"link" :`${link}` }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Result ${result}`);
    });
  }
}
