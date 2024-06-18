import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../../../shared/model/User.model';
import { IAuthRepository } from '../interfaces/IAuthRepository.interface';
import { Provider as AuthProvider }   from '../factory/provider.class';
import { Provider  as DBProvider }from "../../../shared/factory/provider.factory";
import { Creator as AuthCreator } from '../factory/creator.class';
import { Factory  as DBFactory }from "../../../shared/factory/factory.class";
import { ITransaction } from '../../../shared/interfaces/ITransaction.interface';
import { IAuthTransaction } from '../interfaces/IAuthTransaction.interface';
import { IRepository } from '../../../shared/interfaces/IRepository.interface';
import { ITableData } from '../../../shared/interfaces/ITableData.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthRepository, IRepository {



  private user? : User;
  private authCreator : AuthCreator = new AuthProvider("localEmail");
  private dbCreator : DBFactory = new DBProvider("FB");



  GetAll<T>(model: new (...args: any[]) => T): Observable<ITransaction<T>> {
    throw new Error('Method not implemented.');
  }
  GetById<T>(id: String, model: new (...args: any[]) => T): Observable<ITransaction<T>> {
    throw new Error('Method not implemented.');
  }
  Create<T extends ITableData>(model: T): ITransaction<T> {
    throw new Error('Method not implemented.');
  }
  Update<T extends ITableData>(model: T): ITransaction<T> {
    throw new Error('Method not implemented.');
  }
  Delete<T>(id: String, model: new (...args: any[]) => T): ITransaction<T> {
    throw new Error('Method not implemented.');
  }

  CreateUser<T extends ITableData>(model: T): Promise<ITransaction<T>> {
    return this.dbCreator.CreateUser(model);
  }


  Login<T>(): Observable<IAuthTransaction<T>> {
    return  this.authCreator.Login();

  }
  Logout(): void {
    throw new Error('Method not implemented.');
  }
  CheckAuthentication(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  CreateUserAuth <T>(model : T): Promise<IAuthTransaction<T>> {
    return this.authCreator.CreateUserAuth(model);
  }

  DeleteUser<T>(): Promise<IAuthTransaction<T>> {
    return this.authCreator.DeleteUser();
  }








}
