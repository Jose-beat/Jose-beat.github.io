import {  Form, FormGroup } from "@angular/forms";
import { ValidatorsService } from "../validator/validator.service";
import { ITableData } from "../interfaces/model-interfaces/ITableData.interface";
import { TableData } from "../abstract/ITableData.abstract";

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

  onFileChange<T extends TableData>(model : T, event: any, preview : boolean) : T {

    //const file : File = event.target.files[0];
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      model.image = input.files[0];
      if(preview){
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = () => {
          model.imagePath = reader.result?.toString();
        };
        reader.readAsDataURL(file);
      }
    }

    return model;
  }

  // isValidField(field: string){
  //   //TODO: Servicio para validacion
  //   return this.validatorService.isValidField(this.form, field);
  // }

  private fileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        if (reader.result) {
          const base64String = (reader.result as string).split(',')[1];
          resolve(base64String);
        } else {
          reject(new Error('File could not be read.'));
        }
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  }


}
