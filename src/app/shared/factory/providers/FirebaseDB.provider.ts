
import { Observable } from "rxjs";
import { IRepository } from "../../interfaces/model-interfaces/IRepository.interface";
import { ITableData } from "../../interfaces/model-interfaces/ITableData.interface";
import { ITransaction } from "../../interfaces/model-interfaces/ITransaction.interface";
import {  child, get, getDatabase, ref, set } from "firebase/database";
import * as firebase_storage from 'firebase/storage';
import { MessageType } from '../../enum/Messages.enum';
import { getFirebaseApp } from './firebase-provider/firebase-config.provider';
import { DBTransaction } from './transaction/DBTransaction.class';
import { environments } from "../../../../environments/environments";


export class FirebaseDB implements IRepository{



  private app = getFirebaseApp();
  private db = getDatabase(this.app);
  private storage = firebase_storage.getStorage(this.app)


  GetAll<T>(model: new (...args: any[]) => T): Observable<ITransaction<T>> {
    console.error({model: model});
    throw new Error("Method not implemented.");
  }
  async GetById<T extends ITableData>(id: String, model: new (...args: any[]) => T): Promise<ITransaction<T>> {
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
        if(model_object.ImagePath) model_object.ImagePath = await this.downloadFile(model_object.ImagePath);
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
      if(model.Image !== null) model.ImagePath = await this.uploadFile(model.Image, `${model_name}_${model.Id}`);
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
