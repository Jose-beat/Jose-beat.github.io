import { Observable } from "rxjs";
import { ITableData } from "./ITableData.interface";
import { ITransaction } from "./ITransaction.interface";
import { TableData } from "../../abstract/ITableData.abstract";


export interface IRepository {

  GetAll<T extends TableData>(model: new (...args: any[]) => T, keyCondition? : string, valueCondition? : string): Observable<ITransaction<T>>

  GetById<T extends ITableData>(id : String, model: new (...args: any[]) => T) : Promise<ITransaction<T>>;

  Create<T extends TableData>(model : T) : Promise<ITransaction<T>>

  Update<T extends ITableData>(model : T) : ITransaction<T>;

  Delete<T>(id: String, model : new (...args: any[]) => T) : ITransaction<T>;

  CreateUser<T extends ITableData>(model : T) : Promise<ITransaction<T>>
}
