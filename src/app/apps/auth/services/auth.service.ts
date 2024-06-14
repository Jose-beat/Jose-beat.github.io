import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../../../shared/model/User.model';
import { IAuthRepository } from '../interfaces/IAuthRepository.interface';
import { Provider } from '../factory/provider.class';
import { Creator } from '../factory/creator.class';
import { ITransaction } from '../../../shared/interfaces/ITransaction.interface';
import { IAuthTransaction } from '../interfaces/IAuthTransaction.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthRepository {


  private user? : User;
  private creator : Creator = new Provider("localEmail");


  Login<T>(): Observable<IAuthTransaction<T>> {
    return  this.creator.Login();

  }
  Logout(): void {
    throw new Error('Method not implemented.');
  }
  CheckAuthentication(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }










}
