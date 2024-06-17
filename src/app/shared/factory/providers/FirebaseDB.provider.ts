import { Observable } from "rxjs";
import { IRepository } from "../../interfaces/IRepository.interface";
import { ITableData } from "../../interfaces/ITableData.interface";
import { ITransaction } from "../../interfaces/ITransaction.interface";

export class FirebaseDB implements IRepository{
  GetAll<T>(model: new (...args: any[]) => T): Observable<ITransaction<T>> {
    console.error({model: model});
    throw new Error("Method not implemented.");
  }
  GetById<T>(id: String, model: new (...args: any[]) => T): Observable<ITransaction<T>> {
    console.error({model: model, Id: id});
    throw new Error("Method not implemented.");
  }
  Create<T extends ITableData>(model: T): ITransaction<T> {
    console.error({model: model});
    throw new Error("Method not implemented.");
  }
  Update<T extends ITableData>(model: T): ITransaction<T> {
    console.error({model: model});
    throw new Error("Method not implemented.");
  }
  Delete<T>(id: String, model: new (...args: any[]) => T): ITransaction<T> {
    console.error({model: model, Id: id});
    throw new Error("Method not implemented.");
  }

  CreateUser<T extends ITableData>(model: T): ITransaction<T> {
    console.error({model: model});
    throw new Error("Method not implemented.");
  }

}
