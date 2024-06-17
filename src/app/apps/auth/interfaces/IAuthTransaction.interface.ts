export interface IAuthTransaction<T>{
  Message: string,
  ModelObject? : T,
  ListObject? : T[],
  LogIn?:boolean,
  LogOut?: boolean,
  Created? : boolean,
  Verified?: boolean
  Error?: boolean
}
