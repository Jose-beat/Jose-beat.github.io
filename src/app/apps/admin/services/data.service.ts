import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITransaction } from '../../../shared/interfaces/model-interfaces/ITransaction.interface';
import { AuthTransaction } from '../../auth/providers/transaction/AuthTransaction.class';
import { User } from '../../../shared/model/User.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private responseDefault = AuthTransaction.OnFaliure<User>("", "")
    private dataSource = new BehaviorSubject<ITransaction<User> | null>(null);
    private activeSource = new BehaviorSubject<boolean>(false);

    public loginData = this.dataSource.asObservable();
    public activeloginForm = this.activeSource.asObservable();

    constructor(){}

    login(data:ITransaction<User> | null){
      this.dataSource.next(data);
    }


    activeForm(response : boolean){
      this.activeSource.next(response);
    }
    resetData() {
      this.activeSource.next(false);
      this.dataSource.next(null); // Restablece el valor a null o cualquier valor inicial deseado
    }
}
