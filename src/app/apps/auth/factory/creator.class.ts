import { Observable } from "rxjs";
import { ITransaction } from "../../../shared/interfaces/model-interfaces/ITransaction.interface";
import { IAuthRepository } from "../interfaces/IAuthRepository.interface";
import { User } from "../../../shared/model/User.model";
import { ITableData } from "../../../shared/interfaces/model-interfaces/ITableData.interface";


export abstract class Creator{

  protected abstract factoryMethod() : IAuthRepository;

    Login<T> (email : string, password : string): Promise<ITransaction<T>> {
    const factory = this.factoryMethod();
    return  factory.Login(email ,password);

  }

  Logout() : Observable<boolean> {
    const factory = this.factoryMethod();
    return factory.Logout();
  }

  AuthAuthenticated() : Observable<boolean> {
    const factory = this.factoryMethod();
    return factory.AuthAuthenticated();
  }

  AuthVerify() : boolean {
    const factory = this.factoryMethod();
    return factory.AuthVerify();
  }

  VerifyUserAuth<T>() : Promise<ITransaction<T>>{
    const factory =  this.factoryMethod();
    return factory.VerifyUserAuth();
  }

  CreateUserAuth<T extends ITableData>(model : T) : Promise<ITransaction<T>>{
    const factory =  this.factoryMethod();
    return factory.CreateUserAuth(model);
  }
  UpdateUserAuth<T extends ITableData>(model : T): Promise<ITransaction<T>>{
    const factory = this.factoryMethod();
    return factory.UpdateUserAuth(model);
  }

  GetUserAuth<T extends ITableData>(model : T) : ITransaction<T>{
    const factory = this.factoryMethod();
    return factory.GetUserAuth(model);
  }

  DeleteUser<T>(): Promise<ITransaction<T>>{

    const factory = this.factoryMethod();
    return factory.DeleteUser();
  }

  GetCurrentUserId() : string {
    const factory = this.factoryMethod();
    return factory.GetCurrentUserId();
  }
}
