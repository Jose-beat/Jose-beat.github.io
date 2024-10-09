import { Injectable } from '@angular/core';
import { IRepository } from '../../../shared/interfaces/model-interfaces/IRepository.interface';
import { Observable } from 'rxjs';
import { ITableData } from '../../../shared/interfaces/model-interfaces/ITableData.interface';
import { ITransaction } from '../../../shared/interfaces/model-interfaces/ITransaction.interface';
import { Factory  }from "../../../shared/factory/factory.class";
import { Provider}from "../../../shared/factory/provider.factory";
import { TableData } from '../../../shared/abstract/ITableData.abstract';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements IRepository{

  private dbCreator : Factory = new Provider("FB");

  GetAll<T extends TableData>(model: new (...args: any[]) => T, keyCondition? : string, valueCondition? : string): Observable<ITransaction<T>> {
    return this.dbCreator.GetAll(model, keyCondition, valueCondition);
  }
  GetById<T extends TableData>(id: String, model: new (...args: any[]) => T): Promise<ITransaction<T>> {
    throw new Error('Method not implemented.');
  }
  Create<T extends TableData>(modelName: new (...args: any[]) => T, model: T): Promise<ITransaction<T>> {
    return this.dbCreator.Create<T>(modelName,model);
  }
  Update<T extends TableData>(model: T): ITransaction<T> {
    throw new Error('Method not implemented.');
  }
  Delete<T>(id: String, model: new (...args: any[]) => T): ITransaction<T> {
    throw new Error('Method not implemented.');
  }
  CreateUser<T extends TableData>(model: T): Promise<ITransaction<T>> {
    throw new Error('Method not implemented.');
  }
}
