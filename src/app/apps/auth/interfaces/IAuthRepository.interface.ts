import { Observable } from "rxjs";
import { ITransaction } from "../../../shared/interfaces/ITransaction.interface";
import { IAuthTransaction } from "./IAuthTransaction.interface";

export interface IAuthRepository {

  Login<T>(): Observable<IAuthTransaction<T>>;

  Logout(): void;

  CheckAuthentication(): Observable<boolean>;

  CreateUserAuth<T>(model : T) : Promise<IAuthTransaction<T>>;
  DeleteUser<T>() : Promise<IAuthTransaction<T>>;
}
