import { Observable } from "rxjs";
import { ITransaction } from '../../../shared/interfaces/model-interfaces/ITransaction.interface';
import { ITableData } from "../../../shared/interfaces/model-interfaces/ITableData.interface";
import { TableData } from "../../../shared/abstract/ITableData.abstract";


export interface IAuthRepository {

  Login<T>(email : string, password : string): Promise<ITransaction<T>>;

  Logout(): Observable<boolean>;

  AuthAuthenticated(): Observable<boolean>;

  AuthVerify(): boolean;

  VerifyUserAuth<T>() : Promise<ITransaction<T>>;

  CreateUserAuth<T extends TableData>(model : T) : Promise<ITransaction<T>>;

  UpdateUserAuth<T extends TableData>(model: T): Promise<ITransaction<T>>;

  GetUserAuth<T extends TableData>(model : T) : ITransaction<T>;

  GetCurrentUserId() : string;

  DeleteUser<T>() : Promise<ITransaction<T>>;

}
