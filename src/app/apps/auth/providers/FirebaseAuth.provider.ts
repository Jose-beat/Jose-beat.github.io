import { Observable, catchError, from, map, of, tap } from 'rxjs';
import { IAuthRepository } from '../interfaces/IAuthRepository.interface';
import { createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

import { User } from '../../../shared/model/User.model';
import { Utilities } from '../../../shared/utilities/table.utilities';
import { AuthMessage } from '../../../shared/enum/Messages.enum';
import { getFirebaseApp } from '../../../shared/factory/providers/firebase-provider/firebase-config.provider';
import { ITransaction } from '../../../shared/interfaces/ITransaction.interface';

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

  Logout(): void {
    throw new Error('Method not implemented.');
  }

  async CheckAuthentication(): Promise<boolean> {

    console.log(sessionStorage.getItem('token') + " Mi token es este");
    if(!sessionStorage.getItem('token')) return false;
    const token = sessionStorage.getItem('token');
    let current_user  = this.auth.currentUser;
    let user_state : boolean = false;

    let current_user_token : string = '';

    await current_user!.getIdToken().then(token => current_user_token = token);

    if( !current_user || current_user_token !== token ){
      user_state = false;
    }

    user_state = true;
    console.log(current_user);
    return user_state;




  }

  async CreateUserAuth<T>(model: T): Promise<ITransaction<T>> {
    let response: ITransaction<T> = { Message: 'Initial Response', Success: false, Error: false,
    };
    let model_name: String = (model as any).constructor.name;
    try {
      if (model_name === 'User') {
        let model_user: User = Utilities.convertToUser<T>(model);
        await createUserWithEmailAndPassword( this.auth, model_user.Email, model_user.Password)
          .then((userCredencial) => {
            console.log(userCredencial.user);

            userCredencial.user
            .getIdToken()
            .then((token) => sessionStorage.setItem('token', token));
            response = { Message: '', Success: true};
          })
          .catch((error) => {
            console.log(error);
            response = {  Message: error.code + error.message,  Success: false,  Error: true };
          });
      }
    } catch (error) {
      response = {  Message: 'Ocurrio un Error: ' + error,  Success: false,  Error: true };
      console.error(response);
    }

    return response;
  }

  async DeleteUser<T>(): Promise<ITransaction<T>> {
    const user = this.auth.currentUser!;

    let response: ITransaction<T> = { Message: '', Success: false, Error: false };

    try {
      await deleteUser(user)
        .then(() => {
          response = {Message: '',Success: true,Error: false,};
          sessionStorage.clear();
        })
        .catch((error) => {
          response = { Message: AuthMessage.Error + error.Message, Success: false, Error: true};
          console.error(response);
        });

    } catch (error) {
      response = { Message: AuthMessage.Error + error, Success: false, Error: true };
      console.error(response);
    }

    return response;
  }
}
