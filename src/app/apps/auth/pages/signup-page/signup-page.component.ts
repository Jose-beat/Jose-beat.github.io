import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

  constructor(private formBuilder : FormBuilder){}
  public FormSignUp : FormGroup = this.formBuilder.group({

  });

  Submit(): void{
    throw Error("Not Implemented");
  }

}
