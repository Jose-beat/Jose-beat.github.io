import { initializeApp } from 'firebase/app';
import { Observable } from "rxjs";
import { IRepository } from "../../interfaces/IRepository.interface";
import { ITableData } from "../../interfaces/ITableData.interface";
import { ITransaction } from "../../interfaces/ITransaction.interface";
import { environments } from "../../../../environments/environments";
import {  getDatabase, ref, set } from "firebase/database";
import { MessageType } from '../../enum/Messages.enum';

export class FirebaseDB implements IRepository{



  private firebaseConfig = {
    apiKey:             environments.API_KEY,
    authDomain:         environments.AUTH_DOMAIN,
    databaseURL:        environments.DATABASE_URL,
    projectId:          environments.PROJECT_ID,
    storageBucket:      environments.STORAGE_BUCKET,
    messagingSenderId:  environments.MESSAGING_SENDER_ID,
    appId:              environments.APP_ID,
    measurementId:      environments.MEASUREMENT_ID
  }
  private app = initializeApp(this.firebaseConfig);
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
          .catch((error) => {console.error("Error al guardar: " + error)});

      response = {Message: MessageType.Create,Success: true,  ModelObject: model,  Error: false};

    }catch(error){
      response = {Message: MessageType.Error + error , ModelObject: model,  Error: true};
    }

    return response;
  }

}
