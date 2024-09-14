import { Component, Input, OnInit } from '@angular/core';
import { ModalItem } from '../../../../shared/interfaces/component-interfaces/ModalItem.interface';

@Component({
  selector: 'admin-experience-modal',
  templateUrl: './experience-modal.component.html',
  styleUrl: './experience-modal.component.css'
})
export class ExperienceModalComponent{
  @Input()
  public modalComponent! : ModalItem;








}
