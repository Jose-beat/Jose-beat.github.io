import { Component } from '@angular/core';
interface ProjectItem {
  Title: string,
  SubTitle : string,
  Icon: string,
  ImagePath: string,
  Description: string
}
@Component({
  selector: 'beat-project-item',
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {

  public INITIAL_IMAGE_PATH = '/assets/icons/';
  public projectItem : ProjectItem[] = [
    {Title: 'Sticky Notes',SubTitle: 'Android', Icon: 'code', ImagePath: 'icon-web-purple.svg', Description: 'Aplicacion movil para envio de notas para parejas'},
    {Title: 'EFoodies',SubTitle: '.NET MVC', Icon: 'code', ImagePath: 'icon-web-purple.svg', Description: 'Sistema de administracion para restaurantes desarrollado con .NET Core MVC.'},
    {Title: 'TINISA',SubTitle: '.NET MVC', Icon: 'code', ImagePath: 'icon-web-purple.svg', Description: 'Sistema de facturacion y administracion de viajes y recursos para la transportista TINISA desarrollado con .NET MVC, .NET API y SQL Server.'},
    {Title: 'SIDS',SubTitle: '.NET MVC', Icon: 'code', ImagePath: 'icon-web-purple.svg', Description: ' Sistema de administracion para restaurantes desarrollado con .NET Core MVC.'},

  ];

}
