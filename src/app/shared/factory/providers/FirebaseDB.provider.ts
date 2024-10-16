
import { Observable } from "rxjs";
import { IRepository } from "../../interfaces/model-interfaces/IRepository.interface";
import { ITableData } from "../../interfaces/model-interfaces/ITableData.interface";
import { ITransaction } from "../../interfaces/model-interfaces/ITransaction.interface";
import {  child, equalTo, get, getDatabase, onValue, orderByChild, query, ref, remove, set } from "firebase/database";
import * as firebase_storage from 'firebase/storage';
import { MessageType } from '../../enum/Messages.enum';
import { getFirebaseApp } from './firebase-provider/firebase-config.provider';
import { DBTransaction } from './transaction/DBTransaction.class';
import { environments } from "../../../../environments/environments";
import { TableData } from "../../abstract/ITableData.abstract";
import { Component } from '@angular/core';
import { Utilities } from "../../utilities/table.utilities";


export class FirebaseDB implements IRepository{



  private app = getFirebaseApp();
  private db = getDatabase(this.app);
  private storage = firebase_storage.getStorage(this.app)


  GetAll<T extends TableData>(model: new (...args: any[]) => T, keyCondition? : string, valueCondition? : string): Observable<ITransaction<T>> {
    const modelName : string = model.name;
    const listRef = ref(this.db, `${modelName}/`);
    const localQuery = keyCondition === undefined && valueCondition === undefined ? query(listRef) : query(listRef , orderByChild(keyCondition!), equalTo(valueCondition!));
    const getAllObserver = new Observable<ITransaction<T>>((subscriber)=>{
      onValue(localQuery, (snapshot)=>{
        const data = snapshot.val();
        const key ="";
        if(snapshot.exists()){
          const arrayOfObjects : T[] = Object.values(data);
          subscriber.next(DBTransaction.OnSuccess<T>(MessageType.DataLoaded,"",undefined, arrayOfObjects));
          subscriber.complete();
        }else{
          subscriber.next(DBTransaction.OnSuccess<T>(MessageType.DataEmpty,"",undefined, []));
          subscriber.complete();
        }
        console.warn(data);
      },
      (error)=>{
        subscriber.next(DBTransaction.OnFaliure<T>(MessageType.Error,""));
        subscriber.complete();
      });
    });

    return getAllObserver;

  }
  async GetById<T extends TableData>(model: new (...args: any[]) => T, id: String ): Promise<ITransaction<T>> {
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
        if(model_object.imagePath) model_object.imagePath = await this.downloadFile(model_object.imagePath);
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
  async Create<T extends TableData>(model: new (...args: any[]) => T, object: T): Promise<ITransaction<T>> {
    console.error({model: model, modelName : model});
    let model_name = model.name;
    let response : ITransaction<T>;
    let Id = object['id'];
    console.log('Id: ' + Id);
    console.warn('My object: ' + object);

    try{
      if(object.image !== null) object.imagePath = await this.uploadFile(object.image, `${model_name}_${object.id}`);
      await set(ref(this.db, model_name + '/' + Id ), object)
          .catch((error) => {

            response = DBTransaction.OnFaliure(MessageType.Error + error, '/error');
          });


      response = DBTransaction.OnSuccess(MessageType.Create,'', object, [] );

    }catch(error){
      response =  DBTransaction.OnFaliure(MessageType.Error + error, '/error');
    }

    return response;

  }
  //? Revisar Implementacion
  Update<T extends TableData>(model: T): ITransaction<T> {
    console.error({model: model});
    throw new Error("Method not implemented.");
  }
  async Delete<T extends TableData>(id: String, model: new (...args: any[]) => T): Promise<ITransaction<T>> {
    console.error({model: model, Id: id});
    let model_name = model.name;
    let response : ITransaction<T>;
    try {
      await remove(ref(this.db, model.name + '/' + id )).catch((error)=>{
          response = DBTransaction.OnFaliure(MessageType.Error + error, '/error');
        });
          response = DBTransaction.OnSuccess(MessageType.Delete,'', undefined, [] );
    } catch (error) {
          response =  DBTransaction.OnFaliure(MessageType.Error + error, '/error');
    }
    return response;
  }


  //TODO: Ver posibilidad de unificar la funcion Create con esta
  async  CreateUser<T extends TableData>(model: T): Promise<ITransaction<T>> {

    console.error({model: model});
    let model_name :String = (model as any).constructor.name
    let response : ITransaction<T>;
    let Id = model['id'];
    console.log('Id: ' + Id);
    console.log('My model: ' + model);

    try{
      if(model.image !== null) model.imagePath = await this.uploadFile(model.image, `${model_name}_${model.id}`);
      await set(ref(this.db, model_name + '/' + Id ), model)
          .catch((error) => {

            response = DBTransaction.OnFaliure(MessageType.Error + error, '/error');
          });


      response = DBTransaction.OnSuccess(MessageType.Create,'/auth', model, [] );

    }catch(error){
      response =  DBTransaction.OnFaliure(MessageType.Error + error, '/error');
    }

    return response;
  }

  private async uploadFile (file : File | undefined | null, title : string) : Promise<string>{

    let pathFile : string = '';

    if(file){
      let extension = file.name.split('.').pop();
      const storageRef = firebase_storage.ref(this.storage, `${title}.${extension}`);
      await firebase_storage.uploadBytes(storageRef,file).then(
        (snapshot)=>{
          console.log("Subiendo Imagen");
          pathFile = snapshot.ref.fullPath;
          console.log(snapshot);
        }).catch(()=>{
          pathFile = '';
        })
    }

    return pathFile;

  }

  private async downloadFile(fileName : string): Promise<string>{



    let image : string = environments.LOADER_SVG;

    if(fileName === '') return image;

    const storageRef =  firebase_storage.ref(this.storage, fileName);
    await firebase_storage.getDownloadURL(storageRef)
    .then((url)=>{
      image = url;
    })
    .catch((error)=>{
      console.error(error);
    });

    return image;

  }


}
