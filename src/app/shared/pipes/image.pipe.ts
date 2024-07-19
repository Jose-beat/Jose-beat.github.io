import { Pipe, PipeTransform } from '@angular/core';
import { GraphicUtilities } from '../utilities/graphic.utilities';
//TODO: Implementacion de interfaz para imagenes
@Pipe({name: 'ImagePipe'})
export class ImagePipe implements PipeTransform {

  transform(value: any): any {


    if(!value ) return 'assets/img/loader.svg';

    let containHttp : boolean = GraphicUtilities.urlStartsWith('http',value);
    let containData : boolean = GraphicUtilities.urlStartsWith('data',value);
    console.log("Datos de PIPE:");
    console.error(value);
    if( !containHttp && !containData ) return 'assets/img/loader.svg';
    console.log("Datos de PIPE:");
    console.error(value);
      return value;
  }
}
