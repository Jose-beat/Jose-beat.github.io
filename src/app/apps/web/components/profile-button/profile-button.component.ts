import { Component } from '@angular/core';
import { GlobalService } from '../../../../shared/services/global/global.service';

interface ButtonItem {
  Name: string,
  Content: string,
  Link: string,
  Icon: string,
  Action: string
}




@Component({
  selector: 'beat-profile-button',
  templateUrl: './profile-button.component.html',
})
export class ProfileButtonComponent {

  public emailLink: string = "mailto:uri.rm.45@gmail.com?Subject=Deseo contactarte.";
  public mapsLink: string = "https://www.google.com/maps/@18.7049109,-97.7715965,15.75z?entry=ttu";
  public callLink: string = "tel:+522491302526";
  public repositoryLink: string = "https://github.com/Jose-beat";
  public profileButtons?: ButtonItem[];


  //!Pasar informacion a Base de Datos
  public localButtons : ButtonItem[] = [
    {Name: 'email', Content: 'uri.rm.45@gmail.com', Link: 'mailto:uri.rm.45@gmail.com', Icon:'email', Action:'redirect'},
    {Name: 'location', Content: '+52 2491302526', Link: 'tel:+522491302526', Icon:'call', Action:'redirect'},
    {Name: 'phone_number', Content: 'Xochitlan Todos Santos Puebla', Link: 'https://www.google.com/maps/@18.7049109,-97.7715965,15.75z?entry=ttu', Icon:'location_on', Action:'redirect'},
    {Name: 'repository', Content: 'Jose-beat', Link: 'https://github.com/Jose-beat', Icon:'code', Action:'redirect'},
    {Name: 'download_resume', Content: 'Descargar Curriculum', Link: '', Icon:'download', Action:'resume'},
  ];


  constructor(private globalService : GlobalService){}


  //!Cambiar el metodo para recibir mas de un parametro
  buttonAction(Action: string, parameter? : string): void{
    switch(Action){

      case 'redirect':
        this.redirectTo(parameter);
        break;

      case 'resume':
        this.downloadResume();
        break;

      default:
        this.redirectTo(parameter);
    }
  }

  //TODO: Implementacion correcta de metodos
  private downloadResume() :void {

    this.globalService.methodNotImplemented();
  }
  private redirectTo(Link?: string): void {
    if(Link === null || Link === undefined){
        window.alert("No Parameter");
    }
    window.open(Link,'_blank');
  }


}
