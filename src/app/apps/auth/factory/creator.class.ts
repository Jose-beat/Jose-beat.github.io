import { Observable } from "rxjs";
import { ITransaction } from "../../../shared/interfaces/ITransaction.interface";
import { IAuthRepository } from "../interfaces/IAuthRepository.interface";
import { User } from "../../../shared/model/User.model";


export abstract class Creator{

  protected abstract factoryMethod() : IAuthRepository;

    Login<T> (): Observable<ITransaction<T>> {
    const factory = this.factoryMethod();
    return  factory.Login();

  }

  Logout() : Observable<boolean> {
    const factory = this.factoryMethod();
    return factory.Logout();
  }

  CheckAuthentication() : Observable<boolean> {
    const factory = this.factoryMethod();
    return factory.CheckAuthentication();
  }

  CreateUserAuth<T>(model : T) : Promise<ITransaction<T>>{
    const factory =  this.factoryMethod();
    return factory.CreateUserAuth(model);
  }

  DeleteUser<T>(): Promise<ITransaction<T>>{

    const factory = this.factoryMethod();
    return factory.DeleteUser();
  }
}
