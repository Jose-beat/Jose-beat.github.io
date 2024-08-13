import { Observable } from "rxjs";
import { ITableData } from "./ITableData.interface";
import { ITransaction } from "./ITransaction.interface";


export interface IRepository {

  GetAll<T>(model: new (...args: any[]) => T): Observable<ITransaction<T>>

  GetById<T extends ITableData>(id : String, model: new (...args: any[]) => T) : Promise<ITransaction<T>>;

  Create<T extends ITableData>(model : T) : Promise<ITransaction<T>>

  Update<T extends ITableData>(model : T) : ITransaction<T>;

  Delete<T>(id: String, model : new (...args: any[]) => T) : ITransaction<T>;

  CreateUser<T extends ITableData>(model : T) : Promise<ITransaction<T>>
}
