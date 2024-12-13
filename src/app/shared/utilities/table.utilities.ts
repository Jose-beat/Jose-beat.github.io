import { FormGroup } from "@angular/forms";
import { User } from "../model/User.model";
import { StatusItem } from "../interfaces/enum-interfaces/StatusItem.Interface";
import { StatusPrivacy, StatusProject } from "../enum/Status.enum";
import { ITableData } from "../interfaces/model-interfaces/ITableData.interface";
import { TableData } from "../abstract/ITableData.abstract";
import { Experience } from "../model/Experience.model";

export class Utilities{

  public static generateId(id? : string): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    const length = 10;
    let result = '';

    if(id === undefined || id === null || id === ''){
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
      }
      console.log("Respuesta", result);
    }else{
      result = id;
    }
    return result;

  }
  public static createDate( date?: number | null) : number {
    console.log('El dia que llego' + date );
    return date === undefined || date === null ?  Date.now() : date;


  }
  public static updateDate(date? : number | null) : number{
    let timeDefault = new Date('01-01-1900').getTime();

    if(date === undefined || date === null){
      return timeDefault;
    }

    return Date.now();
  }
  public static formObjectT<T extends TableData>(obj : Object, model : T) : T {
    let formValues = JSON.stringify(obj);
    let parseData = JSON.parse(formValues);

    let data : Partial<T> = parseData;

    Object.assign<T, Partial<T>>(model , data);

    // model = JSON.parse(formValues);
    return model;

  }
  public static convertToUser<T>(obj: T): User {
    // const user = new User('','','','','');
    const user : User = new User("","","","","","",1, null);
    Object.assign(user, obj);
    return user;
  }
  public static combineWithUser(user: User, data: Partial<User>): User {
    user.update(data);
    return user;
  }
  public static getStatusDescription (status : Number, typeStatus: String) : StatusItem {
    let statusObject : StatusItem = {title : '',color : '',number : 0};
    if (typeStatus === "Project") {
      switch (status) {
        case 0:
          statusObject = {title : StatusProject.Pending, color : 'info' ,number : status};
          break;
        case 1:
          statusObject = {title : StatusProject.Stopped, color : 'danger' ,number : status};
          break;
        case 2:
          statusObject = {title : StatusProject.Process, color : 'warning' ,number : status};
          break;
        case 3:
          statusObject = {title : StatusProject.Finally, color : 'success' ,number : status};
          break;
        default:
          statusObject = {title : 'No asignado', color : 'secondary' ,number : status};
          break;
      }
    }

    if (typeStatus === "Privacy") {
      switch (status) {
        case 4:
          statusObject = {title : StatusPrivacy.Private, color : 'danger' ,number : status};
          break;
        case 5:
          statusObject = {title : StatusPrivacy.Public, color : 'success' ,number : status};
          break;

        default:
          break;
      }
    }



    return statusObject;
  }



}
