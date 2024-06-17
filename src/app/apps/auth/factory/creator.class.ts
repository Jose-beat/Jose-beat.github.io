import { Observable } from "rxjs";
import { ITransaction } from "../../../shared/interfaces/ITransaction.interface";
import { IAuthRepository } from "../interfaces/IAuthRepository.interface";
import { User } from "../../../shared/model/User.model";
import { IAuthTransaction } from "../interfaces/IAuthTransaction.interface";

export abstract class Creator{

  protected abstract factoryMethod() : IAuthRepository;

   Login<T> (): Observable<IAuthTransaction<T>> {
    const factory = this.factoryMethod();
    return  factory.Login();

  }

  Logout() : void {
    const factory = this.factoryMethod();
    return factory.Logout();
  }

  CheckAuthentication() : Observable<boolean> {
    const factory = this.factoryMethod();
    return factory.CheckAuthentication();
  }

  CreateUserAuth<T>(model : T) : Promise<IAuthTransaction<T>>{
    const factory =  this.factoryMethod();
    return factory.CreateUserAuth(model);
  }
}
