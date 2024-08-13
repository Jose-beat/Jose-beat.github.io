import { ITransaction } from "../../../../shared/interfaces/model-interfaces/ITransaction.interface";

export class AuthTransaction<T> implements ITransaction<T>{

  Message: string;
  ModelObject?: T | undefined;
  ListObject?: T[] | undefined;
  RedirectTo?: string | undefined;
  Success?: boolean | undefined;
  Error?: boolean | undefined;

  constructor(
    Message : string,
    ModelObject?: T | undefined,
    ListObject?: T[] | undefined,
    RedirectTo?: string | undefined,
    Success?: boolean | undefined,
    Error?: boolean | undefined,
  ){
    this.Message = Message;
    this.ModelObject =  ModelObject;
    this.ListObject =  ListObject;
    this.RedirectTo =  RedirectTo;
    this.Success = Success;
    this.Error = Error;
  }

  public static OnSuccess<T>(message: string,redirectTo: string, model? : T): ITransaction<T> {
    return new AuthTransaction<T>(message, model, undefined, redirectTo, true, false);
  }
  public static OnFaliure<T>(message: string, redirectTo : string): ITransaction<T> {
    return new AuthTransaction<T>(`ERROR: ${message}`, undefined, undefined, redirectTo, false, true);
  }

}