import { Observable } from "rxjs";
import { IRepository } from "../interfaces/model-interfaces/IRepository.interface";
import { ITransaction } from "../interfaces/model-interfaces/ITransaction.interface";
import { ITableData } from "../interfaces/model-interfaces/ITableData.interface";
import { TableData } from "../abstract/ITableData.abstract";

export abstract class Factory {
  protected abstract FactoryMethod() : IRepository;

  GetAll<T>(model: new (...args: any[]) => T): Observable<ITransaction<T>>{
    const factory = this.FactoryMethod();
    return factory.GetAll(model);
  }

  GetById<T extends ITableData>(id : String, model: new (...args: any[]) => T) : Promise<ITransaction<T>>{
    const factory = this.FactoryMethod();
    return factory.GetById(id, model);
  }

  Create<T extends TableData>(model : T) : Promise<ITransaction<T>>{
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
