export interface ITransaction<T>{
  Message: string,
  ModelObject? : T,
  ListObject? : T[],
  RedirectTo? : string,
  Success? : boolean,
  Error?: boolean,
}






