import { initializeApp } from 'firebase/app';
import { Observable } from "rxjs";
import { IRepository } from "../../interfaces/IRepository.interface";
import { ITableData } from "../../interfaces/ITableData.interface";
import { ITransaction } from "../../interfaces/ITransaction.interface";
import {  getDatabase, ref, set } from "firebase/database";
import { MessageType } from '../../enum/Messages.enum';
import { getFirebaseApp } from './firebase-provider/firebase-config.provider';
import { DBTransaction } from './transaction/DBTransaction.class';

export class FirebaseDB implements IRepository{



  private app = getFirebaseApp();
  private db = getDatabase(this.app);

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

  async  CreateUser<T extends ITableData>(model: T): Promise<ITransaction<T>> {

    console.error({model: model});
    let model_name :String = (model as any).constructor.name
    let response : ITransaction<T>;
    let Id = model['Id'];
    console.log('Id: ' + Id);
    console.log('My model: ' + model);

    try{

      await set(ref(this.db, model_name + '/' + Id ), model)
          .catch((error) => {
            //response = {Message: MessageType.Error + error ,RedirectTo: '/error', ModelObject: model,  Error: true};
            response = DBTransaction.OnFaliure(MessageType.Error + error, '/error');
          });

      //response = {Message: MessageType.Create,Success: true,RedirectTo: '/auth',  ModelObject: model,  Error: false};
      response = DBTransaction.OnSuccess(MessageType.Create, model, [], '/auth');

    }catch(error){
      response =  DBTransaction.OnFaliure(MessageType.Error + error, '/error');
    }

    return response;
  }

}
