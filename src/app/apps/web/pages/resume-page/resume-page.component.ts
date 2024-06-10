import { Component } from '@angular/core';
import { AccordionItem } from '../../../../shared/interfaces/AccordionItem.interface';



@Component({
  selector: 'beat-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.css'
})
export class ResumePageComponent {


  constructor(){}
  public experienceItems : AccordionItem[] = [
    {Title: 'H. Ayuntamiento', StartDate: new Date("2020-05-01"), FinalDate:  new Date("2020-08-01"), Description: 'Analisis y toma de requerimientos para definicion de alcances para el proyecto en el Honorable Ayuntamiento de Tecamachalco.'},
    {Title: 'TICAS', StartDate: new Date("2021-08-01"), FinalDate:  new Date("2022-04-01"), Description: 'Desarrollo de plataformas para la administracion de restaurantes, pedidos en linea desarrollados en NET CORE para aplicaciones web y Flutter para aplicaciones moviles ademas de brindar soporte a sistemas web de Instituciones educativas.'},
    {Title: 'Xhofhox', StartDate: new Date("2021-08-01"), FinalDate:  new Date("2022-10-01"), Description: 'Desarrollo para plataformas web de administracion de campamentos en EUA y la gestion de agendas personales y profesionales con aplicaciones web.'},
    {Title: 'Softtek', StartDate: new Date("2020-10-01"), FinalDate:  new Date(), Description: 'Soporte y desarrollo de aplicaciones web internas para la gestion de inmuebles y proveedores para empresas de tienda a nivel nacional.'},
  ];

  public educationItems : AccordionItem[] = [
    {Title: 'Bachillerato', StartDate: new Date("2015-08-01"), FinalDate:  new Date("2018-07-01"), Description: 'Bachillerato con Especialidad en Derecho en el Bachillerato General Oficial Macario Valencia Vallejo'},
    {Title: 'TSU', StartDate: new Date("2020-08-01"), FinalDate:  new Date("2021-04-01"), Description: 'TSU en TIC’S Desarrollo de Software Multiplataforma en la Universidad Tecnológica de Tecamachalco'},
    {Title: 'Ingenieria', StartDate: new Date("2020-09-01"), FinalDate:  new Date("2022-05-01"), Description: 'ING. Gestion y Desarrollo de Software en la Universidad Tecnológica de Tecamachalco'},

  ]

}
