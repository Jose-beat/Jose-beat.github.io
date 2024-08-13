import { Injectable } from '@angular/core';
import { IRepository } from '../../../shared/interfaces/model-interfaces/IRepository.interface';
import { Observable } from 'rxjs';
import { ITableData } from '../../../shared/interfaces/model-interfaces/ITableData.interface';
import { ITransaction } from '../../../shared/interfaces/model-interfaces/ITransaction.interface';
import { Factory  }from "../../../shared/factory/factory.class";
import { Provider}from "../../../shared/factory/provider.factory";

@Injectable({
  providedIn: 'root'
})
export class AdminService implements IRepository{

  private dbCreator : Factory = new Provider("FB");

  GetAll<T>(model: new (...args: any[]) => T): Observable<ITransaction<T>> {
    throw new Error('Method not implemented.');
  }
  GetById<T extends ITableData>(id: String, model: new (...args: any[]) => T): Promise<ITransaction<T>> {
    throw new Error('Method not implemented.');
  }
  Create<T extends ITableData>(model: T): Promise<ITransaction<T>> {
    return this.dbCreator.Create(model);
  }
  Update<T extends ITableData>(model: T): ITransaction<T> {
    throw new Error('Method not implemented.');
  }
  Delete<T>(id: String, model: new (...args: any[]) => T): ITransaction<T> {
    throw new Error('Method not implemented.');
  }
  CreateUser<T extends ITableData>(model: T): Promise<ITransaction<T>> {
    throw new Error('Method not implemented.');
  }
}
