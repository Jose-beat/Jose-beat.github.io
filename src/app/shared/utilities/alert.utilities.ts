import Swal, { SweetAlertIcon, SweetAlertResult } from "sweetalert2";
import { ITransaction } from "../interfaces/ITransaction.interface";
import { throwError } from "rxjs";


export class Alert{

  constructor(){}

  public static  sweetAlert<T>(response : ITransaction<T>) : Promise<SweetAlertResult<any>>{

    let title : string = "No Response";
    let icon  : SweetAlertIcon = "info";

    if(response === null || response === undefined){
      throw Error("Alert without response!!");
    }
    if(response.Success){
      title = "Listo!";
      icon = "success";


    }
    if(response.Error){
      title = "Error!";
      icon = "error";
    }

    return  Swal.fire({
      title: title,
      text: response.Message.toString(),
      icon: icon,
      confirmButtonText: 'Aceptar'
    });
  }
}
