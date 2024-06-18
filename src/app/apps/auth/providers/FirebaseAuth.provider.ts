import { Observable, catchError, from, map, of, tap } from 'rxjs';
import { IAuthRepository } from '../interfaces/IAuthRepository.interface';
import { createUserWithEmailAndPassword, deleteUser, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { IAuthTransaction } from '../interfaces/IAuthTransaction.interface';
import { User } from '../../../shared/model/User.model';
import { Utilities } from '../../../shared/utilities/table.utilities';
import { AuthMessage } from '../../../shared/enum/Messages.enum';
import { getFirebaseApp } from '../../../shared/factory/providers/firebase-provider/firebase-config.provider';

export class FirebaseAuth implements IAuthRepository {
  private app = getFirebaseApp();
  private auth = getAuth(this.app);
  private email: string = 'correo@correo.com';
  private password: string = '123456789';

  Login<T>(): Observable<IAuthTransaction<T>> {
    let response: IAuthTransaction<T> = {
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
        return new Observable<IAuthTransaction<T>>((observer) => {
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

  CheckAuthentication(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  async CreateUserAuth<T>(model: T): Promise<IAuthTransaction<T>> {
    let response: IAuthTransaction<T> = { Message: 'Initial Response', Success: false, Error: false,
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

  async DeleteUser<T>(): Promise<IAuthTransaction<T>> {
    const user = this.auth.currentUser!;

    let response: IAuthTransaction<T> = { Message: '', Success: false, Error: false };

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
