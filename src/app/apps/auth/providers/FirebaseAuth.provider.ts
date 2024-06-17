import { Observable, catchError, from, map, of, tap } from "rxjs";
import { IAuthRepository } from "../interfaces/IAuthRepository.interface";
import { getAuth, initializeAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from "firebase/app"
import { IAuthTransaction } from '../interfaces/IAuthTransaction.interface';
import { User } from "../../../shared/model/User.model";
import { environments } from "../../../../environments/environments";

export class FirebaseAuth implements IAuthRepository {

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
  private auth = getAuth(this.app);
  private email : string = 'correo@correo.com';
  private password : string = '123456789';

  Login<T>(): Observable<IAuthTransaction<T>> {

    let response : IAuthTransaction<T> = {
      Message: '',
      LogIn: false,
      LogOut: false,
      Error: false,
    };

    return from(signInWithEmailAndPassword(this.auth, this.email, this.password)).pipe(
      tap((user) => {
          user.user.getIdToken().then(token =>   sessionStorage.setItem('tkn', token));
      }),
      map((user)=>({
        Message: user.user.email!,
        Login: true,
      })),
      catchError((error) => {
        return new  Observable<IAuthTransaction<T>>((observer) => {
          observer.next({
            Message: error.code + error.message ,
            Error: true,
          });
          observer.complete();
        });
      })
    );




  }

  Logout(): void {
    throw new Error("Method not implemented.");
  }

  CheckAuthentication(): Observable<boolean> {
    throw new Error("Method not implemented.");
  }


}
