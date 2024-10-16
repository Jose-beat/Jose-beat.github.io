import { Component, Input } from '@angular/core';
import { AccordionItem } from '../../../../shared/interfaces/component-interfaces/AccordionItem.interface';




@Component({
  selector: 'beat-accordion-item',
  templateUrl: './accordion-item.component.html'
})
export class AccordionItemComponent {
  @Input()
  public accordionItems? : AccordionItem[];



}
