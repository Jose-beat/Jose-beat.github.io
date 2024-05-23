import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private snackBar : MatSnackBar) { }


  public methodNotImplemented(): void {
// Simple message.
    let snackBarRef = this.snackBar.open('Metodo No Implementado', 'Undo', {
      duration: 3000
    });
  }
}
