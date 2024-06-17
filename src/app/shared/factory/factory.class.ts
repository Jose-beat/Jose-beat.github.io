import { Observable } from "rxjs";
import { IRepository } from "../interfaces/IRepository.interface";
import { ITransaction } from "../interfaces/ITransaction.interface";
import { ITableData } from "../interfaces/ITableData.interface";

export abstract class Factory {
  protected abstract FactoryMethod() : IRepository;

  GetAll<T>(model: new (...args: any[]) => T): Observable<ITransaction<T>>{
    const factory = this.FactoryMethod();
    return factory.GetAll(model);
  }

  GetById<T>(id : String, model: new (...args: any[]) => T) : Observable<ITransaction<T>>{
    const factory = this.FactoryMethod();
    return factory.GetById(id, model);
  }

  Create<T extends ITableData>(model : T) : ITransaction<T>{
    const factory = this.FactoryMethod();
    return factory.Create(model);
  }

  Update<T extends ITableData>(model : T) : ITransaction<T>{
    const factory = this.FactoryMethod();
    return factory.Update(model);
  }

  Delete<T>(id: String, model : new (...args: any[]) => T) : ITransaction<T>{
    const factory = this.FactoryMethod();
    return factory.Delete(id, model);
  }

  CreateUser<T extends ITableData>(model : T) : Promise<ITransaction<T>>{
    const factory = this.FactoryMethod();
    return factory.CreateUser(model);
  }
}
