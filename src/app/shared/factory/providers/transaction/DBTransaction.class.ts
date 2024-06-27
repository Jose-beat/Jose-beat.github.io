import { ITransaction } from "../../../interfaces/ITransaction.interface";

export class DBTransaction<T> implements ITransaction<T>{

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

  public static OnSuccess<T>(message: string, modelObject: T, listObject : T[], redirectTo: string): ITransaction<T> {
    return new DBTransaction<T>(message, modelObject, listObject, redirectTo, true, false);
  }
  public static OnFaliure<T>(message: string, redirectTo : string): ITransaction<T> {
    return new DBTransaction<T>(`ERROR: ${message}`, undefined, undefined, redirectTo, false, true);
  }

}
