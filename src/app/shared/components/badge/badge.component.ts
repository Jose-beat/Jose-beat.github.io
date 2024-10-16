import { Component, Input, OnInit } from '@angular/core';
import { StatusItem } from '../../interfaces/enum-interfaces/StatusItem.Interface';
import { Utilities } from '../../utilities/table.utilities';

@Component({
  selector: 'beat-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent implements OnInit{
    @Input()
    public status : number = 0;
    @Input()
    public type : string = '';

    public statusRow? : StatusItem;

    ngOnInit(): void {
        this.statusRow = this.checkInfoStatus();
    }

    checkInfoStatus(): StatusItem {
      let rowStatus = Utilities.getStatusDescription(this.status, this.type);
      // if(rowStatus === undefined){
      //     rowStatus = {title: 'No definido', color: 'info', number: 0}
      // }
      return rowStatus;
    }


}
