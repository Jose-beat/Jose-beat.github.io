import { Component } from '@angular/core';

interface AccordionItem {
  Title: string;
  Date: Date;
  Description : string;
}


@Component({
  selector: 'beat-accordion-item',
  templateUrl: './accordion-item.component.html'
})
export class AccordionItemComponent {

}
