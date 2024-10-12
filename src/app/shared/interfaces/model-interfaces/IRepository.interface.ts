import { Observable } from "rxjs";
import { ITableData } from "./ITableData.interface";
import { ITransaction } from "./ITransaction.interface";
import { TableData } from "../../abstract/ITableData.abstract";


export interface IRepository {

  GetAll<T extends TableData>(model: new (...args: any[]) => T, keyCondition? : string, valueCondition? : string): Observable<ITransaction<T>>

  GetById<T extends TableData>(id : String, model: new (...args: any[]) => T) : Promise<ITransaction<T>>;

  Create<T extends TableData>(modelName: new (...args: any[]) => T, model : T) : Promise<ITransaction<T>>

  Update<T extends TableData>(model : T) : ITransaction<T>;

  Delete<T extends TableData>(id: String, model: new (...args: any[]) => T): Promise<ITransaction<T>> ;

  CreateUser<T extends TableData>(model : T) : Promise<ITransaction<T>>
}
