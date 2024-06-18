import Swal from "sweetalert2";
import { ITransaction } from "../interfaces/ITransaction.interface";
import { Router } from "@angular/router";

export class Alert{

  constructor(private router: Router){}

  public static sweetAlert<T>(response : ITransaction<T>) : void {
    if(response !== null ){
      if(response.Success){
        Swal.fire({
          title: 'Listo!',
          text: response.Message.toString(),
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          // if (result.isConfirmed) {
          //   window.location.reload();
          // }
        });
      }
      if(response.Error){
        Swal.fire({
          title: 'Error!',
          text: response.Message.toString(),
          icon: 'error',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      }
    }
  }
}
