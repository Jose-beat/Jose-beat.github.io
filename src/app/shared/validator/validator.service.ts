import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//TODO: Implementar la validacion de email utilizado
export class ValidatorsService {

  public  firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public   emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  public passwordPattern : string = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

  constructor() { }


  public canBeStrider(control : FormControl) : ValidationErrors | null {

    const value : string = control.value.trim().toLowerCase();

    if(value === 'strider' ){
      return {
        noStrider: true
      };
    }

    return null;
  }


  public isValidField(form:FormGroup,  field : string){
    return form.controls[field].errors && form.controls[field].touched;
  }

  public isFielOneEqualFieldTwo(fieldOne : string, fieldTwo : string)  {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const fieldValueOne = formGroup.get(fieldOne)?.value;
      const fieldValueTwo = formGroup.get(fieldTwo)?.value;

      if(fieldValueOne !== fieldValueTwo){
        formGroup.get(fieldTwo)?.setErrors({notEqual : true});

        return {notEqual: true}
      }

      formGroup.get(fieldTwo)?.setErrors(null);

        return null;
    }
  }
}
