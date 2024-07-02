import { Observable } from "rxjs";
import { ITransaction } from '../../../shared/interfaces/ITransaction.interface';
import { ITableData } from "../../../shared/interfaces/ITableData.interface";


export interface IAuthRepository {

  Login<T>(email : string, password : string): Promise<ITransaction<T>>;

  Logout(): Observable<boolean>;

  AuthAuthenticated(): Observable<boolean>;

  AuthVerify(): boolean;

  VerifyUserAuth<T>() : Promise<ITransaction<T>>;

  CreateUserAuth<T extends ITableData>(model : T) : Promise<ITransaction<T>>;

  DeleteUser<T>() : Promise<ITransaction<T>>;
}
