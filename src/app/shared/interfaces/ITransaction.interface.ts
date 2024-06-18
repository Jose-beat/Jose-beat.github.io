export interface ITransaction<T>{
  Message: string,
  ModelObject? : T,
  ListObject? : T[],
  Success? : boolean,
  Error?: boolean
}
