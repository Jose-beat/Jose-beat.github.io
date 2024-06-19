import { Observable } from "rxjs";
import { ITransaction } from "../../../shared/interfaces/ITransaction.interface";


export interface IAuthRepository {

  Login<T>(): Observable<ITransaction<T>>;

  Logout(): void;

  CheckAuthentication(): Promise<boolean>;

  CreateUserAuth<T>(model : T) : Promise<ITransaction<T>>;

  DeleteUser<T>() : Promise<ITransaction<T>>;
}
