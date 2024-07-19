import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../../../shared/model/User.model';
import { IAuthRepository } from '../interfaces/IAuthRepository.interface';
import { Provider as AuthProvider }   from '../factory/provider.class';
import { Provider  as DBProvider }from "../../../shared/factory/provider.factory";
import { Creator as AuthCreator } from '../factory/creator.class';
import { Factory  as DBFactory }from "../../../shared/factory/factory.class";
import { ITransaction } from '../../../shared/interfaces/model-interfaces/ITransaction.interface';
import { IRepository } from '../../../shared/interfaces/model-interfaces/IRepository.interface';
import { ITableData } from '../../../shared/interfaces/model-interfaces/ITableData.interface';


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
  GetById<T extends ITableData>(id: String, model: new (...args: any[]) => T): Promise<ITransaction<T>> {
    return this.dbCreator.GetById(id, model);
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

  async UpdateUserAuth<T extends ITableData>(model : T): Promise<ITransaction<T>>{
    return this.authCreator.UpdateUserAuth(model);
  }

  Login<T>(email : string, password : string): Promise<ITransaction<T>> {
    return  this.authCreator.Login(email, password);

  }
  Logout(): Observable<boolean> {
    return this.authCreator.Logout();
  }
  AuthAuthenticated(): Observable<boolean> {
    return this.authCreator.AuthAuthenticated();
  }

  VerifyUserAuth<T>() : Promise<ITransaction<T>>{
    return this.authCreator.VerifyUserAuth();
  }
  AuthVerify(): boolean {
      return this.authCreator.AuthVerify();
  }
  CreateUserAuth <T extends ITableData>(model : T): Promise<ITransaction<T>> {
    return this.authCreator.CreateUserAuth(model);
  }

  GetUserAuth<T extends ITableData>(model : T) : ITransaction<T>{
    return this.authCreator.GetUserAuth(model);
  }

  DeleteUser<T>(): Promise<ITransaction<T>> {
    return this.authCreator.DeleteUser();
  }








}
