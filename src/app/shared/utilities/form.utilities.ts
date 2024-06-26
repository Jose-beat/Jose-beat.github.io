import {  FormGroup } from "@angular/forms";
import { ValidatorsService } from "../validator/validator.service";

export class FormUtilities {

  constructor(
    private form : FormGroup,

  ){}


  isValidField(field: string):boolean | null {
    return this.form.controls[field].errors
        && this.form.controls[field].touched
  }
  //TODO: Agregar validacion para mas escenarios
  getFieldError(field: string): string | null{
    console.log(field);
      if(!this.form.controls[field] ) return null;

      const errors = this.form.controls[field].errors || {};
      console.log(errors['pattern']);
      console.log(errors);
      for (const key of Object.keys(errors)) {

          switch(key){
            case 'required':
              return 'Este campo es requerido';
            case 'minlength':
              return `Minimo ${errors['minlength'].requiredLength} caracteres`;
            case 'pattern':
              return `El correo no cumple con el formato correcto`
          }

      }

      return null;

  }

  // isValidField(field: string){
  //   //TODO: Servicio para validacion
  //   return this.validatorService.isValidField(this.form, field);
  // }
}
