
import { Observable } from "rxjs";
import { IRepository } from "../../interfaces/model-interfaces/IRepository.interface";
import { ITableData } from "../../interfaces/model-interfaces/ITableData.interface";
import { ITransaction } from "../../interfaces/model-interfaces/ITransaction.interface";
import {  child, get, getDatabase, ref, set } from "firebase/database";
import * as firebase_storage from 'firebase/storage';
import { MessageType } from '../../enum/Messages.enum';
import { getFirebaseApp } from './firebase-provider/firebase-config.provider';
import { DBTransaction } from './transaction/dbTransaction.class';


export class FirebaseDB implements IRepository{



  private app = getFirebaseApp();
  private db = getDatabase(this.app);
  private storage = firebase_storage.getStorage(this.app)


  GetAll<T>(model: new (...args: any[]) => T): Observable<ITransaction<T>> {
    console.error({model: model});
    throw new Error("Method not implemented.");
  }
  async GetById<T>(id: String, model: new (...args: any[]) => T): Promise<ITransaction<T>> {
    console.error({model: model, Id: id});
    let response : ITransaction<T>;
    let model_object: T;
    let model_name: string = model.name;

    try{

      const refData =  ref(this.db);
      const snapshot = await get(child(refData,  model_name + '/' + id));
      if (snapshot.exists()) {

        const data = snapshot.val();
        model_object = data as T;

        response = DBTransaction.OnSuccess( MessageType.DataLoaded,"", model_object);


      } else {
        response = DBTransaction.OnFaliure( MessageType.Error,"");
      }
    }catch(error){
      response = DBTransaction.OnFaliure( MessageType.Error + error,"");
      // response = {Message: MessageType.Error + error,  Error: true};

    }

    return response;

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

  //TODO: Ver posibilidad de unificar la funcion Create con esta
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
        // this.uploadFile(model.Image);
      //response = {Message: MessageType.Create,Success: true,RedirectTo: '/auth',  ModelObject: model,  Error: false};
      response = DBTransaction.OnSuccess(MessageType.Create,'/auth', model, [] );

    }catch(error){
      response =  DBTransaction.OnFaliure(MessageType.Error + error, '/error');
    }

    return response;
  }

  //* Funcion independiende para subir archivos

  public uploadFile (file : File | undefined | null) {
    const storageRef = firebase_storage.ref(this.storage, 'profile_name');
    // const message = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';

    // firebase_storage.uploadString(storageRef, message, 'base64').then(()=>{
    //   console.error("Cargado el string base 64");
    // })
    if(file){
      firebase_storage.uploadBytes(storageRef,file).then(
        (snapshot)=>{
          console.log("Subiendo Imagen");
        })
    }

  }


}
