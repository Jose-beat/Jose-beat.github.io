import { Observable } from "rxjs";
import { IRepository } from "../interfaces/model-interfaces/IRepository.interface";
import { ITransaction } from "../interfaces/model-interfaces/ITransaction.interface";
import { ITableData } from "../interfaces/model-interfaces/ITableData.interface";
import { TableData } from "../abstract/ITableData.abstract";

export abstract class Factory {
  protected abstract FactoryMethod() : IRepository;

  GetAll<T extends TableData>(model: new (...args: any[]) => T, keyCondition? : string, valueCondition? : string): Observable<ITransaction<T>>{
    const factory = this.FactoryMethod();
    return factory.GetAll(model, keyCondition, valueCondition);
  }

  GetById<T extends TableData>(model: new (...args: any[]) => T, id: String) : Promise<ITransaction<T>>{
    const factory = this.FactoryMethod();
    return factory.GetById(model, id);
  }

  Create<T extends TableData>(model: new (...args: any[]) => T, object: T) : Promise<ITransaction<T>>{
    const factory = this.FactoryMethod();
    return factory.Create<T>(model,object);
  }

  Update<T extends TableData>(model : T) : ITransaction<T>{
    const factory = this.FactoryMethod();
    return factory.Update(model);
  }

  Delete<T extends TableData>(id: String, model: new (...args: any[]) => T): Promise<ITransaction<T>>{
    const factory = this.FactoryMethod();
    return factory.Delete(id, model);
  }

  CreateUser<T extends TableData>(model : T) : Promise<ITransaction<T>>{
    const factory = this.FactoryMethod();
    return factory.CreateUser(model);
  }
}
