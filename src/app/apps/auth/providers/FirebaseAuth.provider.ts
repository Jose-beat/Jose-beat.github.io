import { Observable, catchError, from, map, of, tap } from 'rxjs';
import { IAuthRepository } from '../interfaces/IAuthRepository.interface';
import { createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { User } from '../../../shared/model/User.model';
import { Utilities } from '../../../shared/utilities/table.utilities';
import { AuthCode, AuthMessage } from '../../../shared/enum/Messages.enum';
import { getFirebaseApp } from '../../../shared/factory/providers/firebase-provider/firebase-config.provider';
import { ITransaction } from '../../../shared/interfaces/ITransaction.interface';
import { AuthTransaction } from './transaction/AuthTransaction.class';


export class FirebaseAuth implements IAuthRepository {
  private app = getFirebaseApp();
  private auth = getAuth(this.app);
  private email: string = 'correo@correo.com';
  private password: string = '123456789';

  Login<T>(): Observable<ITransaction<T>> {
    let response: ITransaction<T> = {
      Message: '',
      Success: false,
      Error: false,
    };

    return from(
      signInWithEmailAndPassword(this.auth, this.email, this.password)
    ).pipe(
      tap((user) => {
        user.user
          .getIdToken()
          .then((token) => sessionStorage.setItem('tkn', token));
      }),
      map((user) => ({
        Message: user.user.email!,
        Login: true,
      })),
      catchError((error) => {
        return new Observable<ITransaction<T>>((observer) => {
          observer.next({
            Message: error.code + error.message,
            Error: true,
          });
          observer.complete();
        });
      })
    );
  }

  Logout(): Observable<boolean>  {

    const logoutObserver = new Observable<boolean>((subscriber)=>{
      signOut(this.auth).then(()=>{
        console.log("CHIDO")
        subscriber.next(true);
        subscriber.complete();
      }).catch((error)=>{
        console.log("NO CHIDO")
        console.log("Error Logout: " + error);
        subscriber.next(false);
        subscriber.complete();
      });
    });

    return logoutObserver;

  }

  CheckAuthentication(): Observable<boolean> {
    const userObserver = new Observable<boolean>((subscriber)=>{
      onAuthStateChanged(this.auth, (user)=>{
        // console.log(this.auth)
        if(user){
          console.log("CHIDO");
          subscriber.next(true);
          subscriber.complete();
        }else{
          console.log("NO CHIDO");
          subscriber.next(false);
          subscriber.complete();
        }
      })
    });

    return userObserver;
  }

  async CreateUserAuth<T>(model: T): Promise<ITransaction<T>> {
    let response: ITransaction<T> =  AuthTransaction.OnFaliure(AuthCode.WithoutExecution,'');

    let model_name: String = (model as any).constructor.name;
      if (model_name === 'User') {
        let model_user: User = Utilities.convertToUser<T>(model);
        await createUserWithEmailAndPassword( this.auth, model_user.Email, model_user.Password)
          .then((userCredencial) => {
            console.log(userCredencial.user);
            response = AuthTransaction.OnSuccess(`${AuthCode.Executed}`,'');
          })
          .catch((error) => {
            console.log(error);
            response =  AuthTransaction.OnFaliure(`${AuthCode.FailExecution} : ${error.code}`,'');
          });
      }

    return response;
  }

  async DeleteUser<T>(): Promise<ITransaction<T>> {
    const user = this.auth.currentUser!;

    let response: ITransaction<T> =  AuthTransaction.OnFaliure(AuthCode.WithoutExecution,'');
      await deleteUser(user)
        .then(() => {
         // response = {Message: '',Success: true,Error: false,};
          response = AuthTransaction.OnSuccess(AuthCode.Executed,'');
          sessionStorage.clear();
        })
        .catch((error) => {
          response =  AuthTransaction.OnFaliure(AuthCode.FailExecution,'');;
          console.error(response);
        });

    return response;
  }
}
