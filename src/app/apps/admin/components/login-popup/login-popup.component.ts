import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthTransaction } from '../../../auth/providers/transaction/AuthTransaction.class';
import { User } from '../../../../shared/model/User.model';
import { ITransaction } from '../../../../shared/interfaces/model-interfaces/ITransaction.interface';

@Component({
  selector: 'admin-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.css'
})
export class LoginPopupComponent {
  @Output() loginResponse = new EventEmitter<ITransaction<User>>();
  constructor(
    private dataService : DataService
  ){}
  submit(){
    let response =  AuthTransaction.OnSuccess<User>("Sesion Verificada", "",undefined);
    this.loginResponse.emit(response);
    this.dataService.activeForm(false);
  }
}
